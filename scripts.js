// Botones

const pantalla = document.querySelector('#pantalla');
const botones = document.querySelectorAll('button');

const num1 = document.querySelector('.numero1').value = 1;
const num2 = document.querySelector('.numero2').value = 2;
const num3 = document.querySelector('.numero3').value = 3;
const num4 = document.querySelector('.numero4').value = 4;
const num5 = document.querySelector('.numero5').value = 5;
const num6 = document.querySelector('.numero6').value = 6;
const num7 = document.querySelector('.numero7').value = 7;
const num8 = document.querySelector('.numero8').value = 8;
const num9 = document.querySelector('.numero9').value = 9;
const num0 = document.querySelector('.numero0').value = 0;
const decimal = document.querySelector('.decimal').value = ".";

const botonSuma = document.querySelector('.suma').value = " + ";
const botonResta = document.querySelector('.resta').value = " - ";
const botonMulti = document.querySelector('.multi').value = " * ";
const botonDiv = document.querySelector('.div').value = " / ";
const botonIgual = document.querySelector('.igual').value = " =";
const borrar = document.querySelector('.borrar');
const limpiar = document.querySelector('.limpiar');

// Logica para mostrar en pantalla los valores.

botones.forEach(boton => boton.addEventListener('click', () => {
    pantalla.value += boton.value;
    let pantallaValor = pantalla.value;
    let ultimoValor = pantallaValor.substr(pantallaValor.length -1);
    let resultado = 0;
    let operador;
    let num1 = 0;
    let num2 = 0;

    if (ultimoValor === " ") {
        botones[14].style.display = "inline";
    }

    if (pantalla.value === " =" || pantalla.value === " + " || pantalla.value === " - " || pantalla.value === " * " || pantalla.value === " / " || pantalla.value === ".") {
        pantalla.value = "";
    }
    // Logica que calcula lo que esta en la pantalla.

    if (pantallaValor.indexOf(' =') > -1) {
        let operadorStr = pantallaValor.split(" ");

        while (operadorStr.length != 2) {
            num1 = parseFloat(operadorStr[0]);
            num2 = parseFloat(operadorStr[2]);
            operador = operadorStr[1];
            resultado = operar(num1, num2, operador);
            operadorStr.splice(0, 3)
            operadorStr.unshift(resultado)
            if (operadorStr.length == 2 && operadorStr[0] != Infinity) {
                pantalla.value = operadorStr[0];
                botones[14].style.display = "inline";
            } else if (operadorStr[0] == Infinity) {
                pantalla.value = "No puedes dividir por 0";
                botones[14].style.display = "inline";
            }
        }
        
        if (operadorStr[1] == '=') {
            pantalla.value = operadorStr[0];
        }
    }
}))

// Evento para desaparecer el boton decimal.

botones[14].addEventListener('click', () => {
    botones[14].style.display = "none";
})

// for (let i = 11; i <= 16; i++) {
//     botones[i].addEventListener('click', () => {
//         botones[10].style.display = "inline";
//     }) 
// }

// Evento para borrar numeros.

borrar.addEventListener('click', () => {
    let valor = borrarLetra(pantalla.value);
    pantalla.value = valor;
})

// Evento para limpiar pantalla.

limpiar.addEventListener('click', () => {
    pantalla.value = "";
})

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function operar(num1, num2, operador) {
    if (operador == "+") {
        return suma(num1, num2);
    } else if (operador == "-") {
        return resta(num1, num2);
    } else if (operador == "*") {
        return multi(num1, num2);
    } else if (operador == "/") {
        return div(num1, num2);
    }
}

function borrarLetra(pantallaValor) {
    console.log(pantallaValor)
    let valorBorrado = pantallaValor.slice(0, -1);
    return valorBorrado;
}