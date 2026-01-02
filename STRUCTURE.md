# 📁 Estructura del Proyecto Vyper Design

```
LandingPage/
│
├── 📄 index.html              # Página principal (Landing)
├── 📄 contacto.html           # Página de contacto
├── 📄 portafolio.html         # Página de portfolio
├── 📄 robots.txt              # SEO: Control de rastreo
├── 📄 sitemap.xml             # SEO: Mapa del sitio
│
├── 📁 css/                    # Hojas de estilo
│   ├── styles.css             # Estilos principales (compartidos)
│   ├── contacto-styles.css    # Estilos específicos de contacto
│   └── portafolio-styles.css  # Estilos específicos de portfolio
│
├── 📁 js/                     # Scripts JavaScript
│   ├── script.js              # Script principal (compartido)
│   ├── contacto-script.js     # Funcionalidad de contacto
│   ├── portafolio-script.js   # Funcionalidad de portfolio
│   └── portfolio-data.js      # Datos de proyectos (EDITAR AQUÍ)
│
├── 📁 images/                 # Recursos de imágenes
│   └── 📁 portfolio/          # Imágenes de proyectos (añade tus imágenes aquí)
│       ├── proyecto-1.jpg
│       ├── proyecto-2.jpg
│       └── ...
│
└── 📁 docs/                   # Documentación
    ├── README.md              # Documentación general del proyecto
    ├── lottie-guide.md        # Guía de animaciones Lottie
    └── PORTFOLIO-GUIDE.md     # Guía para actualizar portfolio
```

## 🎯 Archivos principales por página

### Página Principal (index.html)
- HTML: `index.html`
- CSS: `css/styles.css`
- JS: `js/script.js`

### Página de Contacto (contacto.html)
- HTML: `contacto.html`
- CSS: `css/styles.css` + `css/contacto-styles.css`
- JS: `js/script.js` + `js/contacto-script.js`

### Página de Portfolio (portafolio.html)
- HTML: `portafolio.html`
- CSS: `css/styles.css` + `css/portafolio-styles.css`
- JS: `js/script.js` + `js/portfolio-data.js` + `js/portafolio-script.js`

## 📝 Archivos que editas frecuentemente

1. **Para agregar proyectos:** `js/portfolio-data.js`
2. **Imágenes de proyectos:** `images/portfolio/`
3. **Cambiar estilos:** `css/styles.css`

## 📚 Documentación

- **README.md** - Información general del proyecto
- **lottie-guide.md** - Cómo usar animaciones Lottie
- **PORTFOLIO-GUIDE.md** - Cómo actualizar el portfolio

## 🚀 Para empezar

1. Abre `index.html` en tu navegador
2. Para agregar proyectos, edita `js/portfolio-data.js`
3. Coloca las imágenes en `images/portfolio/`
