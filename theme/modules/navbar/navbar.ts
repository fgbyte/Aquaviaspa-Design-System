
//navbar & menu lateral
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('#navbar') as HTMLElement;
  const body = document.body;
  if (!navbar) return;

  const banner = document.querySelector('#hero') as HTMLElement;
  const navLinks = navbar.querySelectorAll('.link');
  const navLogo = navbar.querySelector('#navlogo') as HTMLImageElement;
  const firstMenuBurger = navbar.querySelector('.menu-burger') as HTMLImageElement;
  const menuBurger = navbar.querySelectorAll('.menu-burger')
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
  const accordionMenu = navbar?.querySelectorAll('.accordion-menu');
  const showContentMenu = navbar?.querySelectorAll('.show-content-menu');
  const accordionImg = navbar?.querySelectorAll('.accordion-img');


  if (!banner || !navLinks || !navLogo || !firstMenuBurger || !menuBurger || !menuSpas || !menuSwimspas || !menuPrestaciones || !closeMenu || !previousMenu || !mainMenu || !spasMenu || !swimspasMenu || !prestacionesMenu || !menuBackdrop) return;

  menuBurger.forEach((element) => {
    element.addEventListener('click', function () {
      mainMenu.classList.add('active-menu');
      menuBackdrop.classList.add('isOpenBackdrop')
    });
  })
  menuSpas.addEventListener('click', function () {
    spasMenu.classList.add('active-menu');
    menuBackdrop.classList.add('isOpenBackdrop')
    mainMenu.classList.remove('active-menu');
  });
  menuSwimspas.addEventListener('click', function () {
    swimspasMenu.classList.add('active-menu');
    menuBackdrop.classList.add('isOpenBackdrop')
    mainMenu.classList.remove('active-menu');
  });
  menuPrestaciones.addEventListener('click', function () {
    prestacionesMenu.classList.add('active-menu');
    menuBackdrop.classList.add('isOpenBackdrop')
    mainMenu.classList.remove('active-menu');
  });
  closeMenu.forEach((elemet) => {
    elemet.addEventListener('click', function () {
      mainMenu.classList.remove('active-menu');
      menuBackdrop.classList.remove('isOpenBackdrop');
      spasMenu.classList.remove('active-menu');
      swimspasMenu.classList.remove('active-menu');
      prestacionesMenu.classList.remove('active-menu');
      showContentMenu.forEach((content) => content.classList.remove('active-acorddion'));
      accordionImg.forEach((img) => img.classList.remove('rotate-90'));
    });
  })
  previousMenu.forEach((elemet) => {
    elemet.addEventListener('click', function () {
      mainMenu.classList.add('active-menu');
      spasMenu.classList.remove('active-menu');
      swimspasMenu.classList.remove('active-menu');
      prestacionesMenu.classList.remove('active-menu');
      showContentMenu.forEach((content) => content.classList.remove('active-acorddion'));
      accordionImg.forEach((img) => img.classList.remove('rotate-90'));
    });
  })

  menuBackdrop.addEventListener('click', function () {
    mainMenu.classList.remove('active-menu');
    spasMenu.classList.remove('active-menu');
    swimspasMenu.classList.remove('active-menu');
    prestacionesMenu.classList.remove('active-menu');
    menuBackdrop.classList.remove('isOpenBackdrop');
    showContentMenu.forEach((content) => content.classList.remove('active-acorddion'));
    accordionImg.forEach((img) => img.classList.remove('rotate-90'));
  });

  accordionMenu.forEach((element, idx) => {
    element.addEventListener('click', () => {
      if (showContentMenu[idx].classList.contains('active-acorddion')) {
        showContentMenu[idx].classList.remove('active-acorddion');
        accordionImg[idx].classList.remove('rotate-90');
      } else {
        showContentMenu.forEach((el, index) => {
          if (index !== idx) {
            el.classList.remove('active-acorddion');
            accordionImg[index].classList.remove('rotate-90');
          }
        });
        showContentMenu[idx].classList.add('active-acorddion');
        accordionImg[idx].classList.add('rotate-90');
      }
    });
  })


  if (body.classList.contains("posts-page")) {
    navbar.classList.add('white-mode');
    navLinks.forEach((link) => {
      link.classList.remove('link--white');
    });
    navLogo.style.filter = 'invert(100%)';
    firstMenuBurger.style.filter = 'invert(100%)';
  } else {
    navbar.classList.remove('white-mode');
    navLinks.forEach((link) => {
      link.classList.add('link--white');
    });
    navLogo.style.filter = 'invert(0)';
    firstMenuBurger.style.filter = 'invert(0)';
  }


  window.addEventListener('scroll', function () {


    if (window.scrollY > calculateBannerHeight() || body.classList.contains("posts-page")) {
      navbar.classList.add('white-mode');
      navLinks.forEach((link) => {
        link.classList.remove('link--white');
      });
      navLogo.style.filter = 'invert(100%)';
      firstMenuBurger.style.filter = 'invert(100%)';
    } else {
      navbar.classList.remove('white-mode');
      navLinks.forEach((link) => {
        link.classList.add('link--white');
      });
      navLogo.style.filter = 'invert(0)';
      firstMenuBurger.style.filter = 'invert(0)';
    }
  });
  function calculateBannerHeight() {
    const bannerHeight = banner.offsetHeight;
    const navbarHeight = navbar.offsetHeight;
    return bannerHeight - navbarHeight;
  }
});
