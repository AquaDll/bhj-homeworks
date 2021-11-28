function getHole(index) {
    return document.getElementById(`hole${index}`)
}

let stock = 0;
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
for (let i = 1; i < 10; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).className == 'hole hole_has-mole') {
            dead.textContent++
            if (dead.textContent == 10) {
                alert('Победа =)')
                dead.textContent = stock;
                lost.textContent = stock;
            }
        } else {
            lost.textContent++
            if (lost.textContent == 5) {
                alert('Вы проиграли =(')
                dead.textContent = stock;
                lost.textContent = stock;
            }
        }
    }
}

