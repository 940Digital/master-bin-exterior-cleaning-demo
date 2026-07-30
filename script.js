(function () {
  var header = document.getElementById('siteHeader');
  var railItems = document.querySelectorAll('.checklist-rail__item');
  var sections = Array.from(railItems).map(function (item) {
    return document.getElementById(item.getAttribute('data-section'));
  });

  function onScroll() {
    if (header) header.classList.toggle('solid', window.scrollY > 40);
    var mid = window.scrollY + window.innerHeight / 2;
    sections.forEach(function (sec, i) {
      if (!sec) return;
      var done = sec.offsetTop < mid;
      railItems[i].classList.toggle('done', done);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
    });
  }
  if (navClose && mobileNav) {
    navClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded', 'false');
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'This is a preview site — the form isn\'t wired up yet.';
    });
  }
})();
