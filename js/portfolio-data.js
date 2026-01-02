// ===================================
// CONFIGURACIÓN DEL PORTFOLIO
// ===================================
// Aquí defines todos tus proyectos. Solo edita este archivo para agregar, eliminar o modificar proyectos.

const portfolioProjects = [
    // Agrega tus proyectos aquí cuando estén listos
    // Ejemplo:
    // {
    //     id: 1,
    //     title: "Nombre del Proyecto",
    //     description: "Descripción breve del proyecto.",
    //     image: "images/portfolio/proyecto-1.jpg",
    //     categories: ["branding", "web"],
    //     tags: ["Branding", "Web"],
    //     link: "#"
    // },
];

// Colores de placeholder (se usan si no hay imagen)
const placeholderColors = [
    "linear-gradient(135deg, #0511F2, #5079F2)",
    "linear-gradient(135deg, #91A0F2, #0540F2)",
    "linear-gradient(135deg, #0540F2, #91A0F2)",
    "linear-gradient(135deg, #5079F2, #0511F2)",
    "linear-gradient(135deg, #91A0F2, #5079F2)",
    "linear-gradient(135deg, #0511F2, #91A0F2)"
];

// ===================================
// INSTRUCCIONES PARA AGREGAR PROYECTOS
// ===================================
/*

1. AGREGAR UN NUEVO PROYECTO:
   Copia este bloque y pégalo dentro del array portfolioProjects:

   {
       id: 7, // Incrementa el número
       title: "Nombre del Proyecto",
       description: "Descripción breve del proyecto (1-2 líneas).",
       image: "images/portfolio/tu-imagen.jpg", // Guarda la imagen en /images/portfolio/
       categories: ["branding"], // Una o más: branding, web, advertising, ti
       tags: ["Branding", "Otro Tag"], // Los tags que se mostrarán
       link: "#" // URL del caso de estudio o # si no hay
   },

2. PREPARAR IMÁGENES:
   - Crea una carpeta: /images/portfolio/
   - Guarda tus imágenes ahí
   - Formato recomendado: JPG o PNG
   - Tamaño recomendado: 1200x750px (ratio 16:10)
   - Optimiza las imágenes antes de subirlas (usa tinypng.com)

3. CATEGORÍAS DISPONIBLES:
   - "branding" → Proyectos de branding/identidad
   - "web" → Diseño y desarrollo web
   - "advertising" → Publicidad y contenido
   - "ti" → Soluciones de TI e infraestructura

4. ELIMINAR UN PROYECTO:
   Simplemente borra el bloque completo del proyecto del array.

5. CAMBIAR ORDEN:
   Corta y pega los bloques en el orden que quieras mostrarlos.

*/
