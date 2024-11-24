function slideImages({classNameSlide, btnPrevID, btnNextID}) {
    let currentSlide = 0;
    const slide = document.querySelectorAll(classNameSlide);
    const btnPrev = document.getElementById(btnPrevID);
    const btnNext = document.getElementById(btnNextID);

    // funcao que esconde o slide, remove o "on"
    function hideSlide() {
        slide.forEach((item) => item.classList.remove("on")); 
    }

    // mostra o slide correspondente ao index
    function showSlide() {
        slide[currentSlide].classList.add("on");
    }


    // funcao que avanca o slide, if ve se o slide atual corresponde a quantidade de slide que temos(se tiver no ultimo slide volta pro primeiro), senao, adiciona mais um
    function nextSlide() {
        hideSlide()
        if(currentSlide === slide.length -1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        showSlide();
    }


    // caso o slide atual seja o primeiro slide, ele volta pro ultimo(slide 1 para o 3), senao, ele subtrai, ou seja, vai do slide 3 para o 2
    function prevSlide() {
        hideSlide();
        if(currentSlide === 0) {
            currentSlide = slide.length -1;
        } else {
            currentSlide--;
        }
        showSlide();
    }


    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);

    showSlide();

}


slideImages({
    classNameSlide: ".slide1",  // colocar o nome da classe do slide
    btnPrevID: "prevButton1",  // id do botao de voltar
    btnNextID: "nextButton1",    // id do botao de avancar
})

slideImages({
    classNameSlide: ".slide2",
    btnPrevID: "prevButton2",
    btnNextID: "nextButton2",
})

slideImages({
    classNameSlide: ".slide3",  
    btnPrevID: "prevButton3",  
    btnNextID: "nextButton3",   
})

slideImages({
    classNameSlide: ".slide4",
    btnPrevID: "prevButton4",
    btnNextID: "nextButton4",
})