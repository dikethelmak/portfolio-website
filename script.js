// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const body = document.body;

    // Open mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenuToggle.classList.add('active');
        mobileNavOverlay.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
    }

    // Close menu when clicking close button
    closeMenu.addEventListener('click', closeMobileMenu);

    // Close menu when clicking overlay
    mobileNavOverlay.addEventListener('click', function(e) {
        if (e.target === mobileNavOverlay) {
            closeMobileMenu();
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking on navigation links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-section a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Active Navigation State Management
    function setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Get all navigation links (both desktop and mobile)
        const allNavLinks = document.querySelectorAll('.nav-links a, .mobile-nav-section a');
        
        allNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Check if this link matches the current page
            if (linkHref === currentPage || 
                (currentPage === 'index.html' && linkHref === 'index.html') ||
                (currentPage === '' && linkHref === 'index.html')) {
                
                // Add active class to the link
                link.classList.add('active-link');
                
                // Add active class to the parent li element for styling
                const parentLi = link.closest('li');
                if (parentLi) {
                    parentLi.classList.add('nav-active');
                }
                
                // Add active class to mobile nav section if applicable
                const mobileNavSection = link.closest('.mobile-nav-section');
                if (mobileNavSection) {
                    mobileNavSection.classList.add('mobile-nav-active');
                }
            } else {
                // Remove active classes if not current page
                link.classList.remove('active-link');
                const parentLi = link.closest('li');
                if (parentLi) {
                    parentLi.classList.remove('nav-active');
                }
            }
        });
    }

    // Set active navigation on page load
    setActiveNavigation();
}); 