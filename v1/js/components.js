class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="disclaimer-banner">
                THIS IS A DEMO WEBSITE PREPARED BY MATTYJACKS.COM AND IS NOT AUTHORIZED BY ITXMEN OR STEPHEN NOLAN. This is a sales pitch site.
            </div>
            <header class="site-header">
                <div class="header-container container">
                    <a href="index.html" class="logo">
                        <span class="logo-text text-gradient">ITXMEN</span>
                    </a>
                    <button class="mobile-menu-btn" aria-label="Toggle Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html" class="nav-cta">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;

        // Mobile menu toggle logic
        const btn = this.querySelector('.mobile-menu-btn');
        const nav = this.querySelector('.main-nav');

        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
                <div class="container footer-content">
                    <div class="footer-brand">
                        <span class="logo-text text-gradient">ITXMEN</span>
                        <p>Expert IT Guidance at the Intersection of Tech and Growth.</p>
                        <p class="mt-4"><a href="mailto:hello@itxmen.com" class="text-accent">hello@itxmen.com</a></p>
                    </div>
                    <div class="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © 2026 ITXMEN - All Rights Reserved.</p>
                    <p class="disclaimer-text mt-2">
                        <strong>DISCLAIMER:</strong> THIS IS A DEMO WEBSITE PREPARED BY MATTYJACKS.COM AND IS NOT AUTHORIZED BY ITXMEN OR STEPHEN NOLAN. This is a sales pitch site.
                    </p>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
