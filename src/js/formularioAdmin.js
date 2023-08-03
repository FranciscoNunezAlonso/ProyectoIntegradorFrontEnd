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
var isValid = false;
let flagTitle = false;
let flagPrice = false;
let flagDescription = false;
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

});//btnClear



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

    if (!title.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) == true|| (title.value.length < 4 )) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> nombre </strong> no es válido</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        title.style.border = "solid 2px #B4016C";
        flagPrice = false;
    }else{
        flagTitle = true;
    }

    if (!price.value.match(/^[0-9]{1,4}$/) == true|| (price.value.length < 2 )) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> precio </strong> no es válido</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        price.style.border = "solid 2px #B4016C";
        flagPrice = false;
    }else{
        flagPrice = true;
    }

    if (description.value.length < 5) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `La <strong> descripción </strong> no es válida</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        description.style.border = "solid 2px #B4016C";
        flagDescription = false;
    }else{
        flagDescription = true;
    }

    if (flagTitle == true && flagPrice == true && flagDescription == true) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El producto se ha publicado de manera exitosa',
            showConfirmButton: false,
            timer: 1500
        })
        title.value = "";
        price.value = "";
        description.value = "";
        
    } else {

    }




});//btn Enviar



