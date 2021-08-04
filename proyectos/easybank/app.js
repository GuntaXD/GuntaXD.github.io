"use strict"

let btn_menu = document.querySelector(".btn__menu");
let nav_mobile = document.querySelector(".nav__links--mobile");
let links = nav_mobile.getElementsByClassName("nav__link");

btn_menu.addEventListener("click",()=>{
    agregarVisible(btn_menu,nav_mobile);
});

for( let i = 0; i < links.length ; i++ ){
    links[i].addEventListener("click",()=>{
        agregarVisible(btn_menu,nav_mobile);
    });
}

function agregarVisible( ...elementos){
    for( let i = 0; i < elementos.length ; i++ ){
        elementos[i].classList.toggle("visible");
    }
}