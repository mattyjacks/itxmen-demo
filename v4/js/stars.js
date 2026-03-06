// stars.js - Animate stars on a canvas background
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'starsCanvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];

    function init() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        stars = [];

        const numStars = Math.floor(width * height / 1000); // density
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                vx: Math.floor(Math.random() * 50) - 25,
                vy: Math.floor(Math.random() * 50) - 25,
                alpha: Math.random()
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
            ctx.fillStyle = \`rgba(255, 255, 255, \${star.alpha})\`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            ctx.fill();

            // Move
            star.y += star.vy / 50;
            // Blink
            star.alpha += (Math.random() - 0.5) * 0.1;
            if (star.alpha > 1) star.alpha = 1;
            if (star.alpha < 0.2) star.alpha = 0.2;

            // Wrap
            if (star.y > height) star.y = 0;
            if (star.y < 0) star.y = height;
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', init);
    init();
    draw();
});
