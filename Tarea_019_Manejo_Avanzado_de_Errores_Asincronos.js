/**
 * Tarea_019_Manejo_Avanzado_de_Errores_Asincronos
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - `Promise.reject()` y `new Error()`: Para simular una falla en una promesa,
 *   se llama a la función `reject()`. La convención es pasarle un nuevo objeto
 *   `Error`, es decir, `reject(new Error('Mensaje de error'))`. Esto crea un
 *   error estándar de JavaScript con una traza de la pila (stack trace), lo
 *   cual es muy útil para la depuración.
 *
 * - El Flujo de `try...catch` con `await`: Cuando una promesa que está siendo
 *   "esperada" (`await miPromesa`) es rechazada, `await` lanza ese error. El
 *   flujo de ejecución dentro del bloque `try` se interrumpe inmediatamente y
 *   salta al bloque `catch`. La variable `error` en `catch(error)` contendrá
 *   el valor que se pasó a `reject()`.
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Comprender cómo `try...catch` atrapa los errores de las promesas
 * rechazadas cuando se usa `async/await`, permitiendo un manejo de errores
 * centralizado y robusto.
 *
 * Te proporcionamos una función que simula una API que busca usuarios. A veces
 * encuentra al usuario y a veces no (lo que genera un rechazo de la promesa).
 */
function obtenerDatosDeUsuario(id) {
  console.log(`Buscando usuario con ID: ${id}...`);
  return new Promise((resolve, reject) => {
    // Simulamos un retraso de red
    setTimeout(() => {
      const usuarios = {
        1: { nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
        3: { nombre: 'Ana Gómez', email: 'ana.gomez@example.com' }
      };

      const usuario = usuarios[id];

      if (usuario) {
        // Éxito: La promesa se resuelve con los datos del usuario
        resolve(usuario);
      } else {
        // Error: La promesa se rechaza con un nuevo objeto de Error
        reject(new Error('El usuario no pudo ser encontrado.'));
      }
    }, 1500);
  });
}
/*
 * ---TU CÓDIGO AQUÍ ABAJO---
 *
 * 1. Crea una función `async` llamada `gestionarBusquedaDeUsuario`. Esta función
 *    aceptará un parámetro: `id`.
 *
 * 2. Dentro de `gestionarBusquedaDeUsuario`, implementa un bloque `try...catch`.
 *
 * 3. En el bloque `try`:
 *    a) Usa `await` para llamar a `obtenerDatosDeUsuario(id)` y guarda el
 *       resultado en una constante `datosDelUsuario`.
 *    b) Si la línea anterior tiene éxito, imprime un mensaje de éxito en la consola,
 *       mostrando los datos recibidos. Por ejemplo:
 *       `✅ Éxito:`, datosDelUsuario
 *
 * 4. En el bloque `catch(error)`:
 *    a) Si `obtenerDatosDeUsuario` rechaza la promesa, el control saltará aquí.
 *    b) Imprime un mensaje de error amigable en la consola. Es una buena práctica
 *       acceder a la propiedad `.message` del objeto de error. Por ejemplo:
 *       `❌ Error:`, error.message
 *
 * 5. Finalmente, fuera de la definición de tu función, llama a `gestionarBusquedaDeUsuario`
 *    dos veces para probar ambos escenarios:
 *    - `gestionarBusquedaDeUsuario(1);` (debería tener éxito)
 *    - `gestionarBusquedaDeUsuario(2);` (debería fallar y ser atrapado por tu catch)
 */

// Escribe tu código aquí debajo (puedes copiar la función `obtenerDatosDeUsuario`).