/**
 * Tarea_008_Listas_de_Entidades_Complejas
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Arrays de Objetos: Esta es quizás la estructura de datos más común que
 *   encontrarás en el mundo real. Cuando obtienes datos de una API o una
 *   base de datos, a menudo vienen en forma de una lista donde cada elemento
 *   es un objeto complejo (una lista de usuarios, de productos, de posts, etc.).
 *
 * - Iteración sobre Arrays Complejos: El bucle `for...of` sigue siendo la
 *   herramienta perfecta. En cada iteración, la variable del bucle (ej: `usuario`)
 *   contendrá el objeto completo de esa posición del array, listo para ser
 *   utilizado.
 *
 * - Reutilización de Funciones (Principio DRY): Aquí es donde el trabajo
 *   anterior da sus frutos. Nuestra función `describirUsuario` está diseñada
 *   para trabajar con *cualquier* objeto que tenga la estructura correcta,
*    por lo que podemos aplicarla a cada elemento de nuestra nueva lista.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Iterar sobre una lista de objetos complejos y aplicar una función
 * de procesamiento a cada uno de ellos.
 *
 * 1. Comienza reutilizando tu función `describirUsuario` del ejercicio anterior.
 *
 * 2. Crea un array llamado `listaDeUsuarios`.
 *
 * 3. Dentro de este array, define al menos TRES objetos de usuario. Cada
 *    objeto debe tener la misma estructura que ya conoces: `{ nombre, edad, pais }`.
 *
 * 4. Escribe un bucle `for...of` que recorra cada `usuario` en tu `listaDeUsuarios`.
 *
 * 5. Dentro del bucle, para cada objeto de usuario, llama a tu función
 *    `describirUsuario` y pasa el objeto actual como argumento.
 *
 * 6. Imprime en la consola el resultado devuelto por la función en cada iteración.
 *
 * ---SALIDA ESPERADA (ejemplo)---
 * Carlos, de 30 años, vive en Chile.
 * Ana, de 25 años, vive en Argentina.
 * Luis, de 35 años, vive en Perú.
 *
 */

// Escribe tu código aquí debajo.