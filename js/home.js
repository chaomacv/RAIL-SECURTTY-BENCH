(() => {
  'use strict';
  const { t } = window.RAILMIND_I18N;
  const slides = [
    ['Steel Bridge', 'Steel Bridge.png'], ['Catenary Pole', 'Catenary Pole.png'],
    ['Noise Barrier', 'Noise Barrier.png'], ['Environment', 'Environment.png'],
    ['Power Tower', 'Power Tower.png'], ['Rail Track', 'Rail Track.png']
  ];
  let active = 0, copyState = 'Copy project URL', copyTimer;
  const image = document.getElementById('hero-image');
  const title = document.getElementById('hero-title');
  const switchers = document.getElementById('image-switchers');
  const menu = document.getElementById('menu-toggle');
  const links = document.getElementById('links');
  const copyButton = document.getElementById('copy-link');
  slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.addEventListener('click', () => show(index));
    switchers.appendChild(button);
  });
  function renderLabels() {
    title.textContent = t(slides[active][0]);
    image.alt = `${t(slides[active][0])} ${t('railway inspection scene')}`;
    [...switchers.children].forEach((button, index) => {
      button.classList.toggle('active', index === active);
      button.setAttribute('aria-label', `${t('View')} ${t(slides[index][0])}`);
      button.setAttribute('aria-pressed', String(index === active));
    });
    copyButton.textContent = t(copyState);
  }
  function show(index) {
    active = index;
    const path = 'assets/images/' + slides[index][1];
    if (image.getAttribute('src') !== path) image.src = path;
    renderLabels();
  }
  show(0);
  setInterval(() => {
    if (!document.hidden) show((active + 1) % slides.length);
  }, 6500);
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
