/**
 * /Soluciones/023_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * Esta solución muestra el flujo completo y estándar para consumir una API con
 * `fetch` en un entorno `async/await`. Los pasos clave son:
 * 1. `fetch` y esperar la respuesta.
 * 2. Validar el estado de la respuesta.
 * 3. `response.json()` y esperar los datos.
 * 4. Procesar los datos.
 */

async function obtenerUsuariosDeAPI() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        console.log("Iniciando petición a la API...");

        const respuestaAPI = await fetch(url);

        // Paso de validación: si la respuesta no es OK (ej: 404, 500), se lanza un error.
        if (!respuestaAPI.ok) {
            throw new Error(`Error HTTP: ${respuestaAPI.status}`);
        }

        // Si la respuesta es OK, se procede a leer el cuerpo como JSON.
        const usuarios = await respuestaAPI.json();
        console.log(`✅ Se recibieron ${usuarios.length} usuarios de la API.`);

        // --- Paso de exploración (opcional pero muy recomendado) ---
        // Antes de trabajar con los datos, es útil ver la estructura de uno de ellos.
        // console.log("Estructura del primer usuario:", usuarios[0]);
        // Al hacer esto, veríamos que las propiedades son 'name' y 'email', no 'nombre'.

        // Procesamiento de los datos para mostrarlos de forma legible.
        const listaDeNombres = usuarios.map(u => `  - Nombre: ${u.name}, Email: ${u.email}`);
        console.log("Lista de usuarios:");
        console.log(listaDeNombres.join('\n'));

    } catch (error) {
        console.error(`❌ ¡Ups! Tuvimos un error: ${error.message}`);
    }
}

obtenerUsuariosDeAPI();