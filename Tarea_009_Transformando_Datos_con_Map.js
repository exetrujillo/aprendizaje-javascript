/**
 * Tarea_009_Transformando_Datos_con_Map
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Método `.map()`: Es una función de orden superior de los arrays. Itera sobre
 *   cada elemento de un array, aplica una función (callback) a ese elemento y
 *   devuelve un **nuevo array** del mismo tamaño, compuesto por los resultados
 *   de cada llamada a la función callback. No modifica el array original.
 *
 * - Funciones Flecha (Arrow Functions): La sintaxis `(param) => { ... }` o su
 *   forma concisa `(param) => expresion` es la manera más común y legible de
 *   proporcionar la lógica para métodos como `.map()`.
 *
 * - Programación Declarativa: En lugar de decirle al programa *cómo* hacer un
 *   bucle paso a paso (estilo imperativo del `for`), le decimos *qué* queremos
 *   lograr (transformar cada usuario en una descripción). `.map()` es un
*    ejemplo de este estilo.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Transformar un array de objetos en un array de strings utilizando
 * el método funcional `.map()`.
 *
 * 1. Comienza con la misma `listaDeUsuarios` del ejercicio anterior.
 *
 * 2. Esta vez, NO necesitas la función `describirUsuario` separada.
 *
 * 3. Llama al método `.map()` sobre tu `listaDeUsuarios`.
 *
 * 4. Pásale a `.map()` una función flecha. Esta función recibirá un `usuario`
 *    en cada iteración.
 *
 * 5. Dentro de tu función flecha, construye y `return` el string de descripción
 *    que ya sabes crear (ej: `${usuario.nombre}, de ${usuario.edad}...`).
 *
 * 6. El resultado de `listaDeUsuarios.map(...)` será un NUEVO array que
 *    contiene todos los strings de descripción. Guarda este nuevo array en
 *    una constante llamada `descripciones`.
 *
 * 7. Finalmente, imprime el array `descripciones` completo en la consola.
 *
 */

// Escribe tu código aquí debajo.