/**
 * Tarea_020_Ejecucion_Paralela_de_Promesas
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - `Promise.all(iterable)`: Es un método estático que toma un array de promesas
 *   y devuelve una única promesa. Esta nueva promesa se resolverá cuando todas
 *   las promesas del array se hayan resuelto, entregando un array con todos
 *   los resultados. Si alguna de las promesas falla, `Promise.all` falla
 *   inmediatamente con el error de esa promesa.
 *
 * - Ejecución Concurrente: `Promise.all` no ejecuta las promesas una por una.
 *   Inicia todas las operaciones asíncronas a la vez y luego espera a que
 *   la última termine. Esto es mucho más eficiente que esperarlas en secuencia
 *   si las tareas son independientes entre sí.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Ejecutar múltiples operaciones asíncronas en paralelo y recopilar
 * todos sus resultados cuando hayan finalizado.
 *
 * Te proporcionamos la función `simularRetraso` que ya conoces.
 *
 * --- CÓDIGO DE INICIO (No lo modifiques) ---
 */
function simularRetraso(tiempoEnMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Tarea completada en ${tiempoEnMs}ms`);
        }, tiempoEnMs);
    });
}
/*
 * --- TU CÓDIGO AQUÍ ABAJO ---
 *
 * 1. Crea una función `async` llamada `ejecutarTareasEnParalelo`.
 *
 * 2. Dentro de la función, crea un array llamado `promesas` que contenga
 *    varias llamadas a `simularRetraso` con diferentes duraciones.
 *    (Ej: `[simularRetraso(1000), simularRetraso(2000), simularRetraso(500)]`)
 *
 * 3. Utiliza `await Promise.all(promesas)` para esperar a que todas las promesas
 *    del array se completen.
 *
 * 4. Guarda el resultado (que será un array con los mensajes de cada promesa)
 *    en una constante `resultados` e imprímela en la consola.
 *
 * 5. Envuelve tu lógica de `await` en un bloque `try...catch` para manejar
 *    posibles errores de forma robusta.
 *
 * 6. Finalmente, llama a `ejecutarTareasEnParalelo()` para iniciar el proceso.
 */

// Escribe tu código aquí debajo.