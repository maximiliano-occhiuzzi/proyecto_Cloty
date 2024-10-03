document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el incremento y decremento de la cantidad
    const handleQuantityChange = (event) => {
        const button = event.target;
        const container = button.closest('.producto');
        const quantityInput = container.querySelector('.cantidad');
        let currentValue = parseInt(quantityInput.value, 10);

        if (button.classList.contains('incrementar')) {
            quantityInput.value = currentValue + 1;
        } else if (button.classList.contains('decrementar')) {
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }
    };

    // Función para manejar el guardado del precio
    const handleSavePrice = (event) => {
        const button = event.target;
        const container = button.closest('.producto');
        const priceElement = container.querySelector('.precio');
        const newPrice = priceElement.textContent.trim();

        // Aquí podrías agregar lógica para guardar el nuevo precio en el servidor o localmente
        console.log(`Precio guardado para el producto ${container.dataset.productoId}: ${newPrice}`);
        
        // Opcional: mostrar un mensaje de éxito al usuario
        alert('Precio guardado con éxito.');
    };

    // Asignar eventos a los botones de incremento y decremento
    document.querySelectorAll('.incrementar, .decrementar').forEach(button => {
        button.addEventListener('click', handleQuantityChange);
    });

    // Asignar eventos a los botones de guardar precio
    document.querySelectorAll('.guardar-precio').forEach(button => {
        button.addEventListener('click', handleSavePrice);
    });
});
