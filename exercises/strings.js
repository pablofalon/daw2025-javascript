// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
var string = 'universidad abierta latinoamericana'
var toUpperCase = string.toUpperCase()

console.log(toUpperCase)

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).
var fullString = 'Desarrollo Web'
var shortString = fullString.substring(0,5)
console.log(shortString)


// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
var fullName = 'Pablo Falon'
var length = fullName.length
var lastThreeCharacters = fullName.substring(length-3)

console.log(lastThreeCharacters)


// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).
var firstString = 'dESArroLlo wEb'
var upperCharacter = firstString.substring(0,1).toUpperCase()
var restOfString = firstString.substring(1,firstString.length).toLowerCase()
var convertedString = upperCharacter + restOfString
console.log(convertedString)



// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).
var stringWithWhiteSpace = 'Esto es un string con espacios'
var indexValue = stringWithWhiteSpace.indexOf(' ')
console.log(indexValue)


// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).
var fullStringValue = 'uniVeRsiDaD lAtiNoameRicana'

var firstWord = fullStringValue.substring(0,fullStringValue.indexOf(' '))
var firstCapitalLetter = firstWord.substring(0,1).toUpperCase()
var restFirstWord = firstWord.substring(1,firstWord.length).toLowerCase()

var secondWord = fullStringValue.substring(fullStringValue.indexOf(' ')+1,fullStringValue.length)
var secondCapitalLetter = secondWord.substring(0,1).toUpperCase()
var restSecondWord = secondWord.substring(1,fullStringValue.length).toLowerCase()

var resultString = firstCapitalLetter + restFirstWord + ' ' + secondCapitalLetter + restSecondWord
console.log(resultString)
