/**
 * /Soluciones/005_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El objetivo es encapsular la lógica de creación de un saludo en una función
 * para poder reutilizarla. La clave es el uso de `return` para que la función
 * produzca un valor, en lugar de realizar una acción como `console.log` ella misma.
 * Esto separa responsabilidades: la función crea el dato, y el código principal
 * decide qué hacer con él (en este caso, imprimirlo).
 */

// --- ENFOQUE 1: Declaración de Función Clásica (`function`) ---
// Es la forma tradicional y más explícita de definir una función.

function crearSaludo(nombre) {
  // La función recibe 'nombre' como parámetro y devuelve un nuevo string.
  return `Hola, ${nombre}`;
}

// Se llama a la función con el argumento "Exequiel".
const saludoFinal = crearSaludo("Exequiel");

// Se imprime el valor que la función devolvió.
console.log(saludoFinal);


// --- ENFOQUE 2: Función Flecha (`Arrow Function`) ---
// Es una sintaxis más moderna y concisa, muy común en el código actual.
// Cuando la función solo tiene una línea de código que devuelve un valor,
// se puede omitir las llaves `{}` y la palabra `return`.

const crearSaludoConFlecha = (nombre) => `Hola, ${nombre}`;

const saludoFinalConFlecha = crearSaludoConFlecha("Ana");
console.log(saludoFinalConFlecha);