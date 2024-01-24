export const pedirPresupuesto = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/dist/css/main.css">
  <title>Pedir Presupuesto</title>
</head>

<body>
  <!-- *****HERO******* -->
  <section class="banner banner--short">
    <div id="hero" class="banner__img">
      <img src="/dist/assets/img/hero-presupuesto.webp" alt="">
    </div>
    <div class="banner__text">
      <h1>Presupuesto Spas</h1>
    </div>
  </section>

  <!-- *****Form***** -->
  <form class="form-full bg-light mx-auto form-full-page-pedir-presupuesto">

    <div class="form-top__header">
      <h2>¿ Pensando en comprar un Spa ?</h2>
      <p>Si quiere saber el precio de un spa de Aquavia Spa, solicite presupuesto sin compromiso rellenando el siguiente
        formulario.</p>
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
        <span>Empresa*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span>Teléfono*</span>
        <input type="text">
      </label>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span>Correo elecrónico*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span>Polación*</span>
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
        <span> ¿Que presupuesto orientativo tiene?*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100">
        <span>¿Cuando le gustaría instalar el spa?*</span>
        <select class="form-full__select" id="opciones" name="opciones">
          <option value="opcion1">– Por favor, elija una opción –</option>
          <option value="opcion2">– Por favor, elija una opción –</option>
          <option value="opcion3">– Por favor, elija una opción –</option>
        </select>
      </label>
    </div>

    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span> ¿Que spa le interesa?*</span>
        <input type="text">
      </label>
    </div>
    <label class="d-flex flex-column w-100" for="comentario">
      <span>Mensaje*</span>
      <textarea class="form-full__textarea" id="comentario" name="comentario"></textarea>
    </label>

    <label class="form-full__checkbox">

      <p><input type="checkbox" id="miCheckbox" name="miCheckbox">Al enviar el formulario, acepto que estoy
        de acuerdo con los <b>términos y condiciones.</b></p>
    </label>

    <div class="mx-auto text-center form-full__terms">Este sitio está protegido por reCAPTCHA y se aplican la <a
        href="#"><b>política
          de privacidad</b></a> y los <a href="#"><b>términos de servicio</b></a> de Google.</div>


    <button type="button" class="btn-ficha">Enviar</button>

  </form>


  <script src="/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/dist/js/main.js"></script>
</body>

</html>
`