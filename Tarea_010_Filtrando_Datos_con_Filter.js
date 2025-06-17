/**
 * Tarea_010_Filtrando_Datos_con_Filter
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Método `.filter()`: Al igual que `.map()`, es una función de orden superior
 *   de los arrays que no modifica el array original. Su propósito es crear un
 *   **nuevo array** que contiene únicamente los elementos del array original
 *   que pasan una prueba (o cumplen una condición).
 *
 * - Función Callback Booleana: La función que se le pasa a `.filter()` debe
 *   devolver un valor booleano (`true` o `false`).
 *   - Si la función devuelve `true` para un elemento, ese elemento se incluye
 *     en el nuevo array.
 *   - Si devuelve `false`, el elemento se descarta.
 *
 * - Encadenamiento de Métodos (Method Chaining): Como los métodos de array como
 *   `.filter()` y `.map()` devuelven un nuevo array, es posible llamar a otro
 *   método de array directamente sobre el resultado. Por ejemplo:
 *   `array.filter(...).map(...)`. Esto permite crear pipelines de procesamiento
 *   de datos muy expresivos y potentes en una sola línea.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Crear un subconjunto de datos de un array que cumpla con una
 * condición específica, utilizando el método `.filter()`.
 *
 * 1. Utiliza la `listaDeUsuarios` del ejercicio anterior (puedes añadir más
 *    usuarios con diferentes edades para que la prueba sea más interesante,
 *    por ejemplo, algunos mayores y otros menores de 30).
 *
 * 2. Tu meta es crear una nueva lista que solo contenga a los usuarios
 *    cuya edad sea MAYOR O IGUAL a 30 años.
 *
 * 3. Utiliza el método `.filter()` sobre `listaDeUsuarios`.
 *
 * 4. Pásale una función flecha. La lógica dentro de esta función debe devolver
 *    el resultado de la comparación `usuario.edad >= 30`. Esta expresión ya
 *    evalúa a `true` o `false` por sí misma.
 *
 * 5. Guarda el nuevo array filtrado en una constante llamada `usuariosMayores`.
 *
 * 6. Imprime en la consola el array `usuariosMayores` para verificar el resultado.
 *
 * ---[OPCIONAL] Desafío extra---
 *
 * ¿Puedes, en una sola línea de código, filtrar a los usuarios mayores o iguales a 30
 * y LUEGO transformar el resultado para obtener un array que contenga solo
 * sus NOMBRES? (Pista: encadena `.filter()` y `.map()`).
 *
 */

// Escribe tu código aquí debajo.