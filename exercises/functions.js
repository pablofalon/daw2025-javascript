// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.
function sum(a, b) {
    return a + b
}

var res = sum(1, 2)
console.log('Resultado suma' + res)


// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.
function sumV2(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('One of the parameters is not a number')
        return NaN
    }
    else {
        return a + b
    }
}

console.log('Resultado sumV2 con error: ' + sumV2('a',5))
console.log('Resultado sumV2: '+sumV2(5,6))

// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.
function validateInteger(a) {
    return Number.isInteger(a)
}

console.log('Resultado validacion de un entero: '+validateInteger(5))


// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).
function sumaV3(a, b) {
    var numberOne = a
    var numberTwo = b

    if (isNaN(a) || isNaN(b)) {
        alert('One of the parameters is not a number')
        return NaN
    }

    if (!Number.isInteger(numberOne)) {
        alert(`The parameter ${numberOne} is not an integer`)
        numberOne = Math.round(numberOne)
    }

    if (!Number.isInteger(numberTwo)) {
        alert(`The parameter ${numberTwo} is not an integer`)
        numberTwo = Math.round(numberTwo)
    }

    return numberOne + numberTwo
}



console.log('Resultado de sumaV3: ' + sumaV3(2, 4.9))


// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.

function sumaV4(a, b) {
    var numberOne = a
    var numberTwo = b

    if (isNaN(a) || isNaN(b)) {
        alert('One of the parameters is not a number')
        return NaN
    }

    var numberOne = validateNumberValue(numberOne)
    var numberTwo = validateNumberValue(numberTwo)

    return numberOne + numberTwo
}

function validateNumberValue(number) {
    if (!Number.isInteger(number)) {
        alert(`The parameter ${number} is not an integer`)
        number = Math.round(number)
    }
    return number
}

console.log('Resultado de sumaV4: ' + sumaV4(2, 4.9))