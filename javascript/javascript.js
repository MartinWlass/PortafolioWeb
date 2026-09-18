const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("nav-list");

function setMenuState(isOpen) {
    menu.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
}

// Abrir y cerrar el menú
menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

// Cerrar el menú al pulsar un enlace
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        setMenuState(false);
    });
});

// Si la ventana cambia a tamaño de PC, cerrar el menú móvil
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        setMenuState(false);
    }
});