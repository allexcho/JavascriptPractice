/*
Control de flujos y ciclos

Condicionales: Estructura if --> if..else --> if..else if

and(&&) or(||) not(!)

Si <condicion> entonces <operacion>
*/

// if (true) {
//     console.log("Vamos a ver este mensaje")
// }

// const num = 56;

// if (num == 56) {
//     console.log("Vas a ver este mensaje")
// }


// if..else

// const string = "red"

// if (string == "red") {
//     console.log("Se cumple");
// }else{
//     console.log("No se cumple la condicion");
// }

// const user = prompt("Ingresa tu nombre")

// if (user == "") {
//     console.log("No ingresaste un dato de dato string");
// }else{
//     console.log(`Hola, como estas ${user}`);
    
// }

// let price = 50

// if (price < 50) {
//     console.log("El precio de menor a $50");   
// }else if (price > 120) {
//     console.log("No se cumple la condicion");
// }else{
//     console.log("sdfsadfadsfg");
    
// }

// let number = 90;
// let esMayor = (number > 5);

// if (esMayor) {
//     console.log("La condicion se cumple");   
// }else{
//     console.log("El valor no se cumple");
// }


// let nombre = prompt("Ingresa tu nombre"); //Input
// let lastName = prompt("Ingresa tu apellido");   //Input

// if ((nombre != "") && (lastName != "")) {
//     console.log(`Nombre: ${nombre} \nApellido: ${lastName}` );
// }else{
//     console.error("Ingrese porfavor su nombre y apellido!");
// }

// let entrada = prompt("Ingresa tu nombre");

// if ((entrada == "ALEX") || (entrada == "alex")) {
//     console.log("El nombre ingresado es Alex");
// }else{
//     console.log("El nombre ingresado no es alex");
// };

// let edad = 18

// if (edad >= 18) {
//     console.log("Sos apto para entrar");
// }else{
//     console.log("No sos mayor de edad");
// }

/* 
Ciclos / Bucles

for --> while --> do..while --> break , continue

switch

El desde --> Hasta --> Actualizacion
for(desde; hasta; actualizacion){
    este seria el cuerpo
}
*/

// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }

// let x = parseInt(prompt("Ingresa un number"))

// for(let i = 1; i <= 10; i++){
//     let result = x * i
//     console.log(`${x} "x" ${i} = ${result}`);
// }

// for(let i = 1; i <= 5; i++){
//     let nombre = prompt("Ingresa tu nombre:")
//     console.log(`Tu turno es ${i} nombre: ${nombre}`);
// }

// let suma = 0;

// for(let i = 0; i <= 3; i++){
//     let num = parseInt(prompt("Ingresa un number"))
//     suma += num
// }
// console.log(`La suma de los numeros ingresados es ${suma}`);

for(let i = 1; i <= 5; i++){
    if (i == 2) {
        break
    }
    console.log(i);
    
}