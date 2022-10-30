pantalla = document.querySelector('#pantalla');
botones = document.querySelectorAll('button');
num1 = document.querySelector('.numero1').value = 1;
num2 = document.querySelector('.numero2').value = 2;
num3 = document.querySelector('.numero3').value = 3;
num4 = document.querySelector('.numero4').value = 4;
num5 = document.querySelector('.numero5').value = 5;
num6 = document.querySelector('.numero6').value = 6;
num7 = document.querySelector('.numero7').value = 7;
num8 = document.querySelector('.numero8').value = 8;
num9 = document.querySelector('.numero9').value = 9;
num0 = document.querySelector('.numero0').value = 0;
// pantalla.value = num1;

botones.addEventListener('click', () => {
    if (botones.class == "numero1") {
        console.log('hola')
    }
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

console.log(operar(5, 1, "/"))