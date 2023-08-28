
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
  
  // Función para restablecer la imagen original ---------------------------------------------
  function resetImage(imageElement) {
    // Verificar si hay una URL original almacenada en el atributo "data-original-src"
    if (imageElement.dataset.originalSrc) {
      // Restaurar la imagen original
      imageElement.src = imageElement.dataset.originalSrc;
      // Eliminar la URL original almacenada
      delete imageElement.dataset.originalSrc;
    }
  }