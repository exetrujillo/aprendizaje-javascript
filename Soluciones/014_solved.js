/**
 * /Soluciones/014_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * La desestructuración es una de las características más convenientes de ES6.
 * Permite escribir código más limpio y expresivo al extraer datos de objetos
 * y arrays.
 */

// --- 1. Desestructuración de Objetos ---
console.log("--- Desestructuración de Objetos ---");
const coche = {
    marca: "Kia",
    modelo: "Rio",
    anio: "2017",
    color: "rojo"
};

// Se extraen las propiedades 'marca' y 'modelo' en constantes del mismo nombre.
// El orden no importa, solo que el nombre de la variable coincida con la clave.
const { marca, modelo } = coche;
console.log(`Marca: ${marca}, Modelo: ${modelo}`);


// --- 2. Desestructuración de Arrays ---
console.log("\n--- Desestructuración de Arrays ---");
const coordenadas = [7, 21, 49];

// Se extraen los valores por su posición. 'x' tomará el valor del índice 0,
// 'y' tomará el valor del índice 1. El tercer elemento se ignora.
const [x, y] = coordenadas;
console.log(`Coordenada X: ${x}, Coordenada Y: ${y}`);


// --- 3. Desestructuración en Parámetros de Función ---
console.log("\n--- Desestructuración en Funciones ---");
// La función espera un objeto, pero en lugar de recibir el objeto completo,
// desestructura directamente las propiedades 'nombre' y 'categoria' que necesita.
function mostrarResumen({ nombre, categoria }) {
    console.log(`Producto: ${nombre}, Categoría: ${categoria}`);
}

const producto = {
    nombre: 'Laptop',
    marca: 'Chancho',
    categoria: 'Electrónica',
    precio: 1200
};

// Al llamar a la función, esta solo tomará las propiedades que le interesan.
mostrarResumen(producto);