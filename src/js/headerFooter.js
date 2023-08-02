//Este es el header y el footer.
let navbar = document.getElementById("headerjs");
let footer = document.getElementById("footerjs");


//Acción de insertar Header.
navbar.insertAdjacentHTML("afterBegin", `<nav class="navbar navbar-expand-lg">
    <div class="container-fluid" id="divNavBar">
      <!-- Logo -->
      <a class=" navbar navbar-brand" href="/index.html"><img src="/src/img/Imagotipo.png" alt="" width="100rem"></a>
      <button class="navbar navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" style="color: #D16D79">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-justified" id="navbarSupportedContent">
        <ul class="navbar navbar-nav me-auto mb-2 mb-lg-0 ">
          <!-- Hipervínculo Home -->
          <li class="navbar nav-item">
            <a class="navbar nav-link active " aria-current="page" href="/index.html"
              style="color: #252F48; font-size: 24px;">Home</a>
          </li>
          <!-- Hipernvínculo Productos -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/src/html/productos.html"
              style="color: #252F48; font-size: 24px;">Productos</a>
          </li>
          <!-- Hipervínculo Nosotros -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/src/html/nosotros.html"
              style="color: #252F48; font-size: 24px;">Nosotros</a>
          </li>
          <!-- Hipervínculo Contacto -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/src/html/contacto.html"
              style="color: #252F48; font-size: 24px;">Contacto</a>
          </li>
        </ul>

        <ul class="navbar navbar-nav navbar-expand-lg  justify-content-end">

          <!-- Barra Buscadora  -->
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
              style="color: #252F48;">
          </form>
          <!-- icono lupa -->
          <li class="navbar nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" class="bi bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </li>

          <!-- icono usuario -->
          <li class="navbar nav-item">
            <a href="registro.html" class="navbar nav-link active">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" class="bi bi-person-circle"
                viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </a>
          </li>
          <!-- icono carrito -->
          <li class="navbar nav-item">
            <a href="/src/html/carrito.html" class="navbar nav-link active">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" class="bi bi-cart4 "
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>`); // Acción de insertar Header.

//Acción insertar Footer.
footer.insertAdjacentHTML("afterEnd", `

<!-- Modales-->
<div class="modal fade" id="avisoDePrivacidad" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Aviso de Privacidad</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus alias mollitia in
            repellendus error suscipit exercitationem quos distinctio perspiciatis consequuntur et
            architecto aut ut molestiae at aspernatur aliquid temporibus!
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary"
                data-bs-dismiss="modal">Cerrar</button>
        </div>
    </div>
</div>
</div>
<div class="modal fade" id="terminosYCondiciones" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg">
<div class="modal-content">
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Términos & Condiciones</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus alias mollitia in
        repellendus error suscipit exercitationem quos distinctio perspiciatis consequuntur et
        architecto aut ut molestiae at aspernatur aliquid temporibus!
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary"
            data-bs-dismiss="modal">Cerrar</button>
    </div>
</div>
</div>
</div>
<div class="modal fade" id="preguntasFrecuentes" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg">
<div class="modal-content">
<div class="modal-header">
    <h1 class="modal-title fs-5" id="staticBackdropLabel">Preguntas Frecuentes</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus alias mollitia in
    repellendus error suscipit exercitationem quos distinctio perspiciatis consequuntur et
    architecto aut ut molestiae at aspernatur aliquid temporibus!
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-primary"
        data-bs-dismiss="modal">Cerrar</button>
</div>
</div>
</div>
</div>

<!-- Cuerpo del footer-->
<div class="container d-flex justify-content-around">
  <img src="/src/img/Perrito.png" alt="perritoMirador" class="img-fluid">
</div>
<div>
  <footer class="py-5 footer-bg">
    <div class="container">
      <div class="row">
          <!-- Columna1 -->
            <div class="col-md-3 col-md-3 mb-3">
              <ul class="nav flex-column">
                <li>
                  <h5>SERVICIO AL CLIENTE</h5>
                </li>
                <li class="nav-item mb-2">
                  <a href="mailto:atencion@vd.com? Subject=Necesito%20ayuda%20por%20favor" class="nav-link-underlined p-0 text-body-secondary">atencion@vd.com</a>
                </li>
                <li class="nav-item mb-2">
                  <a class="nav-link p-0 text-body-secondary">554 327 2378</a>
                </li>
                <li class="nav-item mb-2">
                  <a class="nav-link p-0 text-body-secondary">Lunes a viernes 9:00 am a 5:30 pm</a>
                </li>
              </ul>
            </div>
          <!-- Columna2 -->
            <div class="col-md-3 col-md-3 mb-3">
              <ul class="nav flex-column">
                <li>
                  <br>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link-underlined p-0 text-dark" data-bs-toggle="modal" data-bs-target="#avisoDePrivacidad">Aviso de Privacidad</a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link-underlined p-0 text-dark" data-bs-toggle="modal" data-bs-target="#terminosYCondiciones">Términos & Condiciones</a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link-underlined p-0 text-body-secondary" data-bs-toggle="modal" data-bs-target="#preguntasFrecuentes">Preguntas Frecuentes</a>
                </li>
              </ul>
            </div>
          <!-- Columna3 -->
            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>SUSCRÍBETE A LA COMUNIDAD</h5>
                  <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">Ingresa tu correo electrónico</label>
                      <input id="newsletter1" type="text" class="form-control" placeholder="Correo electrónico">
                        <button class="btn btn-primary" type="button">Suscribirse</button>
                  </div>
                    <br>
                </form>
                  <h5>REDES SOCIALES</h5>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                        <br>
                      <!-- Íconos -->
                        <ul class="list-unstyled d-flex">
                          <li class="ms-3">
                            <a class="link-body-emphasis" href="https://www.tiktok.com/" target="_blank"><i class="fab fa-tiktok"></i></a>
                          </li>
                          <li class="ms-3">
                            <a class="link-body-emphasis" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                          </li>
                          <li class="ms-3">
                            <a class="link-body-emphasis" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                          </li>
                        </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p class="text-center">&copy; 2023 Team 1, Generation México | CH29.</p>
    </div>
  </footer>
</div>`);//Acción insertar Footer.
