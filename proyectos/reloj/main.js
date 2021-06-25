class reloj{
	constructor(horas,minutos,segundos){
		this.horas = horas;
		this.minutos = minutos;
		this.segundos = segundos;
		this.alarmaHoras;
		this.alarmaMinutos;
	}
	actualizar(){
		let today = new Date();
		this.horas = today.getHours() < 10 ? ("0" + today.getHours()) : (today.getHours());
		this.minutos = today.getMinutes() < 10 ? ("0" + today.getMinutes()) : (today.getMinutes());
		this.segundos = today.getSeconds() < 10 ? ("0" + today.getSeconds()) : (today.getSeconds());
		this.mostrar();
	}
	mostrar(){
		document.querySelector(".reloj__pantalla").textContent = this.horas+":"+this.minutos+":"+this.segundos;
	}
	alarma(horas,minutos){
		this.alarmaHoras = horas;
		this.alarmaMinutos = minutos;
	}
}

class cronometro{
	constructor(){
		this.horas = "0" + 0;
		this.minutos = "0" + 0;
		this.segundos = "0" + 0;
		this.microSegundos = "0" + 0;
		this.vuelta = 0;
	}
	actualizar(){
		this.microSegundos++;
		if( this.microSegundos < 10 ){
			this.microSegundos = "0" + this.microSegundos;	
		}
		if ( this.microSegundos ==99){
			this.microSegundos ="0" + 0;
			this.segundos++;
			if( this.segundos < 10 ){
				this.segundos = "0" + this.segundos;
			}
			if ( this.segundos === 60 ){
				this.segundos = "0" + 0;
				this.minutos++;
				if (this.minutos < 10 ){
					this.minutos = "0" + this.minutos;
				}
				if( minutos === 60){
					this.horas++;
					this.minutos = "0" + 0;
					if (this.horas < 10 ){
						this.horas = "0" + this.horas;
					}
				}
			}
		}
		
		this.mostrar();
	}
	mostrar(){
		document.querySelector(".cronometro__pantalla").textContent = this.horas+":"+this.minutos+":"+this.segundos+":"+this.microSegundos;
	}
}

class temporizador{
	constructor( horas , minutos , segundos ){
		this.horas = horas;
		this.minutos = minutos;
		this.segundos = segundos;
		this.tiempo;
	}
	actualizar(){
		
			if( this.segundos > 0 || this.minutos >0 || this.horas > 0){
				
				if ( this.segundos == 0 ){
					
					if ( this.minutos > 0 ){
						this.minutos--;
						this.segundos = 60;
					}else{
						
						if( this.horas > 0 ){
							this.horas--;
							this.minutos = 59;
							this.segundos = 59;
						}
					}
				}
				this.segundos--;
			}else if ( this.segundos == 0 ){
				stop();
				console.log("alarma");
				document.querySelector('.sonido_alarma').play();
			}
			this.mostrar();
		}
	mostrar(){
		document.querySelector(".temporizador__display").textContent = (this.horas < 10 ) ? ("0" + this.horas + ":"): ( this.horas + ": ");
		document.querySelector(".temporizador__display").textContent += (this.minutos < 10)? ("0" + this.minutos +":"):( this.minutos + ":");
		document.querySelector(".temporizador__display").textContent += (this.segundos < 10 ) ? ("0" + this.segundos):( this.segundos);
	}
}

//_________________________EVENTOS MENU_____________________________________

let btn_reloj = document.querySelector('.btn__reloj');
let btn_cronometro = document.querySelector('.btn__cronometro');
let btn_temporizador = document.querySelector('.btn__temporizador');

btn_cronometro.addEventListener("click",()=>{
	// let visible = document.querySelector(".visible");
	// visible.classList.toggle("visible");
	// visible = document.querySelector(".cronometro");
	// visible.classList.toggle("visible");
	document.querySelector(".active").classList.toggle("active");
	btn_cronometro.classList.toggle("active");

	if (document.querySelector(".reloj").classList.contains("visible")){
		document.querySelector(".reloj").classList.toggle("visible");
	}else if(document.querySelector(".temporizador").classList.contains("visible")){
		document.querySelector(".temporizador").classList.toggle("visible");
	}

	document.querySelector(".cronometro").classList.toggle("visible");

});

btn_reloj.addEventListener("click",()=>{
	// let visible = document.querySelector(".visible");
	// visible.classList.toggle("visible");
	// visible = document.querySelector(".reloj");
	// visible.classList.toggle("visible");
	document.querySelector(".active").classList.toggle("active");
	btn_reloj.classList.toggle("active");

	if (document.querySelector(".cronometro").classList.contains("visible")){
		document.querySelector(".cronometro").classList.toggle("visible");
	}else if(document.querySelector(".temporizador").classList.toggle("visible")){
		document.querySelector(".temporizador").classList.toggle("visible");
	}

	document.querySelector(".reloj").classList.toggle("visible");
});

btn_temporizador.addEventListener("click",()=>{
	// let visible = document.querySelector(".visible");
	// visible.classList.toggle("visible");
	// visible = document.querySelector(".temporizador");
	// visible.classList.toggle("visible");
	document.querySelector(".active").classList.toggle("active");
	btn_temporizador.classList.toggle("active");

		btn_reloj.classList.toggle("visible");
	if (document.querySelector(".reloj").classList.contains("visible")){
		document.querySelector(".reloj").classList.toggle("visible");
	}else if(document.querySelector(".cronometro").classList.contains("visible")){
		document.querySelector(".cronometro").classList.toggle("visible");
	}

	document.querySelector(".temporizador").classList.toggle("visible");
});

//_______________________EVENTOS CRONOMETRO________________________________

let cronometro_btn_play = document.querySelector(".cronometro__btn-play");
let cronometro_btn_reiniciar = document.querySelector(".cronometro__btn-reiniciar");
let cronometro_btn_vuelta = document.querySelector(".cronometro__btn-vuelta");
let tiempo ;
cronometro_btn_play.addEventListener("click",()=>{

	if ( cronometro_btn_play.classList.contains("iniciar")){
		tiempo = setInterval( ()=>{miCronometro.actualizar()}, 10);
		cronometro_btn_play.classList.toggle("iniciar");
		if(!(cronometro_btn_reiniciar.classList.contains("visible") && cronometro_btn_vuelta.classList.contains("visible"))){
			cronometro_btn_reiniciar.classList.toggle("visible");
			cronometro_btn_vuelta.classList.toggle("visible");
		}
	}else{
		clearInterval(tiempo);
		cronometro_btn_play.classList.toggle("iniciar");
	}

});

cronometro_btn_reiniciar.addEventListener("click",()=>{
	let cronometro_lista = document.querySelector(".cronometro__lista");
	clearInterval(tiempo);
	miCronometro = new cronometro();
	miCronometro.mostrar();
	cronometro_btn_reiniciar.classList.toggle("visible");
	cronometro_btn_vuelta.classList.toggle("visible");
	cronometro_lista.innerHTML = "";
	if ( !cronometro_btn_play.classList.contains("iniciar")){
		cronometro_btn_play.classList.toggle("iniciar");
	}
	if (cronometro_lista.classList.contains("visible")){
		cronometro_lista.classList.toggle("visible");
	}
});

cronometro_btn_vuelta.addEventListener("click", ()=>{
	let cronometro_lista = document.querySelector(".cronometro__lista");
	if (!cronometro_lista.classList.contains("visible")){
		cronometro_lista.classList.toggle("visible");
	}
	miCronometro.vuelta++;
	console.log(cronometro_lista);
	cronometro_lista.innerHTML += `<p>#${miCronometro.vuelta}:    ${miCronometro.horas}:${miCronometro.minutos}:${miCronometro.segundos}:${miCronometro.microSegundos}</p>`;
	console.log(miCronometro.vuelta);


});

//_______________________________EVENTOS TEMPORIZADOR__________________________

let tiempoIngresado = "000000";

function transformarCadena(cadena){
	newCadena = "";
	for( let i = 0; i < cadena.length ; i++){
		newCadena += cadena[i];
		if( i == 1 || i == 3 ){
			newCadena += ":";
		}
	}
	return newCadena;
}

function temporizador_input(cadena){
	let display = document.querySelector('.temporizador__input');
	display.innerHTML = cadena;
}

function agregar_numero(cadena,num,funcion){
	if ( cadena[0] == 0 ){
		cadena = cadena.slice(1);
		cadena += num;
		funcion( transformarCadena(cadena) );
	}
	return cadena;
}

function borrar_numero( cadena , funcion){
	cadena = cadena.substring(0,cadena.length-1);
	cadena = "0" + cadena;
	funcion( transformarCadena(cadena) );
	return cadena;
}

let agregar_btn_uno = document.querySelector('.uno');
let agregar_btn_dos = document.querySelector('.dos');
let agregar_btn_tres = document.querySelector('.tres');
let agregar_btn_cuatro = document.querySelector('.cuatro');
let agregar_btn_cinco = document.querySelector('.cinco');
let agregar_btn_seis = document.querySelector('.seis');
let agregar_btn_siete = document.querySelector('.siete');
let agregar_btn_ocho = document.querySelector('.ocho');
let agregar_btn_nueve = document.querySelector('.nueve');
let agregar_btn_cero = document.querySelector('.cero');
let agregar_btn_borrar = document.querySelector('.borrar');
let agregar_btn_play = document.querySelector('.temporizador__agregar-btn.play');

let temporizador_reiniciar = document.querySelector('.temporizador__botonera-reiniciar');
let temporizador_play = document.querySelector('.temporizador__botonera-play');
let temporizador_borrar = document.querySelector('.temporizador__botonera-borrar');
let tiempoTemporizador;

agregar_btn_uno.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"1",temporizador_input);
});

agregar_btn_dos.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"2",temporizador_input);
});

agregar_btn_tres.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"3",temporizador_input);
});

agregar_btn_cuatro.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"4",temporizador_input);
});

agregar_btn_cinco.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"5",temporizador_input);
});

agregar_btn_seis.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"6",temporizador_input);
});
agregar_btn_siete.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"7",temporizador_input);
});
agregar_btn_ocho.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"8",temporizador_input);
});
agregar_btn_nueve.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"9",temporizador_input);
});
agregar_btn_cero.addEventListener("click", ()=>{
	tiempoIngresado=agregar_numero(tiempoIngresado,"0",temporizador_input);
});

agregar_btn_borrar.addEventListener("click", ()=>{
	tiempoIngresado = borrar_numero(tiempoIngresado,temporizador_input);
});

agregar_btn_play.addEventListener("click",()=>{
	let arreglo = transformarCadena(tiempoIngresado).split(":") , horas , minutos , segundos ;
	segundos = parseInt(arreglo[2]) ;
	minutos = (parseInt(arreglo[1]) + parseInt( parseInt(arreglo[2]) / 60 )) ;
	horas = ( parseInt(arreglo[0]) + parseInt( parseInt(minutos) / 60 ) );
	minutos %= 60;
	segundos %= 60;
	console.log(horas + " " + minutos+ " " + segundos);
	miTemporizador = new temporizador(horas,minutos,segundos);
	if( miTemporizador.horas != 0 || miTemporizador.minutos != 0 || miTemporizador.segundos != 0 ){
		tiempoTemporizador = setInterval(()=>{
			miTemporizador.actualizar();
		},1000);
		document.querySelector(".temporizador__agregar").classList.toggle("display");
		document.querySelector(".temporizador__pantalla").classList.toggle("display");
	}
});

temporizador_reiniciar.addEventListener("click",()=>{
	stop();
	reiniciar();
	document.querySelector(".sonido_alarma").pause();
});

temporizador_play.addEventListener("click",()=>{
	if ( temporizador_play.classList.contains("play") ){
		tiempoTemporizador = setInterval(()=>{
			miTemporizador.actualizar();
		},1000);
		temporizador_play.classList.toggle("play");
	}else{
		stop();
		temporizador_play.classList.toggle("play");
	}
	document.querySelector(".sonido_alarma").pause();

	if ( miTemporizador.horas == 0 && miTemporizador.minutos == 0 && miTemporizador.segundos == 0){
		reiniciar();
	}

});

temporizador_borrar.addEventListener("click",()=>{
	stop();
	miTemporizador = new temporizador(0,0,0);
	if( temporizador_play.classList.contains("play") ){
		temporizador_play.classList.toggle("play");
	}
	tiempoIngresado = "000000";
	document.querySelector(".temporizador__agregar").classList.toggle("display");
	document.querySelector(".temporizador__pantalla").classList.toggle("display");
	document.querySelector(".temporizador__input").textContent ="00:00:00";
	document.querySelector(".temporizador__display").textContent ="00:00:00";
	document.querySelector(".sonido_alarma").pause();
});

function stop(){
	clearInterval(tiempoTemporizador);
}

function reiniciar(){
	let arreglo = transformarCadena(tiempoIngresado).split(":") , horas , minutos , segundos ;
	segundos = parseInt(arreglo[2]) ;
	minutos = (parseInt(arreglo[1]) + parseInt( parseInt(arreglo[2]) / 60 )) ;
	horas = ( parseInt(arreglo[0]) + parseInt( parseInt(minutos) / 60 ) );
	minutos %= 60;
	segundos %= 60;
	miTemporizador = new temporizador(horas,minutos,segundos);
	miTemporizador.mostrar();

	if( !temporizador_play.classList.contains("play") ){
		temporizador_play.classList.toggle("play");
	}
}

//______________________________INSTANCIAS____________________________________

let miReloj = new reloj(0,0,0);

setInterval( ()=>{miReloj.actualizar()},1000 );

let miCronometro = new cronometro();
miCronometro.mostrar();

let miTemporizador;