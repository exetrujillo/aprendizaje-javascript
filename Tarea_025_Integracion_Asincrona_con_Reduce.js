/**
 * Tarea_025_Integracion_Asincrona_con_Reduce
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Combinación de Asincronía y Lógica de Datos: En aplicaciones reales, a menudo
 *   primero obtenemos datos de una fuente asíncrona (API, base de datos) y luego
 *   los procesamos usando métodos de array como `.map`, `.filter` o `.reduce`.
 *
 * - `.reduce()`: Recordatorio de la Tarea 011. Es el método para "agregar" o
 *   "reducir" un array a un único valor (un número, un objeto, etc.), usando
 *   una función acumuladora.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Simular la obtención de un carrito de compras desde una API y
 * luego calcular el costo total de todos los productos usando `.reduce()`.
 *
 * --- CÓDIGO DE INICIO ---
 */
// Esta función simula una llamada a una API para obtener un carrito de compras.
function obtenerCarritoDeAPI() {
    console.log("Obteniendo carrito de la API...");
    return new Promise(resolve => {
        setTimeout(() => {
            const carrito = [
                { nombre: 'Laptop Gamer', precio: 1200000, cantidad: 1 },
                { nombre: 'Mouse RGB', precio: 25000, cantidad: 2 },
                { nombre: 'Teclado Mecánico', precio: 80000, cantidad: 1 },
                { nombre: 'Monitor 4K', precio: 300000, cantidad: 2 }
            ];
            resolve(carrito);
        }, 2000);
    });
}

/*
 * --- TU CÓDIGO AQUÍ ABAJO ---
 *
 * 1. Crea una función `async` llamada `calcularTotalCarrito`.
 *
 * 2. Dentro de un bloque `try...catch`:
 *    a) Llama a `obtenerCarritoDeAPI` usando `await` para obtener el array
 *       del carrito y guárdalo en una constante.
 *
 *    b) **El Reto Principal:** Usa el método `.reduce()` sobre el array del
 *       carrito para calcular el costo total.
 *       - El valor inicial del acumulador debe ser `0`.
 *       - La función reductora debe recibir el `totalAcumulado` y el `productoActual`.
 *       - En cada iteración, calcula el costo del producto actual
 *         (el precio del producto por la cantidad) y súmalo al `totalAcumulado`.
 *       - Recuerda que la función reductora SIEMPRE debe retornar (`return`) el nuevo
 *         valor del acumulador.
 *
 *    c) Guarda el resultado final de `.reduce()` en una constante `costoFinal`.
 *
 *    d) Imprime un mensaje claro en la consola, como:
 *       "El costo total del carrito es: $XXXX".
 *
 * 3. En el bloque `catch`, maneja cualquier posible error.
 *
 * 4. Llama a `calcularTotalCarrito()` para iniciar el proceso.
 */

// Escribe tu código aquí debajo.