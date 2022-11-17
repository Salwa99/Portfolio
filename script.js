const contactForm = document.querySelector('form');
const EmailValue = document.getElementById('email');
const NameValue = document.getElementById('name');
const MessageValue = document.getElementById('message');

contactForm.addEventListener("input", ()=>{
const formData = {
name: NameValue.value,
email: EmailValue.value,
message: MessageValue.value,
};
localStorage.setItem('userData', JSON.stringify(formData));
});


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

// Local storage

  //  const input1 = documet.getElementById('name');
  //  input1.addEventListener("keyup", storage);
  //  function storage() {

  //    localStorage.setItem('value1', input1.value);
  //   console.log(localStorage.getItem("value1"))
  //  }


// Local storage

  //  const input1 = documet.getElementById('name');
  //  input1.addEventListener("keyup", storage)
  //  function storage() 
  //    localStorage.setItem('value1', input1.value);
  //    console.log(localStorage.getItem("value1"))
  //  }


// validation function

function validate() {

  var txt = document.getElementById("email").value;
  var regx =  /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function(e) {
      if(regx.test(txt)) {
          document.getElementById("msg1").innerHTML = "Valid";
          document.getElementById("msg1").style.visibility = "visible";
          document.getElementById("msg1").style.color = "white";
          document.getElementById("msg1").style.background = "green";
      }
      else{ 
          document.getElementById("msg1").innerHTML = "Invalid !!! please enter the email in lower case";
          document.getElementById("msg1").style.visibility = "visible";
          document.getElementById("msg1").style.color = "white";
          document.getElementById("msg1").style.background = "red";
          e.preventDefault();
      }
  }
}


 