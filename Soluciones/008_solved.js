/**
 * /Soluciones/008_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El objetivo es procesar una lista de entidades complejas. Esta es una tarea
 * extremadamente común en desarrollo de software, simulando la recepción de
 * datos desde una API.
 *
 * La solución combina la reutilización de una función de ayuda (`describirUsuario`)
 * con un bucle para aplicarla a cada elemento de la colección.
 */

// Se define la función de ayuda. Usar desestructuración en los parámetros
// ({ nombre, edad, pais }) hace que la función sea más legible.
function describirUsuario({ nombre, edad, pais }) {
    return `${nombre}, de ${edad} años, vive en ${pais}.`;
}

// Se define la estructura de datos principal: un array de objetos.
const listaDeUsuarios = [
    { nombre: "Carlos", edad: 30, pais: "Chile" },
    { nombre: "Ana", edad: 25, pais: "Argentina" },
    { nombre: "Luis", edad: 35, pais: "Perú" }
];


// --- ENFOQUE 1: Bucle `for...of` (Imperativo) ---
// Este enfoque es imperativo: le decimos al programa "qué hacer" paso a paso.
// Es muy claro, legible y eficiente.

console.log("--- Solución con for...of ---");
for (const usuario of listaDeUsuarios) {
    console.log(describirUsuario(usuario));
}


// --- ENFOQUE 2: Método `.map()` (Declarativo/Funcional) ---
// Este enfoque es más declarativo: describimos "el resultado que queremos".
// El método `.map()` no ejecuta una acción por cada elemento, sino que
// TRANSFORMA cada elemento del array original en un nuevo elemento,
// devolviendo un NUEVO array con todos los elementos transformados.
// Este es un pilar de la programación funcional en JavaScript.

console.log("\n--- Solución con .map() ---");
const descripciones = listaDeUsuarios.map(usuario => describirUsuario(usuario));

// El resultado es un nuevo array de strings.
console.log(descripciones);
// Para ver la salida igual que en el `for...of`, podemos imprimir cada elemento.
descripciones.forEach(d => console.log(d));