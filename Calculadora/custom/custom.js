//All ready!. Page &  Cordova loaded.
//Todo listo!. Página & Cordova cargados.
function deviceReady() {
	try {
		//Example when Internet connection is needed but not mandatory
		//Ejemplo de cuando se necesita conexióna a Internet pero no es obligatoria.
		if (!mui.connectionAvailable()){
			if ('plugins' in window && 'toast' in window.plugins)
				mui.toast('We recommend you connect your device to the Internet');
			else
				mui.alert('We recommend you connect your device to the Internet');
		}
		
		//Install events, clicks, resize, online/offline, etc. 
		installEvents();

		//Hide splash.
		//Ocultar el splash.
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		}

	} catch (e) {
		//your decision
		//tu decisión
	}
}

/**
 * Install events, clicks, resize, online/offline, etc., on differents HTML elements.
 * Instala eventos, clicks, resize, online/offline, etc., sobre diferentes elementos HTML.
 */
function installEvents() {
	
	mui.util.installEvents([
		//Mail list click/touch events. See that if the event is not specified, click is assumed.
		{
			id: '.mui-backarrow',	//Important!
			fn: () => {
				mui.history.back();
				return false;
			}
		},
		{
			id: '#delete-me',
			ev: 'click',	//If not, it assumes click
			fn: () => {
				mui.viewport.showPage("template-page", "DEF");
				return false;
			}
		},
		//MobileUI viewport specific event.
		{
			vp: mui.viewport,
			ev: 'swiperight',
			fn: () => {
				if (!mui.viewport.panelIsOpen()) {
					mui.history.back();
				}
			}
		},
		//It's a good idea to consider what happens when the device is switched on and off the internet.
		//Es buena idea considerar que pasa cuando el dispositivo se conecta y desconecta a Internet.
		{
			id: document,
			ev: 'online',
			fn: () => {
				//Do something
			}
		},
		{
			id: document,
			ev: 'offline',
			fn: () => {
				//Do something
			}
		},
		//Typically fired when the device changes orientation.
		//Típicamente disparado cuando el dispositivo cambia de orientación.
		{
			id: window,
			ev: 'resize',
			fn: () => {
				//Do something if you need
			}
		},
	]);
}

var primerNumero = 0;
var segundoNumero = 0;
var estadoSuma = false;
var estadoResta = false;
var estadoMultiplicacion = false;
var estadoDivision = false;
var valor = 0;

function agregarNumero(num) {
    var resultado = document.getElementById('resultado');
    if(resultado.innerHTML != 0){
        resultado.innerHTML += num;
    } else {
        resultado.innerHTML = num;
    }
    var boton = document.getElementById('AC');
    boton.innerHTML = 'C';
}
function borrar(){
    primerNumero = 0;
    segundoNumero = 0;
    valor = 0;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = primerNumero;
    var botonAC = document.getElementById('AC');
    botonAC.innerHTML = 'AC';
  
    if(estadoSuma == true) {
        estadoSuma = false;
        var boton = document.getElementById('+');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    } else if(estadoResta == true) {
        estadoResta = false;
        var boton = document.getElementById('-');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    }else if(estadoMultiplicacion == true) {
        estadoMultiplicacion = false;
        var boton = document.getElementById('x');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    }else if(estadoDivision == true) {
        estadoDivision = false;
        var boton = document.getElementById('÷');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    }
}
function sumar() {
    var resultado = document.getElementById('resultado');
    estadoSuma = true;
    primerNumero = document.getElementById('resultado').innerHTML;
    resultado.innerHTML = 0;
    var boton = document.getElementById('+');
    boton.style.backgroundColor = 'white';
    boton.style.color = 'orange';
}
function restar() {
    var resultado = document.getElementById('resultado');
    estadoResta = true;
    primerNumero = document.getElementById('resultado').innerHTML;
    resultado.innerHTML = 0;
    var boton = document.getElementById('-');
    boton.style.backgroundColor = 'white';
    boton.style.color = 'orange';
}
function multiplicar() {
    var resultado = document.getElementById('resultado');
    estadoMultiplicacion = true;
    primerNumero = document.getElementById('resultado').innerHTML;
    resultado.innerHTML = 0;
    var boton = document.getElementById('x');
    boton.style.backgroundColor = 'white';
    boton.style.color = 'orange';
}
function dividir() {
    var resultado = document.getElementById('resultado');
    estadoDivision = true;
    primerNumero = document.getElementById('resultado').innerHTML;
    resultado.innerHTML = 0;
    var boton = document.getElementById('÷');
    boton.style.backgroundColor = 'white';
    boton.style.color = 'orange';
}
function operacion(){
    var resultado = document.getElementById('resultado');
    segundoNumero = resultado.innerHTML;
    
    if(estadoSuma == true) {
        valor = (+primerNumero) + (+segundoNumero);
        estadoSuma = false;
        var boton = document.getElementById('+');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    } else if(estadoResta == true) {
        valor = (+primerNumero) - (segundoNumero);
        estadoResta = false;
        var boton = document.getElementById('-');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    }else if(estadoMultiplicacion == true) {
        valor = (+primerNumero) * (segundoNumero);
        estadoMultiplicacion = false;
        var boton = document.getElementById('x');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    }else if(estadoDivision == true) {
        valor = (+primerNumero) / (segundoNumero);
        estadoDivision = false;
        var boton = document.getElementById('÷');
        boton.style.backgroundColor = 'orange';
        boton.style.color = 'white';
    }
    resultado.innerHTML = valor;
    
}