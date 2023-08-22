// ******** Header y Footer ****************

let navbar = document.getElementById("headerjs");
let footer = document.getElementById("footerjs");

//Acción insertar Footer ----------------------------------------------------------------------------
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
        <div class="modal-body pModal">
        En Amor Peludo, valoramos y respetamos tu privacidad. Toda la información personal que nos proporciones será utilizada exclusivamente para procesar tus pedidos y brindarte un servicio personalizado. Tus datos nunca serán compartidos con terceros sin tu consentimiento explícito. Puedes consultar nuestra política de privacidad completa en nuestro sitio web para obtener más detalles sobre cómo protegemos tus datos.
        <br><br>
        Queremos asegurarte que tu información estará segura con nosotros. Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad, no dudes en contactarnos a través de los canales proporcionados en nuestro sitio web.
        <br><br>
        Gracias por confiar en Amor Peludo para personalizar productos especiales para tus adorables mascotas.
        <br><br>
        Amor Peludo
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
    <div class="modal-body  pModal">
    Bienvenido/a a Amor Peludo, tu destino para productos personalizados para mascotas. Al acceder y utilizar nuestro sitio web, aceptas los siguientes términos y condiciones:
    <br><br><h6>Productos Personalizados:</h6> Los productos ofrecidos en Amor Peludo son exclusivos y se fabrican según tus especificaciones. Por favor, asegúrate de proporcionar información precisa para evitar errores en la personalización.
    <br><br><h6>Propiedad Intelectual:</h6> Todo el contenido del sitio web, incluidos los diseños, logotipos y fotografías, están protegidos por derechos de propiedad intelectual y no pueden ser utilizados sin nuestro consentimiento.
    <br><br><h6>Privacidad y Seguridad:</h6> Respetamos tu privacidad y protegemos tus datos personales. Consulta nuestra política de privacidad para más información.
    <br><br><h6>Precios y Pagos:</h6> Los precios están en la moneda especificada y pueden estar sujetos a cambios. Los pagos se realizan a través de métodos de pago seguros y encriptados.
    <br><br><h6>Envíos y Entregas:</h6> Procesamos los pedidos con el mayor cuidado. Los tiempos de producción y envío pueden variar según el producto y la ubicación.
    <br><br><h6>Devoluciones y Reclamos:</h6> Consulta nuestra política de devoluciones para obtener información sobre cómo manejar devoluciones y reclamos.
    <br><br><h6>Uso Responsable:</h6> No toleramos el uso inapropiado o ilegal de nuestro sitio web. Los usuarios deben cumplir con todas las leyes y regulaciones aplicables.
    <br><br><h6>Contacto:</h6> Estamos aquí para ayudarte. Si tienes preguntas, contáctanos a través de los canales proporcionados en nuestro sitio web.
    <br><br>Al utilizar nuestro sitio web y realizar una compra, aceptas cumplir con estos términos y condiciones. Por favor, revisa esta página periódicamente, ya que los términos pueden actualizarse ocasionalmente.
    <br><br>
    Gracias por elegir Amor Peludo, ¡esperamos que disfrutes de nuestros productos personalizados!
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
<div class="modal-body  pModal">
<h6>1.-¿Qué tipo de recuerdos de mascotas ofrecen?</h6>
Ofrecemos una amplia variedad de recuerdos personalizados para mascotas, que incluyen almohadas, estatuillas de vidrio soplado, collares con urna para pelitos o cenizas, figuras con textura felting, llaveros con fotografías, cuadros de arte texturizado y más. Cada producto se crea con amor y cuidado para honrar a tu compañero peludo.
<br><br>
<h6>2.-¿Cuál es el proceso de pedido y pago en la página?</h6>
El proceso de pedido es sencillo. Navega por nuestro sitio web, selecciona el producto que deseas personalizar, carga la imagen de tu mascota y sigue las instrucciones para agregar detalles adicionales, como el nombre de tu mascota. Una vez que completes tu pedido, podrás realizar el pago de forma segura a través de diferentes métodos de pago.
<br><br>
<h6>3.-¿Puedo personalizar los recuerdos con el nombre de mi mascota?</h6>
¡Por supuesto! Entendemos lo importante que es el nombre de tu mascota, y ofrecemos la opción de personalizar nuestros productos con su nombre para hacerlos aún más especiales.
<br><br>
<h6>4.-¿Cuánto tiempo tarda en llegar el pedido?</h6>
Los tiempos de entrega varían según el producto y la ubicación. Generalmente, nuestros productos personalizados se envían en un plazo de 5 a 10 días hábiles después de realizar el pedido. Te proporcionaremos una estimación más precisa durante el proceso de compra.
<br><br>
<h6>5.-¿Ofrecen envío internacional?</h6>
Sí, realizamos envíos internacionales para que personas de todo el mundo puedan disfrutar de nuestros productos personalizados para mascotas.
<br><br>
<h6>6.-¿Tienen una política de devoluciones?</h6>
Sí, tenemos una política de devoluciones. Si no estás satisfecho/a con tu compra, puedes solicitar una devolución y reembolso dentro de los 30 días posteriores a la entrega del pedido. Consulta nuestra política de devoluciones completa en nuestro sitio web para más detalles.
<br><br>
<h6>7.-¿Qué métodos de pago aceptan?</h6>
Aceptamos varios métodos de pago seguros, incluyendo tarjetas de crédito y débito, PayPal y otros métodos de pago en línea.
<br><br>
<h6>8.-¿Es seguro proporcionar mis datos de pago en la página?</h6>
Sí, puedes estar seguro/a de que tus datos de pago están protegidos. Utilizamos tecnología de encriptación y cumplimos con los más altos estándares de seguridad para proteger tus datos personales y financieros.
<br><br>
<h6>9.-¿Tienen un servicio de atención al cliente para consultas y asistencia?</h6>
Sí, contamos con un equipo de atención al cliente dedicado y amable que está listo para ayudarte con cualquier consulta o asistencia que necesites. Puedes ponerte en contacto con nosotros a través de los canales proporcionados en nuestro sitio web.
<br><br>
<h6>10.-¿Qué tipos de mascotas cubren en sus productos?</h6>
Nuestros productos personalizados están disponibles para todas las mascotas, incluyendo perros, gatos, aves, conejos, hamsters, reptiles y más. ¡Cada mascota es bienvenida en nuestra tienda!
<br><br>
<h6>11.-¿Puedo ver muestras o ejemplos de los recuerdos antes de realizar el pedido?</h6>
Sí, puedes ver muestras y ejemplos de nuestros recuerdos personalizados en nuestro sitio web y en nuestras redes sociales. Estamos encantados de mostrarte la calidad y belleza de nuestros productos.
<br><br>
<h6>12.-¿Cuál es su política de privacidad y cómo protegen mis datos personales?</h6>
Respetamos tu privacidad y protegemos tus datos personales de acuerdo con nuestra política de privacidad. Puedes revisar la política completa en nuestro sitio web para conocer cómo recopilamos, utilizamos y protegemos tus datos.
<br><br>
<h6>13.-¿Cuáles son los materiales utilizados en los productos?</h6>
Utilizamos materiales de alta calidad en todos nuestros productos, incluyendo telas suaves, vidrio soplado, cerámica y otros materiales duraderos que garantizan la belleza y durabilidad de nuestros recuerdos.
<br><br>
<h6>14.-¿Tienen testimonios o reseñas de clientes satisfechos?</h6>
Sí, contamos con numerosos testimonios y reseñas de clientes satisfechos que han quedado encantados con nuestros productos personalizados. Puedes encontrar estas reseñas en nuestro sitio web y en nuestras redes sociales.
<br><br>
Estamos emocionados de compartir nuestra pasión por los recuerdos personalizados de mascotas contigo.
<br>

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
                  <a href="mailto:atencionap@yahoo.com? Subject=Necesito%20ayuda%20por%20favor" class="nav-link-underlined p-0 text-body-secondary">atencionap@yahoo.com</a>
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
                    <p class="text-center">&copy; 2023 Team 1, Generation México | <a href="/src/html/formularioAdmin.html" class="link_ch29">CH29</a></p>
    </div>
  </footer>
</div>`);//Acción insertar Footer.

window.addEventListener("load", function (event) {
  event.preventDefault();

  let imgUsuario = "";
  let modalUsuario = "";

  if (localStorage.getItem("usuarios_registro") != null) {
    imgUsuario = ` <img src="/src/img/icons/huella-2.png" alt="icono" class="nabImg">`
    modalUsuario = `<li><a class="dropdown-item" href="/src/html/perfil.html"><button id="registrate">Perfil</button></a></li>
    <li><a class="dropdown-item" href="/index.html"><button id="cerrar-sesion">Cerrar Sesión</button></a></li>`

  } else {
    imgUsuario = ` <img src="/src/img/icons/usuario-de-perfil-2.png" alt="icono" class="nabImg"> `
    modalUsuario = `<li><a class="dropdown-item" href="/src/html/registro.html"><button id="registrate">Regístrate</button></a></li>
    <li><a class="dropdown-item" href="/src/html/usuario.html"><button id="inicia-sesion">Inicia Sesión</button></a></li>`
  }

  let iconoPerfil = `<li class="nav-item dropdown dropstart">
<a class="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
${imgUsuario}
</a>
<ul class="dropdown-menu dropdown-menu-start">
  ${modalUsuario}
</ul> </li>`;

  //Acción de insertar Header ---------------------------------------------------
  navbar.insertAdjacentHTML("afterBegin", `<nav class="navbar navbar-expand-lg">
    <div class="container" id="divNavBar">
      <!-- Logo -->
      <a class=" navbar navbar-brand" href="/index.html"><img src="/src/img/Imagotipo.png" alt="" width="100rem"></a>
      <button class="navbar navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" style="color: #D16D79">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-justified" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Hipervínculo Home -->

          <li class="nav-item navbar-margin-l rounded">
            <a class="nav-link active" aria-current="page" href="/index.html"
              style="color: #252F48; font-size: 20px;">Home</a>
          </li>
          <!-- Hipernvínculo Productos -->
          <li class="nav-item navbar-margin-l rounded">
            <a class="nav-link active " aria-current="page" href="/src/html/productos.html"
              style="color: #252F48; font-size: 20px;">Productos</a>
          </li>
          <!-- Hipervínculo Nosotros -->
          <li class="nav-item navbar-margin-l rounded">
            <a class="nav-link active" aria-current="page" href="/src/html/nosotros.html"
              style="color: #252F48; font-size: 20px;">Nosotros</a>
          </li>
          <!-- Hipervínculo Contacto -->
          <li class="nav-item navbar-margin-l rounded">
            <a class="nav-link active" aria-current="page" href="/src/html/contacto.html"
              style="color: #252F48; font-size: 20px;">Contacto</a>
          </li>
        </ul>

        <ul class="navbar navbar-nav navbar-expand-lg  justify-content-end">

          <!-- icono usuario -->
          <li class="navbar nav-item navbar-icon">

          <a href="/src/html/usuario.html" class="navbar nav-link active">
        
            </a>
          </li>
          
          ${iconoPerfil}
          <!-- icono carrito -->
          <li class="navbar nav-item navbar-icon">
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
  let cerrar_sesion = document.getElementById('cerrar-sesion');

cerrar_sesion.addEventListener('click', function (e) {
  e.preventDefault();

  function logout() {
    localStorage.removeItem('usuarios_registro');
    console.log("Logged out");
   
  }
  logout();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Sesion cerrada correctamente',
    showConfirmButton: false,
    timer: 1500
});


  setTimeout(() => {
    window.location.href = '../../index.html';
  }, 800);
});

}); 




