document.addEventListener('DOMContentLoaded', function() {
    // Image gallery modal functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const title = this.querySelector('h3').textContent;
            const author = this.querySelector('p').textContent;
            
            // Create modal content
            const modalContent = `
                <div class="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
                    <img src="${imgSrc}" alt="${title}" class="w-full max-h-[80vh] object-contain">
                    <div class="p-4">
                        <h3 class="text-xl font-bold">${title}</h3>
                        <p class="text-gray-600">${author}</p>
                    </div>
                </div>
            `;
            
            // Create and show modal
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
            modal.innerHTML = modalContent;
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            document.body.appendChild(modal);
        });
    });

    // Event countdown timer
    function updateCountdown() {
        const eventDate = new Date('October 15, 2023 15:00:00').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        const countdownTimer = document.getElementById('countdown-timer');
        if (!countdownTimer) return;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownTimer.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">DAYS</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">HOURS</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">MINUTES</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">SECONDS</span>
                </div>
            `;
        } else {
            countdownTimer.innerHTML = '<div class="text-uncc-gold font-bold">Event has started!</div>';
        }
    }

    // Initialize countdown and update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
});