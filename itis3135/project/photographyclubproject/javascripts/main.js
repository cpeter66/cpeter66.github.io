// Global functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const setupMobileMenu = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 
                    mobileMenu.classList.contains('hidden') ? 'false' : 'true');
            });
        }
    };

    // Signup modal functionality
    const setupSignupModal = () => {
        const signupBtn = document.getElementById('signup-btn');
        const signupModal = document.getElementById('signup-modal');
        const closeModal = document.getElementById('close-modal');
        const signupForm = document.getElementById('signup-form');

        if (signupBtn && signupModal) {
            // Open modal
            signupBtn.addEventListener('click', () => {
                signupModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });

            // Close modal
            const closeModalHandler = () => {
                signupModal.classList.add('hidden');
                document.body.style.overflow = '';
            };

            if (closeModal) {
                closeModal.addEventListener('click', closeModalHandler);
            }

            // Form submission
            if (signupForm) {
                signupForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // In a real app, you would send form data here
                    alert('Thank you for your application! We will contact you soon.');
                    closeModalHandler();
                    signupForm.reset();
                });
            }

            // Close when clicking outside
            signupModal.addEventListener('click', (e) => {
                if (e.target === signupModal) {
                    closeModalHandler();
                }
            });
        }
    };

    // Smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    } else {
                        location.hash = targetId;
                    }
                }
            });
        });
    };

    // Initialize all functionality
    setupMobileMenu();
    setupSignupModal();
    setupSmoothScrolling();
});