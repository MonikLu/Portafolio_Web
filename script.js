//Preloader
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    window.onload = function() {
        preloader.style.display = 'none';
    }
});

document.querySelector(".contacto__formulario").addEventListener("submit", function(event) {
    const nombre = document.querySelector(".contacto__campo[type='text']").value.trim();
    const correo = document.querySelector(".contacto__campo[type='email']").value.trim();
    const asunto = document.querySelector(".contacto__campo[type='tema']").value.trim();
    const mensaje = document.querySelector(".contacto__campo--textarea").value.trim();
    
    if (nombre === "" || correo === "" || asunto === "" || mensaje === ""){
        alert("Por favor, rellena todos los campos");
        event.preventDefault();
        return;
    }

    if (!validateEmail(correo)) {
        alert("Por favor, introduce un correo electrónico válido");
        event.preventDefault();
        return;
    }

    alert("¡Mensaje enviado con éxito!");
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}