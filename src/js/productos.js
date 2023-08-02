// Función para agregar una nueva tarjeta al contenedor
function addItem(item) {
  const itemHTML = `
    <div class="card">
      <img src="${item.img}" class="card-img-top" alt="image" onmouseover="changeImage(this, '${item.imgOnMouseover}')" onmouseout="resetImage(this)">
      <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h3 class="card-title">$ ${item.price}</h3>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-primary  botonete">Comprar</a>
        <a href="#" class="btn btn-primary  botonete2">Agregar</a>
      </div>
    </div>
  `;
  
  // Seleccionar el contenedor donde se agregarán las tarjetas
  const itemsContainer = document.getElementById("list-items");
  
  // Agregar la tarjeta generada al contenedor
  itemsContainer.innerHTML += itemHTML;
}

// Función para cambiar la imagen cuando el mouse está sobre ella
function changeImage(imageElement, newImageUrl) {
  // Guardar original de la imagen
  imageElement.dataset.originalSrc = imageElement.src;
  // Cambiar la imagen a la nueva URL
  imageElement.src = newImageUrl;

  // Restaurar la imagen original después de 5 segundos (5000 ms)
  setTimeout(() => {
    resetImage(imageElement);
  }, 10000);
}

// Función para restablecer la imagen original
function resetImage(imageElement) {
  // Verificar si hay una URL original almacenada en el atributo "data-original-src"
  if (imageElement.dataset.originalSrc) {
    // Restaurar la imagen original
    imageElement.src = imageElement.dataset.originalSrc;
    // Eliminar la URL original almacenada
    delete imageElement.dataset.originalSrc;
  }
}

// Ejemplo de uso de la función addItem para agregar dos tarjetas
addItem({
  "id": 1,
  "title": "Alcancía personalizada",
  "price": 150.00,
  "description": "Una alcancía adorable y personalizada, diseñada con la imagen de tu mascota, que te inspirará a ahorrar para mimarlo con más cariño.",
  "img": "/src/img/imgProductos/producto_1A.png", "imgOnMouseover":  "/src/img/imgProductos/producto_1B.png",
  "rating": {
      "rate": 4.5,
      "count": 120
  }
});

addItem({
  "id": 2,
  "title": "Collar para recordar",
  "price": 100.00,
  "description": "Conmemora a tu mascota con este collar de recuerdo, elije entre una urna para guardar pelito o un dije para almacenar las cenizas de tu compañero más fiel",        "category": "Conmemorativos",
  "img": "/src/img/imgProductos/producto_2A.png", "imgOnMouseover":  "/src/img/imgProductos/producto_2B.png",
  "rating": {
      "rate": 4.6,
      "count": 100
  }
});

addItem({
  "id": 3,
  "title": "Urna para pelitos de felicidad",
  "price": 110.00,
  "description": "Conmemora el recuerdo de tu mascota con esta urna personalizada",        
  "category": "Conmemorativos",
  "img": "/src/img/imgProductos/producto_3.png",
  "rating": {
      "rate": 4.4,
      "count": 80
  }
});

addItem({
  "id": 4,
  "title": "Bordado personalizada",
  "price": 130.00,
  "description": "Crea un tributo único para tu mascota. Personaliza con su imagen y/o nombre en un telar artesanal circular de 15 cm. Un recuerdo especial para siempre.",
  "category": "Bordado",
  "img": "/src/img/imgProductos/producto_4.png",
  "rating": {
      "rate": 5.0,
      "count": 50
  }
});

addItem({
  "id": 5,
  "title": "Estatuilla de vidrio llena de amor",
  "price": 180.00,
  "description": "Captura la esencia de tu compañero peludo. Una exquisita estatuilla de vidrio soplado con el pelo de tu mascota en su interior. ",
  "category": "Figuras",
  "img": "/src/img/imgProductos/producto_5A.png", "imgOnMouseover":  "/src/img/imgProductos/producto_5B.png",
  "rating": {
      "rate": 4.7,
      "count": 15
  }
});

addItem({
  "id": 6,
  "title": "Figura con textura felting",
  "price": 90.00,
  "description": "Celebra a tu mascota con arte único. Adquiere figuras hechas a mano con la técnica felting, que capturan su personalidad en detalles texturizados.",
  "category": "Figuras",
  "img": "/src/img/imgProductos/producto_6A.png", "imgOnMouseover":  "/src/img/imgProductos/producto_6B.png",
  "rating": {
      "rate": 4.2,
      "count": 20
  }
});

addItem({
  "id": 7,
  "title": "Llavero para recordar",
  "price": 100.00,
  "description": "Lleva a tu amado compañero siempre contigo. Un llavero diseñado para guardar un pequeño recuerdo de sus cenizas o pelo, manteniendo su memoria viva en cada paso.",
  "category": "Conmemorativos",
  "img": "/src/img/imgProductos/producto_7A.png", "imgOnMouseover":  "/src/img/imgProductos/producto_7B.png",
  "rating": {
      "rate": 4.8,
      "count": 120
  }
});

addItem({
  "id": 8,
  "title": "Figura de cerámica",
  "price": 180.00,
  "description": "Inmortaliza la imagen de tu mascota en una hermosa figura de cerámica, creada con amor y cuidado. Un recuerdo para toda la vida.",
  "category": "Figuras",
  "img": "/src/img/imgProductos/producto_8.png",
  "rating": {
      "rate": 4.7,
      "count": 170
  }
});

addItem({
  "id": 9,
  "title": "Cuadro con textura felting",
  "price": 130.00,
  "description": "Un retrato único lleno de ternura. Cada detalle de tu mascota se captura con la técnica felting en un cuadro de arte texturizado.",
  "category": "Cuadro",
  "img": "/src/img/imgProductos/producto_9A.png", "imgOnMouseover":  "/src/img/imgProductos/producto_9B.png",
  "rating": {
      "rate": 4.5,
      "count": 60
  }
});

addItem({
  "id": 10,
  "title": "Almohada con fotografía impresa",
  "price": 105,
  "description": "Abraza los recuerdos. Personaliza una suave almohada con la fotografía de tu mascota impresa, para sentir su amor en cada abrazo. ",
  "category": "Fotografías",
  "img": "/src/img/imgProductos/producto_10A.png",
  "rating": {
      "rate": 4.8,
      "count": 90
  }
});

addItem({
  "id": 11,
  "title": "Llavero con fotografía",
  "price": 110,
  "description": "Lleva a tu compañero siempre contigo. Un llavero con la fotografía de tu amada mascota y una placa grabada con su nombre, uniendo lo mejor de ambos mundos en un accesorio único.",
  "category": "Fotografías",
  "img": "/src/img/imgProductos/producto_11.png",
  "rating": {
      "rate": 4.9,
      "count": 115
  }
});

addItem({
  "id": 12,
  "title": "Case con pulsera",
  "price": 150,
  "description": "Lleva tu amor por tu compañero a todas partes. Un case para celular que puedes personalizar con la imagen de tu mascota y viene con una pulsera a juego.",
  "category": "Fotografías",
  "img": "/src/img/imgProductos/producto_12A.png", "imgOnMouseover":  "/src/img/imgProductos/producto_12B.png",
  "rating": {
      "rate": 5.0,
      "count": 95
  }
});
