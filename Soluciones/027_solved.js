/**
 * /Soluciones/027_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * La solución combina la creación de datos en memoria (un objeto JS),
 * su serialización a un formato de texto estándar (JSON), y su persistencia
 * en el sistema de archivos (`fs.writeFile`).
 *
 * `JSON.stringify` es la herramienta clave para preparar los datos para
 * ser escritos. El uso de `null, 2` como segundo y tercer argumento es una
 * convención muy común para generar archivos JSON legibles por humanos.
 */

const fs = require('fs/promises');
const path = require('path');

async function guardarConfiguracion() {
    console.log("Preparando para guardar la configuración...");
    try {
        // 1. Definir los datos en un objeto de JavaScript.
        const config = {
            usuario: 'admin',
            theme: 'cobalt',
            notificaciones: true,
            version: '1.3.12'
        };

        // 2. Convertir el objeto a un string JSON formateado.
        const configString = JSON.stringify(config, null, 2);

        // 3. Construir la ruta de destino.
        const rutaDestino = path.join(__dirname, 'assets', '027', 'config.json');

        // 4. Escribir el string en el archivo.
        // `writeFile` crea el archivo si no existe, o lo sobrescribe si ya existe.
        await fs.writeFile(rutaDestino, configString);

        console.log(`✅ ¡Éxito! La configuración ha sido guardada en ${rutaDestino}`);

    } catch (error) {
        console.error(`❌ Error al guardar la configuración: ${error.message}`);
    }
}

guardarConfiguracion();