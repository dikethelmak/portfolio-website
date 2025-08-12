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
}); 