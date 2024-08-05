$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario para propósitos de demostración
        
        // Obtiene los valores de los campos del formulario
        const nombre = $('#nombre').val();
        const apellido = $('#apellido').val();
        const cedula = $('#cedula').val();
        const telefono = $('#telefono').val();
        const motivo = $('#motivo').val();
        
        // Crear y mostrar una alerta de éxito
        $('#alertContainer').html(`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Gracias, ${nombre} ${apellido}!</strong> Hemos recibido tu consulta, nos comunicaremos contigo en la mayor brevedad posible:
                <p><strong>C.I:</strong> ${cedula}</p>
                <p><strong>Motivo:</strong> ${motivo}</p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Cerrar">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `);
        
        $('#contactForm')[0].reset();
    });
});
