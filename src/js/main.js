//Variables
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
// Botones
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

//flags
let isValid = true;
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let flagNombre = true;
let flagApellido = true;
let flagEmail = true;
let flagTelefono = true;


//Evento btnClear
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
    const expresionRegular = /^[0-9]{10}$/;
    return expresionRegular.test(telefono);
  };

  const validarMensaje = (mensaje) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(mensaje);
  };

 
//Evento btnAgregar
btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    flagNombre = true;
    flagApellido = true;
    flagEmail = true;
    flagTelefono = true;
    flagMensaje = true;
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    nombre.style.border = "";
    apellido.style.border = "";
    telefono.style.border = "";
    email.style.border = "";
    mensaje.style.border = "";
    nombre.value = nombre.value.trim();
    /* console.log(validarNombre(nombre.value)); */
    telefono.value = telefono.value.trim();
    /* console.log(validarTelefono(telefono.value)); */
    email.value = email.value.trim();
    /* console.log(validarEmail(email.value)); */
    apellido.value = apellido.value.trim();
    /* console.log(validarApellido(apellido.value)); */
    mensaje.value = mensaje.value.trim();
    /* console.log(validarMensaje(mensaje.value)); */

    //nombre
    if (validarNombre(nombre.value)==false) {
        flagNombre = false;
    }
    if (nombre.value.length<3) {
        flagNombre = false;
    }
    if (nombre.value.length>15) {
        flagNombre = false;
    }

    if (flagNombre == false) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
        <strong>El nombre ingresado no es válido.</strong><br/>`);
        alertValidaciones.style.display="block";
        nombre.style.border="solid 2px red";
    } else {
        alertValidaciones.style.display = "none";
        nombre.style.border = "";
        nombre.value = "";
    }//nombre

    //apellido
    if (validarApellido(apellido.value)==false) {
        flagApellido = false;
    }
    if (apellido.value.length<3) {
        flagApellido = false;
    }
    if (apellido.value.length>15) {
        flagApellido = false;
    }
    if (flagApellido == false) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
        <strong>El apellido ingresado no es válido.</strong><br/>`);
        alertValidaciones.style.display="block";
        apellido.style.border="solid 2px red";
    } else {
        alertValidaciones.style.display = "none";
        apellido.style.border = "";
        apellido.value = "";
    }//apellido

     //email
     if (validarEmail(email.value)==false) {
        flagEmail = false;
        /* alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
                 <strong>El email ingresado no es válido.</strong><br/>`);
                 alertValidaciones.style.display="block";
                 email.style.border="solid 2px red"; */
    }
    if (flagEmail == false) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
        <strong>El email ingresado no es válido.</strong><br/>`);
        alertValidaciones.style.display="block";
        email.style.border="solid 2px red";
    } else {
        alertValidaciones.style.display = "none";
        email.style.border = "";
        email.value = "";
    }//email

    //telefono
    if (validarTelefono(telefono.value)==false) {
        flagTelefono = false;
        /* alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
                 <strong>El telefono ingresado no es válido.</strong><br/>`);
                 alertValidaciones.style.display="block";
                 telefono.style.border="solid 2px red"; */
    }
    if (flagTelefono == false) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
        <strong>El telefono ingresado no es válido.</strong><br/>`);
        alertValidaciones.style.display="block";
        telefono.style.border="solid 2px red";
    } else {
        alertValidaciones.style.display = "none";
        telefono.style.border = "";
        telefono.value = "";
    }//telefono
    
    //mensaje
    if (validarMensaje(mensaje.value)==false) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
                 <strong>El mensaje ingresado no es válido.</strong><br/>`);
                 alertValidaciones.style.display="block";
                 mensaje.style.border="solid 2px red";
    } else {
        alertValidaciones.style.display = "none";
        mensaje.value = "";
    }//mensaje
});