export const home = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/css/main.css">
    <title>Home</title>
</head>

<body>
    <!-- Navbar -->
    <header id="navbar" class="header-navbar">
        <nav class="header-navbar__nav ">
            <div>
                <img class="menu-burger" width="30" src="/dist/assets/icons/menu-closed-whait.svg"
                    alt="menu like a burger">

                <img id="navlogo" class="logo" src="/dist/assets/icons/logo-navbar.svg" alt="Logotipo de la empresa">
            </div>
            <ul>
                <li><a class="link link--white menu-burger">PRODUCTOS</a></li>
                <li><a class="link link--white" href="#">DÓNDE COMPRAR</a></li>
                <li><a class="link link--white" href="#">ASISTENTE DE COMPRA</a></li>
                <li><a class="link link--white" href="#">PEDIR PRESUPUESTO</a></li>
            </ul>
        </nav>

        <div class="menuBackdrop "></div>

        <menu class="left-menu main-menu">
            <div class="left-menu__header">
                <img class="close-menu" src="/dist/assets/icons/close-menu.svg" alt="icono para cerrar el menu">
                <img class="logo" src="/dist/assets/icons/logofooter.svg" alt="Logotipo de la empresa">
            </div>
            <div class="other-menu">

                <a id="spas" class="link-menu-arrow">
                    Spas
                    <span><img src="/dist/assets/icons/link-menu-arrow.svg" alt=""></span>
                </a>
                <a id="swimspas" class="link-menu-arrow">
                    Swimspas
                    <span><img src="/dist/assets/icons/link-menu-arrow.svg" alt=""></span>
                </a>
                <a id="prestaciones" class="link-menu-arrow">
                    Prestaciones
                    <span><img src="/dist/assets/icons/link-menu-arrow.svg" alt=""></span>
                </a>

            </div>
            <div class="other-menu-mid">
                <a class="link-menu link-menu--upper" href="#">ASISTENTE DE COMPRA</a>
                <a class="link-menu link-menu--upper" href="#">PEDIR PRESUPUESTO</a>
            </div>
            <div class="other-menu gap-4">
                <a class="link-menu" href="#">La marca Aquavia</a>
                <a class="link-menu" href="#">Dónde comprar</a>
                <a class="link-menu" href="#">Descargar catálogo</a>

                <a class="link-menu d-block d-lg-none" href="#">Área de distribuidores</a>
                <a class="link-menu d-block d-lg-none" href="#">Registre su spa</a>
                <a class="link-menu d-block d-lg-none" href="#">FAQ <br> Preguntas frecuentes</a>
                <a class="link-menu d-block d-lg-none" href="#">Suscribase a la newsletter de <br> Aquavia para estar al día de <br>
                  todas las novedades</a>
                <a class="link-menu d-block d-lg-none" href="#">Blog</a>
                <a class="link-menu d-block d-lg-none" href="#">Trabaja con nosotros</a>
                <a class="link-menu d-block d-lg-none" href="#">Contacto</a>
            </div>
            <div class="last-other-menu">
                <div class="dropdown dropdown-lang">
                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        España
                        <img src="/dist/assets/icons/link-menu-arrow--lang-arrow.svg">
                    </a>
                    <ul class="dropdown-menu dropdown-menu__lang">
                        <li><a class="dropdown-item" href="#">United Kingdom</a></li>
                        <li><a class="dropdown-item" href="#">France</a></li>
                        <li><a class="dropdown-item" href="#">Belgique</a></li>
                        <li><a class="dropdown-item" href="#">Deutschland</a></li>
                        <li><a class="dropdown-item" href="#">Italia</a></li>
                        <li><a class="dropdown-item" href="#">Nederland</a></li>
                        <li><a class="dropdown-item" href="#">Global (English)</a></li>
                        <li><a class="dropdown-item" href="#">Global (Français)</a></li>
                    </ul>
                </div>
            </div>

        </menu>

        <menu class="left-menu spas-menu">
            <div class="secundary-menu__header">
                <div>
                    <img class="previous-menu" src="/dist/assets/icons/previous-arrow.svg"
                        alt="icono de regresar al menu principal">
                    <img class="close-menu" src="/dist/assets/icons/close-menu.svg" alt="close menu">
                </div>
                <h3>Spas</h3>
            </div>

            <div class="accordion-other-menu ">

                <a class="link-menu-arrow link-menu-arrow--upper accordion-menu">
                    CAPACIDAD
                    <span><img class="accordion-img" src="/dist/assets/icons/link-menu-arrow.svg" alt=""></span>
                </a>

                <div class="show-content-menu">
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-capacidad-1.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">2-3</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-capacidad-2.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">4-5</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-capacidad-3.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">6-7</div>
                    </a>
                </div>

                <a class="link-menu-arrow link-menu-arrow--upper accordion-menu">
                    USO
                    <span><img class="accordion-img" src="/dist/assets/icons/link-menu-arrow.svg" alt=""></span>
                </a>

                <div class="show-content-menu">
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-uso-1.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">DECORATIVO</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-uso-2.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">TERAPÉUTICO</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-uso-3.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">ENTRETENIMIENTO</div>
                    </a>
                </div>

                <a class="link-menu-arrow link-menu-arrow--upper accordion-menu">
                    INSTALACIÓN
                    <span><img class="accordion-img" src="/dist/assets/icons/link-menu-arrow.svg" alt=""></span>
                </a>
                <div class="show-content-menu">
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-instalacion-1.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">EXTERIOR</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-instalacion-2.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">INTERIOR</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-instalacion-3.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">CON MUEBLE</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-instalacion-4.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">EMPOTRADO</div>
                    </a>
                </div>

            </div>

            <div class="last-other-menu">
                <a class="link-menu" href="#">Top ventas</a>
                <a class="link-menu" href="#">Todas</a>
            </div>
        </menu>

        <menu class="left-menu swimspas-menu">
            <div class="secundary-menu__header">
                <div>
                    <img class="previous-menu" src="/dist/assets/icons/previous-arrow.svg"
                        alt="icono de regresar al menu principal">
                    <img class="close-menu" src="/dist/assets/icons/close-menu.svg" alt="close menu">
                </div>
                <h3>Swimspas</h3>
            </div>

            <div class="accordion-other-menu">
                <a class="link-menu-arrow link-menu-arrow--upper accordion-menu">
                    INSTALACIÓN
                    <span><img class="accordion-img" src="/dist/assets/icons/link-menu-arrow.svg" alt=""></span>
                </a>
                <div class="show-content-menu">
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-uso-1.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">CON MUEBLE</div>
                    </a>
                    <a href="#" class="card-menu-filters">
                        <div style="background-image: url('/dist/assets/img/menu-spas-uso-1.webp');"
                            class="card-menu-filters__img">
                        </div>
                        <div class="card-menu-filters__span">EMPOTRADOS</div>
                    </a>
                </div>
            </div>

            <div class="last-other-menu">
                <a class="link-menu" href="#">Top ventas</a>
                <a class="link-menu" href="#">Todas</a>
            </div>
        </menu>


        <menu class="left-menu prestaciones-menu">
            <div class="secundary-menu__header">
                <div>
                    <img class="previous-menu" src="/dist/assets/icons/previous-arrow.svg"
                        alt="icono de regresar al menu principal">
                    <img class="close-menu" src="/dist/assets/icons/close-menu.svg" alt="close menu">
                </div>
                <h3>Prestaciones</h3>
            </div>

            <div class="other-menu-mid ">
                <a class="link-menu link-menu--upper font-size-16" href="#">INGENIERÍA Y FABRICACIÓN</a>
                <a class="link-menu link-menu--upper font-size-16" href="#">DISEÑO</a>
                <a class="link-menu link-menu--upper font-size-16" href="#">CALIDAD DEL AGUA</a>
                <a class="link-menu link-menu--upper font-size-16" href="#">BIENESTAR</a>
                <a class="link-menu link-menu--upper font-size-16" href="#">EFICIENCIA Y MEDIOAMBIENTE</a>
            </div>

            <div class="last-other-menu">
                <a class="link-menu" href="#">Todas</a>
            </div>
        </menu>
    </header>

    <!-- ********Banner Hero******** -->
    <style>
        .hero-cta-home {
            background-image: url(/dist/assets/img/hero-cta-home--sm.webp);
        }

        @media (min-width: 992px) {
            .hero-cta-home {
                background-image: url(/dist/assets/img/hero-cta-home--lg.webp);
            }
        }
    </style>
    <section id="hero" class="hero-cta hero-cta-home">
        <div class="hero-cta__text">
            <h1>Creating <span>Sensations</span></h1>
            <button type="button" class="btn-cta btn-cta--sm"><span>DESCÚBRA NUESTROS SPAS</span>
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
        <div class="hero-cta__text--lg">
            <h1>Creating <span>Sensations</span></h1>
            <button type="button" class="btn-cta btn-cta--lg"><span>DESCÚBRA NUESTROS SPAS</span>
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


    <!-- *****Intro***** -->
    <section class="intro">
        <div class="intro__container">
            <div class="intro__container__text">
                <blockquote>Aquavia Spa, <span>líder europeo en la fabricación de spas y swimspas</span></blockquote>
                <p>Diseño, innovación y absoluta garantía de calidad son tres de los ejes principales asociados a Aquavia Spa, una marca con más de 35 años de exitosa trayectoria durante la cual ha mantenido su apuesta por la fabricación propia.
                    En Aquavia Spa conceptualizamos, diseñamos, producimos y comercializamos spas y swimspas para uso privado y público.
                    Nuestra marca se ha convertido en una referencia internacional gracias a la innovación constante, el control minucioso y el diseño centrado en la experiencia de usuario.
                    </p>
            </div>
            <div class="intro__container__img">
                <img src="/dist/assets/img/intro-home.png" alt="Made in Europe">
            </div>
        </div>
    </section>

    <!-- *****Transform***** -->
    <section class="transform-module d-lg-flex position-relative">
        <article id="card-transform" class="card-transform"
            style="background-image: url('/dist/assets/img/card-transform.webp');">
            <div class="card-transform__card-inside">
                <img class="card-transform__card-inside--img" src="/dist/assets/icons/Logo.svg" alt="Logo">
                <h3>Spas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.</p>
                <a class="link-arrow-grow-white" href="#">
                    <span>Descúbra nuestros spas</span>
                    <div class="d-flex align-items-center container-arrow-white">
                        <div class="link__arrow-white"></div>
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
                    </div>
                </a>
            </div>
        </article>

        <article class="card-transform-right"
            style="background-image: url('/dist/assets/img/card-transform-rigth2.webp');">
            <div class="card-transform__card-inside">
                <img class="card-transform__card-inside--img" src="/dist/assets/icons/Logo.svg" alt="Logo">
                <h3>Swimspas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.</p>
                <a class="link-arrow-grow-white" href="#">
                    <span>Descúbra nuestros swimspas</span>
                    <div class="d-flex align-items-center container-arrow-white">
                        <div class="link__arrow-white"></div>
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
                    </div>
                </a>
            </div>
        </article>
    </section>


    <!-- *****Prestaciones***** -->
    <div class="bg-info py-88">
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
                                    </div>
                                    <span id="pr-1">Aurora</span>
                                </a>
                                <!-- link2 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-2">Made in Europe</span>
                                </a>
                                <!-- link3 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                    </div>
                                    <span id="pr-1">Barcelona Design</span>
                                </a>
                                <!-- link2 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-2">Woodermax</span>
                                </a>
                                <!-- link3 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                    </div>
                                    <span id="pr-1">Blue connect Plus</span>
                                </a>
                                <!-- link2 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-2">High Performance Water Care</span>
                                </a>
                                <!-- link3 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-3">Ultraviolet Treatment</span>
                                </a>
                                <!-- link4 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                    </div>
                                    <span id="pr-1">Colour Sense</span>
                                </a>
                                <!-- link2 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-2">Aromatherapy</span>
                                </a>
                                <!-- link3 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-3">Relax Impact System</span>
                                </a>
                                <!-- link4 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-4">Wifi Touch Panel</span>
                                </a>
                                <!-- link5 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                    </div>
                                    <span id="pr-1">EcoSpa</span>
                                </a>
                                <!-- link2 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-2">Nordic Insulation System</span>
                                </a>
                                <!-- link3 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                    </div>
                                    <span id="pr-3">Silent Pump</span>
                                </a>
                                <!-- link4 -->
                                <a class="link-arrow-grow-white-reverse">
                                    <div class="d-flex align-items-center container-arrow-white">
                                        <div class="link__arrow-white"></div>
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
                                        <span>Más información</span>
                                        <div class="d-flex align-items-center container-arrow">
                                            <div class="link__arrow"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162"
                                                viewBox="0 0 9.026 20.162">
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
    </div>
    

    <!--  ******Banner CTA***** -->
    <style>
        .hero-cta-home2 {
            background-image: url(/dist/assets/img/hero-cta-home2--sm.webp);
        }

        @media (min-width: 992px) {
            .hero-cta-home2 {
                background-image: url(/dist/assets/img/hero-cta-home2--lg.webp);
            }
        }
    </style>
    <section class="hero-cta hero-cta--left hero-cta-home2">
        <div class="hero-cta__text">
            <h1>Le ayudamos a encontrar <span>su producto ideal</span></h1>
            <button type="button" class="btn-cta btn-cta--sm"><span>ASISTENTE DE COMPRA</span>
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
            <h1>Le ayudamos a encontrar <span>su producto ideal</span></h1>
            <button type="button" class="btn-cta btn-cta--lg"><span>ASISTENTE DE COMPRA</span>
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


    <!-- *****Gamas***** -->
    <section class="gamas">
        <div class="gamas__text">
            <h2>Una amplia garantía</h2>
            <p>Ofrecemos garantías de larga duración, ya que la calidad y fiabilidad de nuestros spas nos lo permite.
            </p>
        </div>
        <div class="gamas__cards">
            <div class="card-gama">
                <img src="/dist/assets/icons/Logo.svg" alt="">
                <h4>15 años estructura</h4>
            </div>
            <div class="card-gama">
                <img src="/dist/assets/icons/Logo.svg" alt="">
                <h4>10 años acrílico</h4>
            </div>
            <div class="card-gama">
                <img src="/dist/assets/icons/Logo.svg" alt="">
                <h4>2 años componentes</h4>
            </div>
        </div>
    </section>

    <!-- ******Top ventas***** -->
    <section class="top-ventas py-16">
        <div class="top-ventas__title">
            <h3>TOP VENTAS</h3>
        </div>
        <div class="top-ventas__container">
            <a href="#" data-index="0" class="card-spa">
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
            <a href="#" data-index="1" class="card-spa">
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
            <a href="#" data-index="2" class="card-spa">
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

        <div class="guias-top-ventas">
            <div data-index="0" class="controls-top-ventas"></div>
            <div data-index="1" class="controls-top-ventas"></div>
            <div data-index="2" class="controls-top-ventas"></div>
        </div>
    </section>

    <!-- *****BENEFICIOS***** -->
    <section class="section-beneficios w-100">
        <h2>LOS BENEFICIOS DEL AGUA</h2>
        <div class="section-beneficios__container d-flex w-100">
          <a href="#" class="card-category-blog gb-card">
            <div style="background-image: url('/dist/assets/img/card-beneficios1.webp');" class="card-category-blog__bg">
            </div>
    
            <img class="card-category-blog__plus" src="/dist/assets/icons/bx-plus.svg" alt="plus">
    
            <h4>Descubre los beneficios de la hidroterapia en tu spa</h4>
            <p>La técnica terapéutica de la hidroterapia, tiene muchos beneficios que han sido utilizados para tratar una
              variedad de afecciones y con el objetivo de mejorar…</p>
          </a>
          <a href="#" class="card-category-blog gb-card">
            <div style="background-image: url('/dist/assets/img/card-beneficios2.webp');" class="card-category-blog__bg">
            </div>
    
            <img class="card-category-blog__plus" src="/dist/assets/icons/bx-plus.svg" alt="plus">
    
            <h4>La clave para un masaje perfecto: conoce los tipos de jets de hidromasaje</h4>
            <p>Aquavia Spa ha diseñado cada una de las posiciones de sus spas para adaptarse perfectamente al cuerpo del
              usuario. De esta forma, se consigue que…</p>
          </a>
          <a href="#" class="card-category-blog gb-card">
            <div style="background-image: url('/dist/assets/img/card-beneficios3.webp');" class="card-category-blog__bg">
            </div>
    
            <img class="card-category-blog__plus" src="/dist/assets/icons/bx-plus.svg" alt="plus">
    
            <h4>¡Conoce todos los beneficios de un spa!</h4>
            <p>El hidromasaje proporciona beneficios físicos y mentales Agua, relax, paz, desconexión, bienestar… A todo el
              mundo se le ilumina la cara cuando piensa en un… </p>
          </a>
        </div>
        <a class="link-arrow-grow mx-auto" href="#">
          <span>Ir al Blog</span>
    
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

    <!-- Comentarios Section -->
    //Comentarios section

    <!-- *****Footer***** -->
    <section class="footer-top">
        <article class="w-100 d-flex align-items-center justify-content-center flex-column gap-2">
          <div class="cont-img">
            <img src="/dist/assets/img/Catálogo-Aquavia-Spa.webp" alt="">
          </div>
          <h2>Catálogo Aquavia Spa</h2>
          <h4>Catálogo Aquavia Spa</h4>
          <p></p>
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
          <form class="form-full-footer  px-4">
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