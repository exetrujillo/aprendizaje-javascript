/**
 * /Soluciones/007_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El objetivo es agrupar datos relacionados en un objeto y pasar ese objeto
 * a una función para que lo procese. Esto mantiene el código organizado, ya
 * que la función opera sobre una entidad completa en lugar de múltiples
 * variables sueltas.
 */

// Se define la entidad 'usuario' como un objeto con sus propiedades.
const usuario = {
    nombre: "Tulio",
    edad: 42,
    pais: "Chipre"
};

// --- ENFOQUE 1: Acceso a Propiedades con Notación de Punto ---
// La función recibe el objeto completo (en este caso, bajo el nombre de
// parámetro 'user'). Dentro de la función, se accede a cada propiedad
// necesaria usando la sintaxis `user.propiedad`.

function describirUsuarioV1(user) {
    return `${user.nombre}, de ${user.edad} años, vive en ${user.pais}.`;
}

const descripcionV1 = describirUsuarioV1(usuario);
console.log("Versión 1 (Notación de Punto):", descripcionV1);


// --- ENFOQUE 2: Con Desestructuración en los Parámetros (Avanzado) ---
// Esta es una técnica más moderna y a menudo preferida. En lugar de recibir
// el objeto entero, se "desestructuran" las propiedades que nos interesan
// directamente en la firma de la función.
// El código dentro de la función se vuelve más limpio, ya que podemos usar
// `nombre` directamente en lugar de `user.nombre`.
// Además, deja muy claro qué propiedades espera y utilizará la función.

function describirUsuarioV2({ nombre, edad, pais }) {
    return `${nombre}, de ${edad} años, vive en ${pais}.`;
}

const descripcionV2 = describirUsuarioV2(usuario);
console.log("Versión 2 (Desestructuración):", descripcionV2);