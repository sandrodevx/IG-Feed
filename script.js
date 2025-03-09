// script.js

// 1. Seleccionar todos los elementos del feed
const feedItems = document.querySelectorAll('.feed-item');

// 2. Añadir un evento de clic a cada elemento del feed
feedItems.forEach((item) => {
    item.addEventListener('click', () => {
        // 3. Alternar una clase "active" para resaltar el elemento seleccionado
        item.classList.toggle('active');

        // 4. Cambiar el texto del párrafo cuando se hace clic
        const paragraph = item.querySelector('p');
        if (item.classList.contains('active')) {
            paragraph.textContent = '¡Has seleccionado esta foto!';
        } else {
            paragraph.textContent = paragraph.dataset.originalText; // Restaurar el texto original
        }
    });
});

// 5. Añadir un evento de carga para inicializar el texto original
document.addEventListener('DOMContentLoaded', () => {
    feedItems.forEach((item) => {
        const paragraph = item.querySelector('p');
        paragraph.dataset.originalText = paragraph.textContent; // Guardar el texto original
    });
});
