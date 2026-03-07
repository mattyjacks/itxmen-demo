document.addEventListener('DOMContentLoaded', () => {
    const disclaimerHtml = `
        <div class="disclaimer-banner">
            <p><strong>THIS IS A DEMO WEBSITE PREPARED BY MATTYJACKS.COM AND IS NOT AUTHORIZED BY ITXMEN OR STEPHEN NOLAN.</strong> This is a sales pitch site.</p>
        </div>
    `;

    const headerHtml = `
        <header class="site-header">
            <div class="container nav-container">
                <a href="index.html" class="logo">
                    ITXMEN <span class="v-badge">V4 Pitch</span>
                </a>
                <nav class="main-nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="what-why.html">What & Why</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="expertmatch.html">ExpertMatch</a></li>
                        <li><a href="ai-blueprint.html">AI Blueprint</a></li>
                        <li><a href="cybersecurity.html">Cybersecurity</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="game.html">🎮 Game</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    const footerHtml = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-content">
                    <div>
                        <h3 class="footer-title">ITXMEN Demo</h3>
                        <p class="footer-desc">Prepared by mattyjacks.com for Stephen Nolan.</p>
                    </div>
                    <div class="footer-links">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="what-why.html">What & Why</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="expertmatch.html">ExpertMatch</a></li>
                            <li><a href="ai-blueprint.html">AI Blueprint</a></li>
                            <li><a href="cybersecurity.html">Cybersecurity</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="game.html">🎮 Game</a></li>
                            <li><a href="tos.html">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 ITXMEN Demo By MattyJacks. Not authorized by ITXMEN.</p>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', disclaimerHtml);

    const headerContainer = document.getElementById('site-header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHtml;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHtml); // Fallback
    }

    const footerContainer = document.getElementById('site-footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHtml;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHtml); // Fallback
    }
});
