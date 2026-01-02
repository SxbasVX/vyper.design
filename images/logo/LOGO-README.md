# 📝 Instrucciones para agregar tu logo

## 🎨 Logo SVG

Guarda tu archivo SVG del logo en:
```
images/logo/vyper-logo.svg
```

## ✅ El sistema ya está preparado para:

1. **Header** - Muestra tu logo en color normal (32px de altura)
2. **Menú activo** - Convierte el logo a blanco automáticamente cuando abres el menú
3. **Footer** - Muestra el logo en blanco sobre fondo azul

## 🔧 Cómo funciona:

- **En header (fondo blanco):** Logo en sus colores originales
- **Menú overlay activo:** Logo se vuelve blanco automáticamente con `filter: brightness(0) invert(1)`
- **Footer (fondo azul):** Logo en blanco para contraste

## 📐 Requisitos del SVG:

- **Formato:** SVG
- **Nombre:** `vyper-logo.svg`
- **Ubicación:** `images/logo/`
- **Optimizado:** Usa [SVGOMG](https://jakearchibald.github.io/svgomg/) para optimizar

## 🎯 Alternativa:

Si prefieres tener 2 versiones del logo:
- `vyper-logo.svg` - Logo en color (para header)
- `vyper-logo-white.svg` - Logo blanco (para menú y footer)

Puedes modificar el CSS para usar versiones específicas en lugar del filtro.

## ⚠️ Importante:

Asegúrate de que tu SVG tenga:
- Colores bien definidos
- ViewBox configurado correctamente
- Tamaño relativo (width/height en viewport units o porcentajes)
