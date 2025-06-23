/**
 * /Soluciones/022_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Esta solución simula un flujo de API realista. La función principal orquesta
 * una serie de llamadas asíncronas secuenciales, manejando los datos
 * estructurados que cada una devuelve y validando los resultados intermedios
 * para un manejo de errores robusto.
 */

// 1. BASE DE DATOS SIMULADA
const baseDeDatos = {
  usuarios: [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'Ana Gómez' },
    { id: 3, nombre: 'Pedro Jiménez' } // Usuario sin posts
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
  return new Promise((resolve) => {
    // Nota: Esta función ya no rechaza la promesa si no hay posts.
    // Devuelve un array vacío, dejando la lógica de negocio a quien la consume.
    console.log(`(2) Buscando posts para ${usuario.nombre}...`);
    setTimeout(() => {
      const posts = baseDeDatos.posts.filter(p => p.autorId === usuario.id);
      resolve(posts);
    }, 1000);
  });
}

function obtenerComentarios(post) {
    return new Promise((resolve) => {
      console.log(`(3) Buscando comentarios para el post "${post.titulo}"...`);
      setTimeout(() => {
        const comentarios = baseDeDatos.comentarios.filter(c => c.postId === post.id);
        resolve(comentarios);
      }, 1500);
    });
}

// 3. FUNCIÓN ORQUESTADORA
async function mostrarComentariosDelPrimerPost(idUsuario) {
  try {
    const usuario = await obtenerUsuario(idUsuario);
    const posts = await obtenerPosts(usuario);

    // Validación explícita de la lógica de negocio.
    if (posts.length === 0) {
      throw new Error(`El usuario ${usuario.nombre} no tiene posts para mostrar.`);
    }

    const primerPost = posts[0];
    const comentarios = await obtenerComentarios(primerPost);

    // Formateo de la salida para una presentación clara.
    console.log(`\n --- Resumen para: ${usuario.nombre} ---`);
    console.log(`   Post: "${primerPost.titulo}"`);

    if (comentarios.length === 0) {
      console.log("   Comentarios: Este post aún no tiene comentarios.");
    } else {
      console.log("   Comentarios:");
      const textosDeComentarios = comentarios.map(c => `     - "${c.texto}"`);
      console.log(textosDeComentarios.join('\n'));
    }
    console.log('-------------------------------------------\n');

  } catch (error) {
    // El bloque catch atrapa tanto los rechazos de las promesas como los errores
    // lanzados manualmente con `throw`.
    console.error(`\n❌ --- Error en el flujo para el usuario ${idUsuario} --- ❌`);
    console.error(`   Motivo: ${error.message}`);
    console.log('-------------------------------------------\n');
  }
}

// Probar los diferentes casos de uso
mostrarComentariosDelPrimerPost(1); // Éxito con posts y comentarios.
mostrarComentariosDelPrimerPost(2); // Éxito con posts pero sin comentarios.
mostrarComentariosDelPrimerPost(3); // Falla porque el usuario no tiene posts.
mostrarComentariosDelPrimerPost(4); // Falla porque el usuario no existe.