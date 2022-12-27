const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
    //will add a class of 'open' to it
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}


btn.addEventListener('click', navToggle)