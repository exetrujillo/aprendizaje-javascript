/**
 * /Soluciones/017_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Este ejercicio se divide en dos partes: la CREACIÓN de la promesa y el
 * CONSUMO de la promesa.
 *
 * 1. CREACIÓN: La función `simularRetraso` actúa como una "fábrica de promesas".
 *    Envuelve la operación asíncrona (`setTimeout`) y devuelve un objeto Promesa
 *    que representa el futuro resultado de esa operación.
 *
 * 2. CONSUMO: Los métodos `.then()` y `.catch()` se usan para reaccionar al
 *    resultado de la promesa. Es crucial pasarles *definiciones de funciones*
 *    (callbacks), no llamadas a funciones.
 */

function simularRetraso(tiempoEnMs) {
    // La función devuelve inmediatamente el objeto Promesa.
    return new Promise((resolve, reject) => {
        // El código dentro del ejecutor se ejecuta de forma asíncrona.
        setTimeout(() => {
            // Cuando la tarea termina, se llama a `resolve` para cumplir la promesa
            // y entregar el valor.
            // Para simular un error, se llamaría a `reject(new Error('...'))`.
            resolve(`Operación completada exitosamente tras ${tiempoEnMs}ms.`);
        }, tiempoEnMs);
    });
}

// Se llama a la función y se guarda la promesa devuelta.
const miPromesa = simularRetraso(1500);
console.log("Promesa creada. Esperando su resolución...");

// Se encadenan los manejadores para el éxito y el fallo.
miPromesa
    .then(mensaje => {
        // Este bloque se ejecuta SI Y SOLO SI la promesa se resuelve.
        // La variable 'mensaje' contiene el valor pasado a `resolve()`.
        console.log("✅ Éxito:", mensaje);
    })
    .catch(error => {
        // Este bloque se ejecuta SI Y SOLO SI la promesa se rechaza.
        // La variable 'error' contiene el valor pasado a `reject()`.
        console.error("❌ Error:", error);
    });