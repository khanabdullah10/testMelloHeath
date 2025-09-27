// Set animation delays for quick action cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.quick-action-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
});