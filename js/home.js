(() => {
  'use strict';
  const { t } = window.RAILMIND_I18N;
  // Anchors refer to the existing colored annotations in the original 4:3
  // benchmark images, not to model predictions. Keep the full image visible.
  const slides = [
    {scene:'Steel Bridge', file:'Steel Bridge.png', defect:'Coating deterioration', color:'#10b3e6', anchor:[0.846,0.67], description:'Missing bolts, coating damage and guardrail corrosion may compromise connections and durability. Advanced deterioration can threaten structural or maintenance-access safety.'},
    {scene:'Catenary Pole', file:'Catenary Pole.png', defect:'Bird nest', color:'#ff4d5a', anchor:[0.205,0.325], description:'Bird nests and other attachments may compromise overhead electrical clearances. Severe intrusion can contribute to flashover and traction-power interruption.'},
    {scene:'Noise Barrier', file:'Noise Barrier.png', defect:'Corrosion / deterioration', color:'#9bcf00', anchor:[0.677,0.17], description:'Panel and column corrosion, together with deteriorated mortar, may weaken barrier integrity. Advanced damage can cause loose or falling components near the railway.'},
    {scene:'Environment', file:'Environment.png', defect:'Foreign object', color:'#ffc107', anchor:[0.378,0.72], description:'Plastic film, waste and intrusive objects may enter the track area or contact electrical equipment. Severe intrusion can disrupt train operation or power supply.'},
    {scene:'Power Tower', file:'Power Tower.png', defect:'Bird nest', color:'#ff4d5a', anchor:[0.56,0.595], description:'Bird nests, foreign objects and loose antenna bolts may impair electrical clearances or attachment stability. Severe cases can involve electrical faults or falling components.'},
    {scene:'Rail Track', file:'Rail Track.png', defect:'Fastener defect', color:'#10b3e6', anchor:[0.647,0.313], description:'Missing or cracked fasteners may weaken rail restraint and track stability. Widespread or progressive damage can pose a serious risk to safe train running.'}
  ];
  let active = 0, copyState = 'Copy project URL', copyTimer;
  const image = document.getElementById('hero-image');
  const title = document.getElementById('hero-title');
  const switchers = document.getElementById('image-switchers');
  const menu = document.getElementById('menu-toggle');
  const links = document.getElementById('links');
  const copyButton = document.getElementById('copy-link');
  const visual = document.querySelector('.hero-visual');
  const scene = document.getElementById('hero-scene');
  const frame = document.getElementById('hero-frame');
  const stage = document.getElementById('hero-image-stage');
  const annotation = document.getElementById('hero-annotation');
  const guide = document.getElementById('hero-guide');
  let guideFrame;
  slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.addEventListener('click', () => show(index));
    switchers.appendChild(button);
  });
  function renderLabels() {
    const slide = slides[active];
    title.textContent = t(slide.scene);
    image.alt = `${t(slide.scene)} ${t('railway inspection scene')}`;
    document.getElementById('hero-defect').textContent = t(slide.defect);
    document.getElementById('hero-risk').textContent = t(slide.description);
    scene.style.setProperty('--callout-color', slide.color);
    [...switchers.children].forEach((button, index) => {
      button.classList.toggle('active', index === active);
      button.setAttribute('aria-label', `${t('View')} ${t(slides[index].scene)}`);
      button.setAttribute('aria-pressed', String(index === active));
    });
    copyButton.textContent = t(copyState);
    scheduleGuide();
  }
  function drawGuide() {
    const bounds = scene.getBoundingClientRect();
    const picture = stage.getBoundingClientRect();
    const card = annotation.getBoundingClientRect();
    const photoFrame = frame.getBoundingClientRect();
    if (!bounds.width || !picture.width || !card.height) return;
    const [x,y] = slides[active].anchor;
    const startX = picture.left - bounds.left + picture.width * x;
    const startY = picture.top - bounds.top + picture.height * y;
    const endX = card.left - bounds.left;
    const endY = card.top - bounds.top + 18;
    const beside = card.left >= photoFrame.right;
    const elbowX = beside ? photoFrame.right - bounds.left + (card.left-photoFrame.right)*0.52 : photoFrame.right-bounds.left-4;
    const path = beside
      ? `M ${startX} ${startY} H ${elbowX} V ${endY} H ${endX}`
      : `M ${startX} ${startY} H ${elbowX} V ${photoFrame.bottom-bounds.top+13} H ${endX} V ${endY}`;
    guide.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    document.getElementById('hero-leader').setAttribute('d', path);
    const target = document.getElementById('hero-target');
    target.setAttribute('cx', startX); target.setAttribute('cy', startY);
    const endpoint = document.getElementById('hero-endpoint');
    endpoint.setAttribute('cx', endX); endpoint.setAttribute('cy', endY);
  }
  function scheduleGuide() {
    cancelAnimationFrame(guideFrame);
    guideFrame = requestAnimationFrame(drawGuide);
  }
  function show(index) {
    active = index;
    const path = 'assets/images/' + slides[index].file;
    if (image.getAttribute('src') !== path) image.src = path;
    renderLabels();
  }
  show(0);
  setInterval(() => {
    // Keep the description still while it is being read or selected.
    if (!document.hidden && !visual.matches(':hover') && !visual.contains(document.activeElement)) show((active + 1) % slides.length);
  }, 10000);
  image.addEventListener('load', scheduleGuide);
  window.addEventListener('resize', scheduleGuide);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(scheduleGuide);
    observer.observe(scene); observer.observe(stage); observer.observe(annotation);
  }
  if (document.fonts) document.fonts.ready.then(scheduleGuide);
  document.addEventListener('railmind:languagechange', renderLabels);
  function closeMenu() {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
  menu.addEventListener('click', () => menu.setAttribute('aria-expanded', String(links.classList.toggle('open'))));
  document.querySelectorAll('#links a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('https://chaomacv.github.io/RAIL-SECURTTY-BENCH/');
      copyState = 'Copied!';
    } catch (_) { copyState = 'Copy unavailable'; }
    renderLabels();
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copyState = 'Copy project URL'; renderLabels(); }, 2500);
  });
})();
