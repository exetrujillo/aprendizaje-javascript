/**
 * /Soluciones/013_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Los métodos `.find()` y `.findIndex()` son herramientas de búsqueda eficientes
 * y expresivas. A diferencia de `.filter()`, que siempre recorre el array
 * completo, estos métodos se detienen tan pronto como encuentran una coincidencia,
 * lo que puede hacerlos más performantes para ciertos casos de uso.
 */

const usuarios = [
  { id: 1, nombre: 'Homero Simpson', rol: 'Admin' },
  { id: 2, nombre: 'Batman', rol: 'Editor' },
  { id: 3, nombre: 'Shrek', rol: 'Lector' },
  { id: 4, nombre: 'Dora la Exploradora', rol: 'Editor' }
];

// --- 1. Buscando un objeto con .find() ---
console.log("--- Búsqueda Exitosa (.find) ---");
const usuarioTres = usuarios.find(usuario => usuario.id === 3);
console.log(usuarioTres);
// Salida esperada: { id: 3, nombre: 'Shrek', rol: 'Lector' }


// --- 2. Manejando un caso sin resultados ---
console.log("\n--- Búsqueda Fallida (.find) ---");
const usuarioInexistente = usuarios.find(usuario => usuario.id === 11);
console.log(usuarioInexistente);
// Salida esperada: undefined


// --- 3. Buscando el índice de un elemento con .findIndex() ---
console.log("\n--- Búsqueda de Índice (.findIndex) ---");
const indicePrimerEditor = usuarios.findIndex(usuario => usuario.rol === 'Editor');
console.log(`El índice del primer editor es: ${indicePrimerEditor}`);
// Salida esperada: El índice del primer editor es: 1 (la posición de 'Batman')

// Caso de búsqueda de índice fallida
const indiceRolInexistente = usuarios.findIndex(usuario => usuario.rol === 'CEO');
console.log(`Índice de un rol que no existe: ${indiceRolInexistente}`);
// Salida esperada: Índice de un rol que no existe: -1