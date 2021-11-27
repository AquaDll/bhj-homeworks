const clicksAdd = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
let count = 0;
let plus = 240;
let minus = 200;
cookie.onclick = function() {
    count +=1;
    clicksAdd.innerHTML = count;
    if (cookie.width === minus) {
        cookie.width = plus;
    } else {
        cookie.width = minus;
    }
}


