export function headerScroll() {
  const toggleScrollClass = function () {
    const nav = document.querySelectorAll('.header')[0];
    window.pageYOffset > 0
      ? nav.classList.add('header_scroll')
      : nav.classList.remove('header_scroll');
  };
  window.addEventListener('scroll', function () {
    toggleScrollClass();
  });
  toggleScrollClass();
}
