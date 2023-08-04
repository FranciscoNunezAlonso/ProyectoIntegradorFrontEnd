// ******** FORMULARIO PRODUCTOS ADMINISTRADOR
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let category = document.getElementById("category");

let product_img = document.getElementById("product_img")


// Botones
let btnImg = document.getElementById("upload_widget");
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

//flags
let isValid = false;
let flagTitle = false;
let flagPrice = false;
let flagDescription = false;
let flagProduct_img = false;
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

// arreglo
let arrayProductos = [];
let elemento = {};
let itemHTML = "";



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
    product_img.src = "";

    //limpiar el storage
    localStorage.clear();

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

    if (!title.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) == true || (title.value.length < 4)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> nombre </strong> no es válido</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        title.style.border = "solid 2px #B4016C";
        flagPrice = false;
    } else {
        flagTitle = true;
    }

    if (!price.value.match(/^[0-9]{1,4}$/) == true || (price.value.length < 2)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> precio </strong> no es válido</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        price.style.border = "solid 2px #B4016C";
        flagPrice = false;
    } else {
        flagPrice = true;
    }

    if (description.value.length < 5) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `La <strong> descripción </strong> no es válida</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        description.style.border = "solid 2px #B4016C";
        flagDescription = false;
    } else {
        flagDescription = true;
    }
    
    if (!product_img.src || !product_img.src.match(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/) ) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor, seleccione una imagen</br>`);
        // Habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block";
        return; // Evitar que el formulario se envíe si no hay imagen seleccionada
        flagProduct_img = false;
    }else {
        flagProduct_img = true;
    }


    if (flagTitle == true && flagPrice == true && flagDescription == true) {

        elemento = `{
            "title": " ${title.value.trim()} ",
            "price": " ${price.value.trim()}",
            "description": " ${description.value.trim()}",
            "'imagen": " ${product_img.src}"
        }`;
    
        arrayProductos.push(JSON.parse(elemento));
        this.localStorage.setItem("elemento", JSON.stringify(arrayProductos));

        window.addEventListener("load", function (event) {
            event.preventDefault();
            if (this.localStorage.getItem("elemento") != null) {
                JSON.parse(this.localStorage.getItem("elemento")).forEach((p) => {
                    arrayProductos.push(p);
                }//foreach
                );
        
            }//if
        
        }); // window // load

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
        product_img.src = "";
    } else {

    }
});//btn Enviar

// Cloudinary ------------------------
let widget = cloudinary.createUploadWidget({
    cloudName: 'dwp2swcwi',
    uploadPreset: 'Apoyoap'
},
    (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done uploading..: ', result.info);
            product_img.src = result.info.secure_url;
        }

    });

// btn Img cloudinary
btnImg.addEventListener("click", function () {
    widget.open();
}, false);
//btn cloudinary