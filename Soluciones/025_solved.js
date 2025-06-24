/**
 * /Soluciones/025_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Este ejercicio integra dos conceptos clave: la obtención de datos de una
 * fuente asíncrona y su posterior procesamiento síncrono. Es un patrón muy
 * común en el desarrollo de aplicaciones.
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

// Función principal que orquesta el proceso.
async function calcularTotalCarrito() {
    try {
        // 1. Espera a que la promesa se resuelva para obtener los datos.
        const carrito = await obtenerCarritoDeAPI();
        console.log("✅ Carrito obtenido. Calculando total...");

        // 2. Procesa los datos obtenidos usando .reduce().
        const costoFinal = carrito.reduce((totalAcumulado, productoActual) => {
           // Calcula el costo de la línea actual.
           const costoLinea = productoActual.precio * productoActual.cantidad;
           // Devuelve el nuevo total acumulado.
           return totalAcumulado + costoLinea;
        }, 0); // El valor inicial del acumulador es 0.

        // 3. Muestra el resultado final.
        console.log(`El costo total del carrito es: $${costoFinal.toLocaleString('es-CL')}`);
        // Nota: .toLocaleString() se usa para formatear el número como moneda,
        // haciéndolo más legible.

    } catch(error) {
        console.error(`❌ Error en la función calcularTotalCarrito: ${error.message}`);
    }
}

calcularTotalCarrito();