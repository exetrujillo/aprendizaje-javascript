/**
 * /Soluciones/003_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El problema se puede resolver de varias maneras. Aquí se presentan dos de
 * las más comunes en JavaScript: una usando la estructura clásica `if...else`
 * y otra usando el operador ternario, más moderno y conciso.
 */

// --- SOLUCIÓN ESTÁNDAR (if...else) ---
// Esta es la aproximación más fundamental y explícita. Es ideal para
// principiantes o cuando la lógica condicional podría volverse más compleja.

let numeroIf = 10;

if (numeroIf % 2 === 0) {
  console.log(`(if/else) El número ${numeroIf} es par`);
} else {
  console.log(`(if/else) El número ${numeroIf} es impar`);
}


// --- SOLUCIÓN ALTERNATIVA (Operador Ternario) ---
// Esta solución es más compacta. Es perfecta para condicionales simples
// que asignan un valor o ejecutan una de dos expresiones.
// Separar la condición en una constante `esPar` mejora la legibilidad.

let numeroTernario = 1337;

const esPar = numeroTernario % 2 === 0;

esPar
    ? console.log(`(Ternario) El número ${numeroTernario} es par`)
    : console.log(`(Ternario) El número ${numeroTernario} es impar`);