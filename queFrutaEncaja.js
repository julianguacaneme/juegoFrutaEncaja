//constructor de la clase fruta
let frutas = [];

class Fruta {
    constructor(nombre, ilustracion) {
        (this.nombre = nombre), (this.ilustracion = ilustracion);
    }
}

let manzana = new Fruta("manzana", "./assets/manzana.jpg");
let uva = new Fruta("uva", "./assets/uva.jpg");
let sandia = new Fruta("sandia", "./assets/sandia.jpg");
let naranja = new Fruta("naranja", "./assets/naranja.jpg");
let banana = new Fruta("banana", "./assets/sbanana.jpg");

frutas.push(manzana, uva, sandia, naranja, banana);
console.log(frutas.length);
console.log(frutas[3]);

//Pintar el arbol en el canvas

var c = document.getElementById("lienzo");
var ctx = c.getContext("2d");
var img = new Image();
img.src = "./assets/arbol.jpg";
img.onload = function() {
    ctx.drawImage(img, 0, 0, 300, 300);
}

//Pintar tarjetas de frutas;


//El pc escoje una fruta
let frutaPc;
let resultado;

//Crear numero aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

resultado = aleatorio(1, 5);
console.log("el numero aleatorio es: " + resultado);

//convertir resultado en fruta

function convertirResultado(resultado) {
    if (resultado === 1) {
        frutaPc = frutas[0].nombre;
    } else if (resultado === 2) {
        frutaPc = frutas[1].nombre;
    } else if (resultado === 3) {
        frutaPc = frutas[2].nombre;
    } else if (resultado === 4) {
        frutaPc = frutas[3].nombre;
    } else if (resultado === 5) {
        frutaPc = frutas[4].nombre;
    }
    return frutaPc;
}

convertirResultado(resultado);
console.log("El PC escogió: " + frutaPc);

//El jugador escoje la fruta que cree que encaja

let frutaJugador


function iniciarJuego() {
    let botonManzana = document.getElementById('botonManzana')
    botonManzana.addEventListener('click',
        escojeManzana)
    let botonNaranja = document.getElementById('botonNaranja')
    botonNaranja.addEventListener('click',
        escojeNaranja)
    let botonUvas = document.getElementById('botonUvas')
    botonUvas.addEventListener('click',
        escojeUvas)
    let botonSandia = document.getElementById('botonSandia')
    botonSandia.addEventListener('click',
        escojeSandia)
    let botonBanana = document.getElementById('botonBanana')
    botonBanana.addEventListener('click',
        escojeBanana)
    verificarJugada(frutaPc, frutaJugador);
}

function escojeManzana() {
    frutaJugador = "Manzana"
    alert(frutaJugador)
}

function escojeNaranja() {
    frutaJugador = "Naranja"
    alert(frutaJugador)
}

function escojeUvas() {
    frutaJugador = "Uvas"
    alert(frutaJugador)
}

function escojeSandia() {
    frutaJugador = "Sandia"
    alert(frutaJugador)
}

function escojeBanana() {
    frutaJugador = "Banana"
    alert(frutaJugador)
}


//Se verifica si la fruta es la correcta
let frutaEncaja = "Escojiste la fruta correcta";
let frutaNoEncaja = "La fruta que escogiste no encaja";
let resultadoJuego;

function verificarJugada(valor1, valor2) {
    if (valor1 === valor2) {
        resultadoJuego = frutaEncaja;
    } else {
        resultadoJuego = frutaNoEncaja;
    }
}



console.log(resultadoJuego);

window.addEventListener('load', iniciarJuego)