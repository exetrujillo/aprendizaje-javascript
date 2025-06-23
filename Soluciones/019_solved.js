/**
 * /Soluciones/019_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Este ejercicio es fundamental para entender cómo las operaciones asíncronas
 * pueden fallar y cómo `async/await` junto con `try...catch` nos permiten
 * manejar estos errores de forma elegante.
 *
 * La clave está en que cuando una promesa `await`ed es rechazada, `await`
 * lanza un error, el cual es capturado por el bloque `catch`.
 */

// La función que simula la obtención de datos, con lógica para resolver o rechazar.
function obtenerDatosDeUsuario(id) {
  console.log(`Buscando usuario con ID: ${id}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarios = {
        1: { nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
        3: { nombre: 'Ana Gómez', email: 'ana.gomez@example.com' }
      };

      const usuario = usuarios[id];

      if (usuario) {
        // Si el usuario existe, resolvemos la promesa con los datos.
        resolve(usuario);
      } else {
        // Si no existe, rechazamos la promesa con un objeto Error.
        reject(new Error('El usuario no pudo ser encontrado.'));
      }
    }, 1500); // Simula un retraso de 1.5 segundos.
  });
}

// La función principal que gestiona la operación asíncrona.
async function gestionarBusquedaDeUsuario(id) {
  try {
    // `await` espera a que la promesa de `obtenerDatosDeUsuario` se resuelva.
    const datosDelUsuario = await obtenerDatosDeUsuario(id);

    // Si se resuelve, `datosDelUsuario` contendrá el objeto del usuario.
    // `console.log` al recibir un objeto, muestra una representación simplificada
    // como `[object Object]`. Para ver las propiedades, accederíamos a ellas.
    //console.log(`✅ Éxito: ${datosDelUsuario}`); // Salida por defecto del objeto
    console.log(`✅ Éxito: Usuario encontrado - Nombre: ${datosDelUsuario.nombre}, Email: ${datosDelUsuario.email}`);

  } catch (error) {
    // Si la promesa es rechazada, `await` lanza el error, y el `catch` lo atrapa.
    // Accedemos a `error.message` para obtener el mensaje descriptivo del error.
    console.error(`❌ Error: ${error.message}`);
  }
}

// Llamamos a la función para probar ambos escenarios: uno que tendrá éxito y otro que fallará.
console.log("--- Inicio de las búsquedas ---");
gestionarBusquedaDeUsuario(1); // Debería encontrar al usuario.
gestionarBusquedaDeUsuario(2); // Debería lanzar el error 'El usuario no pudo ser encontrado.'.