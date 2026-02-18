# 📧 CONFIGURACIÓN DEL FORMULARIO DE BRIEFING

## ⚡ CONFIGURACIÓN RÁPIDA (5 minutos)

### 1. Crear cuenta en Formspree (GRATIS)
1. Ve a [formspree.io](https://formspree.io)
2. Registrate con tu email: **hola@vyper.design**
3. Crear nuevo formulario
4. Copia el ID del formulario (algo como `meojnbaa`)

### 2. Actualizar el código
En el archivo `briefing.html`, línea 195, cambiar:
```html
action="https://formspree.io/f/AQUI_TU_ID"
```

En el archivo `js/briefing-script.js`, línea 8, cambiar:
```javascript
const FORM_ACTION = 'https://formspree.io/f/AQUI_TU_ID';
```

### 3. ¡Listo! 🎉

## ✨ QUÉ HACE EL FORMULARIO

✅ **Se puede completar fácilmente** - Campos claros y organizados
✅ **Envía copia al cliente** - Recibe una copia automáticamente en su email
✅ **Te llega a ti** - Recibes el briefing completo en tu email
✅ **Guarda progreso** - Si cierra la página, los datos se mantienen
✅ **Validación automática** - No permite enviar campos vacíos importantes
✅ **Responsive** - Se ve perfecto en móvil y desktop
✅ **Loading states** - Muestra cuando está enviando
✅ **Mensajes de éxito/error** - Feedback claro al usuario

## 📋 ESTRUCTURA DEL BRIEFING

El formulario está organizado en 7 secciones claras:

1. **Información de la empresa** - Datos básicos
2. **¿Cuál es el problema actual?** - Diagnóstico
3. **Sobre tu negocio** - Modelo de negocio
4. **Tu cliente ideal** - Target audience
5. **¿Cómo quieres posicionarte?** - Positioning
6. **Tu competencia** - Análisis competitivo
7. **Detalles del proyecto** - Alcance y timeline

## 🆘 SI TIENES PROBLEMAS

### Alternativa 1: EmailJS (más complejo pero más control)
1. Crear cuenta en [emailjs.com](https://emailjs.com)
2. Configurar template de email
3. Actualizar el JavaScript para usar EmailJS

### Alternativa 2: Contacto directo
Si no quieres configurar nada, el formulario puede enviarte directamente a tu email con `mailto:`.

### ⚠️ IMPORTANTE
- El formulario actual usará un ID de prueba
- DEBES cambiarlo por tu propio ID de Formspree
- Sin esto, los emails irán a una cuenta de prueba

## 🔧 PERSONALIZACIÓN ADICIONAL

### Cambiar el email de destino
En Formspree puedes configurar múltiples emails de destino.

### Cambiar el diseño
Editar `css/briefing-styles.css` para personalizar colores y espaciado.

### Agregar más campos
Seguir la estructura existente en `briefing.html`.

## 📱 TESTING

1. Completa el formulario desde el sitio web
2. Verifica que recibes el email
3. Verifica que el cliente recibe su copia
4. Prueba en móvil y desktop

¡El formulario está listo para recibir briefings profesionales! 🚀