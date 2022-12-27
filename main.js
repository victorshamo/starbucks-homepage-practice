const btn = document.getElementById('menu-btn')

function navToggle() {
    //will add a class of 'open' to it
    btn.classList.toggle('open')
}


btn.addEventListener('click', navToggle)