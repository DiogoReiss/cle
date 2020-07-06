const menu = document.querySelector('#servicesLayout');
const menuBackground = document.querySelector('#servicesMenu');
const menuBackgroundDetail = document.querySelector('#menuDetail');
const orderMenu = document.querySelector('#orderMenu');
const rentalMenu = document.querySelector('#rentalMenu');
const transferMenu = document.querySelector('#transferMenu');
var click = 0;

menu.addEventListener('click', () => {
  console.log('Anyone clicked!');
  menuBackground.classList.add('activated')
  click += 1;
  if (click === 2) {
    menuBackground.classList.remove('activated')
    click = 0
  }
})