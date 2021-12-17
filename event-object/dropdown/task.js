const droplist = document.querySelector('.dropdown__list')
const dropValue = document.querySelector('.dropdown__value');
const dropItem = Array.from(document.getElementsByClassName('dropdown__item'));

function dropClick() {

    if (droplist.classList.contains('dropdown__list_active')) {
        droplist.classList.remove('dropdown__list_active')
    } else {
        droplist.classList.add('dropdown__list_active')
    }
}

function itemClick(event) {
    event.preventDefault()
    dropClick()
    dropValue.textContent = this.textContent
}

dropValue.addEventListener('click', itemClick)

for (let item of dropItem) {
    item.addEventListener('click', itemClick)
}