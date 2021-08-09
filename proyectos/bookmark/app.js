let navbar = document.querySelector(".navbar");
let btn_menu = document.querySelector(".btn__menu");
let navbar_link = navbar.getElementsByClassName("navbar__link");
let navbar_link_login = navbar.querySelector(".navbar__link--login");
let social_links = navbar.getElementsByClassName("social__link");

btn_menu.addEventListener("click" , ()=>{
    navbar.classList.toggle("visible");
});

for( let i = 0 ; i < navbar_link.length ; i++ ){

    navbar_link[i].addEventListener("click" , ()=>{
        navbar.classList.toggle("visible");
    });

}

navbar_link_login.addEventListener("click", ()=>{
    navbar.classList.toggle("visible");
});

for( let i = 0 ; i < social_links.length ; i++ ){

    social_links[i].addEventListener("click" , ()=>{
        navbar.classList.toggle("visible");
    });

}

// funcionalidad de features

let features = document.querySelector(".features");
let options = features.getElementsByClassName("option");
let article = features.getElementsByClassName("article");

for( let i = 0; i < options.length ; i++ ){

    options[i].addEventListener("click" , ()=>{

        for( let i = 0; i < options.length ; i++ ){

            if( options[i].classList.contains("active") ){
                options[i].classList.toggle("active");
                article[i].classList.toggle("active");
            }

        }

        options[i].classList.toggle("active");
        article[i].classList.toggle("active");

    });
}


// funcionalidades de FAQ agregar colapso en los demas links

let faqs = document.querySelector(".faqs");
let ask_container = faqs.getElementsByClassName("ask__container");

let arrow = faqs.getElementsByClassName("ask__arrow");

for( let i = 0; i < ask_container.length ; i++ ){

    ask_container[i].addEventListener("click" , ()=>{
        
        for( let j = 0; j < ask_container.length; j++ ){

            if( ask_container[j].classList.contains("active") && j != i ){
                ask_container[j].classList.toggle("active");
            }
        }

        ask_container[i].classList.toggle("active");
        
        if ( !ask_container[i].classList.contains("active") ){
            arrow[i].style.cssText = "animation: rotacionInv .5s;";
        }

    });
}

//funcionalidades del input email

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

    error.textContent = "Whoops, make sure it's an email";

    error.className = "error";

    let submit = form.querySelector(".email__submit");

    form.insertBefore(error,submit);

    email.style.cssText = "border: 2px solid var(--soft-red);";

    window.setTimeout(function(){

        if( form.querySelector(".error") ){
            let error = form.querySelector(".error");
            form.removeChild(error);
        }

        email.style.cssText = "";
    
    },5000);
});



