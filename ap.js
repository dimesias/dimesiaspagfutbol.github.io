document.addEventListener('DOMContentLoaded', () => {
    initCart();
    updateTotalPrice();
});

function initCart() {
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const plusButton = item.querySelector('.boton-mas');
        const minusButton = item.querySelector('.boton-menos');
        const quantityInput = item.querySelector('.quantity-input');
        const itemPrice = parseInt(item.dataset.price);
        
        plusButton.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateItemTotalPrice(item, itemPrice, quantityInput.value);
            updateTotalPrice();
        });

        minusButton.addEventListener('click', () => {
            if (quantityInput.value > 0) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateItemTotalPrice(item, itemPrice, quantityInput.value);
                updateTotalPrice();
            }
        });
    });
}

function updateItemTotalPrice(item, itemPrice, quantity) {
    const itemTotalPriceElement = item.querySelector('.item-total-price');
    const totalPrice = itemPrice * quantity;
    itemTotalPriceElement.innerText = totalPrice.toLocaleString('de-DE');
}

function updateTotalPrice() {
    const totalElement = document.getElementById('total');
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const quantity = item.querySelector('.quantity-input').value;
        const itemPrice = parseInt(item.dataset.price);
        total += itemPrice * quantity;
    });

    totalElement.innerText = total.toLocaleString('de-DE');
}


//enclaces
function toggleMenu() {
    const enlaces = document.getElementById('enlaces');
    enlaces.classList.toggle('mostrar');
}

//para apretar las felchas en sobre nosotros y asi poder abrir y cerrar las preguntas
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}


// PRUEBA DE MODAL
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("Modal-pago");
    var span = document.getElementsByClassName("cerrar")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// esto es las validaciones del formulario de compra camisetas

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("Modal-pago");
    var span = document.getElementsByClassName("cerrar")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var form = document.getElementById("formulario-pago");
    var generalError = document.getElementById("general-error");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var isValid = true;

        var inputs = form.querySelectorAll("input[required], select[required]");
        inputs.forEach(function(input) {
            var errorSpan = document.getElementById(input.id + "-error");
            if (!input.value || input.value === 'guion') {
                errorSpan.textContent = "Este campo es obligatorio";
                errorSpan.style.display = "block";
                isValid = false;
            } else {
                errorSpan.textContent = "";
                errorSpan.style.display = "none";
            }

            // Validación para nombr y apellido
            if (input.id === "nombre" || input.id === "apellido") {
                if (input.value.length < 3) {
                    errorSpan.textContent = "Debe tener al menos 3 caracteres";
                    errorSpan.style.display = "block";
                    isValid = false;
                }
            }

            // Validación  para rut
            if (input.id === "rut") {
                if (input.value.length !== 9 || isNaN(input.value)) {
                    errorSpan.textContent = "El RUT debe tener 9 dígitos";
                    errorSpan.style.display = "block";
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            generalError.style.display = "block";
        } else {
            generalError.style.display = "none";
            
            alert("Compra Finalizada con Exito!");
        }
    });
});

/*ESTO ES PARA DARLE CLICK AL BOTON INICIAR CHAT NOS LLEVE A UN INDEX NUEVO(CONTACOT)*/
function openIndex() {
    window.location.href = 'CONTACTO.html';
}

/*VALIDACION FORMULARIO DE CONTACTO*/

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario-contacto");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var isValid = true;

        var nombre = document.getElementById("nombre");
        var email = document.getElementById("email");
        var telefono = document.getElementById("telefono");
        var mensaje = document.getElementById("mensaje");

        var errorNombre = document.getElementById("error-nombre");
        var errorEmail = document.getElementById("error-email");
        var errorTelefono = document.getElementById("error-telefono");
        var errorMensaje = document.getElementById("error-mensaje");

        // Validación de Nombre
        if (!nombre.value || nombre.value.length < 3) {
            errorNombre.textContent = "El nombre es obligatorio y debe tener al menos 3 caracteres.";
            errorNombre.style.display = "block";
            isValid = false;
        } else {
            errorNombre.textContent = "";
            errorNombre.style.display = "none";
        }

        // Validación de Email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.value || !emailPattern.test(email.value)) {
            errorEmail.textContent = "Por favor, introduce un correo electrónico válido.";
            errorEmail.style.display = "block";
            isValid = false;
        } else {
            errorEmail.textContent = "";
            errorEmail.style.display = "none";
        }

        // Validación de Teléfono Chileno
        var telefonoPattern = /^\+569\d{8}$/;
        if (!telefono.value || !telefonoPattern.test(telefono.value)) {
            errorTelefono.textContent = "El teléfono debe comenzar con +569 y tener 8 dígitos después.";
            errorTelefono.style.display = "block";
            isValid = false;
        } else {
            errorTelefono.textContent = "";
            errorTelefono.style.display = "none";
        }

        // Validación de Mensaje
        if (!mensaje.value || mensaje.value.length < 10) {
            errorMensaje.textContent = "El mensaje es obligatorio y debe tener al menos 10 caracteres.";
            errorMensaje.style.display = "block";
            isValid = false;
        } else {
            errorMensaje.textContent = "";
            errorMensaje.style.display = "none";
        }

        if (isValid) {
            alert("Mensaje enviado con éxito!");
            form.reset();
        }
    });
});

/*PELOTA DE FUTBOL LOGO*/
function toggleMenu() {
    var enlaces = document.getElementById('enlaces');
    enlaces.classList.toggle('active');
}

/*VALIDACION PARA FORMULARIO DE SUSCRIPCION*/
document.getElementById('suscripcion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');

    if (email === "") {
        errorMessage.textContent = "Falta ingresar un correo.";
        errorMessage.style.display = "block";
    } else if (!validateEmail(email)) {
        errorMessage.textContent = "El formato de correo es inválido.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Suscripción exitosa!");
        // Aquí puedes agregar el código para enviar el formulario
        document.getElementById('suscripcion-form').reset();
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}