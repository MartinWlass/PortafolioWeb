(function(){
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu .nav-links a');
    if(!hamburger || !menu) return;

    hamburger.addEventListener('click', function(e){
        e.stopPropagation();
        const isOpen = menu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.forEach(link => link.addEventListener('click', function(){
        menu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }));

    // Cerrar al hacer click fuera del menú
    document.addEventListener('click', function(e){
        if(!menu.classList.contains('open')) return;
        if(!menu.contains(e.target) && !hamburger.contains(e.target)){
            menu.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
})();
