"use strict"

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
  active.classList.remove("active");
  links[ Math.floor( top / window.innerHeight )].classList.toggle("active");

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