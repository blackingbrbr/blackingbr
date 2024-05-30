

function toggleSubMenu(event, submenuId) {
    event.preventDefault();
    var submenu = document.getElementById(submenuId);
    submenu.classList.toggle('active');

    // Fechar outros submenus
    var submenus = document.querySelectorAll('.submenu');
    submenus.forEach(function(submenu) {
        if (submenu.id !== submenuId) {
            submenu.classList.remove('active');
        }
    });
}
