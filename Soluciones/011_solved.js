/**
 * /Soluciones/011_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El método `.reduce()` es una herramienta poderosa para agregar los elementos
 * de un array en un único valor. Es ideal para cálculos como sumas totales,
 * promedios, o incluso para transformar un array en un objeto.
 */

const carrito = [
  { nombre: 'Vinagre', precio: 990, cantidad: 2 },
  { nombre: 'Bicarbonato de sodio', precio: 790, cantidad: 5 },
  { nombre: 'Botella de plástico', precio: 450, cantidad: 6 },
  { nombre: 'Manual de ciencia para niños', precio: 8990, cantidad: 1 },
  { nombre: 'Papel aluminio', precio: 1790, cantidad: 2 },
  { nombre: 'Globo de cumpleaños', precio: 120, cantidad: 10 },
  { nombre: 'Gafas de seguridad', precio: 2990, cantidad: 1 },
  { nombre: 'Bata de laboratorio (para niño)', precio: 7990, cantidad: 1 },
  { nombre: 'Kit de química para escolares', precio: 14990, cantidad: 1 },
  { nombre: 'Cámara GoPro (para grabar el experimento)', precio: 199990, cantidad: 1 }
];

// --- ENFOQUE 1: Conciso con Retorno Implícito (Recomendado) ---
// Esta es la forma más común y elegante de usar `.reduce()` para cálculos simples.
// La función flecha devuelve implícitamente el resultado de la operación.

console.log("--- Enfoque 1: Conciso ---");
const costoTotalV1 = carrito.reduce(
    (totalParcial, producto) => totalParcial + (producto.cantidad * producto.precio),
    0 // El valor inicial del acumulador (totalParcial)
);
console.log(`El costo total del carrito es: $${costoTotalV1}`);


// --- ENFOQUE 2: Explícito con Bloque y Return ---
// Este enfoque es más verboso pero deja muy claro lo que ocurre en cada paso.
// Es útil para entender el mecanismo o cuando la lógica dentro del reduce
// requiere múltiples líneas de código.

console.log("\n--- Enfoque 2: Explícito ---");
const costoTotalV2 = carrito.reduce((totalParcial, producto) => {
    // 1. Calcular el costo del producto actual
    const costoProductoActual = producto.cantidad * producto.precio;

    // 2. Sumarlo al total que venimos acumulando
    const nuevoTotalParcial = totalParcial + costoProductoActual;

    // 3. RETORNAR el nuevo total para la siguiente iteración. ¡Este paso es vital!
    return nuevoTotalParcial;
}, 0);
console.log(`El costo total del carrito es: $${costoTotalV2}`);