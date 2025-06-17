/**
 * Tarea_017_Creando_tu_Primera_Promesa
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - La Fábrica de Promesas: Una función que envuelve una operación asíncrona
 *   y devuelve una `Promise` se comporta como una "fábrica". No te da el
 *   resultado inmediatamente, sino un objeto que representa la promesa de
 *   un resultado futuro.
 *
 * - El Constructor `new Promise(ejecutor)`: Se usa para crear el objeto Promesa.
 *   El `ejecutor` es una función que recibe dos argumentos: `resolve` y `reject`.
 *   - `resolve(valor)`: Se llama para indicar que la promesa se cumplió con éxito.
 *     El `valor` se entrega a quien esté escuchando.
 *   - `reject(error)`: Se llama para indicar que la promesa falló. El `error` se
 *     entrega al manejador de errores.
 *
 * - El Contrato de `.then()` y `.catch()`: Estos métodos NO se ejecutan de
 *   inmediato. En su lugar, REGISTRAN funciones ("callbacks") que se ejecutarán
 *   en el futuro, cuando la promesa cambie de estado.
 *
 *   - `.then(funcionDeExito)`: Registra una función que se llamará si la promesa
 *     se CUMPLE. La promesa, al resolverse, pasará su `valor` como argumento a
 *     `funcionDeExito`.
 *     Ejemplo: `.then(resultado => { console.log(resultado); })`
 *
 *   - `.catch(funcionDeFallo)`: Registra una función que se llamará si la promesa
 *     se RECHAZA. La promesa, al fallar, pasará su `error` como argumento a
 *     `funcionDeFallo`.
 *     Ejemplo: `.catch(error => { console.error(error); })`
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Encapsular una operación asíncrona (`setTimeout`) dentro de una
 * Promesa y consumirla correctamente usando `.then()` y `.catch()`.
 *
 * 1. Crea una función "fábrica" llamada `simularRetraso`. Esta función aceptará
 *    un parámetro: `tiempoEnMs`.
 *
 * 2. Dentro de la función, `return new Promise(...)`.
 *
 * 3. En el `ejecutor` de la promesa, usa `setTimeout`. Cuando el temporizador
 *    finalice, llama a `resolve()` con un mensaje de éxito.
 *
 * 4. Fuera de la función, llama a `simularRetraso(1500)` y guarda la promesa
 *    devuelta en una constante, por ejemplo `miPromesa`.
 *
 * 5. Ahora, consume la promesa:
 *    a) Encadena `.then()` a `miPromesa`. Pásale una función flecha que reciba
 *       un parámetro (el `mensaje`) y lo imprima en la consola.
 *
 *    b) Encadena `.catch()` a la promesa. Pásale una función flecha que reciba
 *       un `error` y lo imprima usando `console.error()`.
 *
 *    c) Añade un `console.log` justo después de llamar a `simularRetraso` para
 *       observar cómo se ejecuta antes que el `.then()`.
 *
 */

// Escribe tu código aquí debajo.