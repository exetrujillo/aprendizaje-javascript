/**
 * Tarea_018_La_Magia_de_Async_Await
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - `async function`: La palabra clave `async` se coloca antes de una función.
 *   Automáticamente hace dos cosas:
 *   1. Convierte la función para que siempre devuelva una promesa.
 *   2. Permite usar la palabra clave `await` dentro de ella.
 *
 * - `await`: Esta palabra clave solo puede usarse dentro de una `async function`.
 *   Pausa la ejecución de la función `async` hasta que la promesa a su derecha
 *   se resuelva o se rechace. Si se resuelve, `await` "desenvuelve" la promesa
 *   y devuelve su valor. Si se rechaza, lanza un error.
 *
 * - `try...catch`: Es el mecanismo estándar para el manejo de errores en código
 *   síncrono. Con `async/await`, se convierte en la forma preferida para
 *   manejar promesas rechazadas. El código que puede fallar (el `await`) se
 *   coloca en el bloque `try`, y el manejo del error en el bloque `catch`.
 *   Esto hace que el código asíncrono se lea casi igual que el síncrono.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Escribir código asíncrono que se lea de forma secuencial y limpia,
 * utilizando la sintaxis `async/await`.
 *
 * 1. Primero, reutiliza tu función `simularRetraso()` de la tarea anterior,
 *    ya que devuelve una Promesa, que es lo que `await` necesita.
 *
 * 2. Ahora, crea una nueva función principal y antepón la palabra `async` a su
 *    declaración. La llamaremos `ejecutarTareaAsincrona`.
 *    `async function ejecutarTareaAsincrona() { ... }`
 *
 * 3. Dentro de `ejecutarTareaAsincrona`, implementa un bloque `try...catch`.
 *
 * 4. En el bloque `try`:
 *    a) Llama a `simularRetraso(2000)` pero anteponiendo la palabra `await`.
 *    b) Guarda el resultado (el valor "desenvuelto" de la promesa) en una
 *       constante llamada `mensaje`.
 *    c) En la siguiente línea, imprime el `mensaje` en la consola.
 *
 * 5. En el bloque `catch(error)`:
 *    a) Imprime el error en la consola usando `console.error()`.
 *
 * 6. Finalmente, al final de tu script, simplemente llama a tu función
 *    `ejecutarTareaAsincrona()` para que se ponga en marcha.
 *
 */

// Escribe tu código aquí debajo.