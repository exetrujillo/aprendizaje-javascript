/**
 * Tarea_027_Escribiendo_un_Archivo
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - `fs.writeFile(path, data, [options])`: Esta función del módulo `fs/promises`
 *   escribe datos en un archivo, reemplazando el archivo si ya existe.
 *   - `path`: La ruta completa donde se creará o escribirá el archivo.
 *   - `data`: Los datos que se escribirán. Pueden ser un string, un Buffer, etc.
 *   - `options`: Opcional, para especificar la codificación, como `{ encoding: 'utf-8' }`.
 *
 * - `JSON.stringify(value, replacer, space)`: Método para convertir un objeto
 *   o valor de JavaScript en un string de formato JSON.
 *   - `value`: El valor a convertir.
 *   - `replacer`: (Opcional) Una función o array para transformar el resultado. Usaremos `null`.
 *   - `space`: (Opcional) Añade indentación al string JSON de salida para
 *     hacerlo legible. Un valor de `2` es el estándar común (indentación de 2 espacios).
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Crear un objeto de JavaScript, convertirlo a un string JSON
 * formateado y escribirlo en un nuevo archivo.
 *
 * 1. **Importa los módulos:** Importa `fs/promises` y `path`.
 *
 * 2. **Crea la función asíncrona:** Define una función `async` llamada `guardarConfiguracion`.
 *
 * 3. **Dentro de un `try...catch`:**
 *    a) **Define el objeto:** Crea un objeto de configuración simple. Por ejemplo:
 *       `const config = { usuario: 'admin', theme: 'cobalt', notificaciones: true };`
 *
 *    b) **Convierte a JSON:** Usa `JSON.stringify()` para convertir el objeto `config`
 *       a un string JSON legible. Pásale `null` y `2` como segundo y tercer
 *       argumento para obtener un formato con indentación. Guarda el resultado.
 *
 *    c) **Define la ruta de salida:** Usa `path.join()` para construir la ruta
 *       donde guardarás el archivo. Deberá estar en `assets/027/config.json`.
 *
 *    d) **Escribe el archivo:** Llama a `await fs.writeFile()` con la ruta y los
 *       datos JSON que preparaste.
 *
 *    e) Imprime un mensaje de éxito en la consola.
 *
 * 4. **Maneja el error:** En el `catch`, imprime un mensaje de error.
 *
 * 5. **Ejecuta la función:** Llama a `guardarConfiguracion()` al final del script.
 *
 * 6. **Verificación:** Después de ejecutar el script, revisa la carpeta
 *    `assets/027` para asegurarte de que el archivo `config.json` se creó
 *    correctamente y tiene el contenido esperado.
 */

// Escribe tu código aquí debajo.