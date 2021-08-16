"use strict"

let btn_menu = document.querySelector(".btn__menu");
let navbar = document.querySelector(".navbar");

btn_menu.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
});

//funcionalidades carousel

let carousel = document.querySelector(".testimonials__carousel");
let width = carousel.offsetWidth;
let scroll_start = 0;

let btn_right = document.querySelector(".testimonial__btn--right");
let btn_left = document.querySelector(".testimonial__btn--left");

window.addEventListener("resize", ()=>{
    carousel.scrollLeft = 0;
    width = carousel.offsetWidth;
    setTimeout( moverDot , 800 );
});

carousel.addEventListener("touchstart" , ()=>{
    scroll_start = carousel.scrollLeft;
});

carousel.addEventListener("touchend" , ()=>{

    let scroll_end = carousel.scrollLeft;

    if(carousel.scrollLeft % width != 0){
        if ( scroll_start >= scroll_end ){
            carousel.scrollLeft -= carousel.scrollLeft % width;
        }else{
            carousel.scrollLeft += width - (carousel.scrollLeft % width);
        }
    }

    setTimeout( moverDot , 400 );

});

let loco = btn_right.this;

btn_right.addEventListener("click" , ()=>{
    carousel.scrollLeft += width;
});

btn_left.addEventListener("click" , ()=>{
    carousel.scrollLeft -= width;
});

function moverDot(){

    let testimonial_dots = document.querySelector(".testimonial__dots");
    let dot = testimonial_dots.getElementsByClassName("dot");

    let limit = Math.round( carousel.scrollLeft / width );

    let active = testimonial_dots.querySelector(".active");

    active.classList.remove("active");

    dot[ limit ].classList.add("active");

}

//funcionalidades email

let form = document.querySelector('form');

form.addEventListener( 'invalid',function(event){
    event.preventDefault();
},true);

let email = form.querySelector(".email__input");

email.addEventListener("invalid" , ()=>{
    
    if( form.querySelector(".error") ){
        let error = form.querySelector(".error");
        form.removeChild(error);
    }

    let error = document.createElement("div");

    error.textContent = "please insert a valid email";

    error.className = "error";

    let submit = form.querySelector(".email__submit");

    form.insertBefore(error,submit);

    window.setTimeout(function(){

        if( form.querySelector(".error") ){
            let error = form.querySelector(".error");
            form.removeChild(error);
        }
    
    },5000);
});