// ******** FORMULARIO PRODUCTOS ADMINISTRADOR
var title = document.getElementById("title");
var price = document.getElementById("price");
var description = document.getElementById("description");
var category = document.getElementById("category");


// Botones
var btnImg = document.getElementById("upload_widget");
var btnEnviar = document.getElementById("btnEnviar");
var btnClear = document.getElementById("btnClear");

//flags
var isValid = true;
let flagTitle = false;
// let flagPrice = false;
// let flagDescription = false;
var alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
var alertValidaciones = document.getElementById("alertValidaciones");


// Evento btn Clear ----------------------------------
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.style.display = "none";

    title.style.border = "";
    price.style.border = "";
    description.style.border = "";
    // category.style.border = "";

    title.value = "";
    price.value = "";
    description.value = "";
    // category.value = "";


    // Guardar en objeto en el local storage
    // localStorage.setItem("producto", producto);

    //limpiar el storage
    //localStorage.clear();
});//btnClear

// Validaciones con expresiones regulares -------------------

// const validarTitle = (title) => {
//     const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
//     return expresionRegular.test(title);
// };

// const validarPrice = (price) => {
//     const expresionRegular = /^[0-9]{10}$/;
//     return expresionRegular.test(price);
// };

// const validarDescription = (description) => {
//     const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
//     return expresionRegular.test(description);
// };


// Evento btn Enviar ------------------------
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    
    // let flagCategory = true;

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    title.style.border = "";
    price.style.border = "";
    description.style.border = "";
    // category.style.border = "";

    title.value = title.value.trim();
    price.value = price.value.trim();
    description.value = description.value.trim();
    // category.value = category.value.trim();


    // Validación del nombre (title)
    // if (!validarTitle(title.value) || title.value.length < 3 || title.value.length > 15) {
    //     flagTitle = false;
    //     alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El nombre ingresado no es válido.</strong><br/>`);
    //     title.style.border = "solid 2px red";
    // }

    // Validación del Precio
    // if (!validarPrice(price.value) || price.value.length < 1 || price.value.length > 15) {
    //     flagPrice = false;
    //     alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El precio ingresado no es válido.</strong><br/>`);
    //     price.style.border = "solid 2px red";
    // }

    // Validación del description
    // if (!validarDescription(description.value)) {
    //     flagDescription = false;
    //     alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>La descripción ingresada no es válida.</strong><br/>`);
    //     description.style.border = "solid 2px red";
    // }

    if (!title.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Cnombre </strong> no es válido</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        title.style.border = "solid 2px #B4016C";
        isValid = false;
    }else{
        flagTitle=true;
    }

    // Validación de la categoría
    // if (!validarCategory(category.value)) {
    //     flagCategory = false;
    //     alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El número ingresado no es válido.</strong><br/>`);
    //     telefono.style.border = "solid 2px red";
    // }

    //Objeto JSON para alamacenar los datos del resumen 
    // let producto = `{
    //     "title" : ${title},
    //     "price" : ${price},
    //     "description" : ${description}
    //     }`;


        if (flagTitle == true) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu Mensaje ha sido enviado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            // txtNombre.value = "";
            // txtApellido.value = "";
            // txtEmail.value = "";
            // txtMensaje.value = "";
        } else {
    
        }

});//btnEnviar

// ************* EVENTO PARA VENTANA DEL NAVEGADOR *****************
// // almacenar los datos en el localStorage y no se pierdan al recargar la pagina
// window.addEventListener("load", function (e) {
//     e.preventDefault();

//     if (this.localStorage.getItem("producto") != null) {
//         datos = JSON.parse(this.localStorage.getItem("producto"));
//         datos.forEach((r) => {
//             let row = `<tr>
//                     <td>${r.id}</td>
//                     <td>${r.price}</td>
//                     <td>${r.description}</td>
//                 </tr>`;
//         }//foreach
//         );
//     }
// })

