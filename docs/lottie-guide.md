# 🎬 Guía de Lottie Animations

## ¿Qué es Lottie?

Lottie es una biblioteca que renderiza animaciones de After Effects en tiempo real, permitiendo usar animaciones vectoriales complejas con un tamaño de archivo mínimo.

## 🔍 Dónde conseguir animaciones Lottie

### 1. **LottieFiles** (Recomendado)
https://lottiefiles.com/

- Miles de animaciones gratuitas y premium
- Búsqueda por categoría
- Preview en tiempo real
- Descarga directa en JSON

⚠️ **IMPORTANTE - Licencias:**
- **Verifica siempre la licencia** antes de usar en proyectos comerciales
- Filtro de búsqueda: Usa "Free" y revisa que diga "Free for commercial use"
- Algunas son solo para uso personal
- Las animaciones Premium requieren pago
- Lee los términos de cada animación antes de descargar

### 2. **Crear tus propias animaciones**
- Diseña en After Effects
- Exporta con el plugin Bodymovin
- Sube a LottieFiles o usa localmente

## 🎨 Animaciones recomendadas para Vyper Design

### Servicios:

**Branding:**
- Busca: "palette", "colors", "brand", "design"
- https://lottiefiles.com/search?q=palette&category=animations

**Web & Diseño Digital:**
- Busca: "code", "web development", "monitor", "website"
- https://lottiefiles.com/search?q=web%20development&category=animations

**Publicidad & Contenido:**
- Busca: "megaphone", "marketing", "social media", "content"
- https://lottiefiles.com/search?q=marketing&category=animations

**TI: NAS & Infraestructura:**
- Busca: "server", "cloud", "database", "network", "storage"
- https://lottiefiles.com/search?q=server&category=animations

### Stats:

**Proceso:**
- Busca: "lightning", "speed", "fast", "workflow"

**Sistema documentado:**
- Busca: "document", "file", "checklist", "notes"

**Control operativo:**
- Busca: "lock", "security", "shield", "safe"

## ⚖️ Verificar licencia en LottieFiles

1. Busca la animación que te guste
2. Click en la animación para ver detalles
3. Revisa la sección **"License"** en la página
4. Asegúrate que diga: **"Free"** y **"Commercial use allowed"**
5. Si dice "Personal use only" → NO usar en proyectos comerciales

**Alternativas seguras para uso comercial:**
- Comprar licencia Premium en LottieFiles
- Crear tus propias animaciones
- Usar packs con licencia comercial
- Contratar a un animador

## 📥 Cómo usar tus animaciones

### Opción 1: Usar URL directa de LottieFiles

```javascript
const lottieAnimations = {
    branding: 'https://assets2.lottiefiles.com/packages/lf20_xxxxx.json',
};
```

### Opción 2: Descargar y usar localmente

1. Descarga el archivo JSON
2. Guarda en `/animations/nombre-animacion.json`
3. Actualiza la ruta en `script.js`:

```javascript
const lottieAnimations = {
    branding: 'animations/branding.json',
};
```

## 🎨 Personalización

### Cambiar colores
Algunas animaciones Lottie permiten cambiar colores. Revisa la documentación en LottieFiles.

### Controlar la velocidad

```javascript
lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath,
    speed: 1.5 // Velocidad (1 = normal, 2 = 2x, 0.5 = mitad)
});
```

### Activar solo en hover

En `script.js`, modifica:

```javascript
const animation = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: animationPath
});

container.addEventListener('mouseenter', () => animation.play());
container.addEventListener('mouseleave', () => animation.stop());
```

## 🎯 Animaciones actuales (placeholder)

⚠️ **Las animaciones en `script.js` son EJEMPLOS y pueden tener restricciones de licencia.**

**DEBES reemplazarlas** con animaciones que:
1. Tengan licencia de uso comercial
2. Coincidan con tu marca

**Colores sugeridos:** Azul (#0511F2, #5079F2, #91A0F2)

**Estilo:** Minimalista, limpio, profesional (alineado con Vyper Design)

## 📱 Responsive

Las animaciones Lottie se escalan automáticamente. El tamaño está definido en CSS:

```css
.service-icon {
    width: 80px;
    height: 80px;
}
```

Ajusta según necesites en responsive:

```css
@media (max-width: 768px) {
    .service-icon {
        width: 60px;
        height: 60px;
    }
}
```

## ⚡ Rendimiento

- Lottie usa SVG (ligero y escalable)
- Las animaciones JSON son pequeñas (5-50kb)
- Mejor rendimiento que GIFs o videos
- Compatible con todos los navegadores modernos
LottieFiles Free (filtro comercial): https://lottiefiles.com/free
- Documentación Lottie: https://airbnb.io/lottie/
- Bodymovin (plugin AE): https://aescripts.com/bodymovin/
- Editor Lottie online: https://lottiefiles.com/editor

## 💼 Alternativas con licencia comercial segura

### Opciones gratuitas:
1. **Iconos animados de LordIcon** - https://lordicon.com/ (freemium, verificar licencia)
2. **Animaciones propias** creadas en After Effects
3. **Flaticon Animated** - https://www.flaticon.com/animated-icons (algunos gratis con atribución)

### Opciones de pago (uso comercial sin restricciones):
1. **LottieFiles Premium** - Desde $9/mes
2. **Envato Elements** - Librería ilimitada por suscripción
3. **Contratar animador freelance** en Fiverr/Upwork

---

**⚠️ RECORDATORIO LEGAL:** Siempre verifica la licencia de cada archivo que uses en proyectos comerciales. Vyper Design es un negocio, por lo que necesitas licencia comercial para todas las animaciones

---

**Pro tip:** Busca animaciones con colores neutros (negro, blanco, gris) que puedas personalizar para que coincidan con tu paleta de marca.
