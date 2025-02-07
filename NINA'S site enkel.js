/* script.js */
// Functie om van pagina 1 naar pagina 2 te gaan
function goToPage2() {
    document.getElementById('page1').style.display = 'none'; // Verberg pagina 1
    document.getElementById('page2').style.display = 'block'; // Toon pagina 2
}

// Functie om submenu's in te klappen of uit te klappen
function toggleSubMenu(menuId) {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        if (submenu.id === menuId) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Wisselt tussen tonen en verbergen
        } else {
            submenu.style.display = 'none'; // Verbergt andere submenu's
        }
    });
}

// Functie om naar een specifieke pagina te navigeren
function goToPage(page) {
    alert(`Navigating to ${page}`); // Plaatshouder voor navigatie naar specifieke pagina
}
