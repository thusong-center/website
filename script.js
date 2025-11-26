const qs  = (s, r=document) => r.querySelector(s);
const qsa = (s, r=document) => Array.from(r.querySelectorAll(s));

// Dropdown menus
qsa('.menu').forEach(menu => {
  const btn = qs('.menu__button', menu);
  const panel = qs('.menu__panel', menu);
  function open() { menu.setAttribute('aria-expanded', 'true'); btn.setAttribute('aria-expanded', 'true'); }
  function close(){ menu.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-expanded', 'false'); }
  function toggle(){ (menu.getAttribute('aria-expanded') === 'true') ? close() : open(); }
  btn.addEventListener('click', toggle);
  document.addEventListener('click', (e) => { if (!menu.contains(e.target)) close(); });
});

// Mobile drawer
const toggle = qs('.nav__toggle');
const drawer = qs('#mobile-drawer');
toggle?.addEventListener('click', () => {
  const open = drawer.classList.toggle('drawer--open');
  toggle.setAttribute('aria-expanded', String(open));
  drawer.setAttribute('aria-hidden', String(!open));
});

// Hero carousel (only on Home)
const slides = qs('#hero-slides');
if (slides) {
  const dots = qsa('.dot');
  let idx = 0, timer;
  function go(i) { idx = i; slides.style.transform = `translateX(-${i * 100}%)`; dots.forEach((d, n) => d.classList.toggle('dot--active', n === i)); }
  function next() { go((idx + 1) % dots.length); }
  function play() { timer = setInterval(next, 5000); }
  function pause() { clearInterval(timer); }
  dots.forEach((dot, i) => dot.addEventListener('click', () => { pause(); go(i); play(); }));
  qs('.hero__wrap').addEventListener('mouseenter', pause);
  qs('.hero__wrap').addEventListener('mouseleave', play);
  play();
}

// Particles init — add your tsParticles config here
// tsParticles.load("tsparticles", { /* config */ });
