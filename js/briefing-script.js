/* ===================================
   BRIEFING FORM HANDLER
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('briefingForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('span');
    const buttonIcon = submitButton.querySelector('.btn-icon');
    
    // Configurar Formspree o EmailJS
    const FORM_ACTION = 'https://formspree.io/f/mqedlkpb'; // Cambia esto por tu ID de Formspree
    form.setAttribute('action', FORM_ACTION);
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validar formulario
        if (!validateForm()) {
            showMessage('Por favor completa todos los campos requeridos.', 'error');
            return;
        }
        
        // Mostrar estado de carga
        setLoadingState(true);
        
        try {
            // Crear FormData
            const formData = new FormData(form);
            
            // Agregar campos adicionales
            formData.append('_next', window.location.href + '?success=1');
            formData.append('_subject', 'Nuevo Briefing Estratégico - ' + formData.get('company_name'));
            formData.append('_cc', formData.get('contact_email')); // Copia para el cliente
            
            // Formatear datos para mejor legibilidad
            const briefingData = formatBriefingData(formData);
            formData.set('briefing_completo', briefingData);
            
            // Enviar formulario
            const response = await fetch(FORM_ACTION, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showMessage('¡Briefing enviado exitosamente! Recibirás una copia en tu email y te contactaremos pronto para analizar tu marca.', 'success');
                form.reset();
                
                // Opcional: Redirigir después de 3 segundos
                setTimeout(() => {
                    window.location.href = 'contacto.html?briefing=sent';
                }, 3000);
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Hubo un error al enviar el formulario. Por favor intenta de nuevo o contáctanos directamente.', 'error');
        } finally {
            setLoadingState(false);
        }
    });
    
    // Función para validar formulario
    function validateForm() {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });
        
        return isValid;
    }
    
    // Función para mostrar estado de carga
    function setLoadingState(loading) {
        if (loading) {
            submitButton.classList.add('btn-loading');
            buttonText.textContent = 'Enviando...';
            buttonIcon.textContent = '↻';
            submitButton.disabled = true;
        } else {
            submitButton.classList.remove('btn-loading');
            buttonText.textContent = 'Enviar Briefing de Marca';
            buttonIcon.textContent = '→';
            submitButton.disabled = false;
        }
    }
    
    // Función para mostrar mensajes
    function showMessage(message, type) {
        // Remover mensajes anteriores
        const existingMessages = document.querySelectorAll('.success-message, .error-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Crear nuevo mensaje
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
        messageDiv.textContent = message;
        
        // Insertar después del formulario
        form.parentNode.insertBefore(messageDiv, form.nextSibling);
        
        // Scroll hacia el mensaje
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Función para formatear datos del briefing
    function formatBriefingData(formData) {
        let briefingText = `
=== BRIEFING ESTRATÉGICO DE MARCA ===

📋 INFORMACIÓN DE LA EMPRESA
• Nombre: ${formData.get('company_name') || 'No especificado'}
• Año de creación: ${formData.get('company_year') || 'No especificado'}
• Tipo: ${formData.get('company_type') || 'No especificado'}
• Etapa actual: ${formData.get('company_stage') || 'No especificado'}
• Email de contacto: ${formData.get('contact_email') || 'No especificado'}

🔍 SITUACIÓN ACTUAL DE LA MARCA
• Motivación para contactarnos: ${formData.get('why_rebrand') || 'No especificado'}
• Percepción actual: ${formData.get('current_perception') || 'No especificado'}
• Percepción deseada: ${formData.get('desired_perception') || 'No especificado'}

💼 SOBRE EL NEGOCIO
• Descripción del negocio: ${formData.get('business_description') || 'No especificado'}
• Modelo de ingresos: ${formData.get('revenue_model') || 'No especificado'}
• Diferenciador: ${formData.get('differentiator') || 'No especificado'}

👥 CLIENTE IDEAL
• Edad promedio: ${formData.get('target_age') || 'No especificado'}
• Nivel socioeconómico: ${formData.get('target_income') || 'No especificado'}
• Motivaciones: ${formData.get('target_motivations') || 'No especificado'}
• Compran por: ${formData.get('purchase_driver') || 'No especificado'}

🎯 POSICIONAMIENTO
• Positioning deseado: ${formData.getAll('positioning[]').join(', ') || 'No especificado'}
• Emoción a generar: ${formData.get('desired_emotion') || 'No especificado'}

🏆 COMPETENCIA
• Competidores: ${formData.get('competitors') || 'No especificado'}
• Similitudes de competidores: ${formData.get('competitor_weakness') || 'No especificado'}

📈 PROYECTO
• Servicios requeridos: ${formData.getAll('services[]').join(', ') || 'No especificado'}
• Timeline: ${formData.get('timeline') || 'No especificado'}
• Presupuesto: ${formData.get('budget') || 'No especificado'}
• Información adicional: ${formData.get('additional_info') || 'No especificado'}

---
Briefing completado el ${new Date().toLocaleDateString('es-PE')} a las ${new Date().toLocaleTimeString('es-PE')}
        `;
        
        return briefingText;
    }
    
    // Auto-guardar en localStorage
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        // Cargar datos guardados
        const savedValue = localStorage.getItem('briefing_' + input.name);
        if (savedValue && input.type !== 'radio' && input.type !== 'checkbox') {
            input.value = savedValue;
        }
        
        // Guardar al cambiar
        input.addEventListener('change', function() {
            if (input.type === 'checkbox' || input.type === 'radio') {
                if (input.checked) {
                    localStorage.setItem('briefing_' + input.name, input.value);
                }
            } else {
                localStorage.setItem('briefing_' + input.name, input.value);
            }
        });
    });
    
    // Limpiar localStorage al enviar exitosamente
    window.addEventListener('beforeunload', function() {
        if (form.dataset.sent === 'true') {
            inputs.forEach(input => {
                localStorage.removeItem('briefing_' + input.name);
            });
        }
    });
});

// Función para configurar Formspree (llamar desde el HTML si es necesario)
function setupFormspree(formId) {
    const form = document.getElementById('briefingForm');
    form.setAttribute('action', `https://formspree.io/f/${formId}`);
}