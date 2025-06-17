/**
 * /Soluciones/004_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El desafío FizzBuzz combina bucles y condicionales. La clave para una
 * solución correcta es el orden en que se realizan las comprobaciones,
 * priorizando siempre el caso más específico (múltiplo de 3 y 5)
 * antes que los casos más generales.
 *
 * Se presentan dos enfoques comunes.
 */

// --- ENFOQUE 1: Con Variables de Legibilidad ---
// Esta implementación se considera una buena práctica porque separa el
// cálculo de la condición de la estructura de control (el if). Las
// constantes `esFizz` y `esBuzz` hacen que el código sea más legible y
// auto-explicativo.

console.log("--- Enfoque 1: Con Variables de Legibilidad ---");
for (let i = 1; i <= 100; i++) {
    const esFizz = i % 3 === 0;
    const esBuzz = i % 5 === 0;

    if (esFizz && esBuzz) {
        console.log("FizzBuzz");
    } else if (esFizz) {
        console.log("Fizz");
    } else if (esBuzz) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// --- ENFOQUE 2: Directo ---
// Esta es la forma más concisa de resolverlo, realizando los cálculos
// directamente dentro de las declaraciones `if`. Funciona perfectamente,
// y utiliza un pequeño truco matemático: un número es múltiplo de 3 y 5
// si y solo si es múltiplo de 15.

console.log("\n--- Enfoque 2: Directo ---");
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
