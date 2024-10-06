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

const fullImgBox = document.getElementById("fullImgBox"),
    imgElement = document.getElementById("img-element"),
    rightBtn = document.getElementById("right-btn"),
    leftBtn = document.getElementById("left-btn"),
    closeImg = document.getElementById("closeImg"),
    listaImg = [...document.querySelectorAll(".img")];

let indexImg = 0;

listaImg.forEach((img,i) => {
    img.addEventListener("click", (e) => {
        clicked(i)
        fullImgBox.style.display = "flex";
        imgElement.src = img.src
    })
})

function clicked(position) {
    indexImg = position;
    imgElement.src = listaImg[indexImg].src
}

rightBtn.addEventListener("click", e => {
    if (indexImg >= listaImg.length - 1) {
        window.location.href = 'page3.html'; // Redirigir a otra página
    } else {
        indexImg++;
        imgElement.src = listaImg[indexImg].src;
    }
});

leftBtn.addEventListener("click", e => {
    if (indexImg <= 0) {
        indexImg = listaImg.length;
    }
    indexImg--;
    imgElement.src = listaImg[indexImg].src;
})

closeImg.addEventListener ("click", e => fullImgBox.style.display = "none");

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    music.volume = 0.5; // Ajusta el volumen si es necesario
});