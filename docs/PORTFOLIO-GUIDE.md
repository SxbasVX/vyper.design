# 📁 Guía para Actualizar el Portfolio

## 🚀 Cómo agregar nuevos proyectos

### Paso 1: Preparar tus imágenes
1. Crea la carpeta `images/portfolio/` en tu proyecto (si no existe)
2. Guarda tus imágenes ahí
3. **Tamaño recomendado:** 1200x750px (ratio 16:10)
4. **Formato:** JPG o PNG
5. **Optimiza las imágenes** con [TinyPNG](https://tinypng.com) antes de subirlas

### Paso 2: Editar portfolio-data.js
Abre el archivo `portfolio-data.js` y agrega tu proyecto al array `portfolioProjects`:

```javascript
{
    id: 7, // Incrementa el número del último proyecto
    title: "Nombre de tu Proyecto",
    description: "Descripción breve del proyecto (1-2 líneas máximo).",
    image: "images/portfolio/tu-imagen.jpg", // Ruta a tu imagen
    categories: ["branding", "web"], // Categorías del proyecto
    tags: ["Branding", "Web Design"], // Tags visibles
    link: "#" // Link al caso de estudio o # si no hay
},
```

### Paso 3: ¡Listo!
Recarga la página y tu proyecto aparecerá automáticamente.

---

## 📋 Categorías disponibles

Usa estas categorías en el campo `categories`:
- `"branding"` → Proyectos de branding e identidad visual
- `"web"` → Diseño y desarrollo web
- `"advertising"` → Publicidad y contenido
- `"ti"` → Soluciones de TI e infraestructura

Puedes usar **múltiples categorías** por proyecto:
```javascript
categories: ["branding", "web", "advertising"]
```

---

## 🎨 Imágenes vs Placeholders

- **Si tienes imagen:** El sistema usará tu imagen automáticamente
- **Si no tienes imagen:** Se mostrará un gradiente de color como placeholder
- **Para usar placeholder:** Deja la ruta como `"images/portfolio/proyecto-X.jpg"`

---

## ✏️ Ejemplos

### Proyecto solo con Branding
```javascript
{
    id: 7,
    title: "Rebranding Empresa XYZ",
    description: "Identidad visual completa con manual de marca y aplicaciones.",
    image: "images/portfolio/empresa-xyz.jpg",
    categories: ["branding"],
    tags: ["Branding"],
    link: "#"
},
```

### Proyecto con múltiples categorías
```javascript
{
    id: 8,
    title: "E-commerce Completo",
    description: "Diseño, desarrollo web y campaña de lanzamiento integrada.",
    image: "images/portfolio/ecommerce.jpg",
    categories: ["web", "advertising"],
    tags: ["Web", "Publicidad", "E-commerce"],
    link: "https://ejemplo.com/caso-estudio"
},
```

### Proyecto con placeholder
```javascript
{
    id: 9,
    title: "Proyecto en Desarrollo",
    description: "Proyecto próximamente disponible.",
    image: "images/portfolio/proyecto-9.jpg", // No existe aún
    categories: ["branding"],
    tags: ["Branding"],
    link: "#"
},
```

---

## 🔄 Otras acciones

### Eliminar un proyecto
Simplemente borra el bloque completo del proyecto del array.

### Cambiar el orden
Corta y pega los bloques en el orden que quieras mostrarlos.

### Modificar un proyecto existente
Busca el proyecto por su `title` o `id` y edita los campos que necesites.

---

## ⚠️ Importante

1. **No olvides la coma** al final de cada bloque de proyecto (excepto el último)
2. **Mantén el formato JSON** correcto (comillas, corchetes, etc.)
3. **Incrementa el ID** para cada nuevo proyecto
4. **Optimiza las imágenes** antes de subirlas para mejor rendimiento

---

## 🎯 Sistema de filtrado

El sistema de filtrado funciona automáticamente. Los usuarios pueden filtrar por:
- Todos los proyectos
- Solo Branding
- Solo Web & Digital
- Solo Publicidad
- Solo Soluciones TI

Los proyectos se mostrarán según las categorías que definiste en `categories`.
