/**
 * Tarea_013_Encontrando_Elementos
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Método `.find()`: Es similar a `.filter()`, pero con una diferencia clave:
 *   devuelve **solo el primer elemento** del array que cumple con la condición
 *   proporcionada. Si ningún elemento cumple la condición, devuelve `undefined`.
 *   Es perfecto cuando sabes que buscas un único elemento (o solo te interesa el primero).
 *
 * - Método `.findIndex()`: Funciona exactamente igual que `.find()`, pero en
 *   lugar de devolver el elemento en sí, devuelve su **índice** (su posición)
 *   en el array. Si no encuentra ningún elemento que cumpla la condición,
 *   devuelve `-1`. Es útil cuando necesitas saber dónde está un elemento.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Utilizar los métodos `.find()` y `.findIndex()` para localizar
 * información específica dentro de un array de objetos.
 *
 * 1. Utiliza el siguiente array de usuarios:
 */
const usuarios = [
  { id: 1, nombre: 'Homero Simpson', rol: 'Admin' },
  { id: 2, nombre: 'Batman', rol: 'Editor' },
  { id: 3, nombre: 'Shrek', rol: 'Lector' },
  { id: 4, nombre: 'Dora la Exploradora', rol: 'Editor' },
  { id: 5, nombre: 'Gokú', rol: 'Lector' },
  { id: 6, nombre: 'Bob Esponja', rol: 'Editor' },
  { id: 7, nombre: 'Walter White', rol: 'Admin' },
  { id: 8, nombre: 'Don Ramón', rol: 'Lector' },
  { id: 9, nombre: 'Yoda', rol: 'Editor' },
  { id: 10, nombre: 'Pikachu', rol: 'Lector' }
];

/*
 * 2. **Buscando un objeto por su propiedad:**
 *    a) Usa `.find()` para buscar al usuario cuyo `id` es `3`.
 *    b) Guarda el objeto encontrado en una constante llamada `usuarioTres`.
 *    c) Imprime `usuarioTres` en la consola.
 *
 * 3. **Manejando un caso sin resultados:**
 *    a) Usa `.find()` para buscar a un usuario cuyo `id` sea `11` (que no existe).
 *    b) Guarda el resultado en una constante llamada `usuarioInexistente`.
 *    c) Imprime `usuarioInexistente`. Observa que el resultado es `undefined`.
 *
 * 4. **Buscando el índice de un elemento:**
 *    a) Usa `.findIndex()` para encontrar la posición (el índice) del primer
 *       usuario que tenga el `rol` de 'Editor'.
 *    b) Guarda el resultado en una constante llamada `indicePrimerEditor`.
 *    c) Imprime el índice en la consola.
 *
 */

// Escribe tu código aquí debajo (puedes copiar el array `usuarios`).

const usuarioTres = usuarios.find((usuario) => usuario.id === 3);
console.log(usuarioTres);

const usuarioInexistente = usuarios.find((usuario) => usuario.id === 11);
console.log(usuarioInexistente);

const indicePrimerEditor = usuarios
    .findIndex((usuario) => usuario.rol === 'Editor');
console.log(indicePrimerEditor);