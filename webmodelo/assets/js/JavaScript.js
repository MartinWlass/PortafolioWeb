document.addEventListener("DOMContentLoaded", () => {
    // Desplazamiento suave para los enlaces del menú
    const enlacesMenu = document.querySelectorAll('.navbar-nav a[href^="#"]');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const destinoId = this.getAttribute("href");
            const destinoElemento = document.querySelector(destinoId);

            if (destinoElemento) {
                destinoElemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Si estás en mobile y el menú hamburguesa está abierto, lo cierra automáticamente al hacer clic
                const navbarToggler = document.querySelector(".navbar-toggler");
                const navbarCollapse = document.querySelector(".navbar-collapse");
                if (navbarCollapse.classList.contains("show")) {
                    navbarToggler.click();
                }
            }
        });
    });
});