function createRain() {
    for (let i = 0; i < 100; i++) {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain');
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.body.appendChild(rainDrop);
    }
}

createRain();
