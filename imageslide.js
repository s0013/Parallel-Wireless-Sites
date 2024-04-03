let currentSlide = 0;
const slides = document.querySelectorAll('.slide4');

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide4, i) => {
        if (i === currentSlide) {
            slide4.classList.add('active');
        } else {
            slide4.classList.remove('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

showSlide(currentSlide);
