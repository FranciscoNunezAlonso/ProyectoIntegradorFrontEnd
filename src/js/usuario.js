// +++++++++++++++++++++++++++++++++++++++ DEFINIR VARIABLES INGRESO USUARIO ++++++++++++++++++++++++++++++++++++++++++
let email = document.getElementById("email");
let contrasena = document.getElementById("contrasena");
var currentMail;
var currentPass;

// +++++++++++++++++++++ BOTONES +++++++++++++++++++++
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

// ++++++++++++++++++++++++ EVENTO BUTTON CLEAR ++++++++++++++++++++++++
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.style.display = "none";

    email.style.border = "";
    contrasena.style.border = "";

    email.value = "";
    contrasena.value = "";
 
});

// +++++++++++++++++++++++ EVENTO BUTTON ENVIAR +++++++++++++++++++++++
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    email.style.border = "";
    contrasena.style.border = "";

    email.value = email.value.trim();
    contrasena.value = contrasena.value.trim();

    console.log(currentMail);
    console.log(currentPass);

    if (currentMail==email.value && currentPass==contrasena.value) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Acceso correcto',
            showConfirmButton: false,
            timer: 1500
        });
        email.value = "";
        contrasena.value = "";
        
        setTimeout(()=>{
            window.location.href ='../../index.html'
        },800)
    } else {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `Correo o contraseña no es válido</br>`);
        alertValidaciones.style.display = "block";
        email.style.border = "solid 2px red"
        contrasena.style.border = "solid 2px red"
    }
});

//+++++++++++++++++++++++++ TRAER DATOS DE USUARIO DE LOCALSTORAGE +++++++++++++++++++++++++

  window.addEventListener("load", function (event) {
    event.preventDefault();
    if (localStorage.getItem("usuarios") != null) {
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        
        usuarios.forEach(usuarios => {
            currentMail = usuarios.email;
            currentPass = usuarios.contrasena;
        });
    }
});