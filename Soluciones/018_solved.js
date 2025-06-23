/**
 * /Soluciones/018_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * La sintaxis `async/await` es "azúcar sintáctico" sobre las Promesas.
 * No introduce una nueva forma de asincronía, sino una manera mucho más
 * limpia y legible de trabajar con las promesas que ya conocemos.
 * El código resultante se parece mucho al código síncrono, lo que facilita
 * enormemente su razonamiento y mantenimiento.
 */

// 1. La "fábrica de promesas" no cambia. Sigue siendo la base de todo.
function simularRetraso(tiempoEnMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Operación completada exitosamente tras ${tiempoEnMs}ms.`);
        }, tiempoEnMs);
    });
}

// 2. Se crea una función `async` que actuará como nuestro "entorno de ejecución"
//    para poder usar `await`.
async function ejecutarTareaAsincrona() {
    console.log("Iniciando la tarea asíncrona...");

    try {
        // 3. `await` pausa la función AQUÍ, sin bloquear el programa.
        //    Espera a que `simularRetraso` se resuelva.
        //    Cuando se resuelve, "desenvuelve" el valor de la promesa y lo asigna a `mensaje`.
        const mensaje = await simularRetraso(2000);

        // 4. Esta línea solo se ejecuta DESPUÉS de que la promesa se haya resuelto.
        console.log("✅", mensaje);

    } catch (error) {
        // 5. Si la promesa fuera rechazada, el control saltaría directamente a este bloque.
        console.error("❌ Hubo un error:", error);
    }

    console.log("Tarea asíncrona finalizada.");
}

// 6. Se llama a la función `async` para iniciar todo el proceso.
ejecutarTareaAsincrona();