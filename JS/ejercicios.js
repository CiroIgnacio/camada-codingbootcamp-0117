/* Ejercicio 1
Escribir un programa que pida al usuario una palabra y la muestre por
pantalla 10 veces.
Ejercicio 2
Escribir un programa que pregunte al usuario su edad y muestre por
pantalla todos los años que ha cumplido (desde 1 hasta su edad).
Ejercicio 3
Escribir un programa que pida al usuario un número entero positivo y
muestre por pantalla todos los números impares desde 1 hasta ese número
separados por comas.
Ejercicio 4
Escribir un programa que pida al usuario un número entero positivo y
muestre por pantalla la cuenta atrás desde ese número hasta cero separados
por comas.
Ejercicio 5
Escriba un programa que pida un número entero mayor que cero y calcule su
factorial.
Ejercicio 6
Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al
10.
Ejercicio 7
Escribir un programa que pida dos números y muestre por pantalla los
números que hay diferencia entre ellos dos.
Ejercicio 8
Escribir un programa que muestre por pantalla la tabla de multiplicar de un
número ingresado por el usuario
*/

// Ejercicio 1
"use strict";
var palabraUsuario = prompt("Ingrese una palabra");
console.log("La palabra elegida es: ");
for (let i = 0; i < 10; i++) {
  console.log(palabraUsuario);
}

// Ejercicio 2

var edadUsuario = prompt("Ingrese su edad");
console.log("Usted ha cumplido los siguientes años: ");
for (let i = 0; i <= edadUsuario; i++) {
  console.log(i);
}

// Ejercicio 3 y 4

var numeroUsuario = prompt("Ingrese un número");
var arrayImpares = [];
var cuentaAtras = [];
console.log("Los números impares hasta el " + numeroUsuario + " son: ");

for (let i = 0; i <= numeroUsuario; i++) {
  if (i % 2 != 0) {
    arrayImpares.push(i);
  }
}

console.log(arrayImpares.join(","));

console.log("Cuenta hacia atrás: ");

for (let i = numeroUsuario; i >= 0; i--) {
  cuentaAtras.push(i);
}
console.log(cuentaAtras.join(","));

// Ejercicio 5

var numeroUsuario1 = prompt("Ingrese un número mayor o igual que 0");
var factorial = 1;
if (numeroUsuario1 > 0) {
  for (let i = numeroUsuario1; i > 0; i--) {
    factorial *= i;
  }
  console.log(`El factorial de ${numeroUsuario1} es ${factorial}`);
} else if (numeroUsuario1 == 0) {
  factorial = 1;
} else {
  console.log("Debe ingresar un número mayor o igual que cero");
}

// Ejercicio 6

for (let i = 0; i < 10; i++) {
  console.log(`Tabla del ${i}:`);
  for (let j = 0; j < 10; j++) {
    console.log(`${i}x${j} = ${i * j}`);
  }
}

// Ejercicio 7

var numeroUsuario2 = prompt("Ingrese un número");
var numeroUsuario3 = prompt("Ingrese otro número");

if (numeroUsuario2 > numeroUsuario3) {
  console.log(
    `${numeroUsuario2} - ${numeroUsuario3} = ${numeroUsuario2 - numeroUsuario3}`
  );
} else {
  console.log(
    `${numeroUsuario3} - ${numeroUsuario2} = ${numeroUsuario3 - numeroUsuario2}`
  );
}

// Ejercicio 8
var numeroUsuario4 = prompt("Ingrese un número");
console.log(`La tabla del ${numeroUsuario4} es: `);
for (let j = 0; j < 10; j++) {
  console.log(`${numeroUsuario4}x${j} = ${numeroUsuario4 * j}`);
}
