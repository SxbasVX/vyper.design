# GUÍA DE DESPLIEGUE EN NETLIFY

## ✅ Checklist Pre-Despliegue (COMPLETADO)

- ✅ Favicons instalados (SVG, ICO, PNG, Apple Touch Icon)
- ✅ SEO optimizado (meta tags, Schema.org, geo-tags)
- ✅ og-image.jpg creado (223 KB)
- ✅ sitemap.xml configurado
- ✅ robots.txt configurado
- ✅ .htaccess para performance
- ✅ netlify.toml creado
- ✅ Formulario conectado a Web3Forms
- ✅ WhatsApp configurado
- ✅ Smooth scroll implementado

## 🚀 PASOS PARA DESPLEGAR EN NETLIFY

### Opción 1: Despliegue Manual (Recomendado para primera vez)

1. **Ir a Netlify**
   - Abre https://app.netlify.com
   - Inicia sesión o crea cuenta (gratis)

2. **Desplegar el sitio**
   - Click en "Add new site" → "Deploy manually"
   - Arrastra toda la carpeta `LandingPage` a la zona de drop
   - Netlify subirá todos los archivos automáticamente

3. **Esperar el despliegue**
   - Netlify procesará los archivos (1-2 minutos)
   - Te dará una URL temporal: `https://random-name-123456.netlify.app`

4. **Configurar dominio personalizado**
   - En el dashboard del sitio, ve a "Domain settings"
   - Click en "Add custom domain"
   - Ingresa: `vyper.design`
   - Netlify te dará instrucciones de DNS

5. **Configurar DNS en tu proveedor de dominios**
   - Ve a donde compraste `vyper.design` (GoDaddy, Namecheap, etc.)
   - Agrega estos registros DNS:
   
   **Registro A:**
   ```
   Tipo: A
   Nombre: @
   Valor: 75.2.60.5
   TTL: 3600
   ```
   
   **Registro CNAME:**
   ```
   Tipo: CNAME
   Nombre: www
   Valor: [tu-sitio].netlify.app
   TTL: 3600
   ```

6. **Activar HTTPS**
   - En Netlify, ve a "Domain settings" → "HTTPS"
   - Click en "Verify DNS configuration"
   - Click en "Provision certificate" (gratis con Let's Encrypt)
   - Espera 1-2 minutos para activación

7. **Configurar redirecciones**
   - En "Domain settings", asegúrate de activar:
   - ✅ "Force HTTPS"
   - ✅ "Redirect www to primary domain" (o viceversa)

### Opción 2: Despliegue con Git (Recomendado para el futuro)

1. **Crear repositorio en GitHub**
   - Ve a https://github.com/new
   - Nombre: `vyper-design-website`
   - Privado o público (tu elección)

2. **Subir código a GitHub**
   ```powershell
   cd "c:\Users\sebas\OneDrive\Documentos\Vyper Design\LandingPage"
   git init
   git add .
   git commit -m "Initial commit - Vyper Design website"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/vyper-design-website.git
   git push -u origin main
   ```

3. **Conectar Netlify con GitHub**
   - En Netlify: "Add new site" → "Import from Git"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio `vyper-design-website`
   - Build settings:
     - Build command: (dejar vacío)
     - Publish directory: `.`
   - Click en "Deploy site"

4. **Beneficios de Git:**
   - Cada cambio que hagas y subas a GitHub se desplegará automáticamente
   - Historial completo de versiones
   - Posibilidad de revertir cambios

## 📊 DESPUÉS DEL DESPLIEGUE

### 1. Google Search Console
1. Ve a https://search.google.com/search-console
2. Agrega la propiedad: `https://vyper.design`
3. Verifica propiedad (Netlify facilita esto con meta tag)
4. Envía el sitemap: `https://vyper.design/sitemap.xml`

### 2. Google Business Profile
1. Ve a https://business.google.com
2. Crea perfil para "Vyper Design"
3. Ubicación: Lima, Perú
4. Categoría: Agencia de diseño / Diseñador de sitios web
5. Agrega:
   - Logo
   - Fotos del trabajo
   - Horario: Lun-Vie 9:00-22:00
   - Sitio web: https://vyper.design
   - WhatsApp: +51 919 089 530
   - Email: hola@vyper.design

### 3. Google Analytics (Opcional)
1. Ve a https://analytics.google.com
2. Crea propiedad para `vyper.design`
3. Copia el código de seguimiento
4. Agrégalo antes del `</head>` en todos los HTML

### 4. Pruebas Post-Despliegue
- ✅ Probar formulario de contacto
- ✅ Verificar botón de WhatsApp
- ✅ Probar todos los enlaces
- ✅ Verificar responsive en móvil
- ✅ Probar smooth scroll
- ✅ Verificar favicons en diferentes navegadores
- ✅ Compartir en redes sociales (verificar og-image)
- ✅ Probar velocidad: https://pagespeed.web.dev

## 🎯 URLs IMPORTANTES

- **Sitio en producción:** https://vyper.design
- **Netlify Dashboard:** https://app.netlify.com
- **Google Search Console:** https://search.google.com/search-console
- **Google Business:** https://business.google.com
- **Web3Forms Dashboard:** https://web3forms.com (para ver mensajes del formulario)

## 📝 NOTAS

- El sitio está 100% optimizado para SEO
- Todas las imágenes deberían estar comprimidas antes del despliegue
- El form enviará emails a través de Web3Forms
- El certificado SSL es gratuito y se renueva automáticamente
- Netlify ofrece 100GB de ancho de banda gratis al mes
- Los cambios en DNS pueden tomar 24-48 horas en propagarse completamente

## 🆘 SOPORTE

Si tienes problemas:
1. Revisa la consola de Netlify para errores
2. Verifica que todos los archivos se hayan subido
3. Comprueba que el netlify.toml esté en la raíz
4. Asegúrate de que los registros DNS estén correctos

¡Tu sitio está listo para conquistar el internet! 🚀
