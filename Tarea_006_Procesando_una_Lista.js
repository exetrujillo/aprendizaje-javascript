/**
 * Tarea_006_Procesando_una_Lista
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Arrays (`[]`): Son estructuras de datos fundamentales que permiten almacenar
 *   una colección ordenada de elementos (números, strings, objetos, etc.).
 *   Se definen con corchetes.
 *
 * - Bucle `for...of`: Es la forma moderna y recomendada para iterar sobre los
 *   *valores* de un objeto iterable, como un array. Su sintaxis es más limpia
 *   y menos propensa a errores que un bucle `for` tradicional con un índice.
 *   `for (const elemento of array) { ... }`
 *
 * - Reutilización de Funciones: Este es el núcleo del ejercicio. Demuestra
 *   cómo una función bien diseñada (como `crearSaludo`) puede ser aplicada
 *   repetidamente a diferentes datos, evitando la duplicación de código.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Utilizar bucles y funciones para procesar eficientemente una
 * colección de datos (un array).
 *
 * 1. Primero, reutiliza tu función `crearSaludo` del ejercicio anterior.
 *    Puedes copiarla y pegarla al inicio de tu archivo.
 *
 * 2. Crea un array (una lista) de nombres. Por ejemplo:
 *    `const nombres = ["Ana", "Juan", "Diego", "Lucía"];`
 *
 * 3. Escribe un bucle `for...of` que recorra cada uno de los nombres
 *    en el array.
 *
 * 4. Dentro del bucle, por cada nombre que iteres, llama a tu función
 *    `crearSaludo` pasándole el nombre actual como argumento.
 *
 * 5. Imprime directamente en la consola el resultado que te devuelve la
 *    función en cada pasada del bucle.
 *
 * ---SALIDA ESPERADA (ejemplo)---
 * Hola, Ana
 * Hola, Juan
 * Hola, Diego
 * Hola, Lucía
 *
 */

// Escribe tu código aquí debajo.