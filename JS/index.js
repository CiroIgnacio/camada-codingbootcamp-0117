//Ejercicio 1
//Escribir una función que nos diga “Hola NUCBA”

saludo();

function saludo() {
    console.log("Hola NUCBA");
}

/*Ejercicio 2
Escribir una función a la que se le pase una cadena
(string) &lt;nombre&gt; y muestre por pantalla el saludo ¡hola
&lt;nombre&gt;!.*/

var nombre = prompt("Ingrese su nombre");
saludoPersonal(nombre);

function saludoPersonal(name) {
    console.log(`¡Hola ${name}!`);
}


/*
Ejercicio 3
Escribir una función que reciba un número entero positivo y
devuelva su factorial.
*/

var numero = prompt("Ingrese un número entero positivo");

if (Number.isInteger(Number(numero)) && Number(numero) >= 0) {
    console.log(factorial(numero));
} else {
    console.log("Debe ingresar un número entero positivo")
}

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/*
Ejercicio 4
Escribir una función que reciba una muestra de números en un
array y devuelva otro con sus cuadrados.
*/
var numero = prompt("Ingrese un número, para terminar ingrese cualquier otro caracter");
var arrayUser = [];

while (!isNaN(numero)) {
    if (!isNaN(numero)) {
        arrayUser.push(Number(numero));
    }
    numero = prompt("Ingrese un número, para terminar ingrese cualquier otro caracter");
}
if (arrayUser.length > 0) {
    console.log(`El cuadrado de los números ingresados: ${cuadrados(arrayUser)}`);
} else {
    console.log("No ha ingresado números para evaluar");
}

function cuadrados(arrayNums) {
    for (let i = 0; i < arrayNums.length; i++) {
        arrayNums[i] *= arrayNums[i];
    }
    return arrayNums;
}
/*
Ejercicio 5
Realiza una función llamada area_rectangulo(base, altura) que
devuelva el área del rectangulo a partir de una base y una altura.
(Acuerdense que la formula del área es base * altura)
*/
var base = prompt("Ingrese la base del rectángulo");
var altura = prompt("Ingrese la altura del rectángulo");

if (!isNaN(base) && !isNaN(altura)) {
    console.log(`Área: ${area_rectangulo(Number(base), Number(altura))}`);
} else {
    console.log("Alguno de los valores ingresados no es válido");
}

function area_rectangulo(b, h) {
    return b * h;
}

/*
Ejercicio 6
Realiza una función llamada relacion(a, b) que a partir de dos
números cumpla lo siguiente:
 Si el primer número es mayor que el segundo, debe devolver
1.
 Si el primer número es menor que el segundo, debe devolver
-1.
 Si ambos números son iguales, debe devolver un 0.
*/
var numA = prompt("Ingrese un número");
var numB = prompt("Ingrese otro número");

if (!isNaN(numA) && !isNaN(numB)) {
    console.log(`Resultado: ${relacion(numA,numB)}`);
} else {
    console.log("No ha ingresado números");
}

function relacion(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

/*
Ejercicio 7
Solicitar al usuario que ingrese su dirección email. Imprimir un
mensaje indicando si la dirección es válida o no, valiéndose de
una función para decidirlo. Una dirección se considerará válida
si contiene el símbolo &quot;@&quot;.
**NOTA: ACUERDENSE QUE UN STRING ES COMO UNA CADENA
DE CHAR (CARACTERES) POR ENDE, PUEDEN RECORRERLO
COMO UN ARRAY.
**LA FUNCION charAt(Posición) nos retorna una letra de un
string. EJEMPLO:
var str = “Mi String”
for (var i = 0; i &lt; str.length; i++) {
alert(str.charAt(i)); //Letra retornada
}
**TAMBIEN PUEDEN USAR FOREACH:
https://stackoverflow.com/questions/1966476/how-can-i-
process-each-letter-of-text-using-javascript
*/

var userEmail = prompt("Ingrese su mail");

if (validaMail(userEmail)) {
    console.log("Mail válido");
} else {
    console.log("Mail inválido");
}

function validaMail(mail) {
    for (let i = 0; i < mail.length; i++) {
        if (mail.charAt(i) == "@") {
            return true;
        }
    }
}
/*
Ejercicio 8
Escribir una función que, dado un número de DNI, retorne True si
el número es válido y False si no lo es. Para que un número de
DNI sea válido debe tener entre 7 y 8 dígitos.
*/


var userDNI = prompt("Ingrese su DNI");

if (validaDNI(userDNI)) {
    console.log("DNI válido");
} else {
    console.log("DNI inválido");
}

function validaDNI(dni) {
    let valido = true;
    for (let i = 0; i < dni.length; i++) {
        if (isNaN(dni[i])) {
            valido = false;
        }
    }
    if (dni.length == 7 || dni.length == 8 && valido != false) {
        return true;
    } else {
        return false;
    }

}

/*
Ejercicio 9
Escribir una función que, dado un string, retorne la longitud de la
última palabra. Se considera que las palabras están separadas
por uno o más espacios. También podría haber espacios al
principio o al final del string pasado por parámetro.
*/

var userString = prompt("Escriba alguna frase");

console.log(`Cantidad de caracteres de la última palabra ingresada: ${lenUltimaPalabra(userString)}`);

function lenUltimaPalabra(string) {
    var arrayString = string.split(' ');
    var stringNoEsp = [];

    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] != '') {
            stringNoEsp.push(arrayString[i]);
        }
    }

    var len = stringNoEsp[stringNoEsp.length - 1].length;

    return len;
}