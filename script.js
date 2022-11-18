/* eslint-disable no-unused-vars */
const projectsList = [
  {
    mdltitle: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'img/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    mdltitle: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'img/Snapshoot Portfolio2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    mdltitle: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: 'img/Snapshoot Portfolio3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    mdltitle: 'Uber Navigation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    imageLink: 'img/Snapshoot Portfolio4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: 'https://prantalks.com',
    demoLink: '#',
  },

];

const ProjectCards = document.querySelector('#portfolio-section');
const ModalTitle = document.querySelector('.modaltitle');
const ModalDescription = document.querySelector('.modaldesc');
const ModalPhoto = document.querySelector('.modalphoto');
const ModalSeeSource = document.querySelector('.sourcelink');
const ModalSeeLive = document.querySelector('.livelink');
const ModalTech2 = document.querySelector('.modaltech2');
const ModalBack = document.querySelector('.modal-back')
const ModalCompany = document.querySelector('#company')
const ModalRole = document.querySelector('#role')
const ModalYear = document.querySelector('#year')


ProjectCards.innerHTML = '';

for (let i = 0; i < projectsList.length; i++) {

  let tech_lang = '';
  projectsList[i].technologies.forEach((projTech) => {
    tech_lang += `<li class="lang">${projTech}</li>`;
  });

  ProjectCards.innerHTML += `
  <div class="project-cards">
  <img class="img"
  src="${projectsList[i].imageLink}"
  alt="Project Featured Image">

<div class="project-description">
  <h1 class="project-title">${projectsList[i].mdltitle}</h1>
  <ul class="project-name">
  <li>${projectsList[i].company}</li>
  <li class="bullet">&#x2022;</li>
  <li>${projectsList[i].role}</li>
  <li class="bullet">&#x2022;</li>
  <li>${projectsList[i].year}</li>
</ul>
<p class="description">${projectsList[i].description}
</p>

<ul class="worktech technologies">
  ${tech_lang}
</ul>
<div>
  <button class="button default_button" id="seeproject-${i}"
      type="button"
      >See Project</button>
</div>
</div>
</div>
`

}


for (let i = 0; projectsList.length; i++) {
  document.querySelector(`#seeproject-${i}`).addEventListener('click', () => {
    let modaltechnology = ''
    projectsList[i].technologies.forEach((language) => {
      modaltechnology += `
        <li class="lang">${language}</li>
      `
    })

    ModalTitle.innerHTML = projectsList[i].mdltitle
    ModalPhoto.src = projectsList[i].imageLink
    ModalDescription.innerHTML = projectsList[i].description

  ModalCompany.innerHTML = projectsList[i].company
  ModalYear.innerHTML = projectsList[i].year
  ModalRole.innerHTML = projectsList[i].role
ModalTech2.innerHTML = modaltechnology
ModalSeeSource.setAttribute('href', `${projectsList[i].sourceLink}`)
ModalSeeLive.setAttribute('href', `${projectsList[i].demoLink}`)
    ModalBack.style.display = 'block'
  document.querySelector('main').style.filter = ' blur(5px)';
  document.querySelector('header').style.filter = ' blur(5px)';


  })
}

//Close Modal
function CloseModal() {
  ModalBack.style.display = 'none'
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('header').style.filter = ' blur(0)';
  } 

//Contact form Validation

const contactForm = document.querySelector('form');
const EmailValue = document.getElementById('email');
const NameValue = document.getElementById('name');
const MessageValue = document.getElementById('message');

contactForm.addEventListener("input", () => {
  const formData = {
    name: NameValue.value,
    email: EmailValue.value,
    message: MessageValue.value,
  };
  localStorage.setItem('userData', JSON.stringify(formData));
});

const GetDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
NameValue.value = GetDataFromLocalStorage.name;
EmailValue.value = GetDataFromLocalStorage.email;
MessageValue.value = GetDataFromLocalStorage.message;

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

function validate() {

  var txt = document.getElementById("email").value;
  var regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (e) {
    if (regx.test(txt)) {
      document.getElementById("msg1").innerHTML = "Valid";
      document.getElementById("msg1").style.visibility = "visible";
      document.getElementById("msg1").style.color = "white";
      document.getElementById("msg1").style.background = "green";
    }
    else {
      document.getElementById("msg1").innerHTML = "Invalid !!! please enter the email in lower case";
      document.getElementById("msg1").style.visibility = "visible";
      document.getElementById("msg1").style.color = "white";
      document.getElementById("msg1").style.background = "red";
      e.preventDefault();
    }
  }
}


