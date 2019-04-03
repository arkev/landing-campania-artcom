var button = document.querySelector("button.smooth");
button.addEventListener("click", function smoothScroll() {
    // Scroll hasta un elemento determinado
    document.querySelector('#formulario').scrollIntoView({
        behavior: 'smooth'
    });
})