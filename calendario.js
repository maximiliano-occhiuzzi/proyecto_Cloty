
document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const fechaInput = document.getElementById('fecha');
    const totalVentaInput = document.getElementById('total-venta');
    const guardarButton = document.getElementById('guardar');
    const mensajeDiv = document.getElementById('mensaje');

    // Genera el calendario
    function generarCalendario() {
        const hoy = new Date();
        const mes = hoy.getMonth();
        const anio = hoy.getFullYear();
        const primerDia = new Date(anio, mes, 1).getDay();
        const ultimoDia = new Date(anio, mes + 1, 0).getDate();

        calendar.innerHTML = '';

        // Crear celdas en blanco para los días que no empiezan el mes
        for (let i = 0; i < primerDia; i++) {
            calendar.innerHTML += '<div></div>';
        }

    }

    // Guardar información de ventas
    guardarButton.addEventListener('click', () => {
        const fecha = fechaInput.value;
        const totalVenta = totalVentaInput.value;

        if (fecha && totalVenta) {
            localStorage.setItem(fecha, totalVenta);
            mensajeDiv.textContent = 'Información guardada exitosamente.';
            mensajeDiv.style.color = 'green';
        } else {
            mensajeDiv.textContent = 'Por favor, completa todos los campos.';
            mensajeDiv.style.color = 'red';
        }
    });

    // Cargar información de ventas
    function cargarInformacion(fecha) {
        const totalVenta = localStorage.getItem(fecha);
        totalVentaInput.value = totalVenta ? totalVenta : '';
    }

    // Inicializar el calendario
    generarCalendario();
});