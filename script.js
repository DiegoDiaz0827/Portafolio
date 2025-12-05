const textToType = "Hola, mundo. Bienvenido a mi portafolio digital. Escriba 'help' si necesita comandos.";
const typingElement = document.getElementById('typing-text');
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        index++;
        // Velocidad de escritura (ajusta este valor)
        setTimeout(typeText, 50); 
    }
}

// Inicializa la función cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    
    // Opcional: Implementación básica de Smooth Scrolling para la navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});