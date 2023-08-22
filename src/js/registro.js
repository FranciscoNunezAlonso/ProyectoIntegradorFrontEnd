// ******** FORMULARIO REGISTRAR USUARIO ****************
let email = document.getElementById("email");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let contrasena = document.getElementById("contrasena");
let confirmarContrasena = document.getElementById("confirmarContrasena");


// Botones
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

// Flags
let flagEmail = false;
let flagNombre = false;
let flagApellido = false;
let flagContrasena = false;
let flagConfirmarContrasena = false;

// Alertas
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesEmail = document.getElementById("alertValidacionesEmail");
let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesNombre = document.getElementById("alertValidacionesNombre");
let alertValidacionesTextoApellido = document.getElementById("alertValidacionesTextoApellido");
let alertValidacionesApellido = document.getElementById("alertValidacionesApellido");
let alertValidacionesTextoContraseña = document.getElementById("alertValidacionesTextoContraseña");
let alertValidacionesContraseña = document.getElementById("alertValidacionesContraseña");
let alertValidacionesTextoConfContra = document.getElementById("alertValidacionesTextoConfContra");
let alertValidacionesConfContra = document.getElementById("alertValidacionesConfContra");

// Arreglo
let arrayDatosUsuario = [];

// Evento btn Clear ----------------------------------
btnClear.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesEmail.style.display = "none";
    alertValidacionesNombre.style.display = "none";
    alertValidacionesApellido.style.display = "none";
    alertValidacionesContraseña.style.display = "none";
    alertValidacionesConfContra.style.display = "none";

    email.style.border = "";
    nombre.style.border = "";
    apellido.style.border = "";
    contrasena.style.border = "";
    confirmarContrasena.style.border = "";

    email.value = "";
    nombre.value = "";
    apellido.value = "";
    contrasena.value = "";
    confirmarContrasena.value = "";

    // Limpiar el storage
    localStorage.clear();
});


// Evento btn Enviar ------------------------
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    alertValidacionesTextoEmail.innerHTML = "";
    alertValidacionesTextoNombre.innerHTML = "";
    alertValidacionesTextoApellido.innerHTML = "";
    alertValidacionesTextoContraseña.innerHTML = "";
    alertValidacionesTextoConfContra.innerHTML = "";

    alertValidacionesEmail.style.display = "none";
    alertValidacionesNombre.style.display = "none";
    alertValidacionesApellido.style.display = "none";
    alertValidacionesContraseña.style.display = "none";
    alertValidacionesConfContra.style.display = "none";

    email.style.border = "";
    nombre.style.border = "";
    apellido.style.border = "";
    contrasena.style.border = "";
    confirmarContrasena.style.border = "";

    email.value = email.value.trim();
    nombre.value = nombre.value.trim();
    apellido.value = apellido.value.trim();
    contrasena.value = contrasena.value.trim();
    confirmarContrasena.value = confirmarContrasena.value.trim();

    if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)) {
        alertValidacionesTextoEmail.insertAdjacentHTML("beforeend", `El <strong> correo electrónico </strong> no es válido</br>`);
        alertValidacionesEmail.style.display = "block";
        email.style.border = "solid 2px #B4016C";
        flagEmail = false;
    } else {
        flagEmail = true;
    }

    if (!nombre.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) || (nombre.value.length < 3)) {
        alertValidacionesTextoNombre.insertAdjacentHTML("beforeend", `El <strong> nombre </strong> no es válido</br>`);
        alertValidacionesNombre.style.display = "block";
        nombre.style.border = "solid 2px #B4016C";
        flagNombre = false;
    } else {
        flagNombre = true;
    }

    if (!apellido.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) || (apellido.value.length < 4)) {
        alertValidacionesTextoApellido.insertAdjacentHTML("beforeend", `El <strong> apellido </strong> no es válido</br>`);
        alertValidacionesApellido.style.display = "block";
        apellido.style.border = "solid 2px #B4016C";
        flagApellido = false;
    } else {
        flagApellido = true;
    }

    if (!contrasena.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-@_$!%*?&])[A-Za-z\d-@_$!%*?&]{8,15}$/)) {
        alertValidacionesTextoContraseña.insertAdjacentHTML("beforeend", `La <strong> contraseña </strong> debe contener al menos una letra mayúscula, una minúscula, un número y un mínimo de 8 caracteres.</br>`);
        alertValidacionesContraseña.style.display = "block";
        contrasena.style.border = "solid 2px #B4016C";
        confirmarContrasena.style.border = "solid 2px #B4016C";
        flagContrasena = false;
    } else {
        flagContrasena = true;
        if (confirmarContrasena.value !== contrasena.value) {
            alertValidacionesTextoConfContra.insertAdjacentHTML("beforeend", `Las <strong>contraseñas </strong>deben de coincidir</br>`);
            alertValidacionesConfContra.style.display = "block";
            confirmarContrasena.style.border = "solid 2px #B4016C";
            flagConfirmarContrasena = false;
        } else {
            flagConfirmarContrasena = true;
        }
    }

    if (flagEmail && flagNombre && flagApellido && flagContrasena && flagConfirmarContrasena) {
        let usuarios = {
            "email": email.value.trim(),
            "nombre": nombre.value.trim(),
            "apellido": apellido.value.trim(),
            "contrasena": contrasena.value.trim(),
            "confirmarContrasena": confirmarContrasena.value.trim()
        };

        arrayDatosUsuario.push(usuarios);
        localStorage.setItem("usuarios", JSON.stringify(arrayDatosUsuario));
        console.log("Prueba exitosa");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El usuario se ha registrado de manera exitosa',
            showConfirmButton: false,
            timer: 1500
        });

        email.value = "";
        nombre.value = "";
        apellido.value = "";
        contrasena.value = "";
        confirmarContrasena.value = "";

        setTimeout(() => {
            window.location.href = './usuario.html'
        }, 800)
    }

});
