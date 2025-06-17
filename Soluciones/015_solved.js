/**
 * /Soluciones/015_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Los operadores spread (`...`) y rest (`...`) usan la misma sintaxis, pero
 * cumplen propósitos opuestos dependiendo del contexto.
 * - Spread "expande" o "desempaqueta" elementos.
 * - Rest "agrupa" o "empaqueta" elementos.
 */

// --- 1. Operador Spread con Arrays ---
console.log("--- Spread con Arrays ---");
const numerosBase = [1, 2, 3];

// Se expanden los elementos de `numerosBase` dentro del nuevo array.
const numerosCompletos = [0, ...numerosBase, 4];
console.log(numerosCompletos); // Salida: [ 0, 1, 2, 3, 4 ]


// --- 2. Operador Spread con Objetos ---
console.log("\n--- Spread con Objetos ---");
const configuracionBase = { theme: 'dark' };

// Se expanden los pares clave-valor de `configuracionBase` en el nuevo objeto.
// Si hubiera claves duplicadas, la última en definirse "gana".
const configuracionUsuario = { ...configuracionBase, fontSize: 16 };
console.log(configuracionUsuario); // Salida: { theme: 'dark', fontSize: 16 }


// --- 3. Parámetros Rest en una Función ---
console.log("\n--- Parámetros Rest en Funciones ---");
// La sintaxis `...numeros` agrupa todos los argumentos pasados a la función
// en un array llamado `numeros`.
function sumarTodo(...numeros) {
    console.log("Argumentos agrupados en el array:", numeros);
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

const suma1 = sumarTodo(1, 2, 3, 4);
console.log(`Resultado de sumar (1,2,3,4): ${suma1}`); // Salida: 10

const suma2 = sumarTodo(10, 20);
console.log(`Resultado de sumar (10,20): ${suma2}`); // Salida: 30