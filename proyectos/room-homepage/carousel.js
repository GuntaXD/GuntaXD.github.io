"use strict";

let carousel_article = document.querySelector(".carousel__article");
let carousel_img = document.querySelector(".carousel__img");

inicioCarrusel();
chargeImage();

function inicioCarrusel(){
	let ancho_contenedor = carousel_article.offsetWidth;

	let elementos = carousel_article.getElementsByClassName('carousel__items');

	for( let i = 0; i < elementos.length ; i++ ){

		elementos[i].style.cssText = `left:${ancho_contenedor * i}px`;

	}

	ancho_contenedor = carousel_img.offsetHeight;

	elementos = carousel_img.getElementsByClassName('carousel__items');

	for( let i = 0; i < elementos.length ; i++ ){

		elementos[i].style.cssText = `top:${ancho_contenedor * i}px`;

	}
}

let btn_right = document.querySelector(".btn__right");
let btn_left = document.querySelector(".btn__left");
let btn_menu = document.querySelector(".navbar__btn--mobile");

window.addEventListener("resize",inicioCarrusel);

window.addEventListener("resize",chargeImage);

function chargeImage(){
	let width = window.innerWidth;
	let carousel_img = document.querySelector(".carousel__img");
	let carousel_items = carousel_img.getElementsByClassName("carousel__items");

	if( width < 800 && carousel_items[0].getAttribute("src").includes("desktop")){

		for( let i = 0; i < carousel_items.length; i++ ){

			let str = carousel_items[i].getAttribute("src");
			carousel_items[i].setAttribute("src", str.replace("desktop","mobile"));
		}

	}else if( width >= 800 && carousel_items[0].getAttribute("src").includes("mobile")){

		for( let i = 0; i < carousel_items.length; i++ ){

			let str = carousel_items[i].getAttribute("src");
			carousel_items[i].setAttribute("src", str.replace("mobile","desktop"));
		}
	}
}

btn_right.addEventListener("click",()=>{

	let ancho_contenedor = carousel_img.offsetHeight;

	let elementosImg = carousel_img.getElementsByClassName('carousel__items');

	if ( parseInt(elementosImg[ elementosImg.length-1].style.top) > 0 ){
		for (var i = 0; i < elementosImg.length; i++) {
			elementosImg[i].style.top = parseInt(elementosImg[i].style.top) - ancho_contenedor;
			elementosImg[i].style.cssText += "transition: 1s;";
		}
	}
	
	ancho_contenedor = carousel_article.offsetWidth;

	elementosImg = carousel_article.getElementsByClassName('carousel__items');

	if ( parseInt(elementosImg[ elementosImg.length-1].style.left) > 0 ){
		for (var i = 0; i < elementosImg.length; i++) {
			elementosImg[i].style.left = parseInt(elementosImg[i].style.left) - ancho_contenedor;
			elementosImg[i].style.cssText += "transition: 1s;";
		}
	}
});

btn_left.addEventListener("click",()=>{

	let ancho_contenedor = carousel_img.offsetHeight;

	let elementosImg = carousel_img.getElementsByClassName('carousel__items');

	if ( parseInt(elementosImg[0].style.top) < 0 ){
		for (var i = 0; i < elementosImg.length; i++) {
			elementosImg[i].style.top = parseInt(elementosImg[i].style.top) + ancho_contenedor;
			elementosImg[i].style.cssText += "transition: 1s;";
		}
	}
	
	ancho_contenedor = carousel_article.offsetWidth;

	elementosImg = carousel_article.getElementsByClassName('carousel__items');

	if ( parseInt(elementosImg[0].style.left) < 0 ){
		for (var i = 0; i < elementosImg.length; i++) {
			elementosImg[i].style.left = parseInt(elementosImg[i].style.left) + ancho_contenedor;
			elementosImg[i].style.cssText += "transition: 1s;";
		}
	}
});

btn_menu.addEventListener("click",()=>{

	let spans = document.getElementsByClassName("btn__menu--span");
	let navbar_links = document.querySelector(".navbar__links");
	let span_ind = document.getElementsByClassName("btn__menu--span");

	for( let i = 0; i < spans.length ; i++ ){

		spans[i].classList.toggle("btn-anim");

	}

	if( navbar_links.style.cssText == "transition: all 1s ease 0s;" || 
		navbar_links.style.cssText == ""){
		navbar_links.style.cssText = "top:0px;transition:1s;";
	}else{
		navbar_links.style.cssText = "transition:1s";
	}

	if( span_ind[0].style.cssText == ""){
		
		for( let i = 0; i < span_ind.length ; i++ ){

			span_ind[i].style.cssText = "background: #000;";

		}

	}else{

		for( let i = 0; i < span_ind.length ; i++ ){

			span_ind[i].style.cssText = "";

		}

	}

	let canvas = document.querySelector(".canvas");

	if ( !canvas.classList.contains("visible") ){

		canvas.classList.toggle("visible");

	}else{

		canvas.classList.toggle("visible");

	}


	
});