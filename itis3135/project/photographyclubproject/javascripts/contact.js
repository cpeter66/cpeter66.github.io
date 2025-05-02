document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('contact-success-modal');
    const closeSuccessModal = document.getElementById('close-success-modal');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Only show success modal if form is valid
                successModal.classList.remove('hidden');
                
                // Reset form
                this.reset();
            }
        });
    }

    // Close success modal
    if (closeSuccessModal) {
        closeSuccessModal.addEventListener('click', function() {
            successModal.classList.add('hidden');
        });
    }

    // FAQ accordion
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Toggle active class on clicked item
            this.classList.toggle('active');
            
            // Close other open items
            faqToggles.forEach(otherToggle => {
                if (otherToggle !== toggle && otherToggle.classList.contains('active')) {
                    otherToggle.classList.remove('active');
                }
            });
        });
    });

    // Enable map interaction on hover
    const mapIframe = document.querySelector('.map-iframe');
    if (mapIframe) {
        mapIframe.addEventListener('mouseover', function() {
            this.style.pointerEvents = 'auto';
        });
        
        mapIframe.addEventListener('mouseout', function() {
            this.style.pointerEvents = 'none';
        });
    }
});