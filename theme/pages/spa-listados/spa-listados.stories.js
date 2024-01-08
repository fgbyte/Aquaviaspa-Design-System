export const spaListados = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/css/main.css">
    <title>Home</title>
</head>

<body>
    <!-- *****HERO******* -->
    <section id="hero" class="banner">
        <div class="banner__img">
            <img src="/dist/assets/img/card-beneficios1.webp" alt="">
        </div>
        <div class="banner__text">
            <h1>Spas</h1>
            <h2>Spas de exterior e interior para cada uso y necesidad.</h2>
            <p>Todos nuestros spas son aptos para exterior e interior y reúnen la calidad y las prestaciones para ser
                considerados exclusivos dentro de su segmento en el mercado. En Aquavia Spa hemos diseñado diferentes
                categorías, como diferentes son los usuarios que quieren comprar un spa y las necesidades de su uso.
                Nuestra clara vocación es la de acercarnos a cada perfil de cliente y superar sus expectativas.</p>
        </div>
    </section>  

    <!-- *****Spas Grid******* -->
    <section class="spas-grid">
      <div class="dropdown-filters">
          <div class="dropdown">
              <a class="link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Capacidad
                  <span><img src="/dist/assets/icons/link-menu-arrow--lang-arrow.svg" alt=""></span>
              </a>
              <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">2-3</a></li>
                  <li><a class="dropdown-item" href="#">4-5</a></li>
                  <!-- <li>
                      <hr class="dropdown-divider">
                    </li> -->
                  <li><a class="dropdown-item" href="#">6-7*</a></li>
              </ul>
          </div>
          <div class="dropdown">
              <a class="link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Uso
                  <span><img src="/dist/assets/icons/link-menu-arrow--lang-arrow.svg" alt=""></span>
              </a>
              <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">2-3</a></li>
                  <li><a class="dropdown-item" href="#">4-5</a></li>
                  <!-- <li>
                      <hr class="dropdown-divider">
                    </li> -->
                  <li><a class="dropdown-item" href="#">6-7*</a></li>
              </ul>
          </div>
          <div class="dropdown">
              <a class="link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Instalación
                  <span><img src="/dist/assets/icons/link-menu-arrow--lang-arrow.svg" alt=""></span>
              </a>
              <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">2-3</a></li>
                  <li><a class="dropdown-item" href="#">4-5</a></li>
                  <!-- <li>
                          <hr class="dropdown-divider">
                        </li> -->
                  <li><a class="dropdown-item" href="#">6-7*</a></li>
              </ul>
          </div>
          <a class="link spas-grid__filter--link" href="#">Top Ventas</a>

      </div>

      <div class="spas-grid__cards">
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
          <a href="#" class="card-spa">
              <div class="card-spa__container">
                  <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
                  <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
              </div>
              <div class="card-spa__text">
                  <h3>Spa Nice</h3>
                  <div class="card-spa__details">
                      <div>
                          <p>216 x 216 - 5 plazas</p>
                          <p>Colección Premium Spa</p>
                      </div>
                      <div class="card-spa__details--price">
                          <p>$$</p>
                      </div>
                  </div>
              </div>
          </a>
      </div>
  </section>

    <!-- *****Footer***** -->
    <section class="footer-top">
        <article class="w-100 d-flex align-items-center justify-content-center flex-column gap-2">
          <div class="cont-img">
            <img src="/dist/assets/img/Catálogo-Aquavia-Spa.webp" alt="">
          </div>
          <h2>Catálogo Aquavia Spa</h2>
          <h4>Descarga nuestro catalogo</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam.</p>
          <button type="button" class="btn-ficha-home w-100 justify-content-center d-lg-none">Descargar</button>
    
          <a class="link-arrow-grow-white d-none d-lg-flex" href="#">
            <span>Descargue nuestro catalogo</span>
    
            <div class="d-flex align-items-center container-arrow-white">
              <div class="link__arrow-white"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                  transform="translate(-326.008 -160.675)">
                  <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                    stroke-width="1" />
                  <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                    stroke-width="1" />
                </g>
              </svg>
    
            </div>
          </a>
        </article>
        <article class="w-100 d-lg-flex align-items-center justify-content-center flex-column gap-2 d-none">
          <img class="mb-1" height="299" src="/dist/assets/img/Dónde-comprar-nuestros-spas.webp" alt="">
          <h3>¿Dónde comprar nuestros spas?</h3>
          <a class="link-arrow-grow" href="#">
            <span>Encuentre su distribuidor más cercano</span>
    
            <div class="d-flex align-items-center container-arrow">
              <div class="link__arrow"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                  transform="translate(-326.008 -160.675)">
                  <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                    stroke-width="1" />
                  <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                    stroke-width="1" />
                </g>
              </svg>
    
            </div>
          </a>
        </article>
      </section>
    
      <details class="dropdown-podemos margen-negative">
        <summary><span>¿Podemos ayudarle?</span></summary>
        <div class="details-inner">
          <form class="form-full-footer  px-4 py-5">
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
                <span> Correo electrónico*</span>
                <input type="text">
              </label>
            </div>
            <div class="form-full__container  ">
              <label class="d-flex flex-column w-100" for="">
                <span> Código postal*</span>
                <input type="text">
              </label>
              <label class="d-flex flex-column w-100" for="">
                <span> Población*</span>
                <input type="text">
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
              <textarea class="form-full__textarea" id="comentario" name="comentario"></textarea>
            </label>
    
            <label class="form-full__checkbox">
    
              <p><input type="checkbox" id="miCheckbox" name="miCheckbox">Al enviar el formulario, acepto que estoy
                de acuerdo con los <b>términos y condiciones.</b></p>
            </label>
    
            <div class="mx-auto text-center form-full__terms">Este sitio está protegido por reCAPTCHA y se aplican la <a
                href="#"><b>política
                  de privacidad</b></a> y los <a href="#"><b>términos de servicio</b></a> de Google.</div>
    
    
            <button type="button" class="btn-ficha-home px-5">Enviar</button>
    
          </form>
        </div>
      </details>
    
      <footer class="footer">
    
        <div class="d-flex flex-column flex-lg-row justify-content-lg-between mx-auto footer__content">
          <div class="w-100 order-lg-2 ">
            <a class="d-flex align-itmes-center gap-4" href="#">
              <img width="44" height="44" src="/dist/assets/icons/areadedestribuidores.svg" alt="icon">
              <p><b>Área de distribuidores</b></p>
            </a>
            <a class="d-flex align-itmes-center gap-4" href="#">
              <img width="44" height="44" src="/dist/assets/icons/registresuspa.svg" alt="icon">
              <p><b>Registre su spa</b></p>
            </a>
            <a class="d-flex align-itmes-center gap-4" href="#">
              <img width="44" height="44" src="/dist/assets/icons/faq.svg" alt="icon">
              <p><b>FAQ Preguntas frecuentes</b></p>
            </a>
            <a class="d-flex align-itmes-center gap-4" href="#">
              <img width="44" src="/dist/assets/icons/suscribase.svg" alt="icon">
              <p><b>Suscríbase a la newsletter de Aquavia para estar al día de todas las novedades</b></p>
            </a>
          </div>
          <div class="order-lg-3">
            <a href="#"><b>Blog</b></a>
            <a href="#"><b>Trabaja con nosotros</b></a>
            <a href="#"><b>Contacto</b></a>
            <img width="136" src="/dist/assets/img/logos-footer.png" alt="icon">
          </div>
          <div class="w-100 order-lg-1 ">
            <img height="30px" src="/dist/assets/icons/logofooter.svg" alt="logofooter icon">
            <p><b>Offices and Production</b> | Pol. Ind Av. Pla d’Urgell 2-8, 25200 Cervera, Lleida · Telf: +34 973 533 795
            </p>
            <p><b>Logistics Center</b> | N- km. 516’8, Carrer Projecte II, 25200 Cervera, Lleida · Telf: +34 973 533 795</p>
          </div>
        </div>
    
        <hr>
    
    
        <div class="footer-bootom pb-4 pt-1 text-center px-4 mx-auto ">
           
          <div>
            © 2023 Aquavia Spa. Todos los derechos reservados <div class="mx-2 d-inline">|</div> <a href="#"> Aviso legal
            </a>
            <div class="mx-2 d-inline">|</div> <a href="#">Política de
              privacidad</a>
            <div class="mx-2 d-inline">|</div> <a href="#">Política de cookies</a>
            <div class="mx-2 d-inline">|</div> <a href="#">Política de calidad</a>
            <div class="mx-2 d-inline">|</div> <a href="#">Condiciones generales</a>
          </div>
    
          <div class="d-none  gap-3 d-xl-flex align-itmes-center">
            <a href="#"><img width="23" src="/dist/assets/icons/youtube.svg" alt="youtube icon"></a>
            <a href="#"><img width="19" src="/dist/assets/icons/instagram.svg" alt="instagram icon"></a>
            <a href="#"><img width="8" src="/dist/assets/icons/facebook.svg" alt="facebook icon"></a>
          </div>
        </div>
    
    
      </footer>
    <script src="/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/dist/js/main.js"></script>
</body>

</html>
`