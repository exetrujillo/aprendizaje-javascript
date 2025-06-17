/**
 * Tarea_012_Encadenando_Metodos
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Composición de Métodos: La verdadera potencia de los métodos funcionales
 *   (map, filter, reduce) se revela cuando se componen o encadenan. Esto
 *   permite crear "pipelines" de datos: secuencias de transformaciones
 *   claras y legibles que procesan datos de un estado inicial a un estado final.
 *
 * - Flujo de Datos: Visualiza cómo los datos fluyen a través de la cadena:
 *   1. El array original entra en `.filter()`.
 *   2. Un array más pequeño (filtrado) sale de `.filter()` y entra en `.map()`.
 *   3. Un array transformado (del mismo tamaño que el filtrado) sale de `.map()`
 *      y entra en `.reduce()`.
 *   4. Un único valor final sale de `.reduce()`.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Resolver un problema complejo combinando `.filter()`, `.map()`, y
 * `.reduce()` en una sola cadena de operaciones.
 *
 * 1. Comienza con el siguiente array de productos en un inventario:
 */
const inventario = [
    { nombre: 'Laptop', categoria: 'Electrónica', precio: 1200, stock: 4 },
    { nombre: 'Smartphone', categoria: 'Electrónica', precio: 800, stock: 10 },
    { nombre: 'Libro de JS', categoria: 'Libros', precio: 35, stock: 25 },
    { nombre: 'Silla de Oficina', categoria: 'Hogar', precio: 150, stock: 8 },
    { nombre: 'Teclado Mecánico', categoria: 'Electrónica', precio: 100, stock: 15 }
];
/*
 * 2. Tu meta es calcular el valor total del inventario pero **únicamente**
 *    de los productos que pertenecen a la categoría 'Electrónica'.
 *
 * 3. Crea una constante `valorTotalElectronica` y asígnale el resultado de
 *    encadenar los tres métodos sobre el array `inventario`:
 *
 *    a) **`.filter()`**: Primero, filtra el array para quedarte solo con los
 *       objetos cuya `categoria` sea 'Electrónica'.
 *
 *    b) **`.map()`**: Después, sobre el resultado del filtro, transforma cada
 *       objeto de producto en un único número: el valor total de su stock
 *       (calculado como `precio * stock`). El resultado de este paso será un
 *       array de números. (Ej: `[4800, 8000, 1500]`).
 *
 *    c) **`.reduce()`**: Finalmente, sobre el array de números, súmalos todos
 *       para obtener el valor total final.
 *
 * 4. Imprime el resultado en la consola con un mensaje claro, por ejemplo:
 *    "El valor total del inventario de Electrónica es: $XXXXX".
 *
 */

// Escribe tu código aquí debajo (puedes copiar el array `inventario`).