var numero = 1;
var texto = "1";
var verdadero = boolean;
var falso = boolean;
var nulo = undefined;
var indefinido = undefined;
var array = [1, "1", false, undefined];
console.log(numero);
console.log(typeof number);
console.log(texto);
console.log(typeof string);
console.log(verdadero);
console.log(typeof boolean);
console.log(falso);
console.log(typeof boolean);
console.log(nulo);
console.log(typeof null);
console.log(indefinido);
console.log(typeof undefined);
console.log(array);
console.log(typeof number, string, boolean, undefined);


// Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
var numinput = prompt("Número");
if (numinput > 10) {
  console.log("El número es mayor que 10.");
} else if (numeinput < 10) {
  console.log("El número es menor que 10.");
} else {
  console.log("El número es igual a 10.");
}

// Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
var numeroInput = prompt("Ingresa un número:");
if (numeroInput % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}

// Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
var letraInput = prompt("Ingresa una letra:");
var letra = letraInput.toLowerCase();
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("La letra ingresada es una vocal.");
} else {
  console.log("La letra ingresada es una consonante.");
}

// Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
var edadInput = prompt("Ingresa tu edad:");
var edad = parseInt(edadInput);
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
var diaingInput = prompt("Ingresa un número del 1 al 7:");
var dia = parseInt(diaingInput);
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número fuera de rango.");
}

/* Funciones */

// Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumaNumeros(a, b) {
  return a + b;
}

// Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function esPar(numero) {
  return numero % 2 === 0;
}

// Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumaArray(arr) {
  var suma = 0;
  for (var i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

// Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function longitudStringMasLargo(arr) {
  var longitudMaxima = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longitudMaxima) {
      longitudMaxima = arr[i].length;
    }
  }
  return longitudMaxima;
}

// Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function valoresDePropiedades(obj) {
  var valores = [];
  for (var propiedad in obj) {
    if (obj.hasOwnProperty(propiedad)) {
      valores.push(obj[propiedad]);
    }
  }
  return valores;
}

/* Vectores */

// Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function numeroMasGrande(arr) {
  var maximo = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maximo) {
      maximo = arr[i];
    }
  }
  return maximo;
}

// Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function ordenarNumeros(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

// Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.
function elementosComunes(arr1, arr2) {
  var comunes
