document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000)
})

const envelopeWrapper = document.querySelector('.envelope-wrapper');
const letterOverlay = document.querySelector('.letter-overlay');
const overlay = document.getElementById('overlay');
let flapExecuted = false;

envelopeWrapper.addEventListener('click', () => {
    if (!flapExecuted) {
        envelopeWrapper.classList.toggle('flap');
        if (envelopeWrapper.classList.contains('flap')) {
            letterOverlay.style.display = 'block'; // Muestra el overlay
            letterOverlay.style.width = `${document.querySelector('.container').offsetWidth}px`;
            letterOverlay.style.height = `${document.querySelector('.container').offsetHeight}px`;
            flapExecuted = true; // Cancela la posibilidad de volver a ejecutar la animación
        }
    }
});

letterOverlay.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic en el overlay cierre el sobre
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('clickable-image');
    image.addEventListener('click', () => {
        window.location.href = 'page2.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    music.volume = 0.5; // Ajusta el volumen si es necesario
});