const foldmenu = document.querySelector('.foldmenu');
const nav = document.querySelector('.foldmenu nav');
const staticfoldmenu = document.querySelector('.staticfoldmenu')
const menunav = document.querySelector('.staticfoldmenu nav')

if (nav) {
    function toggleNav() {
        foldmenu.classList.toggle('open');
    }
    nav.addEventListener('click', toggleNav);

    document.addEventListener('click', (e) => {
        if (foldmenu.classList.contains('open') && !foldmenu.contains(e.target)) {
            foldmenu.classList.remove('open');
        }
    })

    nav.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}

if (menunav) {
    function toggleMenuNav() {
        staticfoldmenu.classList.toggle('open');
    }
    menunav.addEventListener('click', toggleMenuNav);

    document.addEventListener('click', (e) => {
        if (staticfoldmenu.classList.contains('open') && !staticfoldmenu.contains(e.target)) {
            staticfoldmenu.classList.remove('open');
        }
    })

    menunav.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}