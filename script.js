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

/* pop-up window*/
document.getElementById('see-project').addEventListener('click',
    function(){
        document.querySelector('.bg-model').style.display = 'flex';
}
);

document.querySelector('.closeicon1').addEventListener('click',
    function(){
        document.querySelector('.bg-model').style.display = 'none';
}
);

// validation function

function validate() {

    var txt = document.getElementById("email").value;
    var regx =  /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    document.forms[0].onsubmit = function(e) {
        if(regx.test(txt)) {
            document.getElementById("msg1").innerHTML = "Valid";
            document.getElementById("msg1").style.visibility = "visible";
            document.getElementById("msg1").style.color = "green";
        }
        else{ 
            document.getElementById("msg1").innerHTML = "Invalid !!! please enter the email in lower case";
            document.getElementById("msg1").style.visibility = "visible";
            document.getElementById("msg1").style.color = "red";
            e.preventDefault();
        }
    }
}