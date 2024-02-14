export const registre1 = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/dist/css/main.css">
  <title>Registre su Spa</title>
</head>

<body>
  <!-- *****HERO******* -->
  <section class="banner banner--short">
    <div id="hero" class="banner__img">
      <img src="/dist/assets/img/registro-spa.webp" alt="">
    </div>
    <div class="banner__text">
      <h1>Registro de spa</h1>
    </div>
  </section>


  <!-- *****Features Section***** -->
  <section class="features bg-info">
    <div class="features__content">
      <h2>Registre su spa y disfrute de <span>grandes ventajas:</span></h2>
      <div class="features__grid">
        <div class="features__card">
          <img src="/dist/assets/icons/features-card--img (2).png" alt="">
          <div class="features__card__text">
            <h4>Garantía</h4>
            <p>Garantía estándar de 2 años componentes, 10 acrílicos y 15 estructuras .</p>
          </div>
        </div>
        <div class="features__card">
          <img src="/dist/assets/icons/features-card--img (3).png" alt="">
          <div class="features__card__text">
            <h4>Servicio</h4>
            <p>Accede a una guía técnica sobre el mantenimiento de tu spa.</p>
          </div>
        </div>
        <div class="features__card">
          <img src="/dist/assets/icons/features-card--img (4).png" alt="">
          <div class="features__card__text">
            <h4>Consejos</h4>
            <p>Esté atento a las newsletters para disfrutar de las mejores recomendaciones de los productos de nuestra
              marca.</p>
          </div>
        </div>
        <div class="features__card">
          <img src="/dist/assets/icons/features-card--img (1).png" alt="">
          <div class="features__card__text">
            <h4>Premios</h4>
            <p>Oportunidad de ganar un spa robot valorado en 419 €.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- *****Form***** -->
  <form class="form-full bg-light mx-auto form-full-page-descargar-catalogo">
    <div class="register-form-header">
      <h3>Formulario de registro</h3>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span>Nombre*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span> Apellidos*</span>
        <input type="text">
      </label>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span> Teléfono*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span> Correo elecrónico*</span>
        <input type="text">
      </label>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span> Código postal*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100">
        <span>País*</span>
        <select class="form-full__select" id="opciones" name="opciones">
          <option value="opcion1">– Por favor, elija una opción –</option>
          <option value="opcion2">– Por favor, elija una opción –</option>
          <option value="opcion3">– Por favor, elija una opción –</option>
        </select>
      </label>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span> Empresa dónde compro su spa</span>
        <input type="text">
      </label>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span> Fecha de instalación</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span class="d-flex gap-2 align-items-center"> Número de serie*
          <div class="tooltip">
            <svg id="Componente_267_4" class="" data-name="Componente 267 – 4" xmlns="http://www.w3.org/2000/svg"
              width="18.04" height="18.041" viewBox="0 0 18.04 18.041">
              <g id="Grupo_11877" data-name="Grupo 11877">
                <g id="Grupo_11876" data-name="Grupo 11876">
                  <path id="Trazado_1015" data-name="Trazado 1015"
                    d="M9.02,0a9.021,9.021,0,1,0,9.02,9.021A9.015,9.015,0,0,0,9.02,0Zm0,16.632a7.611,7.611,0,1,1,7.611-7.611A7.607,7.607,0,0,1,9.02,16.632Z" />
                </g>
              </g>
              <g id="Grupo_11879" data-name="Grupo 11879" transform="translate(8.314 7.553)">
                <g id="Grupo_11878" data-name="Grupo 11878">
                  <path id="Trazado_1016" data-name="Trazado 1016"
                    d="M236.7,214.33a.7.7,0,0,0-.7.7v4.538a.7.7,0,1,0,1.409,0v-4.538A.7.7,0,0,0,236.7,214.33Z"
                    transform="translate(-236 -214.33)" />
                </g>
              </g>
              <g id="Grupo_11881" data-name="Grupo 11881" transform="translate(8.068 4.787)">
                <g id="Grupo_11880" data-name="Grupo 11880">
                  <ellipse id="Elipse_12" data-name="Elipse 12" cx="0.951" cy="0.951" rx="0.951" ry="0.951" />
                </g>
              </g>
            </svg>
            <div class="top">
              <img src="/dist/assets/img/tooltipimg.webp" alt="">
              <i></i>
            </div>
          </div>

        </span>
        <input type="text">
      </label>
    </div>
    <label class="d-flex flex-column w-100 pb-4">
      <span>Modelo de spa*</span>
      <select class="form-full__select" id="opciones" name="opciones">
        <option value="opcion1">– Por favor, elija una opción –</option>
        <option value="opcion2">– Por favor, elija una opción –</option>
        <option value="opcion3">– Por favor, elija una opción –</option>
      </select>
    </label>

    <label class="form-full__checkbox">

      <p><input type="checkbox" id="miCheckbox" name="miCheckbox">Acepto que Aquavia Spa, se pueda poner en contacto
        conmigo a través del correo electrónico con información, ofertas y promociones especiales personalizadas para
        los productos y servicios Aquavia Spa y para otras marcas asociadas a Aquavia Spa. Puedo retirar mi
        consentimiento en cualquier momento con efecto inmediato.</p>
    </label>

    <div class="mx-auto text-center form-full__terms">Este sitio está protegido por reCAPTCHA y se aplican la <a
        href="#"><b>política
          de privacidad</b></a> y los <a href="#"><b>términos de servicio</b></a> de Google.
    </div>


    <button type="button" class="btn-ficha">Enviar</button>

  </form>


  <script src="/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/dist/js/main.js"></script>
</body>

</html>
`

export const thanksPage1 = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/dist/css/main.css">
  <title>Registre su Spa</title>
</head>

<body>
  <!-- *****HERO******* -->
  <section class="banner banner--short">
    <div id="hero" class="banner__img">
      <img src="/dist/assets/img/registro-spa.webp" alt="">
    </div>
    <div class="banner__text">
      <h1>Registro de spa</h1>
    </div>
  </section>


  <!-- *****Thanks Section***** -->
  <section class="thanks bg-info">
    <div class="thanks__content">
        <svg xmlns="http://www.w3.org/2000/svg" width="94.611" height="69.387" viewBox="0 0 94.611 69.387">
            <path id="Trazado_2607" data-name="Trazado 2607" d="M232.655,185.561l-45.682,45.685-20.463-20.463a6.724,6.724,0,0,0-9.51,9.51l25.219,25.219a6.728,6.728,0,0,0,9.512,0l50.438-50.438a6.727,6.727,0,0,0-9.515-9.512Z" transform="translate(-152.28 -180.843)" stroke="#efede9" stroke-width="5.5"/>
          </svg>
          
        <div class="thanks__text">
            <h2>¡ Gracias por registrar su spa !</h2>
            <p>Le hemos enviado una confirmación del registro de su producto por correo electrónico.</p>
        </div>
    </div>
  </section>

  <section class="thanks__seguir">
    <a  class="link-arrow-grow" href="#">
        <span>Seguir navegando</span>
        <div class="d-flex align-items-center container-arrow">
            <div class="link__arrow"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
              <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494" transform="translate(-326.008 -160.675)">
                <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                  stroke-width="1" />
                <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                  stroke-width="1" />
              </g>
            </svg>
          </div>
        </a>
  </section>



  <script src="/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/dist/js/main.js"></script>
</body>

</html>
`