document.addEventListener('DOMContentLoaded', function() {
    // RSVP Modal functionality
    const setupRSVPModal = () => {
        const rsvpButtons = document.querySelectorAll('.rsvp-btn');
        const rsvpModal = document.getElementById('rsvp-modal');
        const closeRsvpModal = document.getElementById('close-rsvp-modal');
        const rsvpForm = document.getElementById('rsvp-form');
        const eventModalTitle = document.getElementById('event-modal-title');

        if (!rsvpModal) return;

        const openModal = (eventTitle) => {
            eventModalTitle.textContent = `RSVP: ${eventTitle}`;
            rsvpModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            rsvpModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Set up event listeners for RSVP buttons
        rsvpButtons.forEach(button => {
            button.addEventListener('click', () => {
                const eventCard = button.closest('.event-card');
                const eventTitle = eventCard.querySelector('.event-title').textContent;
                openModal(eventTitle);
            });
        });

        // Close modal handlers
        if (closeRsvpModal) {
            closeRsvpModal.addEventListener('click', closeModal);
        }

        // Form submission
        if (rsvpForm) {
            rsvpForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // In a real app, you would send form data here
                alert('Thank you for your RSVP! We look forward to seeing you at the event.');
                closeModal();
                rsvpForm.reset();
            });
        }

        // Close when clicking outside modal content
        rsvpModal.addEventListener('click', (e) => {
            if (e.target === rsvpModal) {
                closeModal();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && rsvpModal.classList.contains('active')) {
                closeModal();
            }
        });
    };

    // Event card hover effects
    const setupEventCardHover = () => {
        const eventCards = document.querySelectorAll('.event-card');
        
        eventCards.forEach(card => {
            const dateBadge = card.querySelector('.event-date');
            
            card.addEventListener('mouseenter', () => {
                if (dateBadge) {
                    dateBadge.style.backgroundColor = '#B3A369';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (dateBadge) {
                    dateBadge.style.backgroundColor = '#00703C';
                }
            });
        });
    };

    // Initialize all functionality
    setupRSVPModal();
    setupEventCardHover();
});