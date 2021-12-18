const ContentArray = Array.from(document.getElementsByClassName('tab__content'))
const tabArray = Array.from(document.getElementsByClassName('tab'))

function clickTab() {
    for (let element of tabArray) {
        if (element.classList.contains('tab_active')) {
            element.classList.remove('tab_active')
            ContentArray[tabArray.indexOf(element)].classList.remove('tab__content_active');
        }
    }
    this.classList.add('tab_active');
    ContentArray[tabArray.indexOf(this)].classList.add('tab__content_active');
}

tabArray.forEach((event) => {
    event.addEventListener('click', clickTab);
});