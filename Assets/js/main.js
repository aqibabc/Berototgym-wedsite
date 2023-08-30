
/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById('nav-menu');

function hide() {
    navmenu.style.right = "-100%";
}
function show() {
    navmenu.style.right = "0";
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 150 ? header.classList.add('scroll')
        : header.classList.remove('scroll')
}
window.addEventListener('scroll', scrollHeader)






