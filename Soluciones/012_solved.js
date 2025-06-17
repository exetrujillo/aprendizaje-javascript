/**
 * /Soluciones/012_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Este ejercicio demuestra el poder de la composición de funciones en la
 * programación funcional. Al encadenar métodos, podemos construir un "pipeline"
 * de procesamiento de datos que es a la vez legible y eficiente. Cada método
 * realiza una tarea específica y pasa su resultado al siguiente.
 */

const inventario = [
    { nombre: 'Laptop', categoria: 'Electrónica', precio: 1200, stock: 4 },
    { nombre: 'Smartphone', categoria: 'Electrónica', precio: 800, stock: 10 },
    { nombre: 'Libro de JS', categoria: 'Libros', precio: 35, stock: 25 },
    { nombre: 'Silla de Oficina', categoria: 'Hogar', precio: 150, stock: 8 },
    { nombre: 'Teclado Mecánico', categoria: 'Electrónica', precio: 100, stock: 15 }
];

// El pipeline se lee de arriba hacia abajo:
const valorTotalElectronica = inventario
    // 1. Filtrar: Nos quedamos solo con los productos de 'Electrónica'.
    // El resultado es un nuevo array: [{Laptop...}, {Smartphone...}, {Teclado...}]
    .filter(producto => producto.categoria === 'Electrónica')

    // 2. Mapear: Transformamos cada producto filtrado en su valor de inventario.
    // El resultado es un nuevo array de números: [4800, 8000, 1500]
    .map(producto => producto.precio * producto.stock)

    // 3. Reducir: Sumamos todos los valores del array de números.
    // El resultado es un único valor: 14300
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(`El valor total del inventario de Electrónica es: $${valorTotalElectronica}`);