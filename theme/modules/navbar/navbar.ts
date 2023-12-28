document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('#navbar') as HTMLElement;
  const banner = document.querySelector('#hero') as HTMLElement;
  const navLinks = navbar.querySelectorAll('.link');
  const navLogo = navbar.querySelector('#navlogo') as HTMLImageElement;
  
  const bannerHeight = banner.offsetHeight;

  console.log(navLogo);
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > bannerHeight) {
      navbar.classList.add('white-mode');
      navLinks.forEach((link) => {
        link.classList.remove('link--white');
      });
      navLogo.src = '/dist/assets/icons/logofooter.svg';
    } else {
      navbar.classList.remove('white-mode');
      navLinks.forEach((link) => {
        link.classList.add('link--white');
      });
      navLogo.src = '/dist/assets/icons/logo-navbar.svg';
    }
  });
});