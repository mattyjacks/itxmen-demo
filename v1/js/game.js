// Honey Bee Game Logic
document.addEventListener('DOMContentLoaded', () => {
    // Create elements
    const gameContainer = document.createElement('div');
    gameContainer.id = 'bee-game-container';
    document.body.appendChild(gameContainer);

    const bee = document.createElement('div');
    bee.id = 'bee';
    bee.innerHTML = '🐝';
    gameContainer.appendChild(bee);

    const honeyPot = document.createElement('div');
    honeyPot.id = 'honey-pot';
    honeyPot.innerHTML = '🍯';
    gameContainer.appendChild(honeyPot);

    const scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'honey-score';
    scoreDisplay.innerHTML = 'Honey: 0';
    gameContainer.appendChild(scoreDisplay);

    const winMessage = document.createElement('div');
    winMessage.id = 'win-message';
    winMessage.innerHTML = 'Yummy! Want more?';
    gameContainer.appendChild(winMessage);

    // State Variables
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let beeX = window.innerWidth / 2;
    let beeY = window.innerHeight / 2;
    let potX = 0;
    let potY = 0;
    let score = 0;
    let isGameActive = true;

    // Physics parameters
    const beeSpeed = 0.08; // How fast bee follows cursor (easing)

    // Initialize honeypot position randomly
    function spawnHoneyPot() {
        // Keep it safely within the viewport
        const padding = 50;
        potX = padding + Math.random() * (window.innerWidth - padding * 2);
        // Add scroll offset so it stays relative to the page
        potY = padding + Math.random() * (window.innerHeight - padding * 2);

        honeyPot.style.transform = `translate(${potX}px, ${potY}px) scale(1)`;
        honeyPot.style.opacity = '1';
        winMessage.style.opacity = '0';
        winMessage.style.transform = 'translate(-50%, 0) scale(0.8)';
    }

    // Track mouse/touch properly accounting for scrolling
    function updateTargetPosition(e) {
        if (!isGameActive) return;
        if (e.type.startsWith('touch')) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    }

    document.addEventListener('mousemove', updateTargetPosition);
    document.addEventListener('touchmove', updateTargetPosition, { passive: true });

    // Ensure pot stays visible if window resizes
    window.addEventListener('resize', () => {
        if (potX > window.innerWidth) potX = window.innerWidth - 50;
        if (potY > window.innerHeight) potY = window.innerHeight - 50;
        honeyPot.style.transform = `translate(${potX}px, ${potY}px) scale(1)`;
    });

    // Animation loop
    function animate() {
        if (!isGameActive) return;

        // Calculate distance between bee and cursor
        const dx = mouseX - beeX;
        const dy = mouseY - beeY;

        // Distance to calculate bee rotation
        const distanceToPot = Math.hypot(potX - beeX, potY - beeY);

        // Move bee towards cursor (easing)
        beeX += dx * beeSpeed;
        beeY += dy * beeSpeed;

        // Flip bee based on movement direction
        const scaleX = dx > 0 ? -1 : 1;
        // Rotation based on movement angle. Limit rotation so it doesn't spin wildly
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Smoothly adjust rotation based on direction faced
        let rotationTarget = dx > 0 ? angle - 180 : angle;
        // Clamp rotation
        if (rotationTarget > 45) rotationTarget = 45;
        if (rotationTarget < -45) rotationTarget = -45;

        bee.style.transform = `translate(${beeX}px, ${beeY}px) scaleX(${scaleX}) rotate(${rotationTarget}deg)`;

        // Collision logic
        if (distanceToPot < 40) {
            collectHoney();
        }

        requestAnimationFrame(animate);
    }

    function collectHoney() {
        isGameActive = false;
        score++;
        scoreDisplay.innerHTML = `Honey: ${score}`;
        scoreDisplay.style.transform = 'scale(1.2)';

        // Pop animation
        honeyPot.style.transform = `translate(${potX}px, ${potY}px) scale(1.5)`;

        // Show message
        winMessage.style.left = `${potX}px`;
        winMessage.style.top = `${potY - 40}px`;
        winMessage.style.opacity = '1';
        winMessage.style.transform = 'translate(-50%, 0) scale(1)';

        setTimeout(() => {
            honeyPot.style.opacity = '0';
            honeyPot.style.transform = `translate(${potX}px, ${potY}px) scale(0)`;
        }, 150);

        setTimeout(() => {
            scoreDisplay.style.transform = 'scale(1)';
            spawnHoneyPot();
            isGameActive = true;
            animate(); // Restart animation loop
        }, 1500);
    }

    // Initialize game
    spawnHoneyPot();
    animate();
});
