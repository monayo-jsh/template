const btnSideBarClose = document.querySelector('.btn-sidebar-close'),
      menuSidebar = document.querySelector('.menu-sidebar');

btnSideBarClose.addEventListener('click', () => {
  menuSidebar.classList.toggle('fold');
});