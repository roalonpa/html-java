let resultado = document.querySelector('#resultado');
let bCambiarTema1 = document.querySelector('#cambiarTema1');
let bCambiarTema2 = document.querySelector('#cambiarTema2');
bCambiarTema1.disabled = false;
bCambiarTema2.disabled = true;

function mostrarInstrucciones() {
    alert(`
    INSTRUCTIONS:
    For the operations "+", "-", "x" and "/" enter the first number in the box on the left and the second number in the box on the right, then press the button corresponding to the operation you want to do. To use the "power" button, enter the base number on the left and the exponent on the right, then press the "power" button. For the "Square root" and "Absolute" button use ONLY the right box, otherwise the result will be 0. To use the "Random" button enter the maximum in the left box and the minimum in the right box and it will give you a random number between the maximum and the minimum. If the result of any operation is left with decimals, you can choose to Round it normally with the "Round" button, round it down with the "Floor" button or round it up with the "Ceil" button. If you want to delete the result, press the "Delete" button.
    `)
}

function sumar(a, b) {
    let suma = +a + +b;
    mostrarResultado(suma);
}

function restar(a, b) {
    let resta = +a - +b;
    mostrarResultado(resta);
}

function multiplicar(a, b) {
    let multiplicacion = +a * +b;
    mostrarResultado(multiplicacion);
}

function dividir(a, b) {
    let divicion = +a / +b;
    mostrarResultado(divicion);
}

function potencia(a, b) {
    let potencia = Math.pow(a, b);
    mostrarResultado(potencia);
}

function raiz(n) {
    let raiz = Math.sqrt(n);
    mostrarResultado(raiz);
}

function absoluto(n) {
    let absoluto = Math.abs(n);
    mostrarResultado(absoluto);
}

function random(){
    let min = +document.querySelector('#input1').value;
    let max = +document.querySelector('#input2').value;
    let random = Math.floor(Math.random() * (max - min) + min);
    mostrarResultado(random);
}

function redondear() {
    let n = resultado.textContent;
    let redondear = Math.round(n);
    mostrarResultado(redondear)
}

function redondearAbajo() {
    let n = resultado.textContent;
    let redondear = Math.floor(n);
    mostrarResultado(redondear);
}

function redondearArriba() {
    let n = resultado.textContent;
    let redondear = Math.ceil(n);
    mostrarResultado(redondear);
}

function borrar() {
    resultado.textContent = '-';
}

function mostrarResultado(x) {
    resultado.textContent = x;
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    input1.value = '';
    input2.value = '';
}

function cambiarTema1() {
    let temaActual = '.tema1'
    let tema1 = document.querySelector(temaActual);
    let instruccionesTema1 = document.querySelector('.instruccionesTema1');
    let cortosTema1 = document.querySelectorAll('.cortosTema1');
    let largosTema1 = document.querySelectorAll('.largosTema1');
    let inputTema1 = document.querySelectorAll('.inputTema1');
    let resultadoTema1 = document.querySelectorAll('.resultadoTema1');

        tema1.classList.remove('tema1');
        tema1.classList.add('tema2');

    for (var i = 0; i < cortosTema1.length; i++) {
        cortosTema1[i].classList.remove('cortosTema1');
        cortosTema1[i].classList.add('cortosTema2');
    }

        instruccionesTema1.classList.remove('instruccionesTema1');
        instruccionesTema1.classList.add('instruccionesTema2');

    for (var i = 0; i < largosTema1.length; i++) {
        largosTema1[i].classList.remove('largosTema1');
        largosTema1[i].classList.add('largosTema2');
    }

    for (var i = 0; i < inputTema1.length; i++) {
        inputTema1[i].classList.remove('inputTema1');
        inputTema1[i].classList.add('inputTema2');
    }

    for (var i = 0; i < resultadoTema1.length; i++) {
        resultadoTema1[i].classList.remove('resultadoTema1');
        resultadoTema1[i].classList.add('resultadoTema2');
    }

    let bCambiarTema1 = document.querySelector('#cambiarTema1');
    let bCambiarTema2 = document.querySelector('#cambiarTema2');
    bCambiarTema1.disabled = true;
    bCambiarTema2.disabled = false;
}

function cambiarTema2() {
    let temaActual = '.tema2'
    let tema2 = document.querySelector(temaActual);
    let instruccionesTema2 = document.querySelector('.instruccionesTema2');
    let cortosTema2 = document.querySelectorAll('.cortosTema2');
    let largosTema2 = document.querySelectorAll('.largosTema2');
    let inputTema2 = document.querySelectorAll('.inputTema2');
    let resultadoTema2 = document.querySelectorAll('.resultadoTema2');

        tema2.classList.remove('tema2');
        tema2.classList.add('tema1');

    for (var i = 0; i < cortosTema2.length; i++) {
        cortosTema2[i].classList.remove('cortosTema2');
        cortosTema2[i].classList.add('cortosTema1');
    }

        instruccionesTema2.classList.remove('instruccionesTema2');
        instruccionesTema2.classList.add('instruccionesTema1');

    for (var i = 0; i < largosTema2.length; i++) {
        largosTema2[i].classList.remove('largosTema2');
        largosTema2[i].classList.add('largosTema1');
    }

    for (var i = 0; i < inputTema2.length; i++) {
        inputTema2[i].classList.remove('inputTema2');
        inputTema2[i].classList.add('inputTema1');
    }

    for (var i = 0; i < resultadoTema2.length; i++) {
        resultadoTema2[i].classList.remove('resultadoTema2');
        resultadoTema2[i].classList.add('resultadoTema1');
    }

    let bCambiarTema1 = document.querySelector('#cambiarTema1');
    let bCambiarTema2 = document.querySelector('#cambiarTema2');
    bCambiarTema1.disabled = false;
    bCambiarTema2.disabled = true;
}
