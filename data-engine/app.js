(() => {
  'use strict';
  const C = window.RAILMIND_CONTENT;
  const $ = id => document.getElementById(id);
  const dictionary = {
    zh: {
      skip:'跳至内容',menu:'打开导航菜单',navVisual:'视觉生成',navText:'文本监督',backHome:'项目主页 ↗',
      heroTitle:'从视觉生成，<br>到<span>可信监督。</span>',heroDescription:'探索铁路巡检数据的构建过程：用更可控的生成策略补充视觉样本，用通用多模态大模型组织文本监督。',startExplore:'探索数据构建',watchFlow:'查看监督流程',heroNote:'声屏障立柱锈蚀 · 三种视觉生成策略',
      mapVisual:'让生成更可控',background:'背景图',prompt:'文本指导',reference:'目标参考',humanReview:'人工复核',mapText:'让视觉成为监督',image:'图像',structuredText:'结构化文本',mapBottom:'面向铁路基础设施异常理解',stripVisual:'视觉数据生成',stripVisualSub:'三种逐步增强的控制策略',stripText:'文本监督构建',stripTextSub:'从图像输入到多任务监督',
      visualTitle:'从提出需求，到控制细节。',visualDescription:'以声屏障立柱锈蚀为例，逐步增加文本与视觉条件，观察锈蚀外观、场景融合及约束满足情况。',visualSide:'同一场景 · 逐层增加控制条件',simpleTitle:'直接文本指导',simpleSub:'背景图 + 简单需求',refinedTitle:'精细化文本指导',refinedSub:'背景图 + 多维约束',referenceTitle:'目标参考指导',referenceSub:'背景图 + 目标参考 + 文本',
      inputConditions:'输入条件',generationPrompt:'生成提示词',copy:'复制',promptExample:'PROMPT / 示例',generatedResult:'生成结果',resultView:'结果',compareView:'对比',pendingImages:'图像待补充',strategyFocus:'本阶段关注',reviewTitle:'生成之后，还需要核验什么？',reviewNote:'核验维度 · 具体结论以实际样例为准',sceneFit:'场景适配',fidelity:'真实可靠',compliance:'约束满足',pendingReview:'待核验',nextQuestion:'下一步的问题',
      textTitle:'让图像，成为有依据的监督。',textDescription:'将图像、领域知识和受控提示词组织起来，经过模型分析与人工复核，形成多任务文本监督。',replay:'重播流程',playFlow:'播放流程',pauseFlow:'暂停流程',sourceDescription:'真实图像与已复核的生成图像，经整理后进入文本监督流程。',backToSynthesis:'回看视觉生成策略',workflowDemo:'流程演示',supervisionSchema:'监督结构',schemaNote:'字段结构示意。图像与真实模型输出将在项目仓库开放',exportGate:'通过复核后导出',previousStep:'上一步',nextStep:'下一步',detectionBranch:'并行检测分支：图像 → 人工框标注 → 已核验的检测数据',detectionNote:'文本监督与检测标注分别管理',taskOutput:'SUPERVISION / 多任务输出',taskTitle:'一份视觉依据，多种监督任务。',taskDescription:'以下为问答组织模板，内容由经过复核的样本信息填充。',templateNote:'模板示意 · 花括号内为待填字段',
      resourceTitle:'从数据方法，走向研究实现。',resourceDescription:'Data Engine 展示训练数据的构建方法；项目主页介绍模型与研究结果，Benchmark 承担独立评测职责。',augmentationDocs:'图像增广文档',augmentationDocsSub:'查看生成配置、提示词与复核流程。',teacherDocs:'教师监督文档',teacherDocsSub:'了解教师模型接口与监督数据组织。',benchmarkSub:'返回六类铁路场景与评测介绍。',footerText:'视觉数据生成与文本监督构建',projectOverview:'项目总览',
      slotBackground:'声屏障原始背景',slotReference:'声屏障立柱锈蚀参考',slotResult:'声屏障立柱锈蚀生成结果',slotSupervision:'监督图像',slotBefore:'原始背景',slotAfter:'生成结果',copied:'提示词已复制',copyFailed:'复制不可用，请手动选择提示词',
      positive:'含缺陷样本',negative:'无缺陷样本',teacherTitle:'通用 MLLM',teacherSub:'教师模型 · 通用模型示例',teacherNote:'本页回放方法流程；真实图像描述由后续样例提供。',fieldScene:'场景信息',fieldClass:'缺陷类别',fieldEvidence:'可见证据',fieldRisk:'风险说明',reviewEvidence:'描述与图像证据一致',reviewClass:'类别与缺陷定义一致',reviewRisk:'风险表述有依据且保留不确定性',reviewNegative:'正常与含缺陷样本均进行核验',reviewRework:'需要修订 → 更正描述与类别 → 再次复核',exportOne:'已复核记录 → 多任务文本监督',exportTwo:'图像与人工框标注 → 检测数据',exportNote:'训练与评测划分分别维护，保留数据来源。'
    },
    en: {
      skip:'Skip to content',menu:'Open navigation',navVisual:'Visual Synthesis',navText:'Text Supervision',backHome:'Project Home ↗',
      heroTitle:'From visual synthesis<br>to <span>grounded supervision.</span>',heroDescription:'Explore how railway inspection data is built: control visual generation, review the results, and organize textual supervision with general-purpose multimodal models.',startExplore:'Explore the engine',watchFlow:'See the workflow',heroNote:'Noise-barrier post corrosion · Three synthesis strategies',
      mapVisual:'Control what you generate',background:'Background',prompt:'Prompt',reference:'Reference',humanReview:'Human review',mapText:'Turn vision into supervision',image:'Image',structuredText:'Structured text',mapBottom:'For railway infrastructure anomaly understanding',stripVisual:'Visual data synthesis',stripVisualSub:'Three progressively richer control strategies',stripText:'Textual supervision',stripTextSub:'From image input to task-specific supervision',
      visualTitle:'From a simple request to finer control.',visualDescription:'Explore noise-barrier post corrosion by adding textual and visual conditions. Inspect rust appearance, scene integration and constraint compliance.',visualSide:'One scene · Progressively richer conditions',simpleTitle:'Direct prompting',simpleSub:'Background + simple request',refinedTitle:'Detailed prompting',refinedSub:'Background + explicit constraints',referenceTitle:'Reference guidance',referenceSub:'Background + reference + prompt',
      inputConditions:'Conditions',generationPrompt:'Generation prompt',copy:'Copy',promptExample:'PROMPT / ILLUSTRATIVE',generatedResult:'Generated image',resultView:'Result',compareView:'Compare',pendingImages:'Images forthcoming',strategyFocus:'STRATEGY FOCUS',reviewTitle:'What needs to be checked after generation?',reviewNote:'Review criteria · Conclusions require actual examples',sceneFit:'Scene fit',fidelity:'Visual fidelity',compliance:'Constraints',pendingReview:'Pending',nextQuestion:'THE NEXT QUESTION',
      textTitle:'Turn images into grounded supervision.',textDescription:'Combine images, domain knowledge and controlled prompts. Model analysis and human review produce supervision for multiple tasks.',replay:'Replay workflow',playFlow:'Play workflow',pauseFlow:'Pause workflow',sourceDescription:'Real images and reviewed synthetic images enter the supervision pipeline after curation.',backToSynthesis:'Revisit visual synthesis',workflowDemo:'Workflow demo',supervisionSchema:'OUTPUT SCHEMA',schemaNote:'Schema illustration. Images and actual model outputs will be released in the project repository.',exportGate:'Export after approval',previousStep:'Previous step',nextStep:'Next step',detectionBranch:'Parallel detection branch: image → human box annotations → verified detection data',detectionNote:'Text and detection annotations are managed separately',taskOutput:'SUPERVISION / TASK OUTPUTS',taskTitle:'One visual record. Multiple learning tasks.',taskDescription:'These question-and-answer templates are populated with reviewed sample information.',templateNote:'Template illustration · Braces indicate fields to populate',
      resourceTitle:'Connect the method to implementation.',resourceDescription:'The Data Engine explains training-data construction. The project home presents the model and results; the benchmark provides evaluation.',augmentationDocs:'Image augmentation',augmentationDocsSub:'Explore generation configuration, prompts and review.',teacherDocs:'Teacher supervision',teacherDocsSub:'Explore teacher interfaces and supervision records.',benchmarkSub:'Return to the six railway scenarios and benchmark overview.',footerText:'Visual synthesis & textual supervision',projectOverview:'Project overview',
      slotBackground:'Original noise-barrier background',slotReference:'Corroded noise-barrier post reference',slotResult:'Generated noise-barrier post corrosion',slotSupervision:'Supervision image',slotBefore:'Original background',slotAfter:'Generated result',copied:'Prompt copied',copyFailed:'Copy unavailable. Select the prompt text manually.',
      positive:'With defects',negative:'Without defects',teacherTitle:'General-purpose MLLM',teacherSub:'Teacher models · examples',teacherNote:'This page demonstrates the method. Real image descriptions will accompany future examples.',fieldScene:'Scene context',fieldClass:'Defect categories',fieldEvidence:'Visible evidence',fieldRisk:'Risk description',reviewEvidence:'Descriptions match visual evidence',reviewClass:'Categories match defect definitions',reviewRisk:'Risk claims are grounded and uncertainty is retained',reviewNegative:'Both normal and defect-containing images are checked',reviewRework:'Needs correction → revise descriptions and classes → review again',exportOne:'Approved records → task-specific text supervision',exportTwo:'Images + human box annotations → detection data',exportNote:'Maintain train/test splits and preserve provenance.'
    }
  };
  let lang = 'zh', strategy = 0, step = 0, task = 0, promptPart = 0, compare = false, timer = null, toastTimer;
  try { lang = localStorage.getItem('railmind-language') === 'en' ? 'en' : 'zh'; } catch (_) {}
  const t = key => dictionary[lang][key] || key;
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const animate = element => { element.classList.remove('content-enter'); void element.offsetWidth; element.classList.add('content-enter'); };
  function assetPath(key) {
    const value = C.assets[key];
    if (typeof value !== 'string' || !value.trim()) return null;
    // Content configuration accepts local paths and HTTPS URLs, never executable schemes.
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(value) && !/^https:\/\//i.test(value)) return null;
    return value;
  }
  function placeholder(element, key, label, tag) {
    element.replaceChildren();
    element.classList.remove('has-image');
    const renderEmpty = () => { element.classList.remove('has-image'); element.innerHTML = `<span class="media-tag">${escape(tag)}</span>${icon('image')}<strong>${escape(t(label))}</strong><small>IMAGE FORTHCOMING</small>`; };
    const src = assetPath(key);
    if (src) {
      const img = document.createElement('img'); img.src = src; img.alt = t(label); img.decoding = 'async'; img.addEventListener('error', renderEmpty, {once:true});
      const badge = document.createElement('span'); badge.className = 'media-tag'; badge.textContent = t(label);
      element.classList.add('has-image'); element.append(img, badge);
    } else renderEmpty();
  }
  function renderStrategy() {
    const s = C.strategies[strategy][lang];
    document.querySelectorAll('[data-strategy]').forEach((tab, index) => { tab.setAttribute('aria-selected', String(index === strategy)); tab.tabIndex = index === strategy ? 0 : -1; });
    $('strategy-panel').setAttribute('aria-labelledby', `strategy-tab-${strategy}`);
    placeholder($('background-slot'), 'background', 'slotBackground', 'BACKGROUND');
    $('reference-slot').hidden = strategy !== 2;
    placeholder($('reference-slot'), 'reference', 'slotReference', 'REFERENCE');
    $('generation-prompt').textContent = s.prompt;
    $('constraint-tags').replaceChildren(...s.tags.map(tag => { const el = document.createElement('span'); el.textContent = tag; return el; }));
    $('strategy-caption').textContent = s.caption;
    $('strategy-description').textContent = s.description;
    ['scene','fidelity','compliance'].forEach(key => $(`review-${key}`).textContent = s[key]);
    $('transition-text').textContent = s.transition;
    $('next-strategy-label').textContent = s.next;
    $('next-strategy').setAttribute('href', strategy === 2 ? '#supervision' : '#strategy-panel');
    const output = $('result-display'); output.replaceChildren(); output.classList.toggle('compare', compare);
    if (compare) { const before = document.createElement('div'); before.className = 'media-slot'; output.appendChild(before); placeholder(before, 'background', 'slotBefore', 'BEFORE'); }
    const after = document.createElement('div'); after.className = 'media-slot'; output.appendChild(after); placeholder(after, C.strategies[strategy].asset, compare ? 'slotAfter' : 'slotResult', `STRATEGY 0${strategy+1}`);
    $('view-result').setAttribute('aria-pressed', String(!compare)); $('view-compare').setAttribute('aria-pressed', String(compare));
    const ready = Boolean(assetPath(C.strategies[strategy].asset)) && (!compare || Boolean(assetPath('background')));
    document.querySelector('.pending-label').hidden = ready;
  }
  function renderSteps() {
    const root = $('pipeline-steps'); root.replaceChildren();
    C.steps.forEach((item,index) => {
      const button = document.createElement('button'); button.id = `step-tab-${index}`; button.type = 'button'; button.className = 'pipeline-step'; button.setAttribute('role','tab'); button.setAttribute('aria-controls','flow-panel'); button.setAttribute('aria-selected',String(index===step)); button.tabIndex = index===step ? 0 : -1; button.classList.toggle('completed',index<step);
      button.innerHTML = `<span>${String(index+1).padStart(2,'0')}</span>${escape(item[lang].label)}`;
      button.addEventListener('click',()=>selectStep(index)); root.appendChild(button);
    });
    $('pipeline-progress').style.width = `${step / (C.steps.length-1) * 83.4}%`;
  }
  function renderPromptParts() {
    const root = $('step-content');
    root.innerHTML = `<div class="prompt-assembly"></div><div class="prompt-excerpt" id="prompt-excerpt"></div>`;
    const tabs = root.querySelector('.prompt-assembly');
    C.promptParts.forEach((part,index) => { const button = document.createElement('button'); button.type = 'button'; button.className = 'prompt-piece'; button.textContent = part[lang].label; button.setAttribute('aria-pressed',String(index===promptPart)); button.addEventListener('click',()=>{promptPart=index;renderPromptParts();}); tabs.appendChild(button); });
    $('prompt-excerpt').textContent = C.promptParts[promptPart][lang].text;
  }
  const exportPanel = $('stage-insight').innerHTML;
  function renderExportSchema() {
    const fields = [['scene','null','场景'],['anomaly_classes','[]','缺陷种类'],['visual_evidence','[]','可见证据'],['risk_description','null','风险说明'],['review_status','"pending"','复核状态']];
    $('schema-preview').innerHTML = '{\n' + fields.map(([key,value,note],index)=>`${lang === 'zh' ? `  <span class="json-comment"># ${escape(note)}</span>\n` : ''}  <span class="json-key${step >= 3 ? ' json-active' : ''}">"${key}"</span>:\n    <span class="json-value${step>=4 && index===4 ? ' json-active' : ''}">${escape(value)}</span>${index<fields.length-1?',':''}`).join('\n') + '\n}';
  }
  function renderStageInsight() {
    const aside = $('stage-insight');
    aside.classList.toggle('stage-explanation', step !== 5);
    if (step === 5) {
      aside.innerHTML = exportPanel;
      aside.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
      renderExportSchema();
      return;
    }
    const p = C.workflowPanels[step][lang];
    aside.innerHTML = '<div class="panel-label"><span class="label-dot"></span>' + escape(p.kicker) + '</div><h4 class="insight-title">' + escape(p.title) + '</h4><p class="insight-intro">' + escape(p.intro) + '</p><div class="insight-cards">' + p.items.map(([title,text])=>'<section class="insight-card"><h5>'+escape(title)+'</h5><p>'+escape(text)+'</p></section>').join('') + '</div><p class="insight-note">' + escape(p.note) + '</p>';
  }
  function renderFlow() {
    renderSteps();
    const s = C.steps[step][lang];
    $('flow-panel').setAttribute('aria-labelledby',`step-tab-${step}`);
    $('step-counter').textContent = `STEP ${String(step+1).padStart(2,'0')} / 06`;
    $('step-title').textContent = s.title; $('step-description').textContent = s.description; $('step-purpose').textContent = s.purpose;
    placeholder($('supervision-slot'), 'supervision', 'slotSupervision', 'VISUAL INPUT');
    const root = $('step-content');
    if (step === 0) {
      root.innerHTML = `<div class="scene-chips">${(lang === 'zh' ? ['接触网支柱','环境','声屏障','电塔','铁轨','钢架桥'] : ['Catenary Pole','Environment','Noise Barrier','Power Tower','Rail Track','Steel Bridge']).map(scene=>`<span>${escape(scene)}</span>`).join('')}</div><div class="source-types"><span>+ ${escape(t('positive'))}</span><span>− ${escape(t('negative'))}</span></div><p class="workflow-copy sample-balance">${escape(C.curationNote[lang])}</p>`;
    } else if (step === 1) renderPromptParts();
    else if (step === 2) {
      const m=C.modelAnalysis[lang];
      root.innerHTML = '<div class="teacher-models">'+[['claude','Claude'],['gemini','Gemini'],['gpt','GPT'],['qwen','Qwen']].map(([id,name])=>'<div class="teacher-model"><span class="teacher-logo"><img src="assets/model-icons/'+id+'.svg" alt="" width="24" height="24"></span><span>'+name+'</span></div>').join('')+'</div><p class="workflow-copy">'+escape(m.intro)+'</p><div class="request-route">'+m.route.map(text=>'<span>'+escape(text)+'</span>').join('<b aria-hidden="true">→</b>')+'</div><p class="flow-mini-note">'+escape(m.note)+'</p>';
    } else if (step === 3) {
      const e=C.structuredExamples[lang];
      root.innerHTML='<div class="example-fields">'+e.items.map(([label,text])=>'<section><h4>'+escape(label)+'</h4><p>'+escape(text)+'</p></section>').join('')+'</div><p class="flow-mini-note">'+escape(e.note)+'</p>';
    } else if (step === 4) {
      const r=C.reviewMethods[lang];
      root.innerHTML='<div class="review-methods">'+r.items.map(([label,text])=>'<section><h4>'+escape(label)+'</h4><p>'+escape(text)+'</p></section>').join('')+'</div><h4 class="vector-heading">'+escape(r.label)+'</h4><div class="vector-fields">'+r.fields.map(text=>'<span>'+escape(text)+'</span>').join('')+'</div><p class="workflow-copy vector-route">'+escape(r.route)+'</p><p class="flow-mini-note">'+escape(r.note)+'</p>';
    }
    else root.innerHTML = `<div class="export-path"><div>${icon('text')}<span>${escape(t('exportOne'))}</span></div><div>${icon('check')}<span>${escape(t('exportTwo'))}</span></div></div><p class="flow-mini-note">${escape(t('exportNote'))}</p>`;
    renderStageInsight();
    $('flow-prev').disabled = step === 0; $('flow-next').disabled = step === C.steps.length-1;
    $('play-label').textContent = t(timer ? 'pauseFlow' : 'playFlow'); $('play-icon').textContent = timer ? 'Ⅱ' : '▶'; $('flow-play').setAttribute('aria-pressed',String(Boolean(timer)));
  }
  function pause() { if(timer) clearInterval(timer); timer = null; $('play-label').textContent = t('playFlow'); $('play-icon').textContent = '▶'; $('flow-play').setAttribute('aria-pressed','false'); }
  function selectStep(index, automatic = false) { if(!automatic) pause(); step = index; renderFlow(); animate($('step-content')); }
  function play() {
    if(timer) { pause(); return; }
    if(step === C.steps.length-1) step = 0;
    timer = setInterval(()=>{ if(step < C.steps.length-1) selectStep(step+1,true); if(step === C.steps.length-1) pause(); }, 3200);
    renderFlow();
  }
  function renderTasks() {
    const root = $('task-tabs'); root.replaceChildren();
    C.tasks.forEach((item,index)=>{ const button = document.createElement('button'); button.id = `task-tab-${index}`; button.className = 'task-tab'; button.type = 'button'; button.setAttribute('role','tab'); button.setAttribute('aria-controls','task-panel'); button.setAttribute('aria-selected',String(index===task)); button.tabIndex = index===task ? 0 : -1; button.textContent = item[lang].label; button.addEventListener('click',()=>{task=index;renderTasks();animate($('task-panel'));});root.appendChild(button); });
    $('task-panel').setAttribute('aria-labelledby',`task-tab-${task}`); $('task-question').textContent = C.tasks[task][lang].question; $('task-answer').textContent = C.tasks[task][lang].answer;
  }
  function renderLanguage() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
    $('language').textContent = lang === 'zh' ? 'EN' : '中文'; $('language').setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    renderStrategy(); renderFlow(); renderTasks();
  }
  function keyboardTabs(root, select, count, current) {
    root.addEventListener('keydown',event=>{
      if(!event.target.closest('[role="tab"]')) return;
      let next = current();
      if(event.key==='ArrowRight') next=(next+1)%count;
      else if(event.key==='ArrowLeft') next=(next+count-1)%count;
      else if(event.key==='Home') next=0;
      else if(event.key==='End') next=count-1;
      else return;
      event.preventDefault();select(next);root.querySelector('[aria-selected="true"]').focus();
    });
  }
  function selectStrategy(index) {strategy=index;renderStrategy();animate($('result-display'));}
  document.querySelectorAll('[data-strategy]').forEach(el=>el.addEventListener('click',()=>selectStrategy(Number(el.dataset.strategy))));
  $('view-result').addEventListener('click',()=>{compare=false;renderStrategy();});
  $('view-compare').addEventListener('click',()=>{compare=true;renderStrategy();});
  $('next-strategy').addEventListener('click',event=>{if(strategy<2){event.preventDefault();selectStrategy(strategy+1);}});
  $('flow-play').addEventListener('click',play); $('flow-reset').addEventListener('click',()=>selectStep(0));
  $('flow-prev').addEventListener('click',()=>{if(step>0)selectStep(step-1);}); $('flow-next').addEventListener('click',()=>{if(step<C.steps.length-1)selectStep(step+1);});
  $('language').addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';try{localStorage.setItem('railmind-language',lang);}catch(_){}renderLanguage();});
  $('menu-toggle').addEventListener('click',()=>{const open=$('navigation').classList.toggle('open');$('menu-toggle').setAttribute('aria-expanded',String(open));});
  document.querySelectorAll('#navigation a').forEach(el=>el.addEventListener('click',()=>{$('navigation').classList.remove('open');$('menu-toggle').setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){$('navigation').classList.remove('open');$('menu-toggle').setAttribute('aria-expanded','false');}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
  $('copy-prompt').addEventListener('click',async()=>{let message;try{await navigator.clipboard.writeText(C.strategies[strategy][lang].prompt);message=t('copied');}catch(_){message=t('copyFailed');}clearTimeout(toastTimer);$('toast').textContent=message;$('toast').classList.add('visible');toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2800);});
  keyboardTabs(document.querySelector('.strategy-tabs'),selectStrategy,C.strategies.length,()=>strategy);
  keyboardTabs($('pipeline-steps'),selectStep,C.steps.length,()=>step);
  keyboardTabs($('task-tabs'),index=>{task=index;renderTasks();},C.tasks.length,()=>task);
  renderLanguage();
})();


