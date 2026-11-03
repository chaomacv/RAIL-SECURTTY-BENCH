/* Animated method overview. Uses supplied page examples; no model API calls. */
(() => {
  'use strict';
  const root=document.querySelector('.engine-map'),C=window.RAILMIND_CONTENT;
  if(!root||!C)return;
  const lanes=[root.querySelector('.map-lane.warm'),root.querySelector('.map-lane.cool')];
  if(lanes.some(lane=>!lane))return;
  const bridge=root.querySelector('.map-bridge');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const timeline=[
    {lane:-1,key:'overview',ms:2200},
    {lane:0,key:'background',stage:1,ms:2800},
    {lane:0,key:'prompt',stage:2,ms:3000},
    {lane:0,key:'reference',stage:3,ms:3000},
    {lane:0,key:'result',stage:4,ms:3000},
    {lane:-1,key:'review',ms:1600},
    {lane:1,key:'image',stage:1,ms:2800},
    {lane:1,key:'teacher',stage:2,ms:3200},
    {lane:1,key:'structure',stage:3,ms:3600},
    {lane:1,key:'tasks',stage:4,ms:3000}
  ];
  const copy={
    zh:{visual:'01 视觉生成',text:'02 文本监督',pause:'暂停演示',play:'播放演示',replay:'从头重播',next:'下一帧',hint:'方法演示 · 使用页面样例',background:'背景图',prompt:'文本指导',reference:'目标参考',result:'生成结果',image:'图像输入',teacher:'通用 MLLM',structure:'结构化文本',tasks:'多任务监督',original:'原始场景',backgroundTitle:'先确定原始场景',backgroundDetail:'保留声屏障、轨道及周围环境，作为编辑基础。',backgroundCaption:'从“背景图”标签展开场景图像',promptTitle:'加入精细化文本约束',request:'需求：立柱局部锈蚀',constraints:'位置 · 材质 · 光照 · 背景保持',promptCaption:'明确修改目标与需要保留的内容',referenceTitle:'补充目标的视觉依据',referenceDetail:'参考真实锈斑的形态、纹理与涂层细节。',referenceCaption:'背景图 + 文本指导 + 目标参考',resultTitle:'查看参考指导的结果',resultDetail:'核验场景适配、真实可靠及约束满足情况。',resultCaption:'页面生成样例 · 仍需审查复核',imageTitle:'整理待分析的图像',imageDetail:'按场景组织真实图像与经过复核的生成图像。',imageCaption:'图像作为文本监督的视觉依据',teacherTitle:'图像 + 知识 + 提示词',teacherCaption:'用规划好的分析任务引导通用 MLLM',structureTitle:'将分析组织成结构化字段',structureCaption:'字段示例 · 待审查',tasksTitle:'复核后构造不同监督任务',tasksCaption:'一份视觉记录 → 多种监督任务',scene:'场景识别',defect:'缺陷判断',evidence:'证据描述',risk:'风险说明',barrier:'声屏障',corrosion:'立柱锈蚀',rust:'红褐色锈斑',pending:'待审查',reviewed:'经审查后'},
    en:{visual:'01 Visual',text:'02 Text',pause:'Pause demo',play:'Play demo',replay:'Replay from start',next:'Next frame',hint:'Method demo · Page examples',background:'Background',prompt:'Prompt',reference:'Reference',result:'Generated result',image:'Image input',teacher:'General-purpose MLLM',structure:'Structured text',tasks:'Task supervision',original:'Original scene',backgroundTitle:'Start with the scene',backgroundDetail:'Preserve the noise barrier, tracks and surroundings as the editing canvas.',backgroundCaption:'Expand the background token into the scene image',promptTitle:'Add detailed constraints',request:'Request: Localized post corrosion',constraints:'Location · Texture · Lighting · Preserve scene',promptCaption:'Specify the target edit and what must be preserved',referenceTitle:'Add visual guidance',referenceDetail:'Follow real rust shapes, textures and coating-loss details.',referenceCaption:'Background + prompt + target reference',resultTitle:'Inspect the guided result',resultDetail:'Check scene fit, visual fidelity and constraint compliance.',resultCaption:'Supplied generation example · Requires review',imageTitle:'Curate images for analysis',imageDetail:'Organize real and reviewed synthetic images by scene.',imageCaption:'Images provide the visual basis for supervision',teacherTitle:'Image + knowledge + prompt',teacherCaption:'Guide a general MLLM with a planned analysis task',structureTitle:'Organize structured fields',structureCaption:'Illustrative fields · Pending review',tasksTitle:'Build tasks after review',tasksCaption:'One visual record → Multiple supervision tasks',scene:'Scene',defect:'Defect',evidence:'Evidence',risk:'Risk',barrier:'Noise barrier',corrosion:'Post corrosion',rust:'Reddish-brown rust patches',pending:'Pending review',reviewed:'After review'}
  };
  let index=0,running=!reduce.matches,inView=true,timer=null,remaining=timeline[0].ms,started=0;
  let animations=[];
  const language=()=>document.documentElement.lang.startsWith('zh')?'zh':'en';
  const t=key=>copy[language()][key]||key;
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset=key=>{
    const src=C.assets[key];
    return typeof src==='string'&&!/^(?:javascript|data|vbscript):/i.test(src)?src:'';
  };
  const media=(key,label,extra='')=>'<div class="demo-media '+extra+'"><img src="'+escape(asset(key))+'" alt="'+escape(t(label))+'" decoding="async"><span>'+escape(t(label))+'</span></div>';
  const detail=(title,text)=>'<div class="demo-detail"><h3>'+escape(t(title))+'</h3><p>'+escape(t(text))+'</p></div>';
  const panels=lanes.map((lane,i)=>{
    lane.id=i===0?'demo-visual-lane':'demo-text-lane';
    const panel=document.createElement('div');panel.className='demo-panel';panel.hidden=true;panel.setAttribute('aria-live','off');lane.appendChild(panel);return panel;
  });
  const controls=document.createElement('div');controls.className='demo-controls';
  controls.innerHTML='<div class="demo-selectors"><button type="button" class="demo-choice" data-demo-lane="0" aria-controls="demo-visual-lane"></button><button type="button" class="demo-choice" data-demo-lane="1" aria-controls="demo-text-lane"></button></div><div class="demo-transport"><button type="button" class="demo-toggle">Ⅱ</button><button type="button" class="demo-next">→</button><button type="button" class="demo-replay">↻</button></div>';
  root.insertBefore(controls,root.querySelector('.map-bottom'));
  const hint=document.createElement('p');hint.className='demo-hint';controls.after(hint);
  root.classList.add('demo-ready');
  function updateControls(){
    const frame=timeline[index];
    root.classList.toggle('demo-paused',!running);
    animations.forEach(animation=>{if(!running&&animation.playState==='running')animation.pause();else if(running&&animation.playState==='paused')animation.play();});
    controls.querySelectorAll('.demo-choice').forEach((button,i)=>{button.textContent=t(i===0?'visual':'text');button.setAttribute('aria-pressed',String(frame.lane===i));});
    const toggle=controls.querySelector('.demo-toggle');
    toggle.textContent=running?'Ⅱ':'▷';toggle.title=t(running?'pause':'play');toggle.setAttribute('aria-label',toggle.title);toggle.setAttribute('aria-pressed',String(running));
    controls.querySelector('.demo-next').title=t('next');controls.querySelector('.demo-next').setAttribute('aria-label',t('next'));
    controls.querySelector('.demo-replay').title=t('replay');controls.querySelector('.demo-replay').setAttribute('aria-label',t('replay'));
    hint.textContent=t('hint');
    root.querySelector('.map-top .mono').textContent=frame.lane<0?'01 → 02':'0'+(frame.lane+1)+' · '+frame.stage+'/4';
  }
  function scene(frame){
    switch(frame.key){
      case 'background':return media('background','background','demo-expand-target')+detail('backgroundTitle','backgroundDetail');
      case 'prompt':return media('background','background','demo-small-media')+'<div class="demo-mini-prompt demo-expand-target"><span>PROMPT / '+(language()==='zh'?'示例':'EXAMPLE')+'</span><strong>'+escape(t('request'))+'</strong><p>'+escape(t('constraints'))+'</p></div>';
      case 'reference':return '<div class="demo-image-pair">'+media('background','background')+media('reference','reference','demo-expand-target')+'</div>'+detail('referenceTitle','referenceDetail');
      case 'result':return media('guided','result','demo-expand-target')+detail('resultTitle','resultDetail');
      case 'image':return media('supervision','image','demo-expand-target')+detail('imageTitle','imageDetail');
      case 'teacher':return media('supervision','image','demo-small-media')+'<div class="demo-model-grid demo-expand-target">'+[['claude','Claude'],['gemini','Gemini'],['gpt','GPT'],['qwen','Qwen']].map(([id,name])=>'<div><img src="assets/model-icons/'+id+'.svg" alt="" width="22" height="22"><span>'+name+'</span></div>').join('')+'</div>';
      case 'structure':{
        const values=[['scene','"'+t('barrier')+'"'],['anomaly_classes','["'+t('corrosion')+'"]'],['visual_evidence','["'+t('rust')+'"]'],['risk_description','null'],['review_status','"pending"']];
        return '<div class="demo-code demo-expand-target"><span class="demo-code-brace">{</span>'+values.map(([key,value],i)=>'<div class="demo-code-line" style="--line:'+i+'"><b>"'+key+'"</b>: <span>'+escape(value)+'</span>'+(i<values.length-1?',':'')+'</div>').join('')+'<span class="demo-code-brace">}</span></div>';
      }
      case 'tasks':return '<div class="demo-record-badge"><b>{ }</b><span>'+escape(t('reviewed'))+'</span></div><span class="demo-direction" aria-hidden="true">→</span><div class="demo-task-grid demo-expand-target">'+['scene','defect','evidence','risk'].map(key=>'<span>'+escape(t(key))+'</span>').join('')+'</div>';
      default:return '';
    }
  }
  function sourceToken(frame){
    const tokens=lanes[frame.lane].querySelectorAll('.map-tokens>span');
    const token=frame.lane===0?(frame.key==='background'?0:frame.key==='prompt'?1:2):(frame.key==='image'?0:frame.key==='teacher'?1:2);
    return tokens[token];
  }
  function render(animate=true){
    animations.forEach(animation=>animation.cancel());animations=[];
    const frame=timeline[index];
    const source=frame.lane>=0?sourceToken(frame).getBoundingClientRect():null;
    lanes.forEach((lane,i)=>{lane.classList.toggle('demo-active',frame.lane===i);panels[i].hidden=frame.lane!==i;});
    bridge.classList.toggle('demo-reviewing',frame.key==='review');
    if(frame.lane>=0){
      const panel=panels[frame.lane];
      const headerKey=frame.key==='teacher'?'teacherTitle':frame.key==='structure'?'structureTitle':frame.key==='tasks'?'tasksTitle':frame.key;
      const captionKey=frame.key==='teacher'?'teacherCaption':frame.key==='structure'?'structureCaption':frame.key==='tasks'?'tasksCaption':frame.key==='image'?'imageCaption':frame.key+'Caption';
      panel.innerHTML='<div class="demo-panel-top"><span>'+escape(t(headerKey))+'</span><b>'+frame.stage+'/4</b></div><div class="demo-scene demo-scene-'+frame.key+'">'+scene(frame)+'</div><p class="demo-caption">'+escape(t(captionKey))+'</p>';
      panel.querySelectorAll('.demo-media img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;img.parentElement.classList.add('demo-media-missing');},{once:true}));
      if(animate&&running&&!reduce.matches&&typeof panel.animate==='function'){
        animations.push(panel.animate([{opacity:.35},{opacity:1}],{duration:450,easing:'ease-out'}));
        const target=panel.querySelector('.demo-expand-target'),box=target.getBoundingClientRect();
        if(box.width&&source.width){
          const transform='translate('+(source.left-box.left)+'px,'+(source.top-box.top)+'px) scale('+Math.max(.15,source.width/box.width)+','+Math.max(.15,source.height/box.height)+')';
          animations.push(target.animate([{transform,opacity:.35,borderRadius:'4px'},{transform:'translate(0,0) scale(1)',opacity:1,borderRadius:'7px'}],{duration:780,easing:'cubic-bezier(.22,.75,.25,1)',fill:'both'}));
        }
      }
    }
    updateControls();
  }
  function suspend(){if(timer!==null){clearTimeout(timer);timer=null;remaining=Math.max(0,remaining-(performance.now()-started));}}
  function schedule(){
    if(timer!==null||!running||!inView||document.hidden)return;
    started=performance.now();timer=setTimeout(()=>{timer=null;index=(index+1)%timeline.length;remaining=timeline[index].ms;render();schedule();},remaining);
  }
  function jump(next){suspend();index=next;remaining=timeline[index].ms;render();schedule();}
  controls.querySelectorAll('.demo-choice').forEach((button,i)=>button.addEventListener('click',()=>{running=!reduce.matches;jump(i===0?1:6);}));
  controls.querySelector('.demo-toggle').addEventListener('click',()=>{if(running){suspend();running=false;}else{running=true;schedule();}updateControls();});
  controls.querySelector('.demo-next').addEventListener('click',()=>jump((index+1)%timeline.length));
  controls.querySelector('.demo-replay').addEventListener('click',()=>jump(0));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)suspend();else schedule();});
  if('IntersectionObserver' in window){new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)schedule();else suspend();},{threshold:.1}).observe(root);}
  new MutationObserver(()=>render(false)).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  reduce.addEventListener('change',()=>{if(reduce.matches){suspend();running=false;}render(false);});
  render(false);schedule();
})();

