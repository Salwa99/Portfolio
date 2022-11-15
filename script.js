const linkPortfolio = document.querySelector('#portfolio-link')
const linkAbout = document.querySelector('#about-link')
const linkContact = document.querySelector('#contact-link')
/* eslint-disable no-unused-vars */
function OpenMenu(){
    document.querySelector('.menuformobile').style.display = "flex"
    document.querySelector('.closeicon').style.display = "block"
    document.querySelector('.openicon').style.display = "none"
    document.querySelector('.myLogo').style.display = "none"
    document.querySelector('.info').style.filter = " blur(2px)"
    document.querySelector('body').style.backgroundColor = "rgba(96, 112, 255, 1)"


}
function CloseMenu(){
    document.querySelector('.menuformobile').style.display = "none"
    document.querySelector('.closeicon').style.display = "none"
    document.querySelector('.openicon').style.display = "block"
    document.querySelector('.myLogo').style.display = "flex"
    document.querySelector('.info').style.filter = " blur(0)"
    document.querySelector('body').style.backgroundColor = "transparent"

}
linkPortfolio.addEventListener('click', () => {
    document.querySelector('.menuformobile').style.display = "none"
    document.querySelector('.closeicon').style.display = "none"
    document.querySelector('.openicon').style.display = "block"
    document.querySelector('.myLogo').style.display = "flex"
    document.querySelector('.info').style.filter = " blur(0)"
    document.querySelector('body').style.backgroundColor = "transparent"
})
linkAbout.addEventListener('click', () => {
    document.querySelector('.menuformobile').style.display = "none"
    document.querySelector('.closeicon').style.display = "none"
    document.querySelector('.openicon').style.display = "block"
    document.querySelector('.myLogo').style.display = "flex"
    document.querySelector('.info').style.filter = " blur(0)"
    document.querySelector('body').style.backgroundColor = "transparent"
})
linkContact.addEventListener('click', () => {
    document.querySelector('.menuformobile').style.display = "none"
    document.querySelector('.closeicon').style.display = "none"
    document.querySelector('.openicon').style.display = "block"
    document.querySelector('.myLogo').style.display = "flex"
    document.querySelector('.info').style.filter = " blur(0)"
    document.querySelector('body').style.backgroundColor = "transparent"
})