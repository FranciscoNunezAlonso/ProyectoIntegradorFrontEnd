
function addItem(item) {
    const itemHTML = `
    <h1 class="card-title">HOLA ${item.currentName}</h1>
    <br>
    <h3> Te invitamos a seguir explorando nuestra página</h3>
    
    `;

    // Seleccionar el contenedor donde se agregarán las tarjetas
    const itemsContainer = document.getElementById("divUsuario");
    // Agregar la tarjeta generada al contenedor
    itemsContainer.innerHTML += itemHTML;

}

window.addEventListener("load", function (event) {
    event.preventDefault();
    if (localStorage.getItem("usuarios") != null) {
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        usuarios.forEach(usuarios => {
            addItem({
                "currentName": usuarios.nombre,
                "currentMail": usuarios.email,
                "currentPass": usuarios.contrasena,

            });

        });
    }
});