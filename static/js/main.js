// Blood Tests Data
const bloodTests = [
    { name: "Anti CCP (Cyclic Citrullinated Peptide) Antibody, IgG", code: "CB076" },
    { name: "Anti Smooth Muscle Antibodies, IgG", code: "CB059" },
    { name: "Anti HBs (Hepatitis B Surface) Antibody", code: "CB057" },
    { name: "Anti Nuclear Antibodies (ANA), IFA", code: "CB053" },
    { name: "Anti Phospholipid Syndrome (APS) Profile", code: "PR159" },
    { name: "Anti Thyroid Antibody (ATAB) Panel", code: "CB063" },
    { name: "Anti-Mullerian Hormone (AMH)", code: "PATH001404" },
    { name: "Bacterial Culture & Sensitivity, Adult, Blood", code: "MI150" },
    { name: "Bacterial Culture & Sensitivity, Pediatric, Blood", code: "MI151" },
    { name: "Bacterial Culture & Sensitivity, Sputum", code: "MI071" },
    { name: "Bacterial Culture & Sensitivity, Urine", code: "MI154" },
    { name: "Beta - Human Chorionic Gonadotropin (HCG)", code: "CB132" },
    { name: "CA 125", code: "CB071" },
    { name: "CD4/CD8", code: "PATH00477" },
    { name: "Cervical Cancer Screen Panel", code: "PR161" },
    { name: "CRP (C-Reactive Protein)", code: "CB092" },
    { name: "Cytology - PAP Smear, LBC, Collected Sample", code: "CY005" },
    { name: "D-dimer", code: "PATH010158" },
    { name: "Dual Marker (Single & Twin)", code: "SG061" },
    { name: "Electrolytes", code: "PR115" },
    { name: "Estradiol (E2)", code: "CB099" },
    { name: "Ferritin", code: "CB371" },
    { name: "FSH (Follicle Stimulating Hormone)", code: "CB109" },
    { name: "FSH, LH & Prolactin Panel", code: "PR048" },
    { name: "H3 Profile (HIV, Hepatitis B, Hepatitis C)", code: "PR121" },
    { name: "HbA1c (Hemoglobin A1c), Blood", code: "CB115" },
    { name: "Hemoglobin Electrophoresis / HPLC, Blood", code: "HAD12" },
    { name: "Histopathology - Biopsy, Any Site, 2 - 5 cm", code: "HISTO001129" },
    { name: "Histopathology - Biopsy, Large", code: "AP125" },
    { name: "Histopathology - Small Biopsy, Any Site", code: "AP039" },
    { name: "HLA B27 Detection, PCR, Blood", code: "MB014" },
    { name: "Homocysteine, Plasma", code: "CB135" },
    { name: "IgE (Immunoglobin E)", code: "CB139" },
    { name: "IL-6 (Interleukin - 6)", code: "PATH001490" },
    { name: "Iron Profile (without Ferritin)", code: "PATH001470" },
    { name: "Kidney Function Test (KFT)", code: "PR038" },
    { name: "LDH (Lactate Dehydrogenase)", code: "CB146" },
    { name: "LH (Luteinizing Hormone)", code: "CB149" },
    { name: "Lipid Profile", code: "PR130" },
    { name: "Liver Function Test (LFT)", code: "PR131" },
    { name: "Lupus Anticoagulant (LA)", code: "OS152" },
    { name: "Mycobacterium tuberculosis (MTB) DNA, PCR, Qualitative", code: "MB009" },
    { name: "Procalcitonin", code: "CB172" },
    { name: "Progesterone", code: "CB173" },
    { name: "Prolactin", code: "CB174" },
    { name: "PSA (Prostate Specific Antigen), Free & Total, Serum", code: "CB106" },
    { name: "PSA (Prostate Specific Antigen), Total", code: "CB177" },
    { name: "PTH (Parathyroid Hormone)", code: "CB178" },
    { name: "Quadruple Marker", code: "SG063" },
    { name: "RA (Rheumatoid Arthritis) Factor", code: "CB179" },
    { name: "TB Culture, Sputum", code: "MI109" },
    { name: "Testosterone, Free & Bioavailable", code: "CB108" },
    { name: "Testosterone, Total", code: "CB200" },
    { name: "Thyroid Function Profile (TFT), Free", code: "PR056" },
    { name: "TORCH Profile B, IgM & IgG", code: "PR144" },
    { name: "Total TFT (T3, T4, TSH)", code: "PR148" },
    { name: "Triple Marker", code: "SG062" },
    { name: "TSH (Thyroid Stimulating Hormone)", code: "CB207" },
    { name: "Vitamin B12", code: "CB234" },
    { name: "Vitamin D (25-Hydroxyvitamin D2 & D3), Total", code: "CB235" }
];

// Global variables
let currentSlide = 0;
let testsPerPage = 8;
let totalSlides = 0;
let heroCurrentSlide = 0;

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const consultationModal = document.getElementById('consultation-modal');
const successModal = document.getElementById('success-modal');
const consultationForm = document.getElementById('consultation-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeBloodTests();
    initializeNavigation();
    initializeSpecialtyCards();
    initializeModal();
    initializeScrollAnimations();
    initializeSlider();
    initializeHeroSlider();
    addSlideAnimationCSS();
    addScrollAnimationStyles();
    addRippleEffect();
    addSectionRevealAnimations();
    lazyLoadImages();
    setTimeout(initializeSearch, 100);
    setTimeout(initializePackageBooking, 100);
});

// Blood Tests Initialization with Slider
function initializeBloodTests() {
    const testsGrid = document.querySelector('.tests-grid');
    if (!testsGrid) return;

    // Calculate tests per page based on screen size
    updateTestsPerPage();
    
    totalSlides = Math.ceil(bloodTests.length / testsPerPage);
    
    // Create all test cards
    bloodTests.forEach((test, index) => {
        const testCard = document.createElement('div');
        testCard.className = 'test-card';
        testCard.setAttribute('data-index', index);
        testCard.innerHTML = `
            <h3>${test.name}</h3>
            <p>Professional blood test with home collection service</p>
            <span class="test-code">${test.code}</span>
        `;
        testCard.addEventListener('click', () => openWhatsApp());
        testsGrid.appendChild(testCard);
    });
    
    // Create slider dots
    createSliderDots();
    
    // Show initial slide
    showSlide(0);
}

function updateTestsPerPage() {
    const width = window.innerWidth;
    if (width < 480) {
        testsPerPage = 4;
    } else if (width < 768) {
        testsPerPage = 6;
    } else if (width < 1024) {
        testsPerPage = 8;
    } else {
        testsPerPage = 12;
    }
}

function createSliderDots() {
    const dotsContainer = document.getElementById('sliderDots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function initializeSlider() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => changeSlide(-1));
        nextBtn.addEventListener('click', () => changeSlide(1));
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateTestsPerPage();
        totalSlides = Math.ceil(bloodTests.length / testsPerPage);
        createSliderDots();
        if (currentSlide >= totalSlides) {
            currentSlide = totalSlides - 1;
        }
        showSlide(currentSlide);
    });
}

function changeSlide(direction) {
    const newSlide = currentSlide + direction;
    
    if (newSlide >= 0 && newSlide < totalSlides) {
        goToSlide(newSlide);
    }
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    showSlide(currentSlide);
    updateSliderControls();
    updateDots();
}

function showSlide(slideIndex) {
    const testCards = document.querySelectorAll('.test-card');
    const startIndex = slideIndex * testsPerPage;
    const endIndex = startIndex + testsPerPage;
    
    testCards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'flex';
            card.style.animation = 'slideIn 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

function updateSliderControls() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Add slide animation CSS
function addSlideAnimationCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .test-card {
            animation-fill-mode: both;
        }
    `;
    document.head.appendChild(style);
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header && window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else if (header) {
            header.style.background = '#FFFFFF';
            header.style.backdropFilter = 'none';
        }
    });
}

// Specialty Cards
function initializeSpecialtyCards() {
    const specialtyCards = document.querySelectorAll('.specialty-card');
    specialtyCards.forEach(card => {
        card.addEventListener('click', function() {
            const specialty = this.getAttribute('data-specialty');
            openConsultationModal(specialty);
        });
    });
}

// Modal Functions
function initializeModal() {
    const closeModal = document.querySelector('.close-modal');
    
    if (closeModal) {
        closeModal.addEventListener('click', closeConsultationModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === consultationModal) {
            closeConsultationModal();
        }
        if (event.target === successModal) {
            closeSuccessModal();
        }
    });

    // Form submission
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleConsultationSubmit();
        });
    }
}

function openConsultationModal(specialty) {
    const specialtyInput = document.getElementById('specialty');
    if (specialtyInput) {
        specialtyInput.value = specialty;
    }
    
    // Set minimum date to today
    const preferredDateInput = document.getElementById('preferred-date');
    if (preferredDateInput) {
        const today = new Date().toISOString().split('T')[0];
        preferredDateInput.setAttribute('min', today);
    }
    
    if (consultationModal) {
        consultationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeConsultationModal() {
    if (consultationModal) {
        consultationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (consultationForm) {
            consultationForm.reset();
        }
    }
}

function handleConsultationSubmit() {
    if (!validateConsultationForm()) {
        return;
    }
    
    // Get form data
    const formData = {
        specialty: document.getElementById('specialty')?.value || '',
        name: document.getElementById('name')?.value || '',
        dob: document.getElementById('dob')?.value || '',
        gender: document.getElementById('gender')?.value || '',
        medicalHistory: document.getElementById('medical-history')?.value || '',
        preferredDate: document.getElementById('preferred-date')?.value || '',
        preferredTime: document.getElementById('preferred-time')?.value || '',
        referredDoctor: document.getElementById('referred-doctor')?.value || ''
    };
    
    console.log('Consultation booking:', formData);
    
    // Here you would send the data to your backend
    // For demo purposes, we'll just show success modal
    closeConsultationModal();
    showSuccessModal();
}

function showSuccessModal() {
    if (successModal) {
        successModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    if (successModal) {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function openWhatsApp() {
    const phoneNumber = "9594702242"; // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your health services. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animateElements = document.querySelectorAll(
        '.quick-action-card, .lab-card, .test-card, .package-card, .radiology-card, .specialty-card, .location-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add CSS animations dynamically
function addScrollAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .quick-action-card, .lab-card, .test-card, .package-card, 
        .radiology-card, .specialty-card, .location-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .package-card.featured {
            animation: highlight-pulse 3s ease-in-out infinite;
        }
        
        @keyframes highlight-pulse {
            0%, 100% { box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3); }
            50% { box-shadow: 0 8px 30px rgba(255, 107, 107, 0.5); }
        }
    `;
    document.head.appendChild(style);
}

// Hero Slider
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    // Auto-advance slides every 5 seconds
    setInterval(() => {
        nextHeroSlide();
    }, 5000);
}

function nextHeroSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        slides[heroCurrentSlide].classList.remove('active');
        heroCurrentSlide = (heroCurrentSlide + 1) % slides.length;
        slides[heroCurrentSlide].classList.add('active');
    }
}

// Search functionality for blood tests
function initializeSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search blood tests...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        margin: 0 auto 2rem;
        padding: 12px 20px;
        border: 2px solid var(--background-light);
        border-radius: var(--border-radius);
        font-size: 1rem;
        display: block;
    `;

    const bloodTestsSection = document.querySelector('.blood-tests .section-header');
    if (bloodTestsSection) {
        bloodTestsSection.appendChild(searchInput);
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const testCards = document.querySelectorAll('.test-card');
        
        testCards.forEach(card => {
            const testName = card.querySelector('h3').textContent.toLowerCase();
            const testCode = card.querySelector('.test-code').textContent.toLowerCase();
            
            if (testName.includes(searchTerm) || testCode.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Form validation
function validateConsultationForm() {
    const requiredFields = ['name', 'dob', 'gender', 'preferred-date', 'preferred-time'];
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field) return;
        
        const value = field.value.trim();
        
        if (!value) {
            field.style.borderColor = '#FF6B6B';
            isValid = false;
        } else {
            field.style.borderColor = '#4ECDC4';
        }
    });
    
    // Validate date is not in the past
    const preferredDateField = document.getElementById('preferred-date');
    if (preferredDateField) {
        const preferredDate = preferredDateField.value;
        const today = new Date().toISOString().split('T')[0];
        
        if (preferredDate < today) {
            preferredDateField.style.borderColor = '#FF6B6B';
            alert('Please select a future date for consultation');
            isValid = false;
        }
    }
    
    return isValid;
}

// Package booking handlers
function initializePackageBooking() {
    const packageCards = document.querySelectorAll('.package-card .btn');
    packageCards.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const packageCard = this.closest('.package-card');
            const packageName = packageCard ? packageCard.querySelector('h3').textContent : 'Health Package';
            bookPackage(packageName);
        });
    });
}

function bookPackage(packageName) {
    const message = `Hi! I would like to book the ${packageName}. Please provide more details.`;
    const phoneNumber = "9594702242";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Add loading animation for dynamic content
function showLoading(element) {
    element.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 200px;">
            <div style="
                width: 50px; 
                height: 50px; 
                border: 3px solid #f3f3f3; 
                border-top: 3px solid #4ECDC4; 
                border-radius: 50%; 
                animation: spin 1s linear infinite;
            "></div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to your analytics service here
});

// Performance optimization - lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add ripple effect to buttons
function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .quick-action-card, .specialty-card, .package-card');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add smooth reveal animations for sections
function addSectionRevealAnimations() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        sectionObserver.observe(section);
    });
}