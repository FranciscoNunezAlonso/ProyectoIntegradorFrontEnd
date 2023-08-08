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
var isValid = true;
var alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
var alertValidaciones = document.getElementById("alertValidaciones");



//Evento btnClear ----------------------------------------------------------------
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.style.display = "none";
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
    const expresionRegular = /^(?!([0-9])\1{9})\d{10}$/;
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

    let flagNombre = true;
    let flagApellido = true;
    let flagEmail = true;
    let flagTelefono = true;
    let flagMensaje = true;

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
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
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El nombre ingresado no es válido.</strong><br/>`);
        nombre.style.border = "solid 2px red";
    }

    // Validación del apellido
    if (!validarApellido(apellido.value) || apellido.value.length < 3 || apellido.value.length > 15) {
        flagApellido = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El apellido ingresado no es válido.</strong><br/>`);
        apellido.style.border = "solid 2px red";
    }

    // Validación del email
    if (!validarEmail(email.value)) {
        flagEmail = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El email ingresado no es válido.</strong><br/>`);
        email.style.border = "solid 2px red";
    }

    // Validación del teléfono
    if (!validarTelefono(telefono.value)) {
        flagTelefono = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El número ingresado no es válido.</strong><br/>`);
        telefono.style.border = "solid 2px red";
    }

    // Validación del mensaje
    if (!validarMensaje(mensaje.value)) {
        flagMensaje = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El mensaje ingresado no es válido.</strong><br/>`);
        mensaje.style.border = "solid 2px red";
    }

    if (flagNombre && flagApellido && flagEmail && flagTelefono && flagMensaje) {
        Email.send({
            SecureToken: 'a6e92da2-d71b-4ef2-96f7-0ca2d0a112e1',
            To: "chuko.2728@gmail.com",
            From: email.value,
            Subject: "Hola estimado",
            Body: "Este es un mensaje de prueba"
        }).then(msg => {
            alert("Tu mensaje fue enviado");
            // Limpiar los campos del formulario
            nombre.value = "";
            apellido.value = "";
            email.value = "";
            telefono.value = "";
            mensaje.value = "";
        }).catch(err => alert("Hubo un error al enviar el mensaje"));
    } else {
        alertValidaciones.style.display = "block";
    }});

