// //------------ Ejercicio 01 -------------

// let numero = prompt("Ingresa un número para ver la tabla de multiplicar:");

// numero = Number(numero);

// if (isNaN(numero)) {
//     console.log("Por favor, ingresa un número válido.");
// } else {
//     console.log("Tabla de multiplicar del " + numero + ":");

//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * i;
//         console.log(numero + " x " + i + " = " + resultado);
//     }
// }


// //------------ Ejercicio 02 -------------
// let suma = 0;
// let numero;

// while (true) {
//     numero = prompt("Ingrese un número (o 0 para terminar):");
//     numero = Number(numero);
//     if (numero === 0) {
//         break;
//     }
//     suma += numero;

//     alert("Suma actual: " + suma);
// }

// alert("Suma total: " + suma);
// alert("Programa terminado.");


// //------------ Ejercicio 03 -------------
// let numeroSecreto = 42;
// let intentos = 0;
// let numeroUsuario;
// let juegoActivo = true;

// while (juegoActivo) {
//     numeroUsuario = prompt("Adivina el número secreto (entre 1 y 100):");
//     numeroUsuario = Number(numeroUsuario);
//     intentos++;
    
//     if (numeroUsuario < numeroSecreto) {
//         alert("El número secreto es mayor. Intenta de nuevo.");
//     } else if (numeroUsuario > numeroSecreto) {
//         alert("El número secreto es menor. Intenta de nuevo.");
//     } else {
//         juegoActivo = false;
//     }
// }

// alert("Felicidades! Has adivinado el número " + numeroSecreto + " en " + intentos + " intentos.");
// alert("Juego terminado.");

// //------------ Ejercicio 04 -------------
// function esPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }

//     for (let i = 2; i * i <= numero; i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let numero = prompt("Ingresa un número para confirmar si es primo:");
// numero = parseInt(numero);

// if (esPrimo(numero)) {
//     console.log(numero + " es un número primo.");
// } else {
//     console.log(numero + " no es un número primo.");
// }

// //------------ Ejercicio 05 -------------
// function mostrarDivisores(numero) {
//     console.log("Divisores de " + numero + " son:");

//     for (let i = 1; i <= numero; i++) {
//         if (numero / i === parseInt(numero / i)) {
//             console.log(i);
//         }
//     }
// }

// let numero = prompt("Ingresa un número para mostrar sus divisores:");
// numero = parseInt(numero);

// mostrarDivisores(numero);

// //------------ Ejercicio 06 -------------
// let miArray = [5, 12, 8, 130, 44, 23, 76, 9, 51, 17];

// for (let i = 0; i < miArray.length; i++) {
//     console.log("Elemento " + (i + 1) + ": " + miArray[i]);
// }


// //------------ Ejercicio 07 -------------
// let numeros = [5, 12, 8, 30, 44, 23, 76, 9, 51, 17];

// for (let i = 0; i < numeros.length; i++) {
//     let doble = numeros[i] * 2;
//     console.log("Doble de " + numeros[i] + " es: " + doble);
// }

// //------------ Ejercicio 08 -------------
// let familia = [
//     {
//         nombre: "Carlos",
//         edad: 45,
//         rol: "Padre",
//         profesion: "Ingeniero de sofware"
//     },
//     {
//         nombre: "Luz",
//         edad: 42,
//         rol: "Madre",
//         profesion: "Medico"
//     },
//     {
//         nombre: "Juan",
//         edad: 31,
//         rol: "El hijo mayor",
//         hobby: "Programar"
//     },
//     {
//         nombre: "Ana",
//         edad: 17,
//         rol: "La hija menor",
//         hobby: "Netflix"
//     },
//     {
//         nombre: "David",
//         edad: 79,
//         rol: "Abuelo",
//         jubilado: true
//     }
// ];

// for (let i = 0; i < familia.length; i++) {
//     let miembro = familia[i];
//     let mensaje = "Hola, mi nombre es " + miembro.nombre + ", tengo " + miembro.edad + " años y soy " + miembro.rol + " en la familia.";

//     if (miembro.profesion) {
//         mensaje += " Trabajo como " + miembro.profesion + ".";
//     }
//     if (miembro.hobby) {
//         mensaje += " Mi pasatiempo favorito es " + miembro.hobby + ".";
//     }
//     if (miembro.jubilado) {
//         mensaje += " Estoy pensionado.";
//     }

//     console.log(mensaje);
// }


// //------------ Ejercicio 09 -------------
// let numeros = [12, 3, 5, 8, 11, 14, 17, 20, 23, 26];

// for (let i = 0; i < numeros.length; i++) {
//     let numero = numeros[i];

//     let esImpar = true;

//     while (numero >= 2) {
//         numero = numero - 2;
//     }

//     if (numero === 0) {
//         esImpar = false;
//     }

//     if (esImpar) {
//         console.log(numeros[i]);
//     }
// }


// //------------ Ejercicio 10 -------------
// let sumaPares = 0;
// let sumaImpares = 0;
// let numero;

// do {
//     numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

//     if (numero !== 0) {
//         if (numero % 2 === 0) {
//             sumaPares = sumaPares + numero;
//         } else {
//             sumaImpares = sumaImpares + numero;
//         }
//     }
// } while (numero !== 0);

// console.log("La suma de los números pares es: " + sumaPares);
// console.log("La suma de los números impares es: " + sumaImpares);

// //------------ Ejercicio 11 -------------
// let numeros = [5, 8, 2, 15, 3, 9, 7, 1, 12, 6];

// let masGrande = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > masGrande) {
//         masGrande = numeros[i];
//     }
// }

// console.log("El número más grande es: " + masGrande);


// //------------ Ejercicio 12 -------------
// let numeros = [23, 45, 17, 8, 92, 31, 60, 4, 76, 39];

// let masChico = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < masChico) {
//         masChico = numeros[i];
//     }
// }

// console.log("El número más pequeño es: " + masChico);


// //------------ Ejercicio 13 -------------
// function obtenerJugada(jugador) {
//     let jugada;
//     let jugadaValida = false;
//     while (jugadaValida === false) {
//         jugada = prompt(jugador + ", elige piedra, papel o tijeras:").toLowerCase();
//         if (jugada === "piedra") {
//             jugadaValida = true;
//         }
//         if (jugada === "papel") {
//             jugadaValida = true;
//         }
//         if (jugada === "tijeras") {
//             jugadaValida = true;
//         }
//     }
//     return jugada;
// }

// function determinarGanador(jugada1, jugada2) {
//     if (jugada1 === jugada2) {
//         return "empate";
//     }
//     if (jugada1 === "piedra") {
//         if (jugada2 === "tijeras") {
//             return "jugador1";
//         }
//     }
//     if (jugada1 === "papel") {
//         if (jugada2 === "piedra") {
//             return "jugador1";
//         }
//     }
//     if (jugada1 === "tijeras") {
//         if (jugada2 === "papel") {
//             return "jugador1";
//         }
//     }
//     return "jugador2";
// }

// let jugador1 = prompt("Ingrese el nombre del primer jugador:");
// let jugador2 = prompt("Ingrese el nombre del segundo jugador:");

// let ganador = null;

// while (ganador === null) {
//     let jugada1 = obtenerJugada(jugador1);
//     let jugada2 = obtenerJugada(jugador2);

//     let resultado = determinarGanador(jugada1, jugada2);

//     if (resultado === "empate") {
//         console.log("Empate! Vamos de nuevo.");
//     } else {
//         if (resultado === "jugador1") {
//             ganador = jugador1;
//         } else {
//             ganador = jugador2;
//         }
//     }
// }

// console.log(" " + ganador + " ha ganado el juego!");


// //------------ Ejercicio 14 -------------
// let filas = 5;

// for (let i = 1; i <= filas; i++) {
//     let linea = '';

//     for (let j = 1; j <= i; j++) {
//         linea = linea + '*';
//     }

//     console.log(linea);
// }

// //------------ Ejercicio 15 -------------
// let filas = 5;

// for (let i = filas; i >= 1; i--) {
//     let linea = '';

//     for (let j = 1; j <= i; j++) {
//         linea = linea + '*';
//     }

//     console.log(linea);
// }


// // //------------ Ejercicio 16 -------------
// let numeros = [64, 34, 25, 12, 22, 11, 90, 88, 45, 2];

// console.log("Array original:", numeros);

// for (let i = 0; i < numeros.length - 1; i++) {
//     for (let j = 0; j < numeros.length - i - 1; j++) {
//         if (numeros[j] > numeros[j + 1]) {
//             let temp = numeros[j];
//             numeros[j] = numeros[j + 1];
//             numeros[j + 1] = temp;
//         }
//     }
// }

// console.log("Array ordenado:", numeros);