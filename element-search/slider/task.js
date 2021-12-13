const slider__item = Array.from(document.getElementsByClassName('slider__item'));
const arrowLeft = document.getElementsByClassName('slider__arrow_prev');
const arrowRight = document.getElementsByClassName('slider__arrow_next');
const slider__dot = Array.from(document.getElementsByClassName('slider__dot'));
let value = 0;

slider__dot[value].classList.add('slider__dot_active');

function slideImg(i) {
    slider__item.forEach((e, i) => {
        if (e.classList.contains('slider__item_active')) {
            slider__dot[i].classList.remove('slider__dot_active');
            return e.classList.remove('slider__item_active');
        }
    })
    slider__dot[i].classList.add('slider__dot_active');
    return slider__item[i].classList.add('slider__item_active');
}

arrowLeft[0].onclick = function() {
    if (value === 0) {
        value = 4;
        return slideImg(value);
    } else if (value !== 0) {
        value -= 1;
        return slideImg(value);
    }
}
arrowRight[0].onclick = function() {
    if (value < 4) {
        value += 1;
        return slideImg(value);
    } else if (value === 4) {
        value = 0;
        return slideImg(value);
    }
}
for (let i = 0; i < slider__dot.length; i++) {
    slider__dot[i].onclick = function() {
        slideImg(i);
        slider__dot[i].classList.add('slider__dot_active');
        return slider__item[i].classList.add('slider__item_active');
    }
}