
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.imagen-clic');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            const tarjeta = imagen.closest('.tarjeta-alumno');
            const detalles = tarjeta.querySelector('.detalles');

            detalles.classList.toggle('oculto');
        })
    })
})