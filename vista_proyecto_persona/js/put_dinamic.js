$(document).ready(function () {
    // Escuchar cambios en los checkboxes
    $('.chkCampo').on('change', function () {
        const target = $(this).data('target'); // Obtener el campo asociado

        if ($(this).is(':checked')) {
            // Mostrar el campo correspondiente
            $(target).slideDown();
        } else {
            // Ocultar el campo si se desmarca
            $(target).slideUp();
        }
    });
});