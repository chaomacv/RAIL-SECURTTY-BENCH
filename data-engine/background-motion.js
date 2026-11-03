/* Decorative background motion, independent of the data workflow. */
(() => {
  'use strict';
  const body=document.body;
  const sections=[document.querySelector('.hero'),document.getElementById('synthesis'),document.getElementById('supervision'),document.getElementById('resources')];
  if(sections.some(section=>!section))return;
  body.classList.add('motion-backgrounds');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  const paths=[
    'M-180 760 C180 790 410 250 830 220 S1280 470 1660 20',
    'M-180 804 C210 834 440 290 850 262 S1310 510 1690 62'
  ];
  sections.forEach((section,index)=>{
    const layer=document.createElement('div');layer.className='motion-scene motion-scene-'+index;layer.setAttribute('aria-hidden','true');
    layer.innerHTML='<i class="motion-mist motion-mist-a"></i><i class="motion-mist motion-mist-b"></i><i class="motion-mist motion-mist-c"></i>';
    if(index===0||index===2){
      const color=index===0?'#5b9f88':'#7cd9bd';
      layer.innerHTML+='<svg class="motion-tracks" viewBox="0 0 1440 900" preserveAspectRatio="none"><defs><linearGradient id="motion-light-'+index+'"><stop stop-color="'+color+'" stop-opacity="0"/><stop offset=".55" stop-color="'+color+'"/><stop offset="1" stop-color="'+color+'" stop-opacity="0"/></linearGradient></defs>'+paths.map((path,i)=>'<path class="motion-rail" d="'+path+'"/><path class="motion-signal motion-signal-'+i+'" stroke="url(#motion-light-'+index+')" d="'+path+'"/>').join('')+'</svg>';
    }
    if(index===1)layer.innerHTML+='<i class="motion-strategy-glow motion-strategy-0"></i><i class="motion-strategy-glow motion-strategy-1"></i><i class="motion-strategy-glow motion-strategy-2"></i>';
    if(index===2)layer.innerHTML+='<i class="motion-focus"></i>';
    section.prepend(layer);
  });
  const control=document.createElement('button');control.type='button';control.className='motion-control';control.setAttribute('aria-pressed','false');
  control.innerHTML='<span class="motion-control-symbol" aria-hidden="true">Ⅱ</span><span class="motion-control-label"></span>';
  body.appendChild(control);
  let paused=false,scheduled=false;
  function updateLabel(){
    const zh=document.documentElement.lang.startsWith('zh');
    control.querySelector('.motion-control-label').textContent=zh?(paused?'播放背景':'暂停背景'):(paused?'Play background':'Pause background');
    control.querySelector('.motion-control-symbol').textContent=paused?'▷':'Ⅱ';
    control.setAttribute('aria-pressed',String(paused));
    control.setAttribute('aria-label',zh?(paused?'播放背景动效':'暂停背景动效'):(paused?'Play background motion':'Pause background motion'));
    control.hidden=reduce.matches;
  }
  control.addEventListener('click',()=>{paused=!paused;body.dataset.motionPaused=String(paused);updateLabel();});
  function update(){
    scheduled=false;
    const strategies=[...document.querySelectorAll('.strategy-tabs [role="tab"]')];
    const strategy=Math.max(0,strategies.findIndex(tab=>tab.getAttribute('aria-selected')==='true'));
    sections[1].dataset.motionStrategy=String(strategy);
    const steps=[...document.querySelectorAll('#pipeline-steps [role="tab"]')];
    const active=Math.max(0,steps.findIndex(tab=>tab.getAttribute('aria-selected')==='true'));
    const progress=steps.length>1?active/(steps.length-1):0;
    sections[2].style.setProperty('--motion-node-x',(8.3+83.4*progress)+'%');
    sections[2].dataset.motionStep=String(active);
    sections[2].dataset.motionPlaying=String(document.getElementById('flow-play').getAttribute('aria-pressed')==='true');
    updateLabel();
  }
  function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
  const observer=new MutationObserver(schedule);
  [document.querySelector('.strategy-tabs'),document.getElementById('pipeline-steps')].forEach(root=>observer.observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-selected']}));
  observer.observe(document.getElementById('flow-play'),{attributes:true,attributeFilter:['aria-pressed']});
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  reduce.addEventListener('change',updateLabel);
  if('IntersectionObserver' in window){
    const visibility=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('motion-offscreen',!entry.isIntersecting)),{rootMargin:'100px'});
    sections.forEach(section=>visibility.observe(section));
  }
  document.addEventListener('visibilitychange',()=>body.classList.toggle('motion-page-hidden',document.hidden));
  document.querySelectorAll('.resource-card').forEach(card=>{
    card.addEventListener('pointermove',event=>{
      if(reduce.matches||paused||event.pointerType==='touch')return;
      const box=card.getBoundingClientRect();
      card.style.setProperty('--motion-pointer-x',((event.clientX-box.left)/box.width*100)+'%');
      card.style.setProperty('--motion-pointer-y',((event.clientY-box.top)/box.height*100)+'%');
    },{passive:true});
  });
  body.classList.toggle('motion-page-hidden',document.hidden);
  update();
})();

