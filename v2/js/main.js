/**
 * Main Javascript for ITXMEN v2 Prototype
 * Handles unified layout injection, mobile navigation, and scroll animations
 */

const APP_CONFIG = {
    disclaimerText: "THIS IS A DEMO WEBSITE PREPARED BY MATTYJACKS.COM AND IS NOT AUTHORIZED BY ITXMEN OR STEPHEN NOLAN. This is a sales pitch site."
};

/**
 * Returns the HTML for the Header including the disclaimer banner
 */
function getHeaderHTML() {
    const currentPath = window.location.pathname;

    const isActive = (path) => {
        // Basic check for active link based on pathname
        if (path === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) return 'active';
        if (currentPath.includes(path)) return 'active';
        return '';
    };

    return `
    <div class="disclaimer-banner">
      ${APP_CONFIG.disclaimerText}
    </div>
    <header class="site-header">
      <div class="container">
        <a href="index.html" class="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-color)">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          ITX<span>MEN</span>
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          ☰
        </button>
        
        <ul class="nav-links">
          <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
          <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
          <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
          <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
          <li><a href="contact.html" class="btn btn-primary" style="padding: 0.5rem 1rem; color: #fff;">Free Consultation</a></li>
        </ul>
      </div>
    </header>
  `;
}

/**
 * Returns the HTML for the Footer
 */
function getFooterHTML() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <a href="index.html" class="logo">ITX<span>MEN</span></a>
            <p>Expert IT Guidance at the Intersection of Tech and Growth. We provide fractional IT leadership tailored for SMBs.</p>
          </div>
          <div class="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="services.html#leadership">Fractional IT Leadership</a></li>
              <li><a href="services.html#ai">AI Strategy</a></li>
              <li><a href="services.html#cloud">Cloud Strategy</a></li>
              <li><a href="services.html#security">Cybersecurity</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="about.html#why-us">Why Choose Us</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-disclaimer">
            ${APP_CONFIG.disclaimerText}
          </div>
          <p>&copy; ${new Date().getFullYear()} ITXMEN (Mockup). All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Injects layout components and initializes scripts
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Header into element with id="site-header-container"
    const headerContainer = document.getElementById("site-header-container");
    if (headerContainer) {
        headerContainer.innerHTML = getHeaderHTML();
    }

    // 2. Inject Footer into element with id="site-footer-container"
    const footerContainer = document.getElementById("site-footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = getFooterHTML();
    }

    // 3. Setup mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 4. Initialize Scroll Animations (Intersection Observer)
    const animElements = document.querySelectorAll('.fade-in-up');

    if (animElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing once animated
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        animElements.forEach(el => observer.observe(el));
    }
});
