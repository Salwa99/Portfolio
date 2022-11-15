function OpenMenu(){
    document.querySelector('.menuformobile').style.display = "flex"
    document.querySelector('.closeicon').style.display = "block"
    document.querySelector('.openicon').style.display = "none"
    document.querySelector('.myLogo').style.display = "none"
    document.querySelector('.info').style.display = "none"

}
function CloseMenu(){
    document.querySelector('.menuformobile').style.display = "none"
    document.querySelector('.closeicon').style.display = "none"
    document.querySelector('.openicon').style.display = "block"
    document.querySelector('.myLogo').style.display = "flex"
    document.querySelector('.info').style.display = "flex"
}
