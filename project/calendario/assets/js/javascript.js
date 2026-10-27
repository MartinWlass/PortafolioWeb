const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('.enlace').forEach(enlace => {
            enlace.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });