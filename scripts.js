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

// Soporte de teclado.

document.addEventListener('keypress', function(evento){
    var tecladoValor = evento.keyCode;
    console.log(tecladoValor);
    if(tecladoValor == 43) {
        pantalla.value += " + ";
    }else if(tecladoValor == 45) {
        pantalla.value += " - ";
    }else if(tecladoValor == 42) {
        pantalla.value += " * ";
    }else if(tecladoValor == 47) {
        pantalla.value += " / ";
    }else if(tecladoValor == 48) {
        pantalla.value += 0;
    }else if(tecladoValor == 49) {
        pantalla.value += 1;
    }else if(tecladoValor == 50) {
        pantalla.value += 2;
    }else if(tecladoValor == 51) {
        pantalla.value += 3;
    }else if(tecladoValor == 52) {
        pantalla.value += 4;
    }else if(tecladoValor == 53) {
        pantalla.value += 5;
    }else if(tecladoValor == 54) {
        pantalla.value += 6;
    }else if(tecladoValor == 55) {
        pantalla.value += 7;
    }else if(tecladoValor == 56) {
        pantalla.value += 8;
    }else if(tecladoValor == 57) {
        pantalla.value += 9;
    }
});

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