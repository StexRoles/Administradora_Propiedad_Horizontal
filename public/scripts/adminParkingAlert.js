window.addEventListener('load', function () {

    let form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Obtener los select
        let apartmentSelect = document.querySelector('#apartment');
        let parkingSelect = document.querySelector('#parking');
    
        // Verificar si se seleccionó una opción
        if (!apartmentSelect.value || !parkingSelect.value) {
            // Si no se seleccionó una opción, mostrar un mensaje de error y prevenir el envío del formulario
            event.preventDefault();
            Swal.fire({
                title: 'Error!',
                text: 'Por favor seleccionar una opción en cada campo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            
            return;
        }

        // Si las validaciones pasan, el formulario se enviará normalmente
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Información actualizada correctamente.",
            showConfirmButton: false,
            timer: 1500
          });
    });

});