/**
 * /Soluciones/021_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * `Promise.race` es útil para escenarios de competencia. Responde al primer
 * evento que ocurra, ya sea un éxito (resolución) o un fallo (rechazo),
 * ignorando todas las demás promesas una vez que hay un "ganador".
 */

// --- Escenario 1: La promesa más rápida se resuelve ---

function simularCarrera(nombre, tiempoEnMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`El corredor '${nombre}' ha llegado a la meta.`);
        }, tiempoEnMs);
    });
}

async function iniciarCarreraConExito() {
    console.log("--- En sus marcas, listos... ¡YA! (Escenario de éxito) ---");
    const competidores = [
        simularCarrera('Tortuga', 3000), // La más lenta
        simularCarrera('Liebre', 500)    // La más rápida
    ];

    try {
        // `Promise.race` espera solo 500ms, hasta que la promesa de 'Liebre' se resuelva.
        const ganador = await Promise.race(competidores);
        console.log(`🏁 ¡Y el ganador es... ${ganador}`);
    } catch(error) {
        console.error("Este bloque no debería ejecutarse.", error);
    }
}

// --- Escenario 2: La promesa más rápida se rechaza ---

function simularCarreraConPosibleFallo(nombre, tiempoEnMs, seTropieza = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seTropieza) {
                reject(new Error(`¡Oh no! El corredor '${nombre}' se ha tropezado.`));
            } else {
                resolve(`El corredor '${nombre}' ha llegado a la meta.`);
            }
        }, tiempoEnMs);
    });
}

async function iniciarCarreraConFallo() {
    console.log("\n--- En sus marcas, listos... ¡YA! (Escenario de fallo) ---");
    const competidores = [
        simularCarreraConPosibleFallo('Corredor A', 1000),
        simularCarreraConPosibleFallo('Corredor B', 400, true), // Este fallará primero
        simularCarreraConPosibleFallo('Corredor C', 1200)
    ];

    try {
        const ganador = await Promise.race(competidores);
        console.log(`🏁 Este bloque no debería ejecutarse: ${ganador}`);
    } catch(error) {
        // `Promise.race` se rechaza tan pronto como la primera promesa lo hace.
        console.error(`💥 Carrera interrumpida: ${error.message}`);
    }
}

// Ejecutar ambos escenarios
iniciarCarreraConExito();
iniciarCarreraConFallo();