/**
 * Tarea_022_Encadenamiento_de_Llamadas_Asincronas
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - Simulación de una Base de Datos: Para un mayor realismo, separaremos los datos
 *   de la lógica de acceso. Tendremos un objeto que representa nuestra "base de datos"
 *   y funciones que consultan esta fuente de datos.
 *
 * - Flujo de Datos Dependiente: El patrón de `await` secuencial es crucial aquí,
 *   ya que el ID de un usuario (obtenido en el paso 1) es necesario para buscar
 *   sus posts (en el paso 2), y así sucesivamente.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Simular un flujo de API realista, donde las funciones asíncronas
 * consultan una fuente de datos externa para obtener información estructurada
 * y encadenar los resultados.
 *
 * --- CÓDIGO DE INICIO (Base de Datos y Funciones de Acceso) ---
 */
// 1. BASE DE DATOS SIMULADA
const baseDeDatos = {
  usuarios: [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'Ana Gómez' }
  ],
  posts: [
    { id: 'post-123', autorId: 1, titulo: 'Mi primer viaje' },
    { id: 'post-456', autorId: 1, titulo: 'Receta de cocina' },
    { id: 'post-789', autorId: 2, titulo: 'Avances del proyecto' }
  ],
  comentarios: [
    { id: 'com-abc', postId: 'post-123', texto: '¡Qué gran viaje!' },
    { id: 'com-def', postId: 'post-123', texto: 'Gracias por los consejos.' },
    { id: 'com-ghi', postId: 'post-456', texto: 'Se ve delicioso.' }
  ]
};

// 2. FUNCIONES DE ACCESO A DATOS (simulan llamadas a una API)
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    console.log(`(1) Buscando usuario con id ${id}...`);
    setTimeout(() => {
      const usuario = baseDeDatos.usuarios.find(u => u.id === id);
      if (usuario) {
        resolve(usuario);
      } else {
        reject(new Error(`No se encontró un usuario con id ${id}.`));
      }
    }, 1000);
  });
}

function obtenerPosts(usuario) {
  return new Promise((resolve, reject) => {
    console.log(`(2) Buscando posts para ${usuario.nombre}...`);
    setTimeout(() => {
      const posts = baseDeDatos.posts.filter(p => p.autorId === usuario.id);
      if (posts.length > 0) {
        resolve(posts);
      } else {
        reject(new Error(`El usuario ${usuario.nombre} no tiene posts.`));
      }
    }, 1000);
  });
}

function obtenerComentarios(post) {
    return new Promise((resolve) => {
      console.log(`(3) Buscando comentarios para el post "${post.titulo}"...`);
      setTimeout(() => {
        const comentarios = baseDeDatos.comentarios.filter(c => c.postId === post.id);
        // Si no hay comentarios, se resuelve con un array vacío, no es un error.
        resolve(comentarios);
      }, 1500);
    });
}
/*
 * --- TU CÓDIGO AQUÍ ABAJO ---
 *
 * 1. Crea una función `async` llamada `mostrarComentariosDelPrimerPost`.
 *    Debería aceptar un `idUsuario` como parámetro.
 *
 * 2. Dentro de un bloque `try...catch`:
 *    a) Llama a `obtenerUsuario` y espera el resultado.
 *    b) Llama a `obtenerPosts` con el objeto de usuario completo y espera el resultado.
 *    c) Toma el primer post del array resultante. Si no hay posts, lanza un error
 *       informativo para que lo capture el `catch`. Puedes hacerlo con `throw new Error`.
 *    d) Llama a `obtenerComentarios` con el objeto del primer post y espera el resultado.
 *    e) Imprime un resumen que muestre el nombre del usuario, el título del post y
 *       los textos de los comentarios. Puedes usar `.map()` para imprimirlo de manera limpia.
 *       Si no hay comentarios, informa de ello.
 *
 * 3. En el bloque `catch`, imprime el mensaje del error.
 *
 * 4. Llama a `mostrarComentariosDelPrimerPost` con el id `1` para probar el caso de éxito.
 * 5. Llama a `mostrarComentariosDelPrimerPost` con el id `2` para probar el caso donde
 *    el usuario tiene posts pero sin comentarios (¡este caso no debería fallar!).
 */

// Escribe tu código aquí debajo.