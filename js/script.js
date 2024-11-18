const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
    const larguraSlider = document.querySelector(".slider").clientWidth; // Calcula a largura do slider
    contador++; // Incrementa o contador

    if (contador > imagens.length - 1) { // Reseta o contador ao alcançar o final
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * larguraSlider}px)`; // Desloca o container
}

// Atualiza o slider a cada 3 segundos
setInterval(slider, 3000);

// Recalcula o deslocamento ao redimensionar a janela
window.addEventListener("resize", () => {
    const larguraSlider = document.querySelector(".slider").clientWidth;
    box.style.transform = `translateX(${-contador * larguraSlider}px)`; // Ajusta a posição
});