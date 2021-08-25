"use strict"

//funcionalidades del loader

let loader = document.querySelector(".loader");

window.addEventListener("load",()=>{
  loader.classList.toggle("desactive");
});


// funcion de las particulas

particlesJS({
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fc6232"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fc6232",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

//   funcionalidades navbar

let navbar = document.querySelector(".navbar");
let btn_menu = navbar.querySelector(".btn__menu");
let links = navbar.getElementsByClassName("navbar__link");

btn_menu.addEventListener("click" , ()=>{

  let top = window.scrollY;
  let active = navbar.querySelector(".active");

  navbar.classList.toggle("active");
  // active.classList.remove("active");
  // links[ Math.floor( top / window.innerHeight )].classList.toggle("active");
  // intento de activar el active en una opcion dependiendo de en que seccio estoy

});

for(let i = 0; i < links.length ; i++ ){

  links[i].addEventListener("click", ()=>{

    let active = navbar.querySelector(".active");
    active.classList.remove("active");
    links[i].classList.toggle("active");
    navbar.classList.toggle("active");
    
  });
  
}

// funcionalidades carrusel o slider

let carousel = document.querySelector(".carousel");
let skills = carousel.getElementsByClassName("skill");
let dots = document.querySelector(".carousel__dots");
let btn_right = document.querySelector(".right");
let btn_left = document.querySelector(".left");

let width = carousel.offsetWidth;
let limite = Math.ceil( carousel.scrollWidth / width );
setDots();

window.addEventListener("resize", ()=>{
  setDots();
});

carousel.addEventListener("scroll" , ()=>{
  let dot = dots.getElementsByClassName("dot");
  
  dots.querySelector(".active").classList.remove("active");
  dot[ Math.ceil( carousel.scrollLeft / width ) ].classList.add("active");

});

btn_right.addEventListener("click" , ()=>{
  carousel.scrollLeft += width;
});

btn_left.addEventListener("click" , ()=>{
  carousel.scrollLeft -= width;
});

function setDots(){

  width = carousel.offsetWidth;
  limite = Math.ceil( carousel.scrollWidth / width );

  while (dots.firstChild) {
    dots.removeChild(dots.firstChild);
  }

  for( let i = 0; i < limite ; i++ ){
  
    let dot = document.createElement("div");
    let className = i == 0 ? "dot active" : "dot";
    dot.classList = className;
    dots.appendChild(dot);
  }
}

//funcionalidades multi-idioma

let data = {
  "english": {
    "links": ["Home" , "About me", "Proyects", "Contact"],
    "header title": "I'm <span class='orange__letters'>Juan Diaz</span>",
    "header paragraph": `A creative <span class="orange__letters">frontend developer</span>
    looking for new challenges`,
    "resume" : "resume",
    "about title": "About me",
    "about me": `I'm <span class="orange__letters">self-taught</span> in constant search to improve my skills. I consider that each challenge is an opportunity to improve. I am a <span class="orange__letters">systems engineering student</span> living in Venezuela. Interested in powerlifting and e-sports.`,
    "technology title": "Technologies",
    "proyects title": "Proyects",
    "footer message": "Thank you for visiting my portfolio, if you have any questions you can contact me through my social networks",
    
  },
  "spanish":{
    "links": ["Inicio" , "Sobre mi" , "Proyectos", "Contacto"],
    "header title": "Soy <span class='orange__letters'>Juan Diaz</span>",
    "header paragraph": `Un <span class="orange__letters">desarrollador frontend</span>
    en busca de nuevos retos`,
    "resume": "curriculum",
    "about title": "Sobre mi",
    "about me": `Soy <span class="orange__letters">autodidacta</span> en constante busqueda de mejorar mis habilidades. Considero que cada reto es una oportunidad para mejorar. Soy estudiante de <span class="orange__letters">ingenieria de sistemas</span> viviendo en Venezuela. Interesado en el powerlifting y los e-sports.`,
    "technology title": "Tecnologias",
    "proyects title": "Proyectos",
    "footer message": "gracias por visitar mi portafolio, ante cualquier duda puedes contactarme mediante mis redes sociales",

  }
}

let btn_traduccion = document.querySelector(".btn__traduccion--img");

btn_traduccion.addEventListener("click", traduccion );

function traduccion( ){
  this.classList.toggle("active");

  let language = this.classList.contains("active") ? "english" : "spanish" ;

    let nav_links = document.querySelectorAll(".navbar__link a");
    let header_title = document.querySelector(".header__title");
    let header_paragraph = document.querySelector(".header__paragraph");
    let header_link = document.querySelector(".header__link");
    let about_title = document.querySelector(".about__title");
    let about_me = document.querySelector(".about__me");
    let tecnology_title = document.querySelector(".about__tecnology--title");
    let proyects_title = document.querySelector(".proyects__title");
    let footer_message = document.querySelector(".footer__message");

    nav_links.forEach( (elem , index)=>{ 
      elem.textContent = data[ language ].links[index];
    });

    console.log(data);

    header_title.innerHTML = data[ language ][ "header title" ];
    header_paragraph.innerHTML = data[ language ][ "header paragraph" ];
    header_link.textContent = data[ language ][ "resume" ];
    about_title.textContent = data[ language ][ "about title" ];
    about_me.innerHTML = data[ language ][ "about me" ];
    tecnology_title.textContent = data[ language ][ "technology title"];
    proyects_title.textContent = data[ language ][ "proyects title" ];
    footer_message.textContent = data[ language ][ "footer message" ];
}