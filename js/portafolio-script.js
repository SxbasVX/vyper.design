// ===================================
// GENERAR PROYECTOS DESDE DATOS
// ===================================
function renderProjects() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    // Si no hay proyectos, mostrar mensaje
    if (!portfolioProjects || portfolioProjects.length === 0) {
        portfolioGrid.innerHTML = `
            <div class="empty-state">
                <h3>Próximamente</h3>
                <p>Estamos trabajando en documentar nuestros proyectos. Vuelve pronto para ver nuestro trabajo.</p>
            </div>
        `;
        return;
    }
    
    portfolioProjects.forEach((project, index) => {
        const article = document.createElement('article');
        article.className = 'project-card';
        article.setAttribute('data-category', project.categories.join(' '));
        
        // Determinar si usar imagen o placeholder
        const imageContent = project.image && project.image !== 'images/portfolio/proyecto-X.jpg'
            ? `<img src="${project.image}" alt="${project.title}" />`
            : `<div class="project-image-placeholder" style="background: ${placeholderColors[index % placeholderColors.length]};"></div>`;
        
        article.innerHTML = `
            <div class="project-image">
                ${imageContent}
            </div>
            <div class="project-info">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                ${project.link !== '#' ? `<a href="${project.link}" class="project-link">Ver proyecto →</a>` : ''}
            </div>
        `;
        
        portfolioGrid.appendChild(article);
    });
}

// Renderizar proyectos al cargar
document.addEventListener('DOMContentLoaded', renderProjects);

// ===================================
// PORTFOLIO FILTER
// ===================================
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category.includes(filterValue)) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            } else {
                card.classList.remove('visible');
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });
    });
});

// Initial animation on page load
window.addEventListener('load', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 600 + (index * 100));
    });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observeProjects = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observar proyectos cuando se rendericen
setTimeout(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observeProjects.observe(card);
    });
}, 100);
