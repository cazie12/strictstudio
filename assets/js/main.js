(() => {
  const body = document.body;
  const page = body.dataset.page;
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        'aria-hidden': 'true'
      }
    });
  }

  document.querySelectorAll(`[data-nav="${page}"]`).forEach((link) => {
    link.setAttribute('aria-current', 'page');
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      menu.classList.toggle('is-open', !isOpen);
      menu.setAttribute('aria-hidden', String(isOpen));
      body.classList.toggle('menu-open', !isOpen);
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        menu.classList.remove('is-open');
        menu.setAttribute('aria-hidden', 'true');
        body.classList.remove('menu-open');
      });
    });
  }

})();
