// Lab Partners Marquee
document.addEventListener('DOMContentLoaded', function() {
    initLabPartnersMarquee();
});

function initLabPartnersMarquee() {
    const labGrid = document.querySelector('.lab-grid');
    if (!labGrid) return;

    // Touch event handlers for mobile
    labGrid.addEventListener('touchstart', function() {
        labGrid.classList.add('paused');
    });

    labGrid.addEventListener('touchend', function() {
        labGrid.classList.remove('paused');
    });

    // Also handle mouse events for desktop testing
    labGrid.addEventListener('mouseenter', function() {
        labGrid.classList.add('paused');
    });

    labGrid.addEventListener('mouseleave', function() {
        labGrid.classList.remove('paused');
    });
}