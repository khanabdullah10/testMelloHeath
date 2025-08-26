// Health Packages JavaScript functionality

// Global variables
let healthPkgExpanded = false;
const healthPkgContentStates = {};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHealthPkgPackages();
    setupHealthPkgEventListeners();
});

// Initialize package functionality
function initializeHealthPkgPackages() {
    // Set initial content states
    for (let i = 1; i <= 6; i++) {
        healthPkgContentStates[i] = false; // false = collapsed, true = expanded
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize intersection observer for animations
    setupHealthPkgIntersectionObserver();
}

// Setup event listeners
function setupHealthPkgEventListeners() {
    // Add click event to all Book Now buttons
    const bookButtons = document.querySelectorAll('.health-pkg-btn-primary');
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            handleHealthPkgBookNow(this);
        });
    });
    
    // Add hover effects to package cards
    const packageCards = document.querySelectorAll('.health-pkg-card');
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('health-pkg-featured')) {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('health-pkg-featured')) {
                this.style.transform = 'scale(1.02)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// Setup intersection observer for scroll animations
function setupHealthPkgIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const packageCards = document.querySelectorAll('.health-pkg-card');
    packageCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Toggle package content (Read More/Show Less) - Fixed for individual package control
function toggleHealthPkgContent(packageId) {
    const packageCard = document.querySelector(`[data-package="${packageId}"]`);
    if (!packageCard) return;
    
    const contentPreview = packageCard.querySelector('.health-pkg-content-preview');
    const contentFull = packageCard.querySelector('.health-pkg-content-full');
    const readMoreBtn = packageCard.querySelector('.health-pkg-read-more-btn');
    
    // Check this specific package's state
    const isExpanded = healthPkgContentStates[packageId];
    
    // Disable only this button during animation
    readMoreBtn.disabled = true;
    readMoreBtn.style.opacity = '0.6';
    
    if (!isExpanded) {
        // Expand this specific package
        healthPkgContentStates[packageId] = true;
        readMoreBtn.textContent = 'Show Less';
        
        // Fade out preview
        contentPreview.style.transition = 'opacity 0.2s ease';
        contentPreview.style.opacity = '0';
        
        setTimeout(() => {
            // Switch content
            contentPreview.style.display = 'none';
            contentFull.style.display = 'block';
            contentFull.style.opacity = '0';
            contentFull.style.maxHeight = '0';
            contentFull.style.overflow = 'hidden';
            contentFull.style.transition = 'opacity 0.3s ease, max-height 0.3s ease';
            
            // Get height and animate
            const targetHeight = contentFull.scrollHeight;
            
            requestAnimationFrame(() => {
                contentFull.style.opacity = '1';
                contentFull.style.maxHeight = targetHeight + 'px';
            });
            
            // Cleanup after animation
            setTimeout(() => {
                contentFull.style.maxHeight = 'none';
                contentFull.style.overflow = 'visible';
                readMoreBtn.disabled = false;
                readMoreBtn.style.opacity = '1';
            }, 300);
            
        }, 200);
        
    } else {
        // Collapse this specific package
        healthPkgContentStates[packageId] = false;
        readMoreBtn.textContent = 'Read More';
        
        const currentHeight = contentFull.scrollHeight;
        contentFull.style.maxHeight = currentHeight + 'px';
        contentFull.style.overflow = 'hidden';
        contentFull.style.transition = 'opacity 0.25s ease, max-height 0.25s ease';
        
        requestAnimationFrame(() => {
            contentFull.style.opacity = '0';
            contentFull.style.maxHeight = '0';
        });
        
        setTimeout(() => {
            contentFull.style.display = 'none';
            contentPreview.style.display = 'block';
            contentPreview.style.opacity = '0';
            contentPreview.style.transition = 'opacity 0.2s ease';
            
            requestAnimationFrame(() => {
                contentPreview.style.opacity = '1';
            });
            
            setTimeout(() => {
                readMoreBtn.disabled = false;
                readMoreBtn.style.opacity = '1';
            }, 200);
            
        }, 250);
    }
}

// Toggle packages visibility (Explore More) - Optimized for speed
function toggleHealthPkgPackages() {
    const hiddenPackages = document.querySelectorAll('.health-pkg-card.health-pkg-hidden');
    const showingPackages = document.querySelectorAll('.health-pkg-card.health-pkg-showing');
    const exploreBtn = document.getElementById('healthPkgExploreBtn');
    const btnText = exploreBtn.querySelector('span');
    const btnIcon = exploreBtn.querySelector('i');
    
    // Disable button briefly to prevent double clicks
    exploreBtn.disabled = true;
    
    if (!healthPkgExpanded) {
        // Show hidden packages - FAST animation
        btnText.textContent = 'Show Less Packages';
        btnIcon.style.transform = 'rotate(180deg)';
        exploreBtn.classList.add('health-pkg-expanded');
        healthPkgExpanded = true;
        
        // Show all packages at once with staggered fade-in
        hiddenPackages.forEach((card, index) => {
            // Prepare card for animation
            card.classList.remove('health-pkg-hidden');
            card.classList.add('health-pkg-showing');
            card.style.display = 'block';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
            
            // Trigger animation immediately
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        });
        
        // Re-enable button quickly
        setTimeout(() => {
            exploreBtn.disabled = false;
        }, 200);
        
    } else {
        // Hide packages - FAST animation
        btnText.textContent = 'Explore More Packages';
        btnIcon.style.transform = 'rotate(0deg)';
        exploreBtn.classList.remove('health-pkg-expanded');
        healthPkgExpanded = false;
        
        // Hide all packages quickly
        showingPackages.forEach((card, index) => {
            card.style.transition = `opacity 0.2s ease ${index * 0.02}s, transform 0.2s ease ${index * 0.02}s`;
            card.style.opacity = '0';
            card.style.transform = 'translateY(-10px)';
            
            // Remove from DOM after fade
            setTimeout(() => {
                card.classList.add('health-pkg-hidden');
                card.classList.remove('health-pkg-showing');
                card.style.display = 'none';
                // Reset styles
                card.style.opacity = '';
                card.style.transform = '';
                card.style.transition = '';
            }, 200 + (index * 20));
        });
        
        // Re-enable button quickly and scroll
        setTimeout(() => {
            exploreBtn.disabled = false;
            
            // Quick scroll to top of packages
            const packagesGrid = document.querySelector('.health-pkg-grid');
            if (packagesGrid) {
                packagesGrid.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    }
}

// Handle Book Now button clicks
function handleHealthPkgBookNow(button) {
    const packageCard = button.closest('.health-pkg-card');
    const packageTitle = packageCard.querySelector('h3').textContent;
    const packagePrice = packageCard.querySelector('.health-pkg-current-price').textContent;
    
    // Add loading state
    const originalText = button.textContent;
    button.textContent = 'Booking...';
    button.style.opacity = '0.7';
    button.disabled = true;
    
    // Simulate booking process
    setTimeout(() => {
        // Show success message
        showHealthPkgNotification(`Great! You're interested in ${packageTitle} at ${packagePrice}. Redirecting to booking page...`, 'success');
        
        // Reset button after delay
        setTimeout(() => {
            button.textContent = originalText;
            button.style.opacity = '1';
            button.disabled = false;
        }, 2000);
        
        // Here you would typically redirect to booking page or open booking modal
        // window.location.href = `/book?package=${encodeURIComponent(packageTitle)}`;
        
    }, 1500);
}

// Show notification
function showHealthPkgNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `health-pkg-notification health-pkg-notification-${type}`;
    notification.innerHTML = `
        <div class="health-pkg-notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="health-pkg-notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    notification.querySelector('.health-pkg-notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    notification.querySelector('.health-pkg-notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Utility function to format price
function formatHealthPkgPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(price);
}

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate layout if needed
    const packageCards = document.querySelectorAll('.health-pkg-card');
    packageCards.forEach(card => {
        if (card.classList.contains('health-pkg-featured') && window.innerWidth <= 768) {
            card.style.transform = 'none';
        } else if (card.classList.contains('health-pkg-featured') && window.innerWidth > 768) {
            card.style.transform = 'scale(1.02)';
        }
    });
});

// Handle scroll events for performance
let healthPkgScrollTimeout;
window.addEventListener('scroll', function() {
    if (healthPkgScrollTimeout) {
        clearTimeout(healthPkgScrollTimeout);
    }
    
    healthPkgScrollTimeout = setTimeout(() => {
        // Add any scroll-based animations or effects here
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add parallax effect to section header if desired
        const header = document.querySelector('.health-pkg-header');
        if (header) {
            const offsetTop = header.offsetTop;
            const scrolled = scrollTop - offsetTop;
            const rate = scrolled * -0.5;
            
            if (scrolled > 0 && scrolled < window.innerHeight) {
                header.style.transform = `translateY(${rate}px)`;
            }
        }
    }, 10);
});

// Touch events for mobile devices
let healthPkgTouchStartY = 0;
let healthPkgTouchEndY = 0;

document.addEventListener('touchstart', function(e) {
    healthPkgTouchStartY = e.changedTouches[0].screenY;
}, {passive: true});

document.addEventListener('touchend', function(e) {
    healthPkgTouchEndY = e.changedTouches[0].screenY;
    handleHealthPkgSwipe();
}, {passive: true});

function handleHealthPkgSwipe() {
    const swipeThreshold = 50;
    const diffY = healthPkgTouchStartY - healthPkgTouchEndY;
    
    // Detect swipe up on mobile for better UX
    if (Math.abs(diffY) > swipeThreshold) {
        if (diffY > 0) {
            // Swipe up - could trigger some action
            console.log('Swipe up detected');
        } else {
            // Swipe down
            console.log('Swipe down detected');
        }
    }
}

// Export functions for external use
window.HealthPkgPackages = {
    toggleHealthPkgContent,
    toggleHealthPkgPackages,
    handleHealthPkgBookNow,
    showHealthPkgNotification,
    formatHealthPkgPrice
};

// Prevent conflicts with other scripts
(function() {
    'use strict';
    
    // Additional mobile optimizations
    if (window.innerWidth <= 768) {
        // Optimize for mobile performance
        const cards = document.querySelectorAll('.health-pkg-card');
        cards.forEach(card => {
            // Reduce animation complexity on mobile
            card.style.willChange = 'transform';
        });
    }
})();


// Create and append modal to body
function createHealthPkgModal() {
    const modal = document.createElement('div');
    modal.className = 'health-pkg-modal';
    modal.id = 'healthPkgModal';
    modal.innerHTML = `
        <div class="health-pkg-modal-content">
            <button class="health-pkg-modal-close" onclick="closeHealthPkgModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="health-pkg-modal-header">
                <h3 class="health-pkg-modal-title"></h3>
                <div class="health-pkg-modal-price"></div>
            </div>
            <div class="health-pkg-modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeHealthPkgModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeHealthPkgModal();
        }
    });
}

// Show modal with package details
function showHealthPkgModal(packageId) {
    const packageCard = document.querySelector(`[data-package="${packageId}"]`);
    if (!packageCard) return;

    const modal = document.getElementById('healthPkgModal');
    const title = packageCard.querySelector('h3').textContent;
    const price = packageCard.querySelector('.health-pkg-price').innerHTML;
    const fullContent = packageCard.querySelector('.health-pkg-content-full').innerHTML;
    const testCount = packageCard.querySelector('.health-pkg-test-count').textContent;
    const description = packageCard.querySelector('.health-pkg-description').textContent;

    modal.querySelector('.health-pkg-modal-title').textContent = title;
    modal.querySelector('.health-pkg-modal-price').innerHTML = price;
    modal.querySelector('.health-pkg-modal-body').innerHTML = `
        <p class="health-pkg-description">${description}</p>
        <div class="health-pkg-test-count">${testCount}</div>
        ${fullContent}
    `;

    // Show modal with animation
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
}

// Close modal
function closeHealthPkgModal() {
    const modal = document.getElementById('healthPkgModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Update toggleHealthPkgContent function to use modal
function toggleHealthPkgContent(packageId) {
    showHealthPkgModal(packageId);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createHealthPkgModal();
    setupHealthPkgEventListeners();
});