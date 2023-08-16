// ******** FORMULARIO CONTÁCTANOS (enviar correo) ****************

var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

//Variables
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");

// Botones
var btnEnviar = document.getElementById("btnEnviar");
var btnClear = document.getElementById("btnClear");

//flags
let flagNombre = false;
let flagApellido = false;
let flagEmail = false;
let flagTelefono = false;
let flagMensaje = false;
var isValid = true;

//alertas
let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesNombre = document.getElementById("alertValidacionesNombre");
let alertValidacionesTextoApellido = document.getElementById("alertValidacionesTextoApellido");
let alertValidacionesApellido = document.getElementById("alertValidacionesApellido");
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesEmail = document.getElementById("alertValidacionesEmail");
let alertValidacionesTextoTelefono = document.getElementById("alertValidacionesTextoTelefono");
let alertValidacionesTelefono = document.getElementById("alertValidacionesTelefono");
let alertValidacionesTextoMensaje = document.getElementById("alertValidacionesTextoMensaje");
let alertValidacionesMensaje = document.getElementById("alertValidacionesMensaje");



//Evento btnClear ----------------------------------------------------------------
btnClear.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesNombre.style.display = "none";
    alertValidacionesApellido.style.display = "none";
    alertValidacionesEmail.style.display = "none";
    alertValidacionesTelefono.style.display = "none";
    alertValidacionesMensaje.style.display = "none";

    nombre.style.border = "";
    apellido.style.border = "";
    email.style.border = "";
    telefono.style.border = "";
    mensaje.style.border = "";

    nombre.value = "";
    apellido.value = "";
    email.value = "";
    mensaje.value = "";
    telefono.value = "";

});//btnClear

// validaciones --------------------------------------------------------------------- 
const validarEmail = (email) => {
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
    return expresionRegular.test(email);
};

const validarNombre = (nombre) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(nombre);
};

const validarApellido = (apellido) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(apellido);
};

const validarTelefono = (telefono) => {
    const expresionRegular = /^(?!.*(\d)\1{4,})\d{10}$/;
    return expresionRegular.test(telefono);
};

const validarMensaje = (mensaje) => {
    const expresionRegular = /^.{20,200}$/;
    return expresionRegular.test(mensaje);
};
const btnEmail = document.getElementById('btnEnviar');


// Evento bnt enviar email -------------------------------------------------------------
btnEmail.addEventListener('click', (e) => {
    e.preventDefault();

    
    alertValidacionesTextoNombre.innerHTML = "";
    alertValidacionesTextoApellido.innerHTML = "";
    alertValidacionesTextoEmail.innerHTML = "";
    alertValidacionesTextoTelefono.innerHTML = "";
    alertValidacionesTextoMensaje.innerHTML = ""

    alertValidacionesNombre.style.display = "none";
    alertValidacionesApellido.style.display = "none";
    alertValidacionesEmail.style.display = "none";
    alertValidacionesTelefono.style.display = "none";
    alertValidacionesMensaje.style.display = "none";

    nombre.style.border = "";
    apellido.style.border = "";
    telefono.style.border = "";
    email.style.border = "";
    mensaje.style.border = "";

    nombre.value = nombre.value.trim();
    telefono.value = telefono.value.trim();
    email.value = email.value.trim();
    apellido.value = apellido.value.trim();
    mensaje.value = mensaje.value.trim();

    // Validación del nombre
    if (!validarNombre(nombre.value) || nombre.value.length < 3 || nombre.value.length > 15) {
        flagNombre = false;
        alertValidacionesTextoNombre.insertAdjacentHTML("beforeend", `El <strong> nombre </strong> no es válido</br>`);
        alertValidacionesNombre.style.display = "block";
        nombre.style.border = "solid 2px #B4016C";
    } else {
        flagNombre = true;
    }

    // Validación del apellido
    if (!validarApellido(apellido.value) || apellido.value.length < 3 || apellido.value.length > 15) {
        flagApellido = false;
        alertValidacionesTextoApellido.insertAdjacentHTML("beforeend", `El <strong> apellido </strong> no es válido</br>`);
        alertValidacionesApellido.style.display = "block";
        apellido.style.border = "solid 2px #B4016C";
    } else {
        flagApellido = true;
    }

    // Validación del email
    if (!validarEmail(email.value)) {
        flagEmail = false;
        alertValidacionesTextoEmail.insertAdjacentHTML("beforeend", `El <strong> correo electrónico </strong> no es válido</br>`);
        alertValidacionesEmail.style.display = "block";
        email.style.border = "solid 2px #B4016C";
    } else {
        flagEmail = true;
    }

    // Validación del teléfono
    if (!validarTelefono(telefono.value)) {
        flagTelefono = false;
        alertValidacionesTextoTelefono.insertAdjacentHTML("beforeend", `El <strong> teléfono </strong> no es válido</br>`);
        alertValidacionesTelefono.style.display = "block";
        telefono.style.border = "solid 2px #B4016C";
    } else {
        flagTelefono = true;
    }

    // Validación del mensaje
    if (!validarMensaje(mensaje.value)) {
        flagMensaje = false;
        alertValidacionesTextoMensaje.insertAdjacentHTML("beforeend", `El <strong> mensaje </strong> no es válido, debe contener al menos 20 caracteres</br>`);
        alertValidacionesMensaje.style.display = "block";
        mensaje.style.border = "solid 2px #B4016C";
    } else {
        flagMensaje = true;
    }

    if (flagNombre && flagApellido && flagEmail && flagTelefono && flagMensaje) {
        Email.send({
            SecureToken: 'a6e92da2-d71b-4ef2-96f7-0ca2d0a112e1',
            To: "chuko.2728@gmail.com",
            From: email.value,
            Subject: "Hola estimado",
            Body: "Este es un mensaje de prueba"
        }).then(msg => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu Mensaje se ha sido enviada exitosamente',
                showConfirmButton: false,
                timer: 1500
            });
            // Limpiar los campos del formulario
            nombre.value = "";
            apellido.value = "";
            email.value = "";
            telefono.value = "";
            mensaje.value = "";
        }).catch(err => alert("Hubo un error al enviar el mensaje"));
    } else {
    }
});

