/**
 * /Soluciones/024_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * La solución se divide en dos partes conceptuales:
 * 1. La creación de una función "envoltorio" o "promisificada"
 *    (`leerArchivoPromesa`) que traduce el antiguo patrón de callbacks
 *    a una Promesa moderna.
 * 2. El consumo de esta nueva función-promesa utilizando la sintaxis
 *    limpia y legible de `async/await` con un bloque `try...catch`
 *    para manejar tanto el éxito como el fallo.
 */

// La función "antigua" que queremos modernizar.
function leerArchivoSimulado(nombreArchivo, callback) {
    console.log(`(Antigua) Iniciando lectura de '${nombreArchivo}'...`);
    setTimeout(() => {
        if (nombreArchivo === 'config.json') {
            callback(null, '{ "theme": "dark", "version": "1.0.0" }');
        } else {
            const error = new Error(`El archivo '${nombreArchivo}' no existe.`);
            callback(error, null);
        }
    }, 1500);
}

// 1. EL "TRADUCTOR": Convierte la función de callbacks en una que devuelve Promesas.
function leerArchivoPromesa(nombreArchivo) {
    return new Promise((resolve, reject) => {
        // Por dentro, usa la función antigua...
        leerArchivoSimulado(nombreArchivo, (error, data) => {
            // ...y traduce su resultado al lenguaje de Promesas.
            if (error) {
                reject(error); // Si hubo error, rechaza la promesa.
            } else {
                resolve(data); // Si hubo éxito, resuelve la promesa.
            }
        });
    });
}

// 2. EL CONSUMIDOR: Una función genérica que usa nuestra nueva herramienta.
async function procesarArchivo(nombreArchivo) {
    console.log(`--- Intentando procesar '${nombreArchivo}' ---`);
    try {
        const archivo = await leerArchivoPromesa(nombreArchivo);
        const archivoJSON = JSON.parse(archivo);
        console.log("✅ Configuración procesada:", archivoJSON);
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

// 3. EJECUCIÓN: Probamos ambos casos con nuestra función reutilizable.
procesarArchivo('config.json'); // Debería tener éxito.
procesarArchivo('datos.txt');   // Debería fallar y ser atrapado por el catch.