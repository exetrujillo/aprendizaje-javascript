/**
 * /Soluciones/016_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Este ejercicio ilustra la naturaleza no bloqueante de JavaScript. La función
 * `setTimeout` es el ejemplo más simple de una operación asíncrona.
 *
 * El flujo de ejecución es el siguiente:
 * 1. Se ejecuta `console.log("Inicio del script.")` y se imprime inmediatamente.
 * 2. Se encuentra `setTimeout`. JavaScript no espera. Entrega el callback y el
 *    temporizador a una API del entorno (de Node.js o del navegador) y continúa
 *    con la siguiente línea.
 * 3. Se ejecuta `console.log("Fin del script. ...")` y se imprime inmediatamente.
 * 4. El script principal ha terminado. El programa ahora está a la espera de eventos.
 * 5. Después de 2 segundos, la API del entorno notifica que el temporizador
 *    ha finalizado. El callback `() => console.log(...)` se añade a una cola.
 * 6. El "Event Loop" de JavaScript, al ver que la pila de ejecución está vacía,
 *    toma el callback de la cola y lo ejecuta. Ahora se imprime
 *    "¡Tarea asíncrona completada!".
 */

console.log("Inicio del script.");

setTimeout(() => {
  console.log("¡Tarea asíncrona completada!");
}, 2000);

console.log("Fin del script. El programa sigue...");