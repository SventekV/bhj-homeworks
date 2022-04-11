const menuLinks = document.querySelectorAll('.menu__link');

for (let elem of menuLinks) {
    let nextElem = elem.nextElementSibling;
    if (nextElem && nextElem.classList.contains('menu_sub')) {
        elem.onclick = () => {
            const activeMenu = document.querySelector('.menu_active');
           
           
            if (activeMenu && activeMenu !== nextElem) { //не понимаю данной логики, объясните пожалуйста. 
                activeMenu.classList.remove('menu_active');
            }
            nextElem.classList.toggle('menu_active');
            return false;
        };
    }
}


 