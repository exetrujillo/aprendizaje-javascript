/**
 * Tarea_016_Entendiendo_la_Asincronia
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Asincronía: En JavaScript, muchas operaciones (como peticiones de red,
 *   lectura de archivos o temporizadores) no bloquean el hilo principal de
 *   ejecución. El programa inicia la tarea y sigue ejecutando el resto del
 *   código. La tarea asíncrona se completa "en el fondo" y notifica cuando
 *   termina. Este es el corazón del modelo de concurrencia de Node.js.
 *
 * - `setTimeout`: Es una función global que nos permite ejecutar un código
 *   (un "callback") después de que haya transcurrido un tiempo mínimo
 *   especificado en milisegundos. Es la forma más simple de simular una
 *   operación asíncrona que toma tiempo.
 *
 * - Callback: Es simplemente una función que se pasa como argumento a otra
 *   función, con la intención de que sea ejecutada en el futuro. En el caso
 *   de `setTimeout`, el callback se ejecuta cuando el temporizador finaliza.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Observar el comportamiento del código asíncrono y comprender
 * que no todo se ejecuta en el orden secuencial en que está escrito.
 *
 * 1. Escribe un `console.log()` que diga "Inicio del script.".
 *
 * 2. Utiliza la función `setTimeout`. Pásale dos argumentos:
 *    a) Una función flecha (callback). Dentro de esta función, escribe un
 *       `console.log()` que diga "¡Tarea asíncrona completada!".
 *    b) El número `2000` (que representa 2000ms o 2 segundos).
 *
 * 3. Inmediatamente DESPUÉS de la línea donde llamas a `setTimeout`, añade un
 *    último `console.log()` que diga "Fin del script. El programa sigue...".
 *
 * 4. Ejecuta el código. Presta MUCHA atención al ORDEN en que los mensajes
 *    aparecen en la consola. ¿Qué se imprime primero? ¿Qué se imprime al final?
 *    La respuesta a esta pregunta es la clave de la asincronía.
 *
 */

// Escribe tu código aquí debajo.
console.log("Inicio del script.");
setTimeout(() => console.log("¡Tarea asíncrona completada!") , 2000);
console.log("Fin del script. El programa sigue...");