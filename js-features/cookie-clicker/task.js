const clicksAdd = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
const clickSpeed = document.getElementById('click__speed')
let count = 0;
let plus = 220;
let minus = 200;
// Скорость клика
const time = new Date()
let seconds = time.getSeconds()
cookie.onclick = function() {
    //Счетчик
    count +=1;
    clicksAdd.innerHTML = count;
    if (cookie.width === minus) {
        cookie.width = plus;
    } else {
        cookie.width = minus;
    }
    // Тут что-то еще будет...
}


