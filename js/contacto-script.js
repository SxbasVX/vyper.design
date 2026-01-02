// ===================================
// CONTACT FORM HANDLING - Web3Forms
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Cambiar texto del botón mientras se envía
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        const formData = new FormData(this);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Éxito - mostrar mensaje
                submitButton.textContent = '✓ Mensaje enviado';
                submitButton.style.background = '#10b981';
                
                // Resetear formulario
                this.reset();
                
                // Restaurar botón después de 3 segundos
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            // Error - mostrar mensaje
            submitButton.textContent = '✗ Error. Intenta de nuevo';
            submitButton.style.background = '#ef4444';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);
        }
    });
}
