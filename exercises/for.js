// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
// bucle for de JavaScript para mostrar una alerta utilizando cada una de las
// palabras.
var words = ['hello','this','is','an','array']
for (let index = 0; index < words.length; index++) {
    alert(words[index])
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y
// mostrar una alerta por cada palabra modificada.
for (let index = 0; index < words.length; index++) {
    alert(words[index].charAt(0).toUpperCase() + words[index].substring(1,words[index].length))
}


// Crear una variable llamada “sentence” que tenga un string vacío, luego al array
// del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
// la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = ''
for (let index = 0; index < words.length; index++) {
    sentence+=words[index]
}
alert(sentence)

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
// el número de la repetición, es decir que al final de la ejecución del bucle for
// debería haber 10 elementos dentro del array, desde el número 0 hasta al número
// 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var newArray = []

for (let index = 0; index < 10; index++) {
    newArray[index] = index    
}
console.log(newArray)