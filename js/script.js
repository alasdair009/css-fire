document.addEventListener('DOMContentLoaded', (event) => {
    const root = document.documentElement;
    const configElement = document.createElement('meta');
    const fireElement = document.getElementsByClassName("fire-container")[0];
    const colorPicker = document.getElementById("color");
    let numberOfParticles = 0;

    configElement.className = "fire-container-config";
    document.getElementsByTagName('head')[0].appendChild(configElement);
    numberOfParticles = parseInt(window.getComputedStyle(configElement, null).getPropertyValue('content').replace(/"/g, ''));
    console.log(`Drawing with ${numberOfParticles} particles`);

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('span');
        particle.className = "fire-container-particle";
        fireElement.appendChild(particle)
    }

    colorPicker.addEventListener('change', (event) => {
        root.style.setProperty('--fire-color', event.target.value)
    });
});