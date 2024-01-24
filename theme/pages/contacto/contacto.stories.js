export const contacto = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/dist/css/main.css" />
    <title>Contacto</title>
  </head>

  <body>
    <!-- *****HERO******* -->
    <section class="banner banner--short">
      <div id="hero" class="banner__img">
        <img
          src="/dist/assets/img/contacto-header.webp"
          alt="imagen de una chica en un spa"
        />
      </div>
      <div class="banner__text">
        <h1>Contacto</h1>
      </div>
    </section>

    <!-- *****Card-direction***** -->
    <div class="card-direction mx-auto">
      <img src="/dist/assets/icons/Logo.svg" alt="" />
      <div class="card-direction__container">
        <div class="card-direction__container__text">
          <h6>Offices and Production</h6>
          <p>Pol. Ind Av. Pla d’Urgell 2-8</p>
          <p>25200 Cervera, Lleida</p>
          <p>Telf: +34 973 533 795</p>
        </div>
        <div class="card-direction__container__text">
          <h6>Logistics Center</h6>
          <p>N- km. 516’8, Carrer Projecte II</p>
          <p>25200 Cervera, Lleida</p>
          <p>Telf: +34 973 533 795</p>
        </div>
      </div>
    </div>

    <!-- Filter -->
    <div class="prestaciones__filter max-w justify-content-evenly mx-auto mt-5">
      <a id="fil-1" class="link fw-medium text-15" checked>CONTACTO</a>
      <a id="fil-2" class="link fw-medium text-15">¿ QUIERE SER DISTRIBUIDOR ?</a>
    </div>
    <!-- *****Form***** -->
    <form
      id="form-contacto"
      class="form-full bg-light mx-auto form-full-page-contacto"
    >
      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span>Nombre*</span>
          <input type="text" />
        </label>
        <label class="d-flex flex-column w-100" for="">
          <span> Apellidos*</span>
          <input type="text" />
        </label>
      </div>
      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span> Teléfono*</span>
          <input type="text" />
        </label>
        <label class="d-flex flex-column w-100" for="">
          <span> Correo elecrónico*</span>
          <input type="text" />
        </label>
      </div>
      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span> Código postal*</span>
          <input type="text" />
        </label>
        <label class="d-flex flex-column w-100" for="">
          <span> Polación*</span>
          <input type="text" />
        </label>
      </div>

      <label class="d-flex flex-column w-100">
        <span>País*</span>
        <select class="form-full__select" id="opciones" name="opciones">
          <option value="opcion1">– Por favor, elija una opción –</option>
          <option value="opcion2">– Por favor, elija una opción –</option>
          <option value="opcion3">– Por favor, elija una opción –</option>
        </select>
      </label>

      <label class="d-flex flex-column w-100" for="comentario">
        <span>Mensaje*</span>
        <textarea
          class="form-full__textarea"
          id="comentario"
          name="comentario"
        ></textarea>
      </label>

      <label class="form-full__checkbox">
        <p>
          <input type="checkbox" id="miCheckbox" name="miCheckbox" />Al enviar
          el formulario, acepto que estoy de acuerdo con los
          <b>términos y condiciones.</b>
        </p>
      </label>

      <div class="mx-auto text-center form-full__terms">
        Este sitio está protegido por reCAPTCHA y se aplican la
        <a href="#"><b>política de privacidad</b></a> y los
        <a href="#"><b>términos de servicio</b></a> de Google.
      </div>

      <button type="button" class="btn-ficha">Enviar</button>
    </form>

    <form
      id="form-distribuidor"
      class="form-full bg-light mx-auto form-full-page-contacto"
      style="display: none"
    >
      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span>Nombre*</span>
          <input type="text" />
        </label>
        <label class="d-flex flex-column w-100" for="">
          <span> Apellidos*</span>
          <input type="text" />
        </label>
      </div>
      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span>Empresa*</span>
          <input type="text" />
        </label>
        <label class="d-flex flex-column w-100" for="">
          <span>Actividad empresarial*</span>
          <input type="text" />
        </label>
      </div>
      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span>Superfície comercial (en m2) *</span>
          <input type="text" />
        </label>
        <label class="d-flex flex-column w-100" for="">
          <span>Área geográfica del negocio *</span>
          <input type="text" />
        </label>
      </div>
      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span>Correo electrónico*</span>
          <input type="text" />
        </label>
        <label class="d-flex flex-column w-100" for="">
          <span>Población*</span>
          <input type="text" />
        </label>
      </div>

      <div class="form-full__container">
        <label class="d-flex flex-column w-100" for="">
          <span> Código postal*</span>
          <input type="text" />
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

      <label class="d-flex flex-column w-100" for="comentario">
        <span>Mensaje*</span>
        <textarea
          class="form-full__textarea"
          id="comentario"
          name="comentario"
        ></textarea>
      </label>

      <label class="form-full__checkbox">
        <p>
          <input type="checkbox" id="miCheckbox" name="miCheckbox" />Al enviar
          el formulario, acepto que estoy de acuerdo con los
          <b>términos y condiciones.</b>
        </p>
      </label>

      <div class="mx-auto text-center form-full__terms">
        Este sitio está protegido por reCAPTCHA y se aplican la
        <a href="#"><b>política de privacidad</b></a> y los
        <a href="#"><b>términos de servicio</b></a> de Google.
      </div>

      <button type="button" class="btn-ficha">Enviar</button>
    </form>

    //map
    
    <!-- *****Banner Contacto***** -->
    <style>
      .hero-cta-home2 {
          background-image: url('/dist/assets/img/banner-contacto.webp');
      }

      @media (min-width: 768px) {
          .hero-cta-home2 {
              background-image: url('/dist/assets/img/banner-contacto--lg.webp');
              background-position: right center;
          }
      }
  </style>
  <section class="hero-cta hero-cta--left hero-cta-home2 banner-contacto">
      <div class="hero-cta__text">
          <h1>¿ Alguna duda ? <span>Consulte nuestras FAQ</span></h1>
          <button type="button" class="btn-cta btn-cta--sm"><span>FAQ</span>
              <div class="d-flex align-items-center">
                  <div class="btn-cta__arrow"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="btn-cta__arrow-svg" data-name="Grupo 12494"
                          transform="translate(-326.008 -160.675)">
                          <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                              transform="translate(326.401 160.984)" stroke-width="1" />
                          <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                              transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                  </svg>
              </div>
          </button>
      </div>
      <div class="hero-cta__text--lg hero-cta__text--lg">
          <h1>¿ Alguna duda ? <span>Consulte nuestras FAQ</span></h1>
          <button type="button" class="btn-cta btn-cta--lg btn-banner-contacto"><span>FAQ</span>
              <div class="d-flex align-items-center">
                  <div class="btn-cta__arrow"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="btn-cta__arrow-svg" data-name="Grupo 12494"
                          transform="translate(-326.008 -160.675)">
                          <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                              transform="translate(326.401 160.984)" stroke-width="1" />
                          <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                              transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                  </svg>
              </div>
          </button>
      </div>
  </section>
    <script src="/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/dist/js/main.js"></script>
  </body>
</html>

`