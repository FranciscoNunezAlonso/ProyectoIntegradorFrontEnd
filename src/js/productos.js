// Función para agregar una nueva tarjeta al contenedor
function addItem(item) {
    const itemHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="image" onmouseover="changeImage(this, '${item.imgOnMouseover}')" onmouseout="resetImage(this)">
        <div class="card-body">
        <h5 class="card-title">${item.precio}</h5>
          <h5 class="card-title">${item.name}</h5>
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
    'precio': '$ 68 pesos',
    'img': './img/Llavero_Peludo_2.jpg',
    'imgOnMouseover': './img/Llavero_Peludo.jpg',
    'name': 'Llavero personalizado',
    'description': 'Hermoso llavero perzonalizado de perrito'
  });
  
  addItem({
    'precio': '$ 68 pesos',
    'img': './img/Recuadro_Felting_2.jpg',
    'imgOnMouseover': './img/Recuadro_Felting_3.jpg',
    'name': 'Recuadro de perrito',
    'description': 'Hermoso cuadro de perrito hecho de felpa'
  });