const menu__link = Array.from(document.querySelectorAll('.menu__link'));

menu__link.forEach(element => {
    element.onclick = function () {
         const menu_active = document.querySelector(".menu_active");

         if (menu_active && menu_active !== element.nextElementSibling) {
            menu_active.classList.remove('menu_active')
        }
         element.nextElementSibling.classList.toggle('menu_active')
         return false;
    }
})

