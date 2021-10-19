let body = document.getElementsByTagName('body');
let headerBurger = document.getElementsByClassName('header__burger');
const headerNav = document.getElementsByClassName('header__nav');

headerBurger[0].addEventListener('click', function () {
  headerBurger[0].classList.toggle('header__active');
  headerNav[0].classList.toggle('header__active');
  body[0].classList.toggle('header__lock');
});

(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
      if (window.pageYOffset > 50) {
          header.classList.add('top__header');
      } else { 
          header.classList.remove('top__header');
      }
  };
}()); 
