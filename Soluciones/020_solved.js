/**
 * /Soluciones/020_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * `Promise.all` es la herramienta ideal cuando necesitamos realizar múltiples
 * operaciones asíncronas independientes y solo continuar cuando todas ellas
 * hayan finalizado con éxito.
 */

// --- Escenario 1: Todas las promesas se resuelven ---

function simularRetraso(tiempoEnMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Tarea completada en ${tiempoEnMs}ms`);
        }, tiempoEnMs);
    });
}

async function ejecutarTareasEnParaleloExito() {
    console.log("--- Iniciando escenario de éxito ---");
    const promesas = [
        simularRetraso(1000),
        simularRetraso(2000),
        simularRetraso(500)
    ];
    try {
        // Se espera a que todas las promesas del array se completen.
        // El tiempo total será el de la promesa más lenta (2000ms).
        const resultados = await Promise.all(promesas);
        console.log("✅ Todas las tareas completadas:", resultados);
        // Salida: ['Tarea completada en 1000ms', 'Tarea completada en 2000ms', 'Tarea completada en 500ms']
    } catch(error) {
        console.error("❌ Este bloque no debería ejecutarse:", error);
    }
}

// --- Escenario 2: Una de las promesas es rechazada ---

function simularRetrasoConPosibleFallo(tiempoEnMs, debeFallar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (debeFallar) {
                reject(new Error(`La tarea de ${tiempoEnMs}ms falló intencionalmente.`));
            } else {
                resolve(`Tarea completada en ${tiempoEnMs}ms`);
            }
        }, tiempoEnMs);
    });
}

async function ejecutarTareasEnParaleloFallo() {
    console.log("\n--- Iniciando escenario de fallo ---");
    const promesasConFallo = [
        simularRetrasoConPosibleFallo(1000),
        simularRetrasoConPosibleFallo(500, true), // Esta promesa fallará primero.
        simularRetrasoConPosibleFallo(1500),
    ];
    try {
        const resultados = await Promise.all(promesasConFallo);
        console.log("✅ Este bloque no debería ejecutarse:", resultados);
    } catch(error) {
        // `Promise.all` se rechaza tan pronto como la primera promesa falla.
        console.error("❌ Error capturado por Promise.all:", error.message);
    }
}

// Ejecutar ambos escenarios
ejecutarTareasEnParaleloExito();
ejecutarTareasEnParaleloFallo();