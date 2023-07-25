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
    }//telefono
    
    //mensaje
    if (validarMensaje(mensaje.value)==false) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
                 <strong>El mensaje ingresado no es válido.</strong><br/>`);
                 alertValidaciones.style.display="block";
                 mensaje.style.border="solid 2px red";
    }

});



//btnAgregar

/* function validarCantidad() { */
    /* if (nombre.value.length == 0) {
        return false;
    }
    if (apellido.value.length == 0) {
        return false;
    } */
    /* if (mensaje.value.length == 0) {
        return false;
    } */
    /* if (email.value.length == 0) {
        return false;
    } */
    /* if (telefono.value.length == 0) {
        return false;
    } */
    /* return true; */
//}//ValidadCantidad

/* const longitudMinima = 3;  const longitudMaxima = 15;  const caracteresPermitidos = /^[a-zA-Z\s]+$/;
      if (nombre.length<longitudMinima) {
          alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
          <strong>El nombre ingresado no es válido.</strong><br/>`);
          alertValidaciones.style.display="block";
          nombre.style.border="solid 2px red";
          isValid=false;
      }
      if (nombre.length>longitudMaxima) {
          isValid=false;
      }
      if (!caracteresPermitidos.test(nombre)) {
          isValid=false;
     } */

    //apellido 
   /*  if (apellido.value.length < longitudMinima) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `
             <strong>El apellido ingresado no es válido.</strong><br/>`);
        alertValidaciones.style.display = "block";
        apellido.style.border = "solid 2px red";
        isValid = false;
    }
    if (apellido.value.length > longitudMaxima) {
        isValid = false;
    }
    if (!caracteresPermitidos.test(apellido)) {
        isValid = false;
    } */

   
    /*    const formatoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
             if (!formatoValido.test(email)) {
                 alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
                 <strong>El email ingresado no es válido.</strong><br/>`);
                 alertValidaciones.style.display="block";
                 email.style.border="solid 2px red";
                 isValid=false;
             }        */
             /* const validarEmail = (email) => {
                const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return expresionRegular.test(email);
              };

              console.log(validarEmail("usuario@example.com")); // true
console.log(validarEmail("user123@example")); // false
console.log(validarEmail("invalid_email.com")); // false
console.log(validarEmail("test.email@subdomain.domain.co.uk")); // true
 */
    //}

    //telefono
   /*  const formatoTelefono = /[0-9]{10}/;
    if (!formatoTelefono.test(telefono)) {
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `
              <strong>El telefono ingresado no es válido.</strong><br/>`);
        alertValidaciones.style.display = "block";
        telefono.style.border = "solid 2px red";
        isValid = false;
    } */

    //mensaje
    /* const formatoMensaje = /^[a-zA-Z/0-9]{2}$/;
          if (!formatoMensaje.test(mensaje)) {
              alertValidacionesTexto.insertAdjacentHTML("afterbegin",`
              <strong>El mensaje ingresado no es válido.</strong><br/>`);
              alertValidaciones.style.display="block";
              mensaje.style.border="solid 2px red";
              isValid=false;
          }    */
        

// Validar correo electrónico
//let regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // validar un email, basarnos en https://emailregex.com/
//console.log(email, regexEmail.test(email));

//Teléfono
//regex = /[0-9]{10}/;
//telefono = "0000000000"
//console.log(regex.test(telefono));

//Nombre
//let regex = /[A-Z]{15}/;
//console.log(regex.test(nombre));

//Apellido
//let regex = /[A-Z]{15}/;
//console.log(regex.test(apellido));