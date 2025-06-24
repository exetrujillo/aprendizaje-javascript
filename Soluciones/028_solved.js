/**
 * /Soluciones/028_solved.js
 *
 * --- SOLUCIÓN ---
 *
 * El módulo `path` es una herramienta indispensable en cualquier proyecto de
 * Node.js. Permite manipular strings de rutas de archivos de una manera
 * predecible y segura, independientemente del sistema operativo en el que se
 * ejecute el código.
 */

const path = require('path');

// --- 1. Construcción de la ruta ---
const rutaReporte = path.join(__dirname, 'assets', '028', 'reporte.pdf');
console.log(`Ruta construida con path.join: ${rutaReporte}`);


// --- 2. Análisis de la ruta ---
console.log("\n--- Análisis de la ruta ---");

const nombreArchivo = path.basename(rutaReporte);
console.log(`Nombre del archivo (basename): ${nombreArchivo}`); // reporte.pdf

const rutaDirectorio = path.dirname(rutaReporte);
console.log(`Directorio (dirname): ${rutaDirectorio}`); // .../assets/028

const extensionArchivo = path.extname(rutaReporte);
console.log(`Extensión (extname): ${extensionArchivo}`); // .pdf


// --- 3. Resolución de ruta absoluta ---
console.log("\n--- Resolución de ruta absoluta ---");

// path.resolve toma segmentos y los convierte a una ruta absoluta.
// A diferencia de join, procesa de derecha a izquierda y se detiene si
// encuentra una ruta absoluta.
const rutaResuelta = path.resolve('assets', '028', 'reporte.pdf');
console.log(`Ruta resuelta con path.resolve: ${rutaResuelta}`);

// Cuando se le pasa una ruta que ya es absoluta, simplemente la normaliza y la devuelve.
const rutaResueltaDesdeAbsoluta = path.resolve(rutaReporte);
console.log(`Ruta resuelta desde una ruta absoluta: ${rutaResueltaDesdeAbsoluta}`);