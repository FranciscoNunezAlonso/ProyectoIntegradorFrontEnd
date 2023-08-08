// ******** FORMULARIO PRODUCTOS ADMINISTRADOR ****************
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let category = document.getElementById("category");

let product_img = document.getElementById("product_img")

// Botones
let btnImg = document.getElementById("upload_widget");
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

// Flags
let flagTitle = false;
let flagPrice = false;
let flagDescription = false;
let flagProduct_img = false;
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

// Arreglo
let arrayProductos = [];

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

    // Limpiar el storage
    localStorage.clear();
});

// Evento btn Enviar ------------------------
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    title.style.border = "";
    price.style.border = "";
    description.style.border = "";

    title.value = title.value.trim();
    price.value = price.value.trim();
    description.value = description.value.trim();

    if (!title.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) || (title.value.length < 4)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> nombre </strong> no es válido</br>`);
        alertValidaciones.style.display = "block";
        title.style.border = "solid 2px #B4016C";
        flagTitle = false;
    } else {
        flagTitle = true;
    }

    if (!price.value.match(/^[0-9]{1,4}$/) || (price.value.length < 2)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> precio </strong> no es válido</br>`);
        alertValidaciones.style.display = "block";
        price.style.border = "solid 2px #B4016C";
        flagPrice = false;
    } else {
        flagPrice = true;
    }

    if (description.value.length < 5) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `La <strong> descripción </strong> no es válida</br>`);
        alertValidaciones.style.display = "block";
        description.style.border = "solid 2px #B4016C";
        flagDescription = false;
    } else {
        flagDescription = true;
    }

    if (!flagProduct_img) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `Por favor, seleccione una imagen</br>`);
        alertValidaciones.style.display = "block";
    }

    if (flagTitle && flagPrice && flagDescription && flagProduct_img) {
        let elemento = {
            "title": title.value.trim(),
            "price": price.value.trim(),
            "description": description.value.trim(),
            "img": product_img.src,
            "imgOnMouseover": product_img.dataset.imgOnMouseover
        };
    
        arrayProductos.push(elemento);
        localStorage.setItem("elemento", JSON.stringify(arrayProductos));

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El producto se ha publicado de manera exitosa',
            showConfirmButton: false,
            timer: 1500
        });

        title.value = "";
        price.value = "";
        description.value = "";
        product_img.src = "";
        product_img.removeAttribute("data-imgOnMouseover");
    }
});

// Cloudinary ------------------------------------------
let uploadedImages = [];

// Evento btn Img (Cloudinary) ----------------------------------
btnImg.addEventListener("click", function (event) {
    event.preventDefault();
    
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'dwp2swcwi',
        uploadPreset: 'Apoyoap',
        multiple: true
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            uploadedImages.push(result.info.secure_url);

            if (uploadedImages.length >= 2) {
                product_img.src = uploadedImages[0];
                product_img.dataset.imgOnMouseover = uploadedImages[1];

                uploadedImages = [];
                flagProduct_img = true; // Mark the flag as true
            }
        }
    });
    myWidget.open();
}, false);
