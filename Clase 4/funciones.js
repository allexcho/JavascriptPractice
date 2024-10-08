/* 
Functions: Propiedades basicas
-Definiciones -Ventajas -Declaracion

-Parametros-

-Scope- --> Destingir variables GLOBALES y LOCALES

-Funciones anonimas evolucionados a las flechas
*/

/* Funciones simples: */

// function saludo () {
//     console.log("Hola soy una funcion simple")
// }

/* Luego hay que declararlo, llamarlo: */

// saludo()

// function solicitarNombre() {
//     let name = prompt("Ingresa tu nombre:")
//     console.log(`El nombre ingresado es ${name}`)
// }

// solicitarNombre()

/* 
Con parametros: Lo que hacen es tomar uno o mas valores, que seran ejecutados en sus operaciones, (Los parametros son y no dejan de ser variables(var/let)).

function conParametros(parametro1,parametro2) {
    console.log(`Llamando a mis parametros ${parametro1}, ${parametro2}`)
}

*/

/* Ejemplo */

// let resultado = 0; // Es una variable GLOBAL

// Function que sume dos numeros

// function suma(x, y) {
//     resultado = x + y
// }

// function mostrar(mensaje) {
//     console.log(mensaje)
// }

// Llamamos primero a sumar y despues a mostrar:

// suma(42351, 2345)
// mostrar(`La suma es de: ${resultado}`)

/* Function para calcular el total de horas trabajadas en la semana */

// function horasTotales(horasDiaras) {
//     let totalHoras = 0;

//     // For Loop para que recorra el array de horas diarias

//     for(let i = 0; i < horasDiaras.length; i++) {
//         totalHoras += horasDiaras[i]
//     }
//     return totalHoras
// }

/* Ejemplo de uso */

// const horaSemanales = [9, 9, 9, 9, 9, 6];   // Horas trabajos diarios
// console.log(`El total de horas laburadas en la semana es de: ${horasTotales(horaSemanales)}`);

/* 
Functions anonimas y functions flechas:
Anonimas: Las funciones anónimas en JavaScript son aquellas que no han sido declaradas con un nombre.
Flecha: Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
*/

// const suma = function (a, b) {
//     return a + b
// }

// const resta = function (a, b) {
//     return a - b
// }

// console.log(suma(452234, 1223542))
// console.log(resta(42363456345, 42235345112))

/* Function anonima para verificar si el numero es positivo */

// let positivo = function (numeroPositivo) {
//     return numeroPositivo > 0
// }
// console.log(positivo(-5));  // False

/* Function Flecha */

// const suma = (a, b) => {return a + b}
// console.log(suma(234,123));

/* Function en una sola linea de codigo */

// const resta = (a, b) => a - b
// console.log(resta(100, 50));

/* Comparar numeros */

// const menor = (a, b = 67) => a < b
// console.log(menor(50))

/* Calcular el cuadrado de un numero */

// const cuadrado = (n) => n * n
// console.log(cuadrado(10));

/* Concatenar Strings */

// const string = (string1, string2) => `${string1} ${string2}`
// console.log(string("Hola,", "Alex"));

/* Ejercicios con functions! */

// Ejercicio 1:

// Ejercicio 2:

// Ejercicio 3:

// Ejercicio 4
