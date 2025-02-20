const foldmenu = document.querySelector('.foldmenu');
const nav = document.querySelector('.nav');

function toggleNav() {
    foldmenu.classList.toggle('open');
}

nav.addEventListener('click', toggleNav);