/**
 * Tarea_026_Leyendo_un_Archivo
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Módulo `fs/promises`: La versión del módulo File System que nos permite
 *   usar `async/await` para operaciones con archivos.
 *   Se importa con `const fs = require('fs/promises');`.
 *
 * - Módulo `path`: Un módulo nativo de Node.js esencial para trabajar con
 *   rutas de archivos y directorios de forma segura en cualquier sistema operativo.
 *   Se importa con `const path = require('path');`.
 *
 * - `path.join(__dirname, ...segments)`: Une la ruta del directorio actual
 *   (`__dirname`) con otros segmentos de ruta (carpetas, archivos) para crear
 *   una ruta absoluta y fiable.
 *
 * - `fs.readFile(path, options)`: Lee el contenido de un archivo. Es crucial
 *   usar la opción `{ encoding: 'utf-8' }` para que devuelva un string.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Leer el contenido de un archivo de texto que ya existe en el
 * proyecto, construyendo la ruta hacia él.
 *
 * En la carpeta `assets/026/` encontrarás un archivo llamado `info.txt`.
 * Tu tarea es leer su contenido desde acá y mostrarlo en la consola.
 *
 * 1. **Importa los módulos:** En tu script, importa `fs/promises` y `path`.
 *
 * 2. **Crea una función asíncrona:** Define una función `async` llamada `leerInfo`.
 *
 * 3. **Implementa la lectura dentro de un `try...catch`:**
 *    a) **Construye la ruta al archivo:** Dentro de la función, usa `path.join()`
 *       para crear la ruta completa y segura hacia `info.txt`.
 *       Los segmentos que necesitas unir son:
 *       - `__dirname` (la carpeta actual del script), es una variable, NO UN STRING!
 *       - `'assets'`
 *       - `'026'`
 *       - `'info.txt'`
 *
 *    b) Llama a `fs.readFile()` con la ruta que construiste y las opciones
 *       para leerlo como texto (`utf-8`). Usa `await` para esperar el contenido.
 *
 *    c) Imprime el contenido del archivo en la consola.
 *
 * 4. **Maneja los errores:** En el bloque `catch`, imprime un mensaje de error claro.
 *
 * 5. **Ejecuta la función:** Llama a `leerInfo()` al final del script para
 *    iniciar la operación.
 *
 */

// Escribe tu código aquí debajo.