document.addEventListener('DOMContentLoaded', function() {
    // Gallery filtering functionality
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const closeModal = document.getElementById('modal-close');

    // Filter gallery items
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            const filterValue = this.dataset.filter;
            
            galleryItems.forEach(item => {
                item.style.display = (filterValue === 'all' || item.dataset.category === filterValue) 
                    ? 'block' 
                    : 'none';
            });
        });
    });

    // Open modal with clicked image
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3').textContent;
            const author = this.querySelector('p').textContent;

            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalTitle.textContent = title;
            modalAuthor.textContent = author;

            imageModal.classList.remove('hidden');
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => imageModal.classList.add('hidden'));
    
    // Close modal when clicking outside
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.add('hidden');
        }
    });
});