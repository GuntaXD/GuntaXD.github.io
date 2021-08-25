"use strict";

let btn__menu = document.querySelector(".btn__menu");

btn__menu.addEventListener("click",()=>{
	let spans = document.getElementsByClassName("btn__menu--span");
	let menu_oculto = document.querySelector(".navbar__links");

	for( let i = 0; i < spans.length ; i++ ){

		spans[i].classList.toggle("btn-anim");
	}

	if( !menu_oculto.style.cssText ){
		menu_oculto.style.cssText = "top:0;";
	}else{
		menu_oculto.style.cssText = "";
	}

	let botones = document.getElementsByClassName("navbar__link");

	for( let i = 0; i < botones.length ; i++ ){
		botones[i].addEventListener("click",()=>{

			for( let i = 0; i < spans.length ; i++ ){

				spans[i].classList.remove("btn-anim");

			}

			menu_oculto.style.cssText = "";
		});
	}
});



let padre = document.querySelector(".container__title__see");

let elemento = document.querySelector(".container__see");

let abuelo = document.querySelector(".main__creations");

let header = document.querySelector(".header");

let creationsLinks = document.getElementsByClassName("creation__img");

cambioElemento();

window.addEventListener("resize",cambioElemento);

function cambioElemento(){

	const windowWitdh = window.innerWidth;

	if ( windowWitdh <= 925 ){

		if ( padre.contains( elemento ) ){
			padre.removeChild( elemento );
			abuelo.appendChild(elemento).style.cssText = 
			"margin: 6vh auto 6vh;width: 40%; height: 10vh;font-size: calc( 1em + 2vw);";
			header.style.cssText = 
			"background: url(images/mobile/image-hero.jpg) no-repeat center center; background-size:cover;";

			for( let i = 0; i < creationsLinks.length ;i++ ){

				let src = creationsLinks[i].getAttribute("src");

				src = src.replace("desktop","mobile");

				creationsLinks[i].setAttribute("src", src );
			}
		}

	}else if ( windowWitdh > 925 ){

		if( !padre.contains(elemento) ){

			abuelo.removeChild(elemento);
			padre.appendChild( elemento ).style.cssText = "";
			header.style.cssText = "";

			for( let i = 0; i < creationsLinks.length ;i++ ){

				let src = creationsLinks[i].getAttribute("src");

				src = src.replace("mobile","desktop");

				creationsLinks[i].setAttribute("src", src );
			}
		}
	}
}