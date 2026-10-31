// Esperamos a que todo el contenido HTML esté completamente cargado antes de ejecutar código
document.addEventListener('DOMContentLoaded', () => {

    console.log('El sitio institucional Nos Gusta La Ciencia se ha inicializado correctamente.');

    // Seleccionamos todas las tarjetas clickeables
    const cards = document.querySelectorAll('.card');

    // Recorremos cada card para añadir un evento visual adicional si lo requerimos
    cards.forEach((card) => {
        card.addEventListener('click', (event) => {
            // Obtenemos el título de la card presionada
            const titulo = card.querySelector('h3').innerText;
            console.log(`Navegando a la sección de: ${titulo}`);
        });
    });
});