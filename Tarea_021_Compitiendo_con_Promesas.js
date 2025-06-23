/**
 * Tarea_021_Compitiendo_con_Promesas
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - `Promise.race(iterable)`: Similar a `Promise.all`, es un método estático
 *   que recibe un array de promesas. Sin embargo, su comportamiento es diferente:
 *   `Promise.race` devuelve una promesa que se resuelve o se rechaza tan pronto
 *   como **la primera** de las promesas del iterable se resuelve o se rechaza.
 *   El valor o error de la promesa "ganadora" se convierte en el valor o error
 *   de la promesa de `Promise.race`.
 *
 * - Casos de Uso: Es útil para escenarios donde tienes múltiples fuentes para
 *   un mismo dato y quieres la respuesta más rápida, o para implementar un
 *   timeout (una de las promesas es un temporizador que, si gana, significa
 *   que las otras tardaron demasiado).
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Utilizar `Promise.race` para obtener el resultado de la operación
 * asíncrona más rápida de un conjunto.
 *
 * --- CÓDIGO DE INICIO (No lo modifiques) ---
 */
function simularCarrera(nombre, tiempoEnMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`El corredor '${nombre}' ha llegado a la meta.`);
        }, tiempoEnMs);
    });
}
/*
 * --- TU CÓDIGO AQUÍ ABAJO ---
 *
 * 1. Crea una función `async` llamada `iniciarCarrera`.
 *
 * 2. Dentro de la función, crea un array llamado `competidores` que contenga
 *    varias llamadas a `simularCarrera` con diferentes nombres y tiempos.
 *    (Ej: `[simularCarrera('Tortuga', 3000), simularCarrera('Liebre', 500)]`)
 *
 * 3. Utiliza `await Promise.race(competidores)` para esperar a que la primera
 *    promesa del array se complete.
 *
 * 4. Guarda el resultado (que será el mensaje de la promesa más rápida)
 *    en una constante `ganador` e imprímela en la consola.
 *
 * 5. Envuelve tu lógica de `await` en un bloque `try...catch` para manejar
 *    posibles errores.
 *
 * 6. Finalmente, llama a `iniciarCarrera()` para ver quién gana.
 */

// Escribe tu código aquí debajo.