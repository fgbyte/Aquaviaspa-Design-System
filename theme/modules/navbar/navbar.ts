//navbar & menu lateral
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('#navbar') as HTMLElement;
  if (!navbar) return;

  const banner = document.querySelector('#hero') as HTMLElement;
  const navLinks = navbar.querySelectorAll('.link');
  const navLogo = navbar.querySelector('#navlogo') as HTMLImageElement;
  const firstMenuBurger = navbar.querySelector('#menu-burger') as HTMLImageElement;
  const menuBurger = navbar.querySelectorAll('#menu-burger')
  const menuSpas = navbar.querySelector('#spas') as HTMLImageElement;
  const menuSwimspas = navbar.querySelector('#swimspas') as HTMLImageElement;
  const menuPrestaciones = navbar.querySelector('#prestaciones') as HTMLImageElement;
  const closeMenu = navbar.querySelectorAll('.close-menu');
  const previousMenu = navbar.querySelectorAll('.previous-menu');
  const mainMenu = document.querySelector('.main-menu') as HTMLElement;
  const spasMenu = document.querySelector('.spas-menu') as HTMLElement;
  const swimspasMenu = document.querySelector('.swimspas-menu') as HTMLElement;
  const prestacionesMenu = document.querySelector('.prestaciones-menu') as HTMLElement;
  const menuBackdrop = document.querySelector('.menuBackdrop') as HTMLElement;

  if (!banner || !navLinks || !navLogo || !firstMenuBurger || !menuBurger || !menuSpas || !menuSwimspas || !menuPrestaciones || !closeMenu || !previousMenu || !mainMenu || !spasMenu || !swimspasMenu || !prestacionesMenu || !menuBackdrop) return;

  menuBurger.forEach((element) => {
    element.addEventListener('click', function () {
      mainMenu.classList.add('active');
      menuBackdrop.classList.add('isOpenBackdrop')
    });
  })
  menuSpas.addEventListener('click', function () {
    spasMenu.classList.add('active');
    menuBackdrop.classList.add('isOpenBackdrop')
    mainMenu.classList.remove('active');
  });
  menuSwimspas.addEventListener('click', function () {
    swimspasMenu.classList.add('active');
    menuBackdrop.classList.add('isOpenBackdrop')
    mainMenu.classList.remove('active');
  });
  menuPrestaciones.addEventListener('click', function () {
    prestacionesMenu.classList.add('active');
    menuBackdrop.classList.add('isOpenBackdrop')
    mainMenu.classList.remove('active');
  });
  closeMenu.forEach((elemet) => {
    elemet.addEventListener('click', function () {
      mainMenu.classList.remove('active');
      menuBackdrop.classList.remove('isOpenBackdrop')
      spasMenu.classList.remove('active');
      swimspasMenu.classList.remove('active');
      prestacionesMenu.classList.remove('active');
    });
  })
  previousMenu.forEach((elemet) => {
    elemet.addEventListener('click', function () {
      mainMenu.classList.add('active');
      spasMenu.classList.remove('active');
      swimspasMenu.classList.remove('active');
      prestacionesMenu.classList.remove('active');
    });
  })

  menuBackdrop.addEventListener('click', function () {
    mainMenu.classList.remove('active');
    spasMenu.classList.remove('active');
    swimspasMenu.classList.remove('active');
    prestacionesMenu.classList.remove('active');
    menuBackdrop.classList.remove('isOpenBackdrop')
  });

  

  window.addEventListener('scroll', function () {
    if (window.scrollY > calculateBannerHeight()) {
      navbar.classList.add('white-mode');
      navLinks.forEach((link) => {
        link.classList.remove('link--white');
      });
      navLogo.src = '/dist/assets/icons/logofooter.svg';
      firstMenuBurger.src = '/dist/assets/icons/menu-closed-black.svg';
    } else {
      navbar.classList.remove('white-mode');
      navLinks.forEach((link) => {
        link.classList.add('link--white');
      });
      navLogo.src = '/dist/assets/icons/logo-navbar.svg';
      firstMenuBurger.src = '/dist/assets/icons/menu-closed-whait.svg';
    }
  });
  function calculateBannerHeight() {
    const bannerHeight = banner.offsetHeight;
    return bannerHeight;
  }
});
