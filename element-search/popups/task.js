const modal_main = document.getElementById('modal_main')
modal_main.classList.add('modal_active')

// close
const modal__close = document.getElementsByClassName('modal__close');
const modal_success = document.getElementById('modal_success');
for (let i = 0; i < modal__close.length; i++) {
     modal__close.item(i).onclick  = function(){
        this.closest('.modal').classList.remove('modal_active');
    };
}
// Красный -> Зеленый
let links = document.getElementsByTagName("a");
let arr = Array.from(links)
console.log(arr)
let closeElement = links.item(1)
console.log(closeElement)
closeElement.onclick = () => {
    modal_main.classList.remove('modal_active')
    modal_success.classList.add('modal_active')
}


