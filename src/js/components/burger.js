export function burger() {
  const burgerActive = document.querySelector('.burger')
  const menuList = document.querySelector('.menu__list')

  burgerActive.addEventListener('click', () => {
    burgerActive.classList.toggle('burger_active')
  });

  burgerActive.addEventListener('click', () => {
    menuList.classList.toggle('menu__list_active')
  })

  const menuLinkActive = document.querySelectorAll('.menu__link')

  menuLinkActive.forEach(link => {
    link.addEventListener('click', () => {
      burgerActive.classList.toggle('burger_active')
      menuList.classList.toggle('menu__list_active')
      bodyHidden.classList.toggle('body_hidden')
    })
  })

  const bodyHidden = document.body;

  burgerActive.addEventListener('click', () => {
    bodyHidden.classList.toggle('body_hidden')
  });
}