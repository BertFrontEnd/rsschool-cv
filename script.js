alert('Postpone Cross-Check to a later date, please. Thank you!');

const htmlDocument = document.querySelector('html');
const burgerSwitcher = document.querySelector('.burger__switcher');
const navigationDashboard = document.querySelector('.navigation__menu');
const localLinks = document.querySelectorAll('.navigation__menu a');

burgerSwitcher.addEventListener('click', () => {
  if (burgerSwitcher.checked == true) {
    navigationDashboard.style.left = 0 + 'px';
    htmlDocument.style.overflow = 'hidden';
  } else {
    navigationDashboard.style.left = 100 + '%';
    htmlDocument.style.overflow = 'auto';
  }
});

for (let link of localLinks) {
  link.addEventListener('click', () => {
    burgerSwitcher.checked = false;
    navigationDashboard.style.left = 100 + '%';
    htmlDocument.style.overflow = 'auto';
  });
}
