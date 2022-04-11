let index = 0;
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
const nextArrow = document.querySelector('.slider__arrow_next');
const prevArrow = document.querySelector('.slider__arrow_prev');

function slider(num) {
    if (num > slides.length - 1) {
        index = 0;
    }

    if (num < 0) {
        index = slides.length - 1;
    }

    for (let slide of slides) {
        slide.classList.remove('slider__item_active');
    }

    for (let dot of dots) {
        dot.classList.remove('slider__dot_active');
    }

    slides[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

nextArrow.onclick = () => {
    slider((index += 1));
};
prevArrow.onclick = () => {
    slider((index -= 1));
};

const dotsArray = Array.from(dots);
for (let i = 0; i < dotsArray.length; i++) {
    dotsArray[i].onclick = () => {
        slider((index = i));
    };
}

slider(index);