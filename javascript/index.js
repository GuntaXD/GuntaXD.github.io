window.addEventListener('load',function(){

	let width = window.innerWidth;
	if( width > 800 ){

	window.sr = ScrollReveal();
	
	sr.reveal('.i-am__name',{
		duration: 3000,
		origin: 'bottom',
		distance: '-100%',
		reset: true
	});

	sr.reveal('.i-am__profesion',{
		duration: 3000,
		origin: 'right',
		distance: '-200%',
		reset: true
	});

	sr.reveal('#luna',{
		duration: 3400,
		reset: true
	});

	sr.reveal('.uno',{
		duration: 4200,
		origin: 'top',
		distance: '-200%',
		reset: true
	});

	sr.reveal('.dos',{
		duration: 3800,
		origin: 'top',
		distance: '-200%',
		reset: true
	});

	sr.reveal('.tres',{
		duration: 3400,
		origin: 'top',
		distance: '-200%',
		reset: true
	});

	sr.reveal('.cuatro',{
		duration: 3000,
		origin: 'top',
		distance: '-200%',
		reset: true
	});

	}
});


function showmenu() {
  let elemento = document.querySelector(".nav__hidden");
  elemento.classList.toggle("show");

  let span1 = document.querySelector(".span1");
  span1.classList.toggle("btn-anim");
  let span2 = document.querySelector(".span2");
  span2.classList.toggle("btn-anim");
  let span3 = document.querySelector(".span3");
  span3.classList.toggle("btn-anim");
}

window.addEventListener('load',function(){
	new Glider(document.querySelector('.carousel__lista'),{
		slidesToShow: 1,
		slidesToScroll: 1,
		itemWidth: 200,
		itemHeight: 200,
  		draggable: true,
  		dots: '.carousel__indicadores',
  		arrows: {
	    prev: '.carousel__anterior',
	    next: '.carousel__siguiente'
	  },
	  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 400,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow:2,
        slidesToScroll: 2,
        
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
	});
});