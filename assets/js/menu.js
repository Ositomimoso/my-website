document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#hamburger-menu');
  const navMenu = document.querySelector('#nav-menu-mobile');
  const itemsMenu = document.querySelectorAll('#item-menu');

  menu.addEventListener('click', () => {
    navMenu.classList.toggle('left-0');

    if (itemsMenu.length > 0) {
      itemsMenu.forEach((item) => {
        item.addEventListener('click', () => {
          navMenu.classList.remove('left-0');
        });
      });
    }
  });
});
