/**
 * Tarea_023_Llamadas_a_APIs_con_Fetch
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - `fetch(url)`: Es la API estándar para realizar peticiones de red (HTTP).
 *   `fetch` es una función basada en promesas. Cuando la llamas, devuelve
 *   inmediatamente una promesa que representa la petición que está en curso.
 *
 * - El objeto `Response`: La promesa de `fetch` no se resuelve con los datos
 *   directamente. Se resuelve con un objeto `Response` tan pronto como se
 *   reciben las cabeceras de la respuesta del servidor. Este objeto contiene
 *   información sobre la respuesta, como el código de estado (`status`) y
 *   un indicador de éxito (`ok`).
 *
 * - `response.json()`: Para leer el cuerpo de la respuesta y convertirlo
 *   de formato JSON a un objeto/array de JavaScript, debemos usar el método
 *   `.json()`. ¡Importante! Este método también devuelve una promesa, por lo
 *   que también debemos esperarla (`await`).
 *
 * - Flujo de `fetch` con `async/await`:
 *   1. `const response = await fetch(url);` // Espera las cabeceras.
 *   2. Validar `response.ok`.
 *   3. `const data = await response.json();` // Espera a que el cuerpo se descargue y analice.
 *
  * ---INSTRUCCIONES---
 *
 * Objetivo: Realizar una petición a una API pública real, validar la respuesta,
 * explorar la estructura de los datos y mostrarlos de forma legible.
 *
 * 1. Crea una función `async` llamada `obtenerUsuariosDeAPI`.
 *
 * 2. Dentro de un bloque `try...catch`:
 *    a) Define la URL de la API: `https://jsonplaceholder.typicode.com/users`
 *
 *    b) Usa `await fetch(url)` para obtener el objeto `Response`.
 *
 *    c) Valida la respuesta. Si la propiedad `ok` de la respuesta es `false`,
 *       lanza un nuevo error con `throw new Error(...)` que incluya el `status`.
 *
 *    d) Si la respuesta es `ok`, usa `await respuesta.json()` para obtener los datos.
 *
 *    e) **Paso de Exploración:** Para saber qué propiedades tienen los objetos de
 *       usuario, imprime el primer elemento del array de usuarios en la consola.
 *       (Pista: `console.log("Primer usuario:", usuarios[0]);`). Revisa la salida
 *       para identificar las claves de nombre y email.
 *
 *    f) Imprime un mensaje que indique cuántos usuarios se recibieron usando la 
 *       propiedad de los arrays que sirve para esto. ya lo usamos en la función obtenerPosts
 *       en la Tarea_022.
 *
 *    g) Usa `.map()` para crear un nuevo array de strings con el formato
 *       "Nombre: [nombre del usuario], Email: [email del usuario]".
 *       (Pista: según tu exploración, ¿cuáles serían las claves?).
 *       Imprime este nuevo array.
 *
 * 3. En el bloque `catch`, imprime el mensaje del error.
 *
 * 4. Llama a `obtenerUsuariosDeAPI()` para ejecutar la función.
 *
 */

// Escribe tu código aquí debajo.