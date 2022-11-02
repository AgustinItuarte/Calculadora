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

const botonSuma = document.querySelector('.suma').value = " + ";
const botonResta = document.querySelector('.resta').value = " - ";
const botonMulti = document.querySelector('.multi').value = " * ";
const botonDiv = document.querySelector('.div').value = " / ";
const botonIgual = document.querySelector('.igual').value = " =";

// pantalla.value = num1;

// botones.addEventListener('click', () => {
//     if (botones.class == "numero1") {
//         console.log('hola')
//     }
// })
botones.forEach(boton => boton.addEventListener('click', () => {
    pantalla.value += boton.value;
    let pantallaValor = pantalla.value;
    let resultado = 0;
    let operador;
    let num1 = 0;
    let num2 = 0;
    if (pantallaValor.indexOf(' =') > -1) {
        let operadorStr = pantallaValor.split(" ");
        for (let i = 0; i < operadorStr.length; i++) {
            if (operadorStr[i] == "+" || operadorStr[i] == "-" || operadorStr[i] == "*" || operadorStr[i] == "/") {

                operador = operadorStr[i];
                num1 = Math.floor(operadorStr[i - 1]);
                num2 = Math.floor(operadorStr[i + 1]);
                resultado = operar(num1, num2, operador);
                num1 = 0;
                num2 = 0;
                console.log(resultado);
                continue
                

            } 
            if (i == 3) {
                // console.log(resultado);
                operador = operadorStr[i];
                num2 = Math.floor(operadorStr[i + 1]);
                resultado = operar(resultado, num2, operador);

                operador = "";
                num2 = 0;
            }
            // else if (i > 2 && ( operadorStr[i] == "+" || operadorStr[i] == "-" || operadorStr[i] == "*" || operadorStr[i] == "/")) {
            //     operador = operadorStr[i];
            //     console.log(operador);
            // }

        }
        // let operadorStr = pantallaValor.split(" ");
        // let num1 = Math.floor(operadorStr[0]);
        // let num2 = Math.floor(operadorStr[2]);
        // let operador = operadorStr[1];
        // pantalla.value = operar(num1, num2, operador);
        // console.log(operadorStr);
     }
}))

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

// console.log(operar(5, 1, "/"))00