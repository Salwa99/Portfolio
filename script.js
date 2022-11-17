const linkPortfolio = document.querySelector('#portfolio-link');
const linkAbout = document.querySelector('#about-link');
const linkContact = document.querySelector('#contact-link');
/* eslint-disable no-unused-vars */
function OpenMenu() {
  document.querySelector('.menuformobile').style.display = 'flex';
  document.querySelector('.closeicon').style.display = 'block';
  document.querySelector('main').style.filter = ' blur(2px)';
  document.querySelector('header').style.filter = ' blur(2px)';
}
function CloseMenu() {
  document.querySelector('.menuformobile').style.display = 'none';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('header').style.filter = ' blur(0)';
}

linkPortfolio.addEventListener('click', () => {
  document.querySelector('.menuformobile').style.display = 'none';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('header').style.filter = ' blur(0)';
});
linkAbout.addEventListener('click', () => {
  document.querySelector('.menuformobile').style.display = 'none';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('header').style.filter = ' blur(0)';
});
linkContact.addEventListener('click', () => {
  document.querySelector('.menuformobile').style.display = 'none';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('header').style.filter = ' blur(0)';
});

// validation function
