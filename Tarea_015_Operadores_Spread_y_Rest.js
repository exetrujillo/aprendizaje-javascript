/**
 * Tarea_015_Operadores_Spread_y_Rest
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Operador Spread (`...`): Se usa para "expandir" elementos de un iterable
 *   (como un array u objeto) en lugares donde se esperan múltiples elementos
 *   o pares clave-valor. Es extremadamente útil para crear copias o combinar
 *   arrays y objetos de forma inmutable.
 *   - Copiar array: `const copia = [...original];`
 *   - Combinar arrays: `const combinado = [...arr1, ...arr2];`
 *   - Copiar objeto: `const copia = { ...original };`
 *
 * - Parámetros Rest (`...`): Se usa en la definición de una función para
 *   agrupar un número indefinido de argumentos en un único array. Permite
 *   crear funciones que aceptan un número variable de entradas.
 *   `function miFuncion(primerArg, ...restoDeArgs) { ... }`
 *   Aquí, `restoDeArgs` será un array con todos los argumentos pasados
 *   después del primero.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Utilizar los operadores spread y rest para manipular datos de
 * forma flexible e inmutable.
 *
 * 1. **Usando el Operador Spread con Arrays:**
 *    a) Crea un array `numerosBase` con los valores `[1, 2, 3]`.
 *    b) Crea un nuevo array `numerosCompletos` que contenga el número `0` al
 *       principio, luego todos los elementos de `numerosBase`, y finalmente
 *       el número `4` al final. Usa el operador spread.
 *    c) Imprime `numerosCompletos`. El resultado debería ser `[0, 1, 2, 3, 4]`.
 *
 * 2. **Usando el Operador Spread con Objetos:**
 *    a) Crea un objeto `configuracionBase` con la propiedad `theme: 'dark'`.
 *    b) Crea un nuevo objeto `configuracionUsuario` que contenga todas las
 *       propiedades de `configuracionBase` y además una nueva propiedad
 *       `fontSize: 16`. Usa el operador spread.
 *    c) Imprime `configuracionUsuario`.
 *
 * 3. **Usando Parámetros Rest en una Función:**
 *    a) Crea una función llamada `sumarTodo`.
 *    b) La función debe usar parámetros rest para aceptar cualquier cantidad
 *       de números como argumentos.
 *    c) Dentro de la función, el parámetro rest será un array. Usa el método
 *       `.reduce()` sobre ese array para sumar todos los números.
 *    d) La función debe devolver la suma total.
 *    e) Llama a la función con varios números (ej: `sumarTodo(1, 2, 3, 4)`)
 *       y guarda el resultado.
 *    f) Imprime el resultado.
 *
 */

// Escribe tu código aquí debajo.