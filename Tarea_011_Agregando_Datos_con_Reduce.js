/**
 * Tarea_011_Agregando_Datos_con_Reduce
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Método `.reduce()`: Es el método de array más potente y flexible. Se utiliza
 *   para "reducir" una lista a un único valor. Este valor puede ser un número
 *   (como en una suma), un string, un objeto o incluso otro array.
 *
 * - La Función Reductora (Callback): A diferencia de map/filter, la función
 *   que se pasa a `reduce` recibe dos argumentos principales:
 *   1. `acumulador`: El valor que se está construyendo. En la primera iteración,
 *      es igual al `valorInicial`. En las siguientes, es el valor que retornó
 *      la iteración anterior.
 *   2. `elementoActual`: El elemento del array que se está procesando en la
 *      iteración actual.
 *
 * - Valor Inicial: `reduce` toma un segundo argumento opcional: el `valorInicial`
 *   del `acumulador`. Es crucial proporcionarlo para evitar comportamientos
 *   inesperados, especialmente con arrays vacíos. Si queremos sumar, el
 *   valor inicial es `0`.
 *
 * - El Contrato de `return`: La función reductora **siempre** debe retornar el
 *   nuevo valor del `acumulador`. Si olvidas el `return`, el acumulador se
 *   convertirá en `undefined` para la siguiente iteración.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Calcular un valor agregado a partir de un array de objetos
 * utilizando el método `.reduce()`.
 *
 * 1. Imagina que tienes un carrito de compras representado por un array de
 *    objetos. Cada objeto es un producto con `nombre`, `precio` y `cantidad`.
 *    Crea una constante `carrito` con al menos 3 productos.
 *    Ejemplo: ` { nombre: 'Papel aluminio', precio: 1790, cantidad: 2 } `
 *
 * 2. Tu meta es calcular el costo total del carrito. El costo total es la suma
 *    de (precio * cantidad) de cada producto.
 *
 * 3. Utiliza el método `.reduce()` sobre el array `carrito`.
 *
 * 4. Pasa una función reductora que reciba `totalParcial` (nuestro acumulador)
 *    y `producto` (nuestro elemento actual).
 *
 * 5. Como segundo argumento de `.reduce()`, pasa `0` como valor inicial, ya que
 *    empezamos a sumar desde cero.
 *
 * 6. Dentro de la función reductora, calcula el costo de este producto:
 *    `producto.precio * producto.cantidad`.
 *
 * 7. Suma este costo al `totalParcial`.
 *
 * 8. **MUY IMPORTANTE**: Retorna el nuevo `totalParcial` para que se use en la
 *    siguiente iteración.
 *
 * 9. Guarda el resultado final de `.reduce()` en una constante `costoTotal`.
 *
 * 10. Imprime un mensaje en la consola como "El costo total del carrito es: $XXXX".
 *
 */

// Escribe tu código aquí debajo.