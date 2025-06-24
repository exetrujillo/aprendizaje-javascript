/**
 * Tarea_028_Explorando_el_Modulo_Path
 *
 * ---CONCEPTOS A APLICAR---
 *
 * - `path.join([...paths])`: Une segmentos de ruta usando el separador
 *   específico del sistema operativo (`/` o `\`). Normaliza la ruta resultante.
 *
 * - `path.resolve([...paths])`: Resuelve una secuencia de rutas o segmentos
 *   de ruta en una ruta absoluta. Procesa las rutas de derecha a izquierda.
 *   Si encuentra una ruta absoluta (como `/foo`), ignora todo lo anterior.
 *
 * - `path.basename(path)`: Devuelve la última porción de una ruta (el nombre
 *   del archivo o la última carpeta).
 *
 * - `path.dirname(path)`: Devuelve el nombre del directorio de una ruta (todo
 *   menos la última porción).
 *
 * - `path.extname(path)`: Devuelve la extensión de archivo de una ruta (desde
 *   el último `.` hasta el final del string).
 *
 * ---INSTRUCCIONES---
 *
 * Objetivo: Utilizar los métodos más comunes del módulo `path` para construir,
 * analizar y deconstruir rutas de archivos de forma segura.
 *
 * 1. **Importa el módulo `path`**.
 *
 * 2. **Construye una ruta:**
 *    a) Usa `path.join()` para crear la ruta a un archivo ficticio llamado
 *       `reporte.pdf` dentro de la carpeta `assets/028`. Guarda la ruta
 *       en una constante `rutaReporte`.
 *    b) Imprime `rutaReporte` en la consola.
 *
 * 3. **Analiza la ruta:**
 *    a) Usando la `rutaReporte` que creaste, aplica los siguientes métodos
 *       del módulo `path` e imprime cada resultado con una descripción clara:
 *       - `path.basename()` para obtener solo el nombre del archivo.
 *       - `path.dirname()` para obtener solo la ruta del directorio.
 *       - `path.extname()` para obtener solo la extensión del archivo.
 *
 * 4. **Resolviendo una ruta absoluta:**
 *    a) Usa `path.resolve()` para obtener la ruta absoluta del mismo archivo
 *       `reporte.pdf`. Pásale los mismos segmentos que usaste con `path.join`.
 *    b) Imprime el resultado y compáralo con el de `path.join(__dirname, ...)`.
 *       Notarás que `path.resolve` puede no necesitar `__dirname` si la ruta
 *       no empieza con `./` o `../`.
 *
 * ---SALIDA ESPERADA (Ejemplo)---
 *
 * Ruta construida: .../assets/028/reporte.pdf
 * Nombre del archivo: reporte.pdf
 * Directorio: .../assets/028
 * Extensión: .pdf
 * Ruta absoluta resuelta: C:\Users\TuUsuario\...\assets\028\reporte.pdf
 *
 */

// Escribe tu código aquí debajo.