/**
 * /Soluciones/010_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El método `.filter()` es otra piedra angular de la programación funcional
 * en JavaScript. Se utiliza para seleccionar elementos de un array que
 * cumplen una condición específica, produciendo un nuevo array con solo
 * esos elementos.
 */

const listaDeUsuarios = [
    { nombre: "Carlos", edad: 30, pais: "Chile" },
    { nombre: "Naruto", edad: 12, pais: "Japón" },
    { nombre: "Ana", edad: 25, pais: "Argentina" },
    { nombre: "Rita", edad: 73, pais: "Brasil" },
    { nombre: "Silvio", edad: 78, pais: "Cuba" },
    { nombre: "Luis", edad: 35, pais: "Perú" }
];


// --- ENFOQUE 1: Usando `.filter()` únicamente ---
// El objetivo es obtener un nuevo array con los objetos de usuario completos
// cuya edad sea mayor o igual a 30.

console.log("--- Solución con .filter() ---");
const usuariosMayores = listaDeUsuarios.filter(usuario => usuario.edad >= 30);

console.log(usuariosMayores);
/*
Salida esperada:
[
  { nombre: 'Carlos', edad: 30, pais: 'Chile' },
  { nombre: 'Rita', edad: 73, pais: 'Brasil' },
  { nombre: 'Silvio', edad: 78, pais: 'Cuba' },
  { nombre: 'Luis', edad: 35, pais: 'Perú' }
]
*/


// --- ENFOQUE 2: Encadenamiento de Métodos (Avanzado) ---
// Este es el poder de los métodos funcionales. Como `.filter()` devuelve un
// array, podemos encadenarle inmediatamente un `.map()` para transformar
// el resultado.
// El flujo es:
// 1. `listaDeUsuarios` -> `.filter()` -> `[...objetos de usuarios mayores...]`
// 2. `[...objetos de usuarios mayores...]` -> `.map()` -> `[...nombres de esos usuarios...]`

console.log("\n--- Solución con .filter() y .map() encadenados ---");
const nombresDeUsuariosMayores = listaDeUsuarios
    .filter(usuario => usuario.edad >= 30)
    .map(usuario => usuario.nombre);

console.log(nombresDeUsuariosMayores);
/*
Salida esperada:
[ 'Carlos', 'Rita', 'Silvio', 'Luis' ]
*/