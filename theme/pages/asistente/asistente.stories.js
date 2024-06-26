export const asistente = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/css/main.css">
    <title>Asistente de Compra</title>
</head>

<body class="posts-page">
    <!-- *****Asistente******* -->
    <section class="asistente">
        <div id="asistente-1">
            <div class="asistente__container">
                <div class="asistente__container__header">
                    <h1>Asistente de Compra</h1>
                    <h2>¿Qué producto le interesa?</h2>
                    <p>Seleccione una opción</p>
                </div>
                <div class="asistente__container__cards">
                    <div class="asistente-input">
                        <input class="type-spa-selected-radio" type="radio" value="Spa residencial" id="asistente-input-1" name="asistente-spa"
                            style="background-image: url('/dist/assets/img/spa-residencial.webp');">
                            <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                            <label class="asistente-label" for="asistente-input-1">
                            <span>
                                Spa residencial
                            </span>
                        </label>
                    </div>
                    <div class="asistente-input">
                        <input class="type-spa-selected-radio" type="radio" value="Swimspa" id="asistente-input-2" name="asistente-spa"
                            style="background-image: url('/dist/assets/img/spa-residencial.webp');">
                            <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                            <label class="asistente-label" for="asistente-input-2">
                            <span>
                                Swimspa
                            </span>
                        </label>
                    </div>
                    <div class="asistente-input">
                        <input class="type-spa-selected-radio" type="radio" value="Spa profesional" id="asistente-input-3" name="asistente-spa"
                            style="background-image: url('/dist/assets/img/spa-residencial.webp');">
                            <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                            <label class="asistente-label" for="asistente-input-3">
                            <span>
                                Spa profesional
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div id="asistente-2" class="asistente-inner">
            <div class="asistente-inner__steps ">

                <span class="asistente-inner__steps--anterior">
                    <a id="asistente-anterior" class="link-arrow-grow-white-reverse link-back-asistente--lg d-none d-lg-flex">
                        <div class="d-flex align-items-center container-arrow-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                viewBox="0 0 9.026 20.162">
                                <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                                    transform="translate(-326.008 -160.675)">
                                    <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                                        transform="translate(326.401 160.984)" stroke-width="1" />
                                    <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                                        transform="translate(326.401 171.471)" stroke-width="1" />
                                </g>
                            </svg>
                            <div class="link__arrow-white"></div>
                        </div>
                        <span>Anterior</span>
                    </a>
                    <a id="asistente-anterior" class="link-back-asistente d-lg-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38.093" height="20.161"
                            viewBox="0 0 38.093 20.161">
                            <g id="Grupo_11958" data-name="Grupo 11958"
                                transform="translate(23.093 19.852) rotate(180)">
                                <line id="Línea_17" data-name="Línea 17" x2="37.7" transform="translate(-15 10.486)"
                                    fill="none" stroke="#fff" stroke-width="1" />
                                <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                                    transform="translate(14.46)" fill="none" stroke="#fff" stroke-width="1" />
                                <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                                    transform="translate(14.46 10.486)" fill="none" stroke="#fff" stroke-width="1" />
                            </g>
                        </svg>

                        <span>Anterior</span>
                    </a>
                </span>


                <div class="steps-block">
                    <div class="card-steps">

                        <div class="step-container">
                            <div class="step">
                                1
                            </div>
                            <div class="truncate">
                                <span class="dynamic-step"></span>
                            </div>
                        </div>

                        <svg class="step-divider" width="26px" height="3px" viewBox="0 0 26 3" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L25 1" id="Line" fill="none" fill-rule="evenodd" stroke="#A5A5A5"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>
                        <svg class="step-divider--lg" width="3px" height="47px" viewBox="0 0 3 47" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0L1 46" id="Line-2" fill="none" fill-rule="evenodd" stroke="#BDBDBD"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>


                        <div class="step-container">
                            <div class="step">
                                2
                            </div>
                            <div class="truncate">
                                <span class="dynamic-step"></span>
                            </div>
                        </div>
                        <svg class="step-divider" width="26px" height="3px" viewBox="0 0 26 3" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L25 1" id="Line" fill="none" fill-rule="evenodd" stroke="#A5A5A5"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>
                        <svg class="step-divider--lg" width="3px" height="47px" viewBox="0 0 3 47" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0L1 46" id="Line-2" fill="none" fill-rule="evenodd" stroke="#BDBDBD"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>
                        <div class="step-container">
                            <div class="step">
                                3
                            </div>
                            <div class="truncate">
                                <span class="dynamic-step"></span>
                            </div>
                        </div>
                        <svg class="step-divider" width="26px" height="3px" viewBox="0 0 26 3" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L25 1" id="Line" fill="none" fill-rule="evenodd" stroke="#A5A5A5"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>
                        <svg class="step-divider--lg" width="3px" height="47px" viewBox="0 0 3 47" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0L1 46" id="Line-2" fill="none" fill-rule="evenodd" stroke="#BDBDBD"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>
                        <div class="step-container">
                            <div class="step">
                                4
                            </div>
                            <div class="truncate">
                                <span class="dynamic-step"></span>
                            </div>
                        </div>
                        <svg class="step-divider" width="26px" height="3px" viewBox="0 0 26 3" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L25 1" id="Line" fill="none" fill-rule="evenodd" stroke="#A5A5A5"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>
                        <svg class="step-divider--lg" width="3px" height="47px" viewBox="0 0 3 47" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0L1 46" id="Line-2" fill="none" fill-rule="evenodd" stroke="#BDBDBD"
                                stroke-width="1" stroke-linecap="square" />
                        </svg>
                        <div class="step-container">
                            <div class="step">
                                5
                            </div>
                            <div class="truncate">
                                <span class="dynamic-step"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="asistente-inner-blocks">
                <div id="asistente-inner-1" class="asistente__container">
                    <div class="asistente__container__header">
                        <h1>ASISTENTE DE COMPRA / <span class="type-spa-selected"></span></h1>
                        <h2>1. ¿Cuantas personas lo van a utilizar?</h2>
                        <p>Seleccione una opción</p>
                    </div>
                    <div class="asistente__container__cards">
                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="2/3 personas" id="asistente-inner-1-input-1" name="asistente-personas"
                                style="background-image: url('/dist/assets/img/asist-1-1.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-1-input-1">
                                <span>
                                    2/3 personas
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="4/5 personas" id="asistente-inner-1-input-2" name="asistente-personas"
                                style="background-image: url('/dist/assets/img/asist-1-2.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-1-input-2">
                                <span>
                                    4/5 personas
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="6 personas" id="asistente-inner-1-input-3" name="asistente-personas"
                                style="background-image: url('/dist/assets/img/asist-1-3.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-1-input-3">
                                <span>
                                    6 personas
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="asistente-inner-2" class="asistente__container">
                    <div class="asistente__container__header">
                        <h1>ASISTENTE DE COMPRA / <span class="type-spa-selected"></span></h1>
                        <h2>2. ¿Qué le motiva a comprar un spa?</h2>
                        <p>Seleccione una opción</p>
                    </div>
                    <div class="asistente__container__cards">
                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="Producto de diseño" id="asistente-inner-2-input-1" name="asistente-motivo"
                                style="background-image: url('/dist/assets/img/asist-2-1.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-2-input-1">
                                <span>
                                    Producto de diseño
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="Uso terapéutico" id="asistente-inner-2-input-2" name="asistente-motivo"
                                style="background-image: url('/dist/assets/img/asist-2-2.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-2-input-2">
                                <span>
                                    Uso terapéutico
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="Diversión y entretenimento familiar" id="asistente-inner-2-input-3" name="asistente-motivo"
                                style="background-image: url('/dist/assets/img/asist-1-2.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-2-input-3">
                                <span>
                                    Diversión y entretenimento familiar
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="asistente-inner-3" class="asistente__container">
                    <div class="asistente__container__header">
                        <h1>ASISTENTE DE COMPRA / <span class="type-spa-selected"></span></h1>
                        <h2>3. ¿Cuántas posiciones estiradas quiere?</h2>
                        <p>Seleccione una opción</p>
                    </div>
                    <div class="asistente__container__cards">
                        <div class="asistente-input--inner asistente-input--logo">
                            <input class="asistente-radio" type="radio" value="Ninguna posición estirada, sólo asientos" id="asistente-inner-3-input-1" name="asistente-posiciones"
                                style="background-image: url('/dist/assets/icons/Logo.svg');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check--white.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-3-input-1">
                                <span>
                                    Ninguna posición estirada, sólo asientos
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner asistente-input--logo">
                            <input class="asistente-radio" type="radio" value="1 posición estirada" id="asistente-inner-3-input-2" name="asistente-posiciones"
                                style="background-image: url('/dist/assets/icons/Logo.svg');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check--white.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-3-input-2">
                                <span>
                                    1 posición estirada
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner asistente-input--logo">
                            <input class="asistente-radio" type="radio" value="2 posiciones estiradas" id="asistente-inner-3-input-3" name="asistente-posiciones"
                                style="background-image: url('/dist/assets/icons/Logo.svg');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check--white.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-3-input-3">
                                <span>
                                    2 posiciones estiradas
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="asistente-inner-4" class="asistente__container">
                    <div class="asistente__container__header">
                        <h1>ASISTENTE DE COMPRA / <span class="type-spa-selected"></span></h1>
                        <h2>4. ¿Qué tipo de instalación le gustaría para su spa?</h2>
                        <p>Seleccione una opción</p>
                    </div>
                    <div class="asistente__container__cards">
                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="Empotrado" id="asistente-inner-4-input-1" name="asistente-instalacion"
                                style="background-image: url('/dist/assets/img/asist-4-1.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-4-input-1">
                                <span>
                                    Empotrado
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="Semiempotrado" id="asistente-inner-4-input-2" name="asistente-instalacion"
                                style="background-image: url('/dist/assets/img/asist-2-1.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-4-input-2">
                                <span>
                                    Semiempotrado
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner">
                            <input class="asistente-radio" type="radio" value="Sobresuelo" id="asistente-inner-4-input-3" name="asistente-instalacion"
                                style="background-image: url('/dist/assets/img/asist-4-3.webp');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-4-input-3">
                                <span>
                                    Sobresuelo
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="asistente-inner-5" class="asistente__container">
                    <div class="asistente__container__header">
                        <h1>ASISTENTE DE COMPRA / <span class="type-spa-selected"></span></h1>
                        <h2>5. ¿Cuál es su presupuesto?</h2>
                        <p>Seleccione una opción</p>
                    </div>
                    <div class="asistente__container__cards">
                        <div class="asistente-input--inner asistente-input--logo">
                            <input class="asistente-radio" type="radio" value="< 12.000€" id="asistente-inner-5-input-1" name="asistente-presupuesto"
                                style="background-image: url('/dist/assets/icons/Logo.svg');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check--white.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-5-input-1">
                                <span>
                                    < 12.000€ </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner asistente-input--logo">
                            <input class="asistente-radio" type="radio" value="Entre 12.000 y 18.000€" id="asistente-inner-5-input-2" name="asistente-presupuesto"
                                style="background-image: url('/dist/assets/icons/Logo.svg');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check--white.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-5-input-2">
                                <span>
                                    Entre 12.000 y 18.000€
                                </span>
                            </label>
                        </div>

                        <div class="asistente-input--inner asistente-input--logo">
                            <input class="asistente-radio" type="radio" value="> 18.000€" id="asistente-inner-5-input-3" name="asistente-presupuesto"
                                style="background-image: url('/dist/assets/icons/Logo.svg');">
                                <img class="asistente-check" src="/dist/assets/icons/card-option__container__check--white.svg" alt="check">
                                <label class="asistente-label" for="asistente-inner-5-input-3">
                                <span>
                                    > 18.000€
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="asistente-inner-6" class="asistente__container">
                    <div class="asistente__container__header">
                        <h1>ASISTENTE DE COMPRA / <span class="type-spa-selected"></span></h1>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div class="asistente__container__cards">
                        <div class="asistente-selection">
                            <div class="asistente-selection__content">
                                <img src="/dist/assets/icons/Logo.svg" alt="logo">
                                <a id="asistente-last-btn" class="link-arrow-grow  asistente-selection-button mx-auto" href="#">
                                    <span>Vea su selección</span>
                              
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <script src="/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/dist/js/main.js"></script>
</body>

</html>
`