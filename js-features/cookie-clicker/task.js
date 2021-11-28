const clicksAdd = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
const clickSpeed = document.getElementById('click__speed')
let count = 0;
let plus = 220;
let minus = 200;
let timeFirst, timeSecond;
// Скорость клика
const time = new Date()
let seconds = time.getSeconds()
cookie.onclick = function() {
    //Счетчик
    count +=1;
    timeFirst = new Date().getTime()
    clicksAdd.innerHTML = count;
    if (cookie.width === minus) {
        cookie.width = plus;
    } else {
        cookie.width = minus;
        timeSecond = new Date().getTime()
    }
    clickSpeed.textContent = 1 / ((timeFirst - timeSecond) / 1000);
    // Тут что-то еще будет...
}


