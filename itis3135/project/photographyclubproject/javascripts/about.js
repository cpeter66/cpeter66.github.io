document.addEventListener('DOMContentLoaded', function() {
    // Leadership team hover effects
    const leaderCards = document.querySelectorAll('.leader-card');
    
    leaderCards.forEach(card => {
        const img = card.querySelector('img');
        
        card.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });
});