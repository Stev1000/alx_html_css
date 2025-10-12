// Vanilla, accessible hamburger menu (≤480px)
(function () {
  const nav = document.querySelector('.nav');
  const btn = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');

  if (!nav || !btn || !menu) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    // Prevent page scroll when menu is open (mobile)
    document.documentElement.style.overflow = open ? 'hidden' : '';
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      const firstLink = menu.querySelector('a');
      firstLink && firstLink.focus();
    }
  }

  function toggle() { setOpen(!nav.classList.contains('is-open')); }

  btn.addEventListener('click', toggle);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // Close on outside click (only when open)
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('is-open')) return;
    if (!nav.contains(e.target)) setOpen(false);
  });

  // Close when a link is selected
  menu.addEventListener('click', (e) => {
    const t = e.target;
    if (t.tagName === 'A') setOpen(false);
  });

  // Defensive: close on resize above 480px
  const mq = window.matchMedia('(min-width: 481px)');
  mq.addEventListener('change', () => setOpen(false));
})();
