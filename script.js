//Preloader
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    window.onload = function() {
        preloader.style.display = 'none';
    }
});
