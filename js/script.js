// ===================================
// SMOOTH SCROLL PARA NAVEGACIÓN INTERNA
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignorar si es solo "#" sin target
        if (href === '#' || !href) return;
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition - 80; // 80px offset para el header
            const duration = 1400; // Duración más larga para scroll ultra suave
            let startTime = null;

            // Función de easing personalizada (easeInOutCubic)
            const easeInOutCubic = (t) => {
                return t < 0.5 
                    ? 4 * t * t * t 
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeInOutCubic(progress);
                
                window.scrollTo(0, startPosition + (distance * ease));
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };

            requestAnimationFrame(animation);
        }
    });
});

// ===================================
// LOTTIE ANIMATIONS
// ===================================
const lottieAnimations = {
    // Servicios - Reemplaza estas URLs con tus animaciones JSON de LottieFiles
    branding: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json', // Paleta de colores
    web: 'https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json', // Código/desarrollo
    advertising: 'https://assets4.lottiefiles.com/packages/lf20_khzniaya.json', // Megáfono
    infrastructure: 'https://assets2.lottiefiles.com/packages/lf20_tll0j4bb.json', // Servidor/nube
    
    // Stats
    process: 'https://assets1.lottiefiles.com/packages/lf20_l9bcfk19.json', // Rayo/velocidad
    documentation: 'https://assets8.lottiefiles.com/packages/lf20_yn3pjukd.json', // Documento
    security: 'https://assets5.lottiefiles.com/packages/lf20_ydo1amjm.json' // Candado
};

// Inicializar animaciones Lottie
function initLottieAnimations() {
    document.querySelectorAll('[data-lottie]').forEach(container => {
        const animationType = container.dataset.lottie;
        const animationPath = lottieAnimations[animationType];
        
        if (animationPath) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: animationPath
            });
        }
    });
}

// Cargar Lottie cuando el DOM esté listo
if (typeof lottie !== 'undefined') {
    initLottieAnimations();
}

// ===================================
// ANIMACIONES DE ENTRADA
// ===================================
// Activar animaciones del hero al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    const heroImage = document.querySelector('.hero-image');

    // Pequeño delay inicial para asegurar rendering
    setTimeout(() => {
        if (heroTitle) heroTitle.classList.add('animate-in');
        if (heroSubtitle) setTimeout(() => heroSubtitle.classList.add('animate-in'), 200);
        if (heroCta) setTimeout(() => heroCta.classList.add('animate-in'), 400);
        if (heroImage) setTimeout(() => heroImage.classList.add('animate-in'), 300);
    }, 100);
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Inicializar observer cuando el DOM esté listo
window.addEventListener('load', () => {
    // Observar elementos que se animan con scroll
    const elementsToAnimate = document.querySelectorAll(
        '.section-header h2, .section-header p, .service-offering-item, .process-item, .cta-title, .cta-subtitle, .btn-white'
    );
    
    elementsToAnimate.forEach(el => {
        animateOnScroll.observe(el);
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// ===================================
// MENU OVERLAY TOGGLE
// ===================================
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const body = document.body;

menuToggle.addEventListener('click', () => {
    const isActive = menuOverlay.classList.contains('active');
    
    if (isActive) {
        closeMenu();
    } else {
        menuOverlay.classList.add('active');
        menuToggle.classList.add('active');
        body.style.overflow = 'hidden';
        body.classList.add('menu-active');
    }
});

const closeMenu = () => {
    menuOverlay.classList.remove('active');
    menuToggle.classList.remove('active');
    body.style.overflow = '';
    body.classList.remove('menu-active');
};

document.querySelectorAll('.nav-links a, .service-tag').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        closeMenu();
    }
});
// ===================================
// SCROLL TO TOP BUTTON
// ===================================
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll suave al hacer click con easing avanzado
    scrollToTopBtn.addEventListener('click', () => {
        const startPosition = window.pageYOffset;
        const duration = 1200;
        let startTime = null;

        // Función de easing suave (easeInOutCubic)
        const easeInOutCubic = (t) => {
            return t < 0.5 
                ? 4 * t * t * t 
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition * (1 - ease));
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    });
}

// ===================================
// LAZY LOADING IMAGES
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
