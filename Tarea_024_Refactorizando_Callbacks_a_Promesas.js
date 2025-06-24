/**
 * Tarea_024_Refactorizando_Callbacks_a_Promesas
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Patrón de Callback de Node.js: Muchas funciones asíncronas antiguas en
 *   Node.js (y en JavaScript en general) siguen un patrón donde el último
 *   argumento es una función `callback`. Esta callback, a su vez, suele recibir
 *   dos argumentos: `(error, resultado)`. Si hay un error, el primer argumento
 *   no es nulo; si todo va bien, el primer argumento es nulo y el segundo
 *   contiene el resultado.
 *
 * - "Promisificar": Es el acto de crear una función "envoltorio" o "traductora"
 *   que devuelve una Promesa y, por dentro, usa la función antigua con callbacks.
 *   Este "traductor" convierte el resultado del callback al lenguaje de Promesas
 *   (resolve/reject), permitiéndonos usar `async/await`.
 *
 * - Lógica de la Promisificación:
 *   1. Se crea una función que devuelve `new Promise((resolve, reject) => { ... })`.
 *   2. Dentro del ejecutor de la promesa, se llama a la función original
 *      basada en callbacks.
 *   3. En el callback de la función original, se comprueba el argumento `error`.
 *      - Si `error` existe, se llama a `reject(error)`.
 *      - Si no hay error, se llama a `resolve(resultado)`.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Modernizar una función asíncrona basada en callbacks para que pueda
 * ser utilizada con la sintaxis limpia y reutilizable de `async/await`.
 *
 * --- CÓDIGO DE INICIO (Función antigua con Callbacks) ---
 */
// Esta función simula leer un archivo. No la puedes usar directamente con `await`.
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
/*
 * --- TU CÓDIGO AQUÍ ABAJO ---
 *
 * PARTE 1: Construir la función "Promisificada"
 *
 * 1. Define una nueva función llamada `leerArchivoPromesa`. Debe aceptar un
 *    `nombreArchivo` como parámetro.
 *
 * 2. Dentro de `leerArchivoPromesa`, `return new Promise((resolve, reject) => { ... });`
 *
 * 3. Dentro del ejecutor de la promesa, llama a la función antigua
 *    `leerArchivoSimulado()`. Pásale el `nombreArchivo` y un callback.
 *
 * 4. Dentro de ese callback `(error, data)`, implementa la lógica de traducción:
 *    - Si `error` existe, `reject(error)`.
 *    - De lo contrario, `resolve(data)`.
 *
 *
 * PARTE 2: Crear una función de procesamiento genérica
 *
 * 5. Crea una función `async` llamada `procesarArchivo`. Esta función también
 *    debe aceptar un `nombreArchivo` como parámetro.
 *
 * 6. Dentro de un bloque `try...catch`:
 *    a) Llama a tu nueva función promisificada: `await leerArchivoPromesa(nombreArchivo)`.
 *       Guarda el resultado (el string JSON) en una constante.
 *    b) Convierte el string JSON a un objeto JavaScript usando `JSON.parse()`.
 *    c) Imprime el objeto de configuración resultante de forma clara.
 *
 * 7. En el bloque `catch`, imprime el mensaje del error.
 *
 *
 * PARTE 3: Ejecutar y probar ambos casos
 *
 * 8. Llama a tu función genérica `procesarArchivo` dos veces, al final de tu script:
 *    - `procesarArchivo('config.json');` (para probar el caso de éxito).
 *    - `procesarArchivo('datos.txt');` (para probar el caso de error).
 *
 */

// Escribe tu código aquí debajo.