/**
 * /Soluciones/009_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El método `.map()` es fundamental en la programación funcional con JavaScript.
 * Su propósito es tomar un array y transformarlo en un nuevo array de la misma
 * longitud, donde cada elemento es el resultado de aplicar una función de
 * transformación al elemento original correspondiente.
 */

const listaDeUsuarios = [
    { nombre: "Carlos", edad: 30, pais: "Chile" },
    { nombre: "Ana", edad: 25, pais: "Argentina" },
    { nombre: "Luis", edad: 35, pais: "Perú" }
];

// --- ENFOQUE 1: Función Flecha con Parámetro de Objeto ---
// Esta es la forma más directa. La función flecha recibe el objeto `user`
// completo y accede a sus propiedades usando la notación de punto.

console.log("--- Enfoque 1: Básico ---");
const descripcionesV1 = listaDeUsuarios.map((user) => {
    return `${user.nombre}, de ${user.edad} años, vive en ${user.pais}.`;
});
console.log(descripcionesV1);


// --- ENFOQUE 2: Función Flecha con Retorno Implícito (Más Conciso) ---
// Cuando la función flecha solo contiene una sentencia `return`, se pueden
// omitir las llaves `{}` y la palabra `return`. Esto hace el código mucho
// más compacto y legible.

console.log("\n--- Enfoque 2: Conciso (Retorno Implícito) ---");
const descripcionesV2 = listaDeUsuarios.map(
    user => `${user.nombre}, de ${user.edad} años, vive en ${user.pais}.`
);
console.log(descripcionesV2);


// --- ENFOQUE 3: Combinando con Desestructuración (Avanzado y Recomendado) ---
// Este es el enfoque más elegante. Se desestructuran las propiedades del
// objeto directamente en la lista de parámetros de la función flecha.
// Esto elimina la necesidad de repetir `user.` dentro del template string,
// haciendo el código más limpio y menos propenso a errores.

console.log("\n--- Enfoque 3: Con Desestructuración ---");
const descripcionesV3 = listaDeUsuarios.map(
    ({ nombre, edad, pais }) => `${nombre}, de ${edad} años, vive en ${pais}.`
);
console.log(descripcionesV3);