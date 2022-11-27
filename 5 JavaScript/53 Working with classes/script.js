// Working with classes

const menuClick = (currEl) => {
    const menu = document.getElementsByClassName('menu-item');
    for (i = 0; i<menu.length; i++){
        menu[i].classList.remove('active');
    }
    currEl.classList.add('active');
}

