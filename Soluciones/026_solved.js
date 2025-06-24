/**
 * /Soluciones/026_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * La clave de esta solución es la construcción correcta de la ruta al archivo.
 * El uso de `__dirname` asegura que la ruta se resuelve correctamente sin
 * importar desde qué directorio se ejecute el comando `node`. El uso de
 * `path.join` garantiza que los separadores de la ruta (`/` o `\`) sean
 * los correctos para el sistema operativo actual.
 *
 * `__dirname` es una variable, no un string, por lo que no debe ir entre comillas.
 */

const fs = require('fs/promises');
const path = require('path');

async function leerInfo() {
    console.log("Intentando leer el archivo de la Tarea 26...");
    try {
        // Se construye la ruta absoluta al archivo.
        const rutaArchivo = path.join(__dirname, 'assets', '026', 'info.txt');
        console.log(`Ruta construida: ${rutaArchivo}`);

        // Se lee el archivo de forma asíncrona.
        const contenido = await fs.readFile(rutaArchivo, { encoding: 'utf-8' });

        // Se muestra el contenido si la lectura fue exitosa.
        console.log("\n--- Contenido del archivo ---");
        console.log(contenido);
        console.log("---------------------------\n");

    } catch (error) {
        console.error("❌ Error al leer el archivo:", error.message);
    }
}

leerInfo();