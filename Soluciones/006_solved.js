/**
 * /Soluciones/006_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El objetivo es combinar el poder de los bucles con la reutilización que
 * ofrecen las funciones para procesar una lista de datos de forma eficiente.
 * Se muestra el resultado para cada elemento de la lista.
 */

// Se define la función que se reutilizará. Esta función sigue el principio
// de responsabilidad única: solo se encarga de crear un saludo.
function crearSaludo(nombre) {
  return `Hola, ${nombre}`;
}

// Se define la colección de datos a procesar.
const nombres = ["Ana", "Juan", "Diego", "Lucía"];

// --- ENFOQUE 1: Bucle `for...of` (Recomendado) ---
// Es la forma más legible y moderna de iterar sobre los valores de un array.

console.log("--- Solución con for...of ---");
for (const nombre of nombres) {
  // En cada iteración, se llama a la función con el elemento actual del array
  // y se imprime el resultado devuelto.
  const saludo = crearSaludo(nombre);
  console.log(saludo);
}


// --- ENFOQUE 2: Método `.forEach()` del Array ---
// Es un enfoque más funcional. El método `.forEach()` ejecuta una función
// (callback) una vez por cada elemento del array. Es una alternativa muy común
// al `for...of` cuando simplemente se quiere "hacer algo" con cada elemento.

console.log("\n--- Solución con .forEach() ---");
nombres.forEach(nombre => {
  const saludo = crearSaludo(nombre);
  console.log(saludo);
});

// Versión aún más compacta del .forEach()
console.log("\n--- Solución con .forEach() (Compacta) ---");
nombres.forEach(nombre => console.log(crearSaludo(nombre)));