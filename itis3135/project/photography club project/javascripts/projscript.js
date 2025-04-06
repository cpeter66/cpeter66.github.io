// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navList = document.querySelector('nav ul');

    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navList.classList.remove('show');
            }
        });
    });

    // Homepage Slideshow
    if (document.querySelector('.hero-slideshow')) {
        initSlideshow();
    }

    // Gallery Filtering
    if (document.querySelector('.photo-gallery')) {
        initGalleryFilters();
    }

    // Resources Tab System
    if (document.querySelector('.category-tabs')) {
        initResourceTabs();
    }

    // Contact Form Validation
    if (document.getElementById('contactForm')) {
        initContactForm();
    }
});

// Homepage Slideshow Functionality
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

    // Auto-advance slides every 5 seconds
    setInterval(() => showSlide(currentSlide + 1), 5000);
}

// Gallery Filtering Functionality
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const sortSelect = document.getElementById('sort');

    // Filter by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.dataset.filter;

            // Filter items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Sort functionality
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const container = document.querySelector('.photo-gallery');
        const items = Array.from(document.querySelectorAll('.gallery-item'));

        items.sort((a, b) => {
            if (sortValue === 'newest') {
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            } else if (sortValue === 'oldest') {
                return new Date(a.dataset.date) - new Date(b.dataset.date);
            } else if (sortValue === 'popular') {
                return parseInt(b.dataset.likes) - parseInt(a.dataset.likes);
            }
            return 0;
        });

        // Re-append sorted items
        items.forEach(item => container.appendChild(item));
    });
}

// Resources Tab System
function initResourceTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding content
            const tabId = this.dataset.tab;
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Contact Form Validation
function initContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
            el.textContent = '';
        });

        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show a success message
            form.reset();
            form.style.display = 'none';
            successMessage.style.display = 'block';
        }
    });

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.style.borderColor = 'var(--accent-color)';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
