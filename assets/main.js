(() => {
  // Mobile menu
  const menu = document.querySelector('.menu');
  const nav = document.getElementById('nav');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav?.addEventListener('click', e => {
    if (e.target.closest('a')) { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  });

  // Before / after sliders
  document.querySelectorAll('.ba').forEach(ba => {
    const range = ba.querySelector('.ba__range');
    const set = () => ba.style.setProperty('--pos', range.value + '%');
    range.addEventListener('input', set);
    set();
  });

  // Review carousel
  const reviews = [...document.querySelectorAll('.review')];
  const dots = document.querySelector('.dots');
  let i = 0, timer;
  reviews.forEach((r, n) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Review ${n + 1}`);
    b.addEventListener('click', () => { go(n); restart(); });
    dots.appendChild(b);
  });
  const go = n => {
    i = (n + reviews.length) % reviews.length;
    reviews.forEach((r, k) => r.classList.toggle('is-active', k === i));
    [...dots.children].forEach((d, k) => d.setAttribute('aria-selected', String(k === i)));
  };
  const restart = () => {
    clearInterval(timer);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(i + 1), 7000);
  };
  document.querySelectorAll('.carousel__nav .round').forEach(b =>
    b.addEventListener('click', () => { go(i + Number(b.dataset.dir)); restart(); }));
  go(0); restart();

  // Consultation form (front-end validation; wire `action` to the real endpoint)
  const form = document.querySelector('.form');
  const msg = form?.querySelector('.form__msg');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(el => {
      const bad = !el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value));
      el.closest('.field').classList.toggle('is-invalid', bad);
      if (bad && ok) { el.focus(); ok = false; }
    });
    msg.className = 'form__msg ' + (ok ? 'is-ok' : 'is-err');
    msg.textContent = ok
      ? 'Thank you! Your request has been received — a sink expert will call you shortly.'
      : 'Please fill in the highlighted fields.';
    if (ok) form.reset();
  });

  // Scroll reveal
  const targets = document.querySelectorAll('.sec-head, .ba, .step, .split__media, .benefits li, .accordion details, .video, .form');
  targets.forEach(t => t.classList.add('reveal'));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  targets.forEach(t => io.observe(t));
})();
