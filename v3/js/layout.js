// Global Layout Script for v3
// Injects Unified Header, Footer and Top Banner. Also handles scroll animations
const DISCLAIMER_TEXT = "THIS IS A DEMO WEBSITE PREPARED BY MATTYJACKS.COM AND IS NOT AUTHORIZED BY ITXMEN OR STEPHEN NOLAN. This is a sales pitch site.";

const headerHTML = `
  <header class="site-header">
    <div class="container nav-container">
      <a href="index.html" class="logo">
        <span>ITX</span><span class="logo-accent">MEN</span>
      </a>
      <nav class="nav-links">
        <a href="index.html" class="nav-link" data-page="index">Home</a>
        <a href="about.html" class="nav-link" data-page="about">About</a>
        <a href="services.html" class="nav-link" data-page="services">Services</a>
        <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
        <a href="contact.html" class="btn btn-primary" style="padding: 0.5rem 1.5rem; margin-left: 1rem;">Get Started</a>
      </nav>
      <button class="mobile-menu-btn">☰</button>
    </div>
  </header>
`;

const footerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand fade-in-up">
          <a href="index.html" class="logo" style="margin-bottom: 1rem; display: inline-flex;">
            <span>ITX</span><span class="logo-accent">MEN</span>
          </a>
          <p>Expert IT Guidance at the Intersection of Tech and Growth. Fractional IT leadership for SMBs.</p>
        </div>
        <div class="footer-links fade-in-up stagger-1">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#leadership">Fractional IT Leadership</a></li>
            <li><a href="services.html#ai">AI Strategy</a></li>
            <li><a href="services.html#cloud">Cloud & Infrastructure</a></li>
            <li><a href="services.html#security">Cybersecurity</a></li>
          </ul>
        </div>
        <div class="footer-links fade-in-up stagger-2">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom fade-in-up stagger-3">
        <p>&copy; 2024 ITXMEN. All rights reserved.</p>
        <span class="footer-disclaimer">${DISCLAIMER_TEXT}</span>
      </div>
    </div>
  </footer>
`;

const topBannerHTML = `
  <div class="demo-banner">
    ${DISCLAIMER_TEXT}
  </div>
`;

function injectLayout() {
    // Inject Banner
    document.body.insertAdjacentHTML('afterbegin', topBannerHTML);

    // Inject Header
    const headerContainer = document.getElementById('site-header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // Inject Footer
    const footerContainer = document.getElementById('site-footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }

    // Highlight active link
    highlightActiveLink();

    // Initialize Animations
    initScrollAnimations();

    // Header hide/show on scroll
    initHeaderScroll();
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    let page = 'index'; // default
    if (currentPath.includes('about')) page = 'about';
    else if (currentPath.includes('services')) page = 'services';
    else if (currentPath.includes('contact')) page = 'contact';

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.dataset.page === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to run once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
}

function initHeaderScroll() {
    let lastScroll = 0;
    const header = document.querySelector('.site-header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Don't hide if near top
        if (currentScroll <= 100) {
            header.classList.remove('scroll-down');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll down
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
            header.classList.remove('scroll-down');
        }
        lastScroll = currentScroll;
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', injectLayout);
