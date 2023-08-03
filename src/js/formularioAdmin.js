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
var alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
var alertValidaciones = document.getElementById("alertValidaciones");


// Evento btn Clar ----------------------------------
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

// Validaciones con expresiones regulares -------------------

const validarTitle = (title) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(title);
};

const validarPrice = (price) => {
    const expresionRegular = /^[0-9]{10}$/;
    return expresionRegular.test(price);
};

const validarDescription = (description) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(description);
};


// Evento btn Enviar ------------------------
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    let flagTitle = true;
    let flagPrice = true;
    let flagDescription = true;
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
    if (!validarTitle(title.value) || title.value.length < 3 || title.value.length > 15) {
        flagTitle = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El nombre ingresado no es válido.</strong><br/>`);
        title.style.border = "solid 2px red";
    }

    // Validación del Precio
    if (!validarPrice(price.value) || price.value.length < 1 || price.value.length > 15) {
        flagPrice = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El precio ingresado no es válido.</strong><br/>`);
        price.style.border = "solid 2px red";
    }

    // Validación del description
    if (!validarDescription(description.value)) {
        flagDescription = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>La descripción ingresada no es válida.</strong><br/>`);
        description.style.border = "solid 2px red";
    }

    // Validación de la categoría
    // if (!validarCategory(category.value)) {
    //     flagCategory = false;
    //     alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El número ingresado no es válido.</strong><br/>`);
    //     telefono.style.border = "solid 2px red";
    // }

});//btnEnviar

