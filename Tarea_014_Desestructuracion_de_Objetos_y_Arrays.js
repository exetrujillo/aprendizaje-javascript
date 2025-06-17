/**
 * Tarea_014_Desestructuracion_de_Objetos_y_Arrays
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Desestructuración de Objetos: Es una sintaxis que permite "desempacar"
 *   propiedades de un objeto en variables distintas.
 *   En lugar de:
 *     `const nombre = usuario.nombre; const edad = usuario.edad;`
 *   Podemos hacer:
 *     `const { nombre, edad } = usuario;`
 *   Los nombres de las variables deben coincidir con los nombres de las claves.
 *
 * - Desestructuración de Arrays: Permite desempacar valores de un array
 *   en variables distintas, basándose en su posición.
 *   `const [primerElemento, segundoElemento] = miArray;`
 *
 * - Desestructuración en Parámetros de Función: Como ya vimos brevemente,
 *   se puede desestructurar directamente en la lista de parámetros de una
 *   función para acceder a las propiedades de un objeto pasado como argumento
 *   de forma más limpia.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Practicar la sintaxis de desestructuración para escribir código
 * más conciso y legible al trabajar con objetos y arrays.
 *
 * 1. **Desestructuración de Objetos:**
 *    a) Crea un objeto `coche` con las propiedades: `marca`, `modelo`, `año` y `color`.
 *    b) Usa la desestructuración para crear dos constantes, `marca` y `modelo`,
 *       directamente desde el objeto `coche`.
 *    c) Imprime las nuevas constantes `marca` y `modelo`.
 *
 * 2. **Desestructuración de Arrays:**
 *    a) Crea un array `coordenadas` con tres valores numéricos (ej: `[10, 20, 30]`).
 *    b) Usa la desestructuración para extraer los dos primeros valores en dos
 *       constantes llamadas `x` e `y`.
 *    c) Imprime las constantes `x` e `y`.
 *
 * 3. **Desestructuración en una Función:**
 *    a) Crea una función llamada `mostrarResumen`.
 *    b) La función debe aceptar un objeto como parámetro. Usa la desestructuración
 *       directamente en la firma de la función para extraer las propiedades
 *       `nombre` y `categoria` de un objeto producto.
 *    c) Dentro de la función, imprime un mensaje como:
 *       "Producto: Laptop, Categoría: Electrónica".
 *    d) Llama a la función pasándole un objeto de ejemplo con al menos esas dos
 *       propiedades.
 *
 */

// Escribe tu código aquí debajo.