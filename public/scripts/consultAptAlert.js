window.addEventListener('load', function() {

    let button = document.querySelector('#buttonSearch');
    let form = document.querySelector('#search');
    let input = document.querySelector('#numero');

    form.addEventListener('submit', function(e) {
        // Validación del input
        let inputValue = input.value;
        let regex = /^[0-9]{1,2}$/;

        if (!regex.test(inputValue)) {
            e.preventDefault(); // Prevenir el envío del formulario si las validaciones fallan
            Swal.fire({
                title: 'Error!',
                text: 'Por favor ingresar un numero de apartamento valido.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
        // Si las validaciones pasan, el formulario se enviará normalmente
    });
});