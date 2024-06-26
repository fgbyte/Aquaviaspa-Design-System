//prestaciones
export const prestaciones = `
<section class="prestaciones">
    <h3>PRESTACIONES</h3>
    <div class="prestaciones__filter">
      <a id="fil-1" class="link" checked>INGENIERÍA Y FABRICACIÓN</a>
      <a id="fil-2" class="link">DISEÑO</a>
      <a id="fil-3" class="link">CALIDAD DEL AGUA</a>
      <a id="fil-4" class="link">BIENESTAR</a>
      <a id="fil-5" class="link">EFICIENCIA Y MEDIO AMBIENTE</a>
    </div>

    <div class="prestaciones__categories">
      <!-- category-1 -->
      <div id="category-1" class="category">
        <div class="card-prestacion-menu">
          <div class="card-prestacion-menu__container">
            <div class="card-prestacion-menu__text">
              <h4>Ingeniería y fabricación</h4>
              <p>Prestaciones que nos diferencian como una firma innovadora de spas y swimspas, líder en
                desarrollo y
                producción propia.</p>
            </div>
            <div class="card-prestacion-menu__links">
              <!-- link1 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-1">Aurora</span>
              </a>
              <!-- link2 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-2">Made in Europe</span>
              </a>
              <!-- link3 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-3">Metallic Structure</span>
              </a>
            </div>
          </div>
        </div>

        <!-- CARDS SM -> SLIDER, LG -> TABS -->
        <div class="prestaciones-cards">
          <div id="prest-1" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-prestacion.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-mobleaurora.svg" alt="logo-mobleaurora">
              </div>
              <div class="card-prestacion__text">
                <p>Experimenta más allá del agua, deja que el tacto invada tus sentidos de principio a
                  fin.
                  <span>El mueble
                    Aurora, es una propuesta innovadora, sensorial y sostenible. Esta vez nuestra
                    experiencia empieza desde el
                    exterior, con un mueble que despierta todos tus sentidos.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-2" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-prestacion2.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-ue.svg" alt="logo-mobleaurora">
              </div>
              <div class="card-prestacion__text">
                <p>Diseñado y producido exclusivamente en Europa, con la máxima certificación de
                  calidad.<span>Ante la tendencia deslocalizadora de la producción, Aquavia Spa ha
                    apostado por mantener la producción propia, desde Cervera (70 Km de Barcelona),
                    de
                    todos nuestros spas, piscinas contracorriente y cada uno de sus
                    componentes.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-3" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-metalic.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-metalic.svg" alt="logo-mobleaurora">
              </div>
              <div class="card-prestacion__text">
                <p>Estructuras robustas que aseguran una larga vida del producto.<span>Es una de las
                    claves
                    de la durabilidad de nuestros spas. Se trata de una estructura metálica sometida
                    a
                    un tratamiento anticorrosión que soporta todo el peso del spa y le aporta
                    robustez
                    para evitar cualquier deformación.</span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="guias-prestaciones-cards">
          <div data-index="0" class="controls-prestaciones-cards"></div>
          <div data-index="1" class="controls-prestaciones-cards"></div>
          <div data-index="2" class="controls-prestaciones-cards"></div>
        </div>
      </div>

      <!-- category-2 -->
      <div id="category-2" class="category">
        <div class="card-prestacion-menu">
          <div class="card-prestacion-menu__container">
            <div class="card-prestacion-menu__text">
              <h4>Diseño</h4>
              <p>Acabados de extraordinario valor añadido que nos posicionan en la vanguardia del diseño
                de
                spas.</p>
            </div>
            <div class="card-prestacion-menu__links">
              <!-- link1 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-1">Barcelona Design</span>
              </a>
              <!-- link2 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-2">Woodermax</span>
              </a>
              <!-- link3 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-3">Pure Line Lighting</span>
              </a>
            </div>
          </div>
        </div>

        <!-- CARDS SM -> SLIDER, LG -> TABS -->
        <div class="prestaciones-cards">
          <div id="prest-1" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-barcelona-design.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-bcn-desing.svg" alt="logo-bcn">
              </div>
              <div class="card-prestacion__text">
                <p>La fuerte influencia de una de las ciudades más creativas del mundo. <span>Barcelona
                    es
                    una de las ciudades mundiales del diseño. Su carácter cosmopolita y su tradición
                    creativa la convierten en una de las cunas de grandes tendencias a nivel
                    internacional y en uno de los polos de innovación en Europa.</span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-2" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-woodermax.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-woodermax.svg" alt="logo-woodermax">
              </div>
              <div class="card-prestacion__text">
                <p>Mobiliario sin tornillos, con cómodo mecanismo de apertura para
                  manipulación.<span>Woodermax es un mueble de spa elegante y exclusivo de Aquavia Spa
                    con
                    un sistema de sujeción de lamas que elimina totalmente los tornillos y consigue
                    una
                    estética única.</span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-3" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-line.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-line.svg" alt="logo-line">
              </div>
              <div class="card-prestacion__text">
                <p>Iluminación LED de alta calidad en la franja perimetral central del spa. <span>Pure
                    Line
                    Lighting cambia el look del spa, y con él la estética de todo el espacio donde
                    va
                    instalado. Se trata de un sistema de iluminación LED policromática en toda la
                    franja
                    perimetral exterior de algunos de los spa de la gama Exclusive y Premium.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="guias-prestaciones-cards">
          <div data-index="0" class="controls-prestaciones-cards"></div>
          <div data-index="1" class="controls-prestaciones-cards"></div>
          <div data-index="2" class="controls-prestaciones-cards"></div>
        </div>
      </div>

      <!-- category-3 -->
      <div id="category-3" class="category">
        <div class="card-prestacion-menu">
          <div class="card-prestacion-menu__container">
            <div class="card-prestacion-menu__text">
              <h4>Calidad del agua</h4>
              <p>Nuestro compromiso con la salud va absolutamente vinculado a un agua de impecable calidad
                dentro del spa.</p>
            </div>
            <div class="card-prestacion-menu__links">
              <!-- link1 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-1">Blue connect Plus</span>
              </a>
              <!-- link2 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-2">High Performance Water Care</span>
              </a>
              <!-- link3 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-3">Ultraviolet Treatment</span>
              </a>
              <!-- link4 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-4">Clean Water</span>
              </a>
            </div>
          </div>
        </div>

        <!-- CARDS SM -> SLIDER, LG -> TABS -->
        <div class="prestaciones-cards">
          <div id="prest-1" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-blue-connect.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-blue-connect.svg" alt="logo-blue-connect">
              </div>
              <div class="card-prestacion__text">
                <p>Analiza la calidad del agua y te indica los productos químicos para su spa.
                  <span>Controle su spa esté donde esté gracias al analizador de agua de spa conectado
                    y su aplicación gratuita Blue connect Plus. Analizador inteligente para el spa.
                    La solución para monitorear, cuidar y disfrutar del spa. </span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-2" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-high-performance.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-high-performance.svg" alt="logo-woodermax">
              </div>
              <div class="card-prestacion__text">
                <p>Filtrado de alto rendimiento a presión. <span>Mediante el sistema de alto rendimiento
                    High Performance Water Care, el spa recoge el agua y la introduce a alta presión
                    en el filtro.</span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-3" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-ultraviolet.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-ultraviolet.svg" alt="logo-ultraviolet">
              </div>
              <div class="card-prestacion__text">
                <p>Agua nítida, sin olores y sin irritaciones. <span>Ultraviolet Treatment minimiza la
                    utilización de productos químicos para la desinfección del agua y mantiene el
                    spa siempre nítido, transparente, además de fresco y saludable.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-4" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-clean-water.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-clean-water.svg" alt="logo-clean-water">
              </div>
              <div class="card-prestacion__text">
                <p>Inyección de ozono para una filtración perfecta. <span>Clean Water es una solución
                    sencilla y básica, sin necesidad de mantenimiento, que consiste en la
                    introducción de ozono (O3) en el agua a través del propio sistema de filtración
                    del spa.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="guias-prestaciones-cards">
          <div data-index="0" class="controls-prestaciones-cards"></div>
          <div data-index="1" class="controls-prestaciones-cards"></div>
          <div data-index="2" class="controls-prestaciones-cards"></div>
          <div data-index="2" class="controls-prestaciones-cards"></div>
        </div>
      </div>

      <!-- category-4 -->
      <div id="category-4" class="category">
        <div class="card-prestacion-menu">
          <div class="card-prestacion-menu__container">
            <div class="card-prestacion-menu__text">
              <h4>Bienestar</h4>
              <p>Spas con detalles que convierten el bienestar en una sensación absolutamente envolvente e
                integral.</p>
            </div>
            <div class="card-prestacion-menu__links">
              <!-- link1 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-1">Colour Sense</span>
              </a>
              <!-- link2 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-2">Aromatherapy</span>
              </a>
              <!-- link3 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-3">Relax Impact System</span>
              </a>
              <!-- link4 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-4">Wifi Touch Panel</span>
              </a>
              <!-- link5 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-5">Surround Bluetooth Audio</span>
              </a>
            </div>
          </div>
        </div>

        <!-- CARDS SM -> SLIDER, LG -> TABS -->
        <div class="prestaciones-cards">
          <div id="prest-1" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-colour-sense.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-colour-sense.svg" alt="logo-colour-sense">
              </div>
              <div class="card-prestacion__text">
                <p>Cromoterapia para la mejora del bienestar y la salud.<span>Colour Sense convierte el
                    spa en un auténtico centro de cromoterapia, la terapia wellness basada en los
                    efectos positivos del color para la salud y la calidad de vida de las
                    personas.</span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-2" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-aromatherapy.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-aromatherapy.svg" alt="logo-aromatherapy">
              </div>
              <div class="card-prestacion__text">
                <p>Aromas que personalizan el ambiente y amplifican el bienestar. <span>Aromatherapy
                    incorpora agradables fragancias a las burbujas de aire del spa, elevando el
                    momento del hidromasaje y amplificando su sentido holístico.</span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-3" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-relax.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-relax.svg" alt="logo-relax">
              </div>
              <div class="card-prestacion__text">
                <p>Inyección adicional de burbujas calientes y envolventes en piernas y glúteos.
                  <span>Relax Impact System es el complemento perfecto para el masaje global e
                    integral que persiguen les spas de Aquavia Spa.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-4" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-wifi.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-wifi.svg" alt="logo-wifi">
              </div>
              <div class="card-prestacion__text">
                <p>Control remoto de todas las funciones del spa desde cualquier sitio. <span>Imagínese
                    poder controlar su spa desde el móvil, desde el trabajo, cuando va de camino a
                    casa para que al llegar todo esté a punto.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-5" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-surround.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-surround.svg" alt="logo-surround">
              </div>
              <div class="card-prestacion__text">
                <p>Equipo de sonido envolvente de alta calidad controlado desde el móvil. <span>Escucha
                    tu música mientras te relajas en el spa, gracias a un equipo de sonido de alta
                    calidad conectado a tu dispositivo móvil sin cables, a distancia, vía Bluetooth.
                  </span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="guias-prestaciones-cards">
          <div data-index="0" class="controls-prestaciones-cards"></div>
          <div data-index="1" class="controls-prestaciones-cards"></div>
          <div data-index="2" class="controls-prestaciones-cards"></div>
          <div data-index="3" class="controls-prestaciones-cards"></div>
          <div data-index="4" class="controls-prestaciones-cards"></div>
        </div>
      </div>

      <!-- category-5 -->
      <div id="category-5" class="category">
        <div class="card-prestacion-menu">
          <div class="card-prestacion-menu__container">
            <div class="card-prestacion-menu__text">
              <h4>Eficiencia y medio ambiente</h4>
              <p>Sistemas que ahorran costes en su spa y benefician al planeta.</p>
            </div>
            <div class="card-prestacion-menu__links">
              <!-- link1 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-1">EcoSpa</span>
              </a>
              <!-- link2 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-2">Nordic Insulation System</span>
              </a>
              <!-- link3 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-3">Silent Pump</span>
              </a>
              <!-- link4 -->
              <a class="link-arrow-grow-white-reverse">
                <div class="d-flex align-items-center container-arrow-white">
                  <div class="link__arrow-white"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                    <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                      transform="translate(-326.008 -160.675)">
                      <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                        transform="translate(326.401 160.984)" stroke-width="1" />
                      <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                        transform="translate(326.401 171.471)" stroke-width="1" />
                    </g>
                  </svg>
                </div>
                <span id="pr-4">Energy Saving Cover</span>
              </a>
            </div>
          </div>
        </div>

        <!-- CARDS SM -> SLIDER, LG -> TABS -->
        <div class="prestaciones-cards">
          <div id="prest-1" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-ecospa.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-ecospa.svg" alt="logo-ecospa">
              </div>
              <div class="card-prestacion__text">
                <p>Aislante de gran eficiencia energética.<span>Todos los spas de Aquavia Spa incorporan
                    opcionalmente el sistema de aislamiento EcoSpa, compuesto por varias capas de
                    espuma de poliuretano de alta densidad y que permite preservar la temperatura
                    del agua con un 69% de ahorro energético incluso a temperaturas extremas de
                    -15ºC.</span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-2" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-nordic.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-nordic.svg" alt="logo-nordic">
              </div>
              <div class="card-prestacion__text">
                <p>Ahorro energético insuperable en temperaturas extremadamente frías. <span>El sistema
                    Nordic Insulation System es un sistema de aislamiento que permite mejorar la
                    eficiencia energética del spa. Pensado para países con una temperatura
                    extremadamente fría. </span></p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-3" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-silent.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-silent.png" alt="logo-silent">
              </div>
              <div class="card-prestacion__text">
                <p>Filtración silenciosa, económica e independiente para una agua cristalina en todo
                  momento.
                  <span>No hace falta esperar a la noche para filtrar el agua de su spa. Silent Pump
                    es el sistema de filtración más silencioso y, a la vez, de menor consumo del
                    mercado.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="prest-4" style="display: block;" class="card-prestacion">
            <div class="card-prestacion__container">
              <img src="/dist/assets/img/card-energy.webp" alt="">
            </div>
            <div class="card-prestacion__sub">
              <div class="card-prestacion__img">
                <img src="/dist/assets/icons/logo-energy.svg" alt="logo-energy">
              </div>
              <div class="card-prestacion__text">
                <p>Cubierta perfeccionada para conservar la temperatura y la calidad del agua. <span>No
                    es una cubierta de spa cualquiera. Energy Saving Cover es el resultado de
                    sucesivas mejoras en la cubierta de nuestros spas para reducir a la mínima
                    expresión las fugas térmicas y la evaporación del agua.</span>
                </p>
                <a class="card-prestacion__text-plus" href="#">
                  <img src="/dist/assets/icons/card-accesorios__text-plus.svg" alt="">
                </a>
                <a class="link-arrow-grow" href="#">
                  <span>Ir al Blog</span>
                  <div class="d-flex align-items-center container-arrow">
                    <div class="link__arrow"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                      <g id="Grupo_12494" class="link__arrow-svg" data-name="Grupo 12494"
                        transform="translate(-326.008 -160.675)">
                        <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486"
                          transform="translate(326.401 160.984)" stroke-width="1" />
                        <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24"
                          transform="translate(326.401 171.471)" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="guias-prestaciones-cards">
          <div data-index="0" class="controls-prestaciones-cards"></div>
          <div data-index="1" class="controls-prestaciones-cards"></div>
          <div data-index="2" class="controls-prestaciones-cards"></div>
          <div data-index="3" class="controls-prestaciones-cards"></div>
        </div>
      </div>

    </div>
  </section>
  <script src="/dist/js/main.js"></script>
`