// Blood Tests Data
const bloodTests = [
    { name: "CBC (Complete Blood Count), Blood", Price: "₹330" },
    { name: "ESR (Erythrocyte Sedimentation Rate), Blood", Price: "₹200" },
    { name: "Routine Examination, Urine", Price: "₹200" },
    { name: "HbA1c (Hemoglobin A1c), Blood", Price: "₹620" },
    { name: "Glucose, Fasting, Plasma", Price: "₹110" },
    { name: "Glucose, Post Prandial (PP), Plasma & Urine", Price: "₹110" },
    { name: "Thyroid Function Profile (TFT), Free", Price: "₹810" },
    { name: "Lipid Profile", Price: "₹790" },
    { name: "Kidney Function Test (KFT)", Price: "₹1540" },
    { name: "Liver Function Test (LFT)", Price: "₹1050" },
    { name: "Vitamin D (25-Hydroxyvitamin D2 & D3), Total", Price: "₹1700" },
    { name: "Vitamin B12", Price: "₹1160" },
    { name: "Anti CCP (Cyclic Citrullinated Peptide) Antibody, IgG", Price: "₹1490" },
    { name: "Anti Smooth Muscle Antibodies, IgG", Price: "₹1670" },
    { name: "Anti HBs (Hepatitis B Surface) Antibody", Price: "₹1050" },
    { name: "Anti Phospholipid Syndrome (APS) Profile", Price: "₹4750" },
    { name: "Anti Thyroid Antibody (ATAB) Panel", Price: "₹2300" },
    { name: "Anti-Mullerian Hormone (AMH)", Price: "₹2090" },
    { name: "Bacterial Culture & Sensitivity, Adult, Blood", Price: "₹1050" },
    { name: "Bacterial Culture & Sensitivity, Pediatric, Blood", Price: "₹1050" },
    { name: "Bacterial Culture & Sensitivity, Sputum", Price: "₹1100" },
    { name: "Bacterial Culture & Sensitivity, Urine", Price: "₹1050" },
    { name: "Beta - Human Chorionic Gonadotropin (HCG)", Price: "₹750" },
    { name: "CA 125", Price: "₹1030" },
    { name: "CD4/CD8", Price: "₹2020" },
    { name: "Cervical Cancer Screen Panel", Price: "₹2770" },
    { name: "CRP (C-Reactive Protein)", Price: "₹570" },
    { name: "Cytology - PAP Smear, LBC, Collected Sample", Price: "₹730" },
    { name: "Cytology - PAP Smear, LBC, with Procedure", Price: "₹1320" },
    { name: "D-dimer", Price: "₹1450" },
    { name: "Dual Marker (Single & Twin)", Price: "₹2200" },
    { name: "Electrolytes", Price: "₹540" },
    { name: "Estradiol (E2)", Price: "₹670" },
    { name: "Ferritin", Price: "₹890" },
    { name: "FSH (Follicle Stimulating Hormone)", Price: "₹560" },
    { name: "FSH, LH & Prolactin Panel", Price: "₹1430" },
    { name: "H3 Profile (HIV, Hepatitis B, Hepatitis C)", Price: "₹2030" },
    
    { name: "Hemoglobin Electrophoresis / HPLC, Blood", Price: "₹1260" },
    { name: "Histopathology - Biopsy, Any Site, 2 - 5 cm", Price: "₹2000" },
    { name: "Histopathology - Biopsy, Large", Price: "₹2750" },
    { name: "Histopathology - Small Biopsy, Any Site", Price: "₹1400" },
    { name: "HLA B27 Detection, PCR, Blood", Price: "₹2300" },
    { name: "Homocysteine, Plasma", Price: "₹1360" },
    { name: "IgE (Immunoglobin E)", Price: "₹1050" },
    { name: "IL-6 (Interleukin - 6)", Price: "₹3030" },
    { name: "Iron Profile (without Ferritin)", Price: "₹1260" },
    
    { name: "LDH (Lactate Dehydrogenase)", Price: "₹510" },
    { name: "LH (Luteinizing Hormone)", Price: "₹560" },
    
    
    { name: "Lupus Anticoagulant (LA)", Price: "₹2080" },
    { name: "Mycobacterium tuberculosis (MTB) DNA, PCR, Qualitative", Price: "₹1620" },
    { name: "Procalcitonin", Price: "₹3300" },
    { name: "Progesterone", Price: "₹670" },
    { name: "Prolactin", Price: "₹570" },
    { name: "PSA (Prostate Specific Antigen), Free & Total, Serum", Price: "₹1650" },
    { name: "PSA (Prostate Specific Antigen), Total", Price: "₹890" },
    { name: "PTH (Parathyroid Hormone)", Price: "₹1650" },
    { name: "Quadruple Marker", Price: "₹3000" },
    { name: "RA (Rheumatoid Arthritis) Factor", Price: "₹670" },
    { name: "TB Culture, Sputum", Price: "₹1100" },
    { name: "Testosterone, Free & Bioavailable", Price: "₹1820" },
    { name: "Testosterone, Total", Price: "₹720" },
    
    { name: "TORCH Profile B, IgM & IgG", Price: "₹3490" },
    { name: "Total TFT (T3, T4, TSH)", Price: "₹810" },
    { name: "Triple Marker", Price: "₹2800" },
    { name: "TSH (Thyroid Stimulating Hormone)", Price: "₹440" },
    { name: "Vitamin B12", Price: "₹1160" },
    
    { name: "Vitamin D (25-Hydroxyvitamin D2 & D3), Total", Price: "₹1700" },
    
    { name: "Malaria Parasite (MP) Antigen, Rapid Card Test, Blood", Price: "₹670" },
    { name: "Dengue NS1 Antigen, Serum", Price: "₹600" },
    { name: "Anti Dengue Antibody, IgG, Serum", Price: "₹600" },
    { name: "Anti Dengue Antibody, IgM, Serum", Price: "₹600" },
    
    { name: "Glucose, Post Prandial (PP), Plasma", Price: "₹110" },
    { name: "Glucose, Fasting, Plasma & Urine", Price: "₹110" },
    
    { name: "Cholesterol, Total, Serum", Price: "₹260" },
    { name: "Triglycerides, Serum", Price: "₹460" },
    { name: "Cholesterol, High Density Lipoprotein (HDL), Serum", Price: "₹390" },
    { name: "Cholesterol, Low density Lipoprotein (LDL), Serum", Price: "₹510" },
    { name: "Urea/Blood Urea Nitrogen (BUN), Serum", Price: "₹240" },
    { name: "Creatinine/eGFR, Serum", Price: "₹240" },
    { name: "Sodium, Fluid", Price: "₹280" },
    { name: "Potassium, Serum", Price: "₹280" },
    { name: "Chloride, Serum", Price: "₹280" },
    { name: "Calcium, Serum", Price: "₹260" },
    { name: "TSH (Thyroid Stimulating Hormone), Serum", Price: "₹440" },
    { name: "Free T3 (Triiodothyronine), Serum", Price: "₹410" },
    { name: "Free T4", Price: "₹410" },
    { name: "Estrogen Total, Serum", Price: "₹6,000" },
    { name: "Bilirubin, Total/Direct/Indirect, Serum", Price: "₹290" },
    { name: "Uric Acid, Serum", Price: "₹240" },
    
    { name: "Widal Test, Serum", Price: "₹560" },
    { name: "Chikungunya, IgM, Serum", Price: "₹1,160" },
    { name: "Anti Zika Virus Antibody, IgM, Serum", Price: "₹1,600" },
    { name: "Anti Leptospira Antibody, IgM, Serum", Price: "₹1,270" },
    { name: "IL-6 (Interleukin - 6)", Price: "₹3,030" },
    { name: "Routine Examination, Stool", Price: "₹200" },
    
    { name: "Clotting Time, Blood", Price: "₹60" },
    { name: "Bleeding Time , Blood", Price: "₹50" },
    { name: "PT (Prothrombin Time) & INR, Plasma", Price: "₹410" },
    { name: "Platelet Count, Blood", Price: "₹260" },
    { name: "WBC (White Blood Cell) Count, Blood", Price: "₹260" },
    { name: "HIV-1&2 Western blot by EIA - Serum", Price: "₹2,700" },
    { name: "Anti HIV Antibody, Rapid, Serum", Price: "₹620" },
    { name: "CA 125, Serum", Price: "₹1,310" },
    { name: "Insulin, Fasting, Serum", Price: "₹890" },
    { name: "Insulin, Post Prandial (2 Hr Post Meal), Serum", Price: "₹890" },
    { name: "Insulin, Random, Serum", Price: "₹870" },
    { name: "Glucose, Random, Plasma", Price: "₹110" },
    { name: "HBsAg (Hepatitis B Surface Antigen), Serum", Price: "₹560" },
    { name: "Anti HCV (Hepatitis C Virus) Antibody, Serum", Price: "₹1,160" },
    { name: "Anti HAV (Hepatitis A Virus) Antibody, IgM, Serum", Price: "₹1,210" },
    { name: "CEA (Carcinoembryonic Antigen), Serum", Price: "₹840" },
    { name: "IHC - AFP (Alpha Feto Protein)", Price: "₹1,760" },
    { name: "CA 19-9, Serum", Price: "₹1,440" },
    { name: "CA 15-3, Serum", Price: "₹1,440" },
    { name: "CA 27.29 Breast Cancer Marker [RW035]", Price: "₹5,810" },
    { name: "CA 72-4, Serum", Price: "₹1,860" },
    { name: "Phosphorus, Serum", Price: "₹240" },
    { name: "Lipase, Serum", Price: "₹670" },
    { name: "Serum Amylase", Price: "₹510" },
    { name: "SGOT/AST (Aspartate Aminotransferase), Serum", Price: "₹240" },
    { name: "SGPT/ALT (Alanine Aminotransferase), Serum", Price: "₹240" },
    { name: "GGT (Gamma-Glutamyl transferase), Serum", Price: "₹460" },
    { name: "Alkaline Phosphatase", Price: "₹250" },
    { name: "Total Protein, Serum", Price: "₹330" },
    { name: "Microalbumin, Albumin/Creatinine Ratio, Urine", Price: "₹670" },
    { name: "Calcium, 24 hrs, Urine", Price: "₹460" },
    { name: "Creatinine Clearance Test (CCT), 24 hrs, Urine", Price: "₹670" },
    { name: "Chloride, 24 hrs, Urine", Price: "₹460" },
    { name: "Creatinine, 24 hrs, Urine", Price: "₹510" },
    { name: "Microalbumin, 24 hrs, Urine", Price: "₹670" },
    { name: "Phosphorus, 24 hrs, Urine", Price: "₹460" },
    { name: "Potassium, 24 hrs, Urine", Price: "₹460" },
    { name: "Total Protein/Albumin, 24 hrs, Urine", Price: "₹460" },
    { name: "Sodium, 24 hrs, Urine", Price: "₹460" },
    { name: "Urea, 24 hrs, Urine", Price: "₹460" },
    { name: "Uric Acid, 24 hrs, Urine", Price: "₹460" },
    { name: "Cortisol, Early morning (AM), Serum", Price: "₹790" },
    { name: "Cortisol, Late Evening (PM), Serum", Price: "₹790" },
    { name: "Creatine Kinase (CK), Total, Serum", Price: "₹540" },
    { name: "DHEAS (Dehydroepiandrosterone Sulphate), Serum", Price: "₹1,110" },
    { name: "hsCRP (High Sensitivity CRP), Serum", Price: "₹790" },
    { name: "Ionised Calcium, Serum", Price: "₹620" },
    { name: "Magnesium, Serum", Price: "₹510" },
    { name: "Anti Thyroperoxidase (TPO) Antibody, Serum", Price: "₹1,320" },
    { name: "Hemoglobin (Hb)", Price: "₹260" },
    { name: "Routine Examination, Semen", Price: "₹560" },
    { name: "Protein Electrophoresis, Serum", Price: "₹1,050" },
    { name: "Occult Blood, Stool", Price: "₹190" },
    { name: "Allergy Panel, 107 Allergens, LIA", Price: "₹6,000" },
    { name: "Magnesium, Serum", Price: "₹510" },
    { name: "Mantoux Test (MT)", Price: "₹300" },
    { name: "PTT/aPTT (Partial Thromboplastin Time), Plasma", Price: "₹540" },
    { name: "RA (Rheumatoid Arthritis) Factor, Serum", Price: "₹670" },
    { name: "Protein/Creatinine Ratio, Urine", Price: "₹840" },
    { name: "Pregnancy Test, Urine (UPT)", Price: "₹460" },
    { name: "VDRL (Venereal Disease Research Laboratory Test), Serum", Price: "₹300" },
    { name: "Arterial Blood Gas (ABG) & Electrolytes, Blood", Price: "₹1,600" },
    { name: "Allergen, Chicken, IgE, Serum", Price: "₹1,310" },
    { name: "Allergen, Dust Mite (Dermatophagoides Pteronyssinus), IgE, Serum", Price: "₹1,320" },
    { name: "Allergen, Egg White, IgE, Serum", Price: "₹1,310" },
    { name: "Allergen, Egg Yolk, IgE, Serum", Price: "₹1,320" },
    { name: "Allergen, Milk, IgE, Serum", Price: "₹1,310" },
    { name: "Allergen, Fish, IgE, Serum", Price: "₹1,310" },
    { name: "Allergen, Lobster, IgE, Serum", Price: "₹1,100" },
    { name: "Allergen, Peanut, IgE, Serum", Price: "₹1,310" },
    { name: "Allergy- Drug Panel (Maxi) [OS359]", Price: "₹4,230" },
    { name: "Allergy : Asthma / Rhinitis Screening Panel, Adult", Price: "₹7,600" },
    { name: "Allergy Panel, Animal/Insect", Price: "₹4,100" },
    { name: "Allergy Panel, Comprehensive", Price: "₹15,300" },
    { name: "Allergy Panel, Food, Non-Vegetarian", Price: "₹5,900.00" },
    { name: "Allergy Panel, Food, Vegetarian", Price: "₹5,100" },
    { name: "Anti Neutrophil Cytoplasmic Antibodies (ANCA), Serum", Price: "₹2,090" },
    { name: "Anti HEV (Hepatitis E Virus) Antibody, IgM, Serum", Price: "₹1,440" },
    { name: "Anti Streptolysin-O Antibody (ASO), Serum", Price: "₹670" },
    { name: "Bence Jones Protein, 24 hrs, Urine", Price: "₹1,090" },
    { name: "Beta - Human Chorionic Gonadotropin (HCG), Serum", Price: "₹790" },
    { name: "Bicarbonate( Serum)", Price: "₹550" },
    { name: "Cervical Cancer Screen Panel", Price: "₹2,770" },
    { name: "Direct Coombs Test (DCT), Blood", Price: "₹670" },
    { name: "Indirect Coombs Test (ICT), Serum", Price: "₹740" },
    { name: "CK (CPK) Isoenzyme Electrophoresis, Serum", Price: "₹8,000" },
    { name: "Fibrinogen - C, Plasma", Price: "₹1,000" },
    { name: "FNAC, Slides Received (Up to 6 slides)", Price: "₹950" },
    { name: "Folic acid, Serum", Price: "₹1,210" },
    { name: "PSA (Prostate SpeciGic Antigen), Total, Serum", Price: "₹890" },
    { name: "PSA (Prostate SpeciGic Antigen), Free & Total, Serum", Price: "₹1,650" },
    { name: "G6PD (Glucose-6-Phosphate Dehydrogenase), Qualitative, Blood", Price: "₹730" },
    { name: "G6PD (Glucose-6-Phosphate Dehydrogenase), Quantitative, Blood", Price: "₹1,110" },
    { name: "GENEXPERT MTB/XDR RESISTANCE", Price: "₹4,300" },
    { name: "GENEXPERT ULTRA (NEXT GENERATION) MTB WITH RIFAMPICIN RESISTANCE, SEMI QUANTITATIVE PCR", Price: "₹2,300" },
    { name: "H1N1 (Swine Flu) RNA, PCR, Qualitative, Swab", Price: "₹4,640" },
    { name: "Hemoglobin Electrophoresis / HPLC, Blood", Price: "₹1,260" },
    { name: "Hepatitis B Virus (HBV) DNA, PCR, Qualitative, Plasma", Price: "₹4,050" },
    { name: "Hepatitis B Virus (HBV) DNA, PCR, Quantitative, Plasma", Price: "₹6,030" },
    { name: "IgA (Immunoglobulin A), Serum", Price: "₹790" },
    { name: "IgE (Immunoglobin E), Serum", Price: "₹1,050" },
    { name: "FSH, LH & Prolactin Panel", Price: "₹1,430" },
    { name: "MEASLES (RUBEOLA) ANTIBODY IgM, SERUM", Price: "₹1,600" },
    { name: "Anti Measles (Rubeola) Antibodies Panel, IgG & IgM, Serum", Price: "₹3,000" },
    { name: "Anti Mumps Virus Antibodies Panel, IgG & IgM, Serum", Price: "₹3,100" },
    { name: "Cytology - PAP Smear, Conventional, Slides Only", Price: "₹730" },
    { name: "Cytology - PAP Smear, LBC, with Procedure", Price: "₹1,320" },
    { name: "Anti Rh (Anti-D) Antibody, Quantitative, Serum", Price: "₹940" },
    { name: "Rota Virus Antigen", Price: "₹1,000" },
    { name: "Anti Rubella Antibody, IgG, Serum", Price: "₹730" },
    { name: "Anti Rubella Antibody, IgM, Serum", Price: "₹730" },
    { name: "TORCH Profile 4, IgG, Serum", Price: "₹1,980" },
    { name: "TORCH Profile 4, IgM, Serum", Price: "₹1,980" },
    { name: "TORCH Profile 8, IgM & IgG, Serum", Price: "₹3,490" }
    
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
    initializeHealthSlider();

    addSlideAnimationCSS();
    addScrollAnimationStyles();
    addRippleEffect();
    addSectionRevealAnimations();
    lazyLoadImages();
    setTimeout(initializeSearch, 100);
    setTimeout(initializePackageBooking, 100);
    setTimeout(initializeFAQ, 100);
    setTimeout(initializeVisionMissionAnimations, 100);
});

// Blood Tests Initialization with Slider
function initializeBloodTests() {
    const testsGrid = document.querySelector('.tests-grid');
    if (!testsGrid) return;

    // Calculate tests per page based on screen size
    updateTestsPerPage();
    
    totalSlides = Math.ceil(bloodTests.length / testsPerPage);
    
    // Helper functions for price handling and descriptions
    function parsePriceToNumber(priceText) {
        const digits = (priceText || '').toString().replace(/[^0-9.]/g, '');
        const num = parseFloat(digits || '0');
        return isNaN(num) ? 0 : num;
    }
    function formatINR(amount) {
        try {
            return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(amount));
        } catch (e) {
            return Math.round(amount).toString();
        }
    }
    function computeMrp(baseText) {
        const base = parsePriceToNumber(baseText);
        const mrp = base * 1.10; // +10%
        return `₹${formatINR(mrp)}`;
    }
    function buildDescription(name) {
        const base = (name || '').split(',')[0].split('(')[0].trim();
        return `Significance: Helps screen and monitor health related to ${base}.`;
    }

    // Create all test cards
    bloodTests.forEach((test, index) => {
        const testCard = document.createElement('div');
        testCard.className = 'test-card';
        testCard.setAttribute('data-index', index);

        const mrp = computeMrp(test.Price);
        const desc = buildDescription(test.name);

        testCard.innerHTML = `
            <h3>${test.name}</h3>
            <p class="test-desc">${desc}</p>
            <div class="price-row">
                <span class="test-mrp">${mrp}</span>
                <span class="test-Price">${test.Price}</span>
            </div>
            <span class="report-badge">Get Report within 6 hours</span>
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

// Add slide animation CSS with optimized performance
function addSlideAnimationCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(20px) translateZ(0);
            }
            to {
                opacity: 1;
                transform: translateX(0) translateZ(0);
            }
        }
        
        .test-card {
            animation-fill-mode: both;
            will-change: transform, opacity;
            transform: translateZ(0);
        }
        
        /* Optimize animations to use GPU */
        .animate-in, .slider-container, .slide,
        .book-page, .hero-slide, .test-card, .package-card {
            transform: translateZ(0);
            backface-visibility: hidden;
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
            mobileMenuBtn.classList.toggle('active');
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
                if (mobileMenuBtn) {
                    mobileMenuBtn.classList.remove('active');
                }
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
    const consultationCloseBtn = document.querySelector('#consultation-modal .close-modal');
    const radiologyCloseBtn = document.querySelector('#radiology-modal .close-modal');
    const radiologyModal = document.getElementById('radiology-modal');
    const radiologyForm = document.getElementById('radiology-form');
    
    if (consultationCloseBtn) {
        consultationCloseBtn.addEventListener('click', closeConsultationModal);
    }
    
    if (radiologyCloseBtn) {
        radiologyCloseBtn.addEventListener('click', closeRadiologyModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === consultationModal) {
            closeConsultationModal();
        }
        if (event.target === successModal) {
            closeSuccessModal();
        }
        if (event.target === radiologyModal) {
            closeRadiologyModal();
        }
    });

    // Form submission
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleConsultationSubmit();
        });
    }

    // Radiology form submission
    if (radiologyForm) {
        radiologyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRadiologySubmit();
        });
    }
}

// Radiology Modal Functions
function openRadiologyModal(service) {
    const radiologyModal = document.getElementById('radiology-modal');
    const serviceInput = document.getElementById('radiology-service');
    
    if (radiologyModal && serviceInput) {
        radiologyModal.style.display = 'block';
        // Add a small delay before adding the show class for the transition effect
        setTimeout(() => {
            radiologyModal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
        serviceInput.value = service;
    }
}

function closeRadiologyModal() {
    const radiologyModal = document.getElementById('radiology-modal');
    const radiologyForm = document.getElementById('radiology-form');
    
    if (radiologyModal) {
        radiologyModal.classList.remove('show');
        // Wait for the transition to complete before hiding the modal
        setTimeout(() => {
            radiologyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (radiologyForm) {
                radiologyForm.reset();
            }
        }, 300);
    }
}

function handleRadiologySubmit() {
    if (!validateRadiologyForm()) {
        return;
    }
    
    // Get form data
    const formData = {
        service: document.getElementById('radiology-service')?.value || '',
        name: document.getElementById('radiology-name')?.value || '',
        dob: document.getElementById('radiology-dob')?.value || '',
        gender: document.getElementById('radiology-gender')?.value || '',
        medicalHistory: document.getElementById('radiology-medical-history')?.value || '',
        preferredDate: document.getElementById('radiology-preferred-date')?.value || '',
        referredDoctor: document.getElementById('radiology-referred-doctor')?.value || '',
        location: document.getElementById('radiology-location')?.value || ''
    };
    
    console.log('Radiology booking:', formData);
    
    // Here you would send the data to your backend
    // For demo purposes, we'll just show success modal
    closeRadiologyModal();
    showSuccessModal();
}

function validateRadiologyForm() {
    const requiredFields = ['radiology-name', 'radiology-dob', 'radiology-gender', 'radiology-preferred-date', 'radiology-location'];
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
    const preferredDateField = document.getElementById('radiology-preferred-date');
    if (preferredDateField) {
        const preferredDate = preferredDateField.value;
        const today = new Date().toISOString().split('T')[0];
        
        if (preferredDate < today) {
            preferredDateField.style.borderColor = '#FF6B6B';
            alert('Please select a future date for the appointment');
            isValid = false;
        }
    }
    
    return isValid;
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
        // Add a small delay before adding the show class for the transition effect
        setTimeout(() => {
            consultationModal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
}

function closeConsultationModal() {
    if (consultationModal) {
        consultationModal.classList.remove('show');
        // Wait for the transition to complete before hiding the modal
        setTimeout(() => {
            consultationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (consultationForm) {
                consultationForm.reset();
            }
        }, 300);
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
        phone: document.getElementById('phone')?.value || '',
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

function openPhoneDialer() {
    const phoneNumber = "+919594702242"; // The phone number with country Price
    window.location.href = `tel:${phoneNumber}`;
}

// Scroll Animations with optimized performance
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.05, // Lower threshold for earlier detection
        rootMargin: '50px 0px -30px 0px' // Start loading before elements enter viewport
    };

    const observer = new IntersectionObserver(function(entries) {
        // Process all entries in a single frame for better performance
        requestAnimationFrame(() => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('animate-in');
                    // Unobserve after animation to save resources
                    observer.unobserve(element);
                }
            });
        });
    }, observerOptions);

    // Observe all cards and sections
    const animateElements = document.querySelectorAll(
        '.quick-action-card, .lab-card, .test-card, .package-card, .radiology-card, .specialty-card, .location-card'
    );
    
    // Batch observe operations for better performance
    requestAnimationFrame(() => {
        animateElements.forEach(el => {
            // Set will-change for smoother transitions
            el.style.willChange = 'transform, opacity';
            observer.observe(el);
        });
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
    searchInput.placeholder = 'Search blood tests';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 420px;
        margin: 8px auto 1.2rem;
        padding: 10px 14px;
        border: 2px solid var(--background-light);
        border-radius: var(--border-radius);
        font-size: 0.95rem;
        display: block;
    `;

    const bloodTestsSection = document.querySelector('.blood-tests .section-header');
    if (bloodTestsSection) {
        bloodTestsSection.appendChild(searchInput);
    }

    const controls = {
        prev: document.getElementById('prevBtn'),
        next: document.getElementById('nextBtn'),
        dots: document.getElementById('sliderDots'),
        slider: document.getElementById('testsSlider')
    };

    function toggleControls(visible) {
        const display = visible ? '' : 'none';
        if (controls.prev) controls.prev.style.display = display;
        if (controls.next) controls.next.style.display = display;
        if (controls.dots) controls.dots.style.display = display;
    }

    function normalize(text) {
        return text
            .toLowerCase()
            .normalize('NFD').replace(/\p{Diacritic}/gu, '')
            .replace(/[^a-z0-9\s.₹,-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    searchInput.addEventListener('input', function() {
        const raw = this.value;
        const query = normalize(raw);
        const terms = query.split(' ').filter(Boolean);
        const testCards = document.querySelectorAll('.test-card');

        if (!query) {
            // reset to slider view
            toggleControls(true);
            createSliderDots();
            showSlide(0);
            return;
        }

        // hide slider controls during search
        toggleControls(false);

        testCards.forEach(card => {
            const nameText = normalize(card.querySelector('h3').textContent || '');
            const priceText = normalize(card.querySelector('.test-Price')?.textContent || '');
            const mrpText = normalize(card.querySelector('.test-mrp')?.textContent || '');
            const descText = normalize(card.querySelector('.test-desc')?.textContent || '');
            const haystack = `${nameText} ${priceText} ${mrpText} ${descText}`;
            const matches = terms.every(t => haystack.includes(t));
            card.style.display = matches ? 'flex' : 'none';
            card.style.animation = matches ? 'slideIn 0.3s ease forwards' : '';
        });
    });
}

// Form validation
function validateConsultationForm() {
    const requiredFields = ['name', 'phone', 'dob', 'gender', 'preferred-date', 'preferred-time'];
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
    
    // Validate phone number format
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        const phoneValue = phoneField.value.trim();
        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
        
        if (!phoneRegex.test(phoneValue)) {
            phoneField.style.borderColor = '#FF6B6B';
            alert('Please enter a valid 10-digit Indian mobile number');
            isValid = false;
        } else {
            phoneField.style.borderColor = '#4ECDC4';
        }
    }
    
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

// Health Services Slider
let healthSliderInterval;
let currentHealthSlide = 0;
let healthSlides = [];

function initializeHealthSlider() {
    const sliderTrack = document.getElementById('healthSlider');
    const indicatorsContainer = document.getElementById('sliderIndicators');
    
    if (!sliderTrack || !indicatorsContainer) return;
    
    healthSlides = sliderTrack.querySelectorAll('.slide');
    const totalSlides = healthSlides.length;
    
    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToHealthSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // Make slides clickable to their respective health packages
    healthSlides.forEach((slide, index) => {
        slide.style.cursor = 'pointer';
        slide.addEventListener('click', () => {
            // Get the health package name from the slide
            const packageName = slide.querySelector('h3').textContent;
            // Scroll to health packages section
            scrollToSection('health-packages');
            // Highlight the corresponding package (optional)
            highlightHealthPackage(packageName);
        });
    });
    
    // Start auto-slide
    startHealthSlider();
    
    // Pause on hover
    sliderTrack.addEventListener('mouseenter', pauseHealthSlider);
    sliderTrack.addEventListener('mouseleave', startHealthSlider);
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    sliderTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        pauseHealthSlider();
    });
    
    sliderTrack.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                nextHealthSlide();
            } else {
                prevHealthSlide();
            }
        }
        
        startHealthSlider();
    });
}

function startHealthSlider() {
    if (healthSliderInterval) clearInterval(healthSliderInterval);
    healthSliderInterval = setInterval(nextHealthSlide, 3000); // 3 seconds
}

function pauseHealthSlider() {
    if (healthSliderInterval) {
        clearInterval(healthSliderInterval);
        healthSliderInterval = null;
    }
}

function nextHealthSlide() {
    const totalSlides = healthSlides.length;
    currentHealthSlide = (currentHealthSlide + 1) % totalSlides;
    updateHealthSlider();
}

function prevHealthSlide() {
    const totalSlides = healthSlides.length;
    currentHealthSlide = (currentHealthSlide - 1 + totalSlides) % totalSlides;
    updateHealthSlider();
}

function goToHealthSlide(index) {
    currentHealthSlide = index;
    updateHealthSlider();
    // Restart the timer when manually navigating
    startHealthSlider();
}

function updateHealthSlider() {
    const sliderTrack = document.getElementById('healthSlider');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = healthSlides.length;
    
    if (!sliderTrack) return;
    
    // Update slider position
    sliderTrack.style.transform = `translateX(-${currentHealthSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentHealthSlide);
    });
    
    // Add entrance animation to current slide
    healthSlides.forEach((slide, index) => {
        if (index === currentHealthSlide) {
            slide.style.animation = 'slideIn 0.5s ease-out';
        } else {
            slide.style.animation = '';
        }
    });
}

// Function to highlight a health package based on the name
function highlightHealthPackage(packageName) {
    // Map slider names to package names/numbers
    const packageMap = {
        'Allergy Testing': 1,
        'Cancer Screening': 2,
        'Diabetes Management': 3,
        'Fever Diagnostics': 4,
        'Full Body Checkup': 1, // Most comprehensive package
        'Hair & Skin Care': 5,
        'Heart Health': 6,
        'Thyroid Testing': 3  // Assuming this is part of diabetes management
    };
    
    // Get the package number based on the name
    const packageNumber = packageMap[packageName] || 1; // Default to package 1 if not found
    
    // Find the package card
    const packageCards = document.querySelectorAll('.health-pkg-card');
    
    // Remove any existing highlight classes
    packageCards.forEach(card => {
        card.classList.remove('health-pkg-highlight');
    });
    
    // Find the matching package card and highlight it
    const targetCard = document.querySelector(`.health-pkg-card[data-package="${packageNumber}"]`);
    if (targetCard) {
        targetCard.classList.add('health-pkg-highlight');
        
        // Add a temporary animation class
        targetCard.classList.add('health-pkg-pulse');
        
        // Remove the animation class after it completes
        setTimeout(() => {
            targetCard.classList.remove('health-pkg-pulse');
        }, 1000);
    }
}

// Add slide entrance animation
const slideAnimationStyle = document.createElement('style');
slideAnimationStyle.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(slideAnimationStyle);



// FAQ Accordion functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Add debounce function to prevent rapid transitions
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to your analytics service here
});

// Performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Optimize image loading
    optimizeImageLoading();
    
    // Add passive event listeners to improve scroll performance
    addPassiveEventListeners();
});

// Optimize image loading
function optimizeImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.onload = () => img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px' });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Add passive event listeners to improve scroll performance
function addPassiveEventListeners() {
    const wheelOpts = { passive: true };
    const wheelEvents = ['mousewheel', 'wheel', 'touchstart', 'touchmove'];
    
    wheelEvents.forEach(eventName => {
        window.addEventListener(eventName, e => { /* Empty handler */ }, wheelOpts);
    });
}

// Performance optimization - lazy load images with enhanced performance
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        // Process all entries in a single frame for better performance
        requestAnimationFrame(() => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Create a temporary image to preload
                    const tempImage = new Image();
                    tempImage.onload = function() {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    };
                    tempImage.src = img.dataset.src;
                }
            });
        });
    }, {
        rootMargin: '100px 0px', // Load images 100px before they enter viewport
        threshold: 0.01 // Trigger when just 1% of the image is visible
    });
    
    // Batch observe operations for better performance
    requestAnimationFrame(() => {
        images.forEach(img => imageObserver.observe(img));
    });
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

// Initialize modals
function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.close-modal');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Vision Mission Scroll Animations
function initializeVisionMissionAnimations() {
    const animatedCards = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedCards.length === 0) return;
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for each card
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200); // 200ms delay between each card
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedCards.forEach(card => {
        cardObserver.observe(card);
    });
}
