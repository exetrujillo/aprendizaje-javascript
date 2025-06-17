/**
 * /Soluciones/002_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Se declara una constante `nombre` para almacenar el dato. El uso de `const`
 * es una buena práctica para valores que no se espera que cambien,
 * previniendo reasignaciones accidentales.
 *
 * Para la impresión, se utiliza un `template literal` (delimitado por ``).
 * Esto permite incrustar la variable `nombre` directamente en el string
 * usando la sintaxis `${nombre}`, resultando en un código más limpio y
 * fácil de leer que la concatenación tradicional con el operador `+`.
 */

const nombre = "Ana";
console.log(`Hola, ${nombre}`);