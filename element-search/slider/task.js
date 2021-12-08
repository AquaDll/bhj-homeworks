let slider = Array.from(document.querySelectorAll('div'))
console.log(slider)

let index = slider.findIndex(element => {
     console.log(element)
     return element.classList.contains('slider__item_active');

})

// arrows
let left = document.querySelector('.slider__arrow_prev')
let right = document.querySelector('.slider__arrow_next')


right.addEventListener('click', () => {
     slider[index].classList.remove('slider__item_active')
     index = index === slider.length - 1 ? 0 : index + 1
     slider[index].classList.add('slider__item_active');
})

left.addEventListener('click', () => {
     slider[index].classList.remove('slider__item_active')
     index = index === 0 ? slider.length - 1 : index - 1;
     slider[index].classList.add('slider__item_active');
})