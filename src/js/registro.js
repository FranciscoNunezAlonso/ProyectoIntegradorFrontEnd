// ******** FORMULARIO PRODUCTOS ADMINISTRADOR ****************
let email = document.getElementById("email");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let nombreUsuario = document.getElementById("nombreUsuario");
let contrasena = document.getElementById("contrasena");
let confirmarContrasena = document.getElementById("confirmarContrasena");


// Botones
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

// Flags
let flagEmail = false;
let flagNombre = false;
let flagApellido = false;
let flagNombreUsuario = false;
let flagContrasena = false;
let flagConfirmarContrasena = false;
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

// Arreglo
let arrayDatosUsuario = [];

// Evento btn Clear ----------------------------------
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.style.display = "none";

    email.style.border = "";
    nombre.style.border = "";
    apellido.style.border = "";
    nombreUsuario.style.border = "";
    contrasena.style.border = "";
    confirmarContrasena.style.border = "";

    email.value = "";
    nombre.value = "";
    apellido.value = "";
    nombreUsuario.value = "";
    contrasena.value = "";
    confirmarContrasena.value = "";
 

    // Limpiar el storage
    localStorage.clear();
});

// Evento btn Enviar ------------------------
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    email.style.border = "";
    nombre.style.border = "";
    apellido.style.border = "";
    nombreUsuario.style.border = "";
    contrasena.style.border = "";
    confirmarContrasena.style.border = "";

    email.value = email.value.trim();
    nombre.value = nombre.value.trim();
    apellido.value = apellido.value.trim();
    nombreUsuario.value = nombreUsuario.value.trim();
    contrasena.value = contrasena.value.trim();
    confirmarContrasena.value = confirmarContrasena.value.trim();

    if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> correo electrónico </strong> no es válido</br>`);
        alertValidaciones.style.display = "block";
        email.style.border = "solid 2px #B4016C";
        flagEmail = false;
    } else {
        flagEmail = true;
    }

    if (!nombre.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) || (nombre.value.length < 3)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> nombre </strong> no es válido</br>`);
        alertValidaciones.style.display = "block";
        nombre.style.border = "solid 2px #B4016C";
        flagNombre = false;
    } else {
        flagNombre = true;
    }

    if (!apellido.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) || (apellido.value.length < 4)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> apellido </strong> no es válido</br>`);
        alertValidaciones.style.display = "block";
        apellido.style.border = "solid 2px #B4016C";
        flagApellido = false;
    } else {
        flagApellido = true;
    }

    if (!nombreUsuario.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) || (nombreUsuario.value.length < 4)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> nombre de usuario </strong> no es válido</br>`);
        alertValidaciones.style.display = "block";
        nombreUsuario.style.border = "solid 2px #B4016C";
        flagNombreUsuario = false;
    } else {
        flagNombreUsuario = true;
    }

    if (!contrasena.value.match( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `La <strong> contraseña </strong> debe contener al menos una letra mayúscula, una minúscula, un número y un mínimo de 8 caracteres.</br>`);
        alertValidaciones.style.display = "block";
        contrasena.style.border = "solid 2px #B4016C";
        flagContrasena = false;
    } else {
        flagContrasena = true;
        if (!confirmarContrasena.value.match(contrasena.value)) {
            alertValidacionesTexto.insertAdjacentHTML("beforeend", `Las <strong> contraseñas </strong> no coinciden</br>`);
            alertValidaciones.style.display = "block";
            confirmarContrasena.style.border = "solid 2px #B4016C";
            flagConfirmarContrasena = false;
        } else {
            flagConfirmarContrasena = true;
        }
    }

    if (flagEmail && flagNombre && flagApellido && flagContrasena && flagConfirmarContrasena) {
        let elemento = {
            "email": email.value.trim(),
            "nombre": nombre.value.trim(),
            "apellido": apellido.value.trim(),
            "usuario": nombreUsuario.value.trim(),
            "contrasena": contrasena.value.trim(),
            "confirmarContrasena": confirmarContrasena.value.trim() 
        };
    
        arrayDatosUsuario.push(elemento);
        localStorage.setItem("elemento", JSON.stringify(arrayDatosUsuario));
        console.log("Prueba exitosa");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El usuario se ha registrado de manera exitosa',
            showConfirmButton: false,
            timer: 1500
        });
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     email: 'El usuario se ha registrado de manera exitosa',
        //     showConfirmButton: false,
        //     timer: 1500
        // });

        email.value = "";
        nombre.value = "";
        apellido.value = "";
        nombreUsuario.value = "";
        contrasena.value="";
        confirmarContrasena.value="";
    }
});
