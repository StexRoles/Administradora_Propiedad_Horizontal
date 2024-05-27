window.addEventListener('load', function () {

    let form = document.querySelector('form');

    form.addEventListener('submit', function (e) {

        // TRAEMOS LOS ELEMENTOS DEL HTML
        let discountInput = document.querySelector('#discount');
        let moraInput = document.querySelector('#mora');
        let feeInput = document.querySelector('#fee');
        let conceptInputs = document.querySelectorAll('.concepts');

        // Remover el color rojo del borde de los inputs
        discountInput.style.outline = '';
        moraInput.style.outline = '';
        feeInput.style.outline = '';
        conceptInputs.forEach(input => {
            input.style.outline = '';
        });

        // Comprobar si todos los campos están vacíos
        let allEmpty = [discountInput, moraInput, feeInput, ...conceptInputs].every(input => input.value.trim() === '');
        if (allEmpty) {
            e.preventDefault(); // Prevenir el envío del formulario si las validaciones fallan
            Swal.fire({
                title: 'Error!',
                text: 'Por favor llenar al menos un campo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        // Validación de los inputs de descuento y mora
        let inputs = [discountInput, moraInput];
        for (let input of inputs) {
            let inputValue = parseFloat(input.value);
            if (input.value.trim() !== '' && (isNaN(inputValue) || inputValue <= 0 || inputValue >= 1)) {
                e.preventDefault(); // Prevenir el envío del formulario si las validaciones fallan
                Swal.fire({
                    title: 'Error!',
                    text: 'Por favor ingresar un número mayor a 0 y menor a 1 en el campo.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
                input.style.outline = 'solid 3px #F1948A'; // Cambiar el color del borde del input a rojo
                return;
            }
        }

        // Validación de los inputs generados en el ciclo
        let conceptsInputs = [feeInput, ...conceptInputs];
    
        for (let input of conceptsInputs) {
            let inputValue = parseFloat(input.value);
            if (input.value.trim() !== '' && (isNaN(inputValue) || inputValue < 0 || input.value.length > 8)) {
                e.preventDefault(); // Prevenir el envío del formulario si las validaciones fallan
                Swal.fire({
                    title: 'Error!',
                    text: 'Por favor ingresar un número mayor o igual a 0 y con una longitud no mayor a 8 en el campo.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
                input.style.outline = 'solid 3px #F1948A'; // Cambiar el color del borde del input a rojo
                return;
            }
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