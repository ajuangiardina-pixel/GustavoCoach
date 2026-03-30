document.addEventListener('DOMContentLoaded', () => {
    // Navbar Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-icon').textContent = '+';
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            const icon = item.querySelector('.faq-icon');
            if (item.classList.contains('active')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });

    // WhatsApp Form Submission
    const waForm = document.getElementById('waForm');
    
    if (waForm) {
        waForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const objetivo = document.getElementById('objetivo').value;
            const plan_interes = document.getElementById('plan_interes').value;
            const detalles = document.getElementById('detalles').value;
            
            // Format message
            const message = `¡Hola Gustavo! Estoy interesado en tu coaching.%0A%0A*Mis Datos:*%0A- Nombre: ${nombre}%0A- Teléfono: ${telefono}%0A- Objetivo: ${objetivo}%0A- Plan de interés: ${plan_interes}%0A%0A*Más sobre mí:*%0A${detalles}`;
            
            // Redirect to WhatsApp
            const waPhone = '51993258173'; // With country code, e.g., 51 for Peru (assuming Peruvian format based on length, adjust if needed)
            const waUrl = `https://wa.me/${waPhone}?text=${message}`;
            
            window.open(waUrl, '_blank');
        });
    }
});
