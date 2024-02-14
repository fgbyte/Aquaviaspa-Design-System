"use strict";
//dropdown-card lg disposition
document.addEventListener('DOMContentLoaded', function () {
    var detailsElement = document.querySelectorAll('.dropdown-card');
    if (window.matchMedia('(min-width: 992px)').matches) {
        // Si la pantalla es 'lg' o más grande
        detailsElement.forEach(function (element) {
            element.toggleAttribute('open');
        });
    }
});
//banner-ficha
window.addEventListener('resize', adjustBannerFicha);
function adjustBannerFicha() {
    var bannerFichaCard = document.querySelector('.banner-ficha__card__img');
    var bannerFicha = document.querySelector('.banner-ficha');
    var lgSize = 992;
    if (window.innerWidth >= lgSize) {
        if (bannerFichaCard) {
            bannerFichaCard.removeAttribute('id');
        }
        if (bannerFicha) {
            bannerFicha.setAttribute('id', 'hero');
        }
    }
    else {
        if (bannerFicha) {
            bannerFicha.removeAttribute('id');
        }
        if (bannerFichaCard) {
            bannerFichaCard.setAttribute('id', 'hero');
        }
    }
}
adjustBannerFicha();
var carouselsTopVentas = document.querySelectorAll(".top-ventas__container");
var controlsList1 = document.querySelectorAll(".guias-top-ventas");
carouselsTopVentas.forEach(function (carousel, carouselIndex) {
    var controls = controlsList1[carouselIndex];
    var controlItems = controls.querySelectorAll(".controls-top-ventas");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    controlItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            moveItems(index);
        });
    });
    var moveItems = function (index) {
        var cardWidth = carousel.querySelector(".card-spa");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", function () {
        var cardWidth = carousel.querySelector(".card-spa");
        if (carousel === null || !cardWidth)
            return;
        var scrollPos = carousel.scrollLeft;
        var activeControlIndex = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
        setActiveControl(activeControlIndex);
    });
});
//transform module
var cardTransform = document.querySelector("#card-transform");
var cardTransformRight = document.querySelector(".card-transform-right");
var transformModule = document.querySelector(".transform-module");
document.addEventListener('DOMContentLoaded', function () {
    if (cardTransformRight) {
        cardTransformRight.addEventListener('mouseover', function (e) {
            if (window.innerWidth > 993) {
                if (cardTransform) {
                    cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.add('opac');
                }
            }
        });
        cardTransformRight.addEventListener('mouseout', function (e) {
            if (cardTransform) {
                cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.remove('opac');
            }
        });
    }
});
var cascos = document.querySelectorAll('[id^="casco-"]');
var muebles = document.querySelectorAll('[id^="mueble-"]');
function checkFirstMueble(index) {
    muebles.forEach(function (mueble, i) {
        if (mueble instanceof HTMLElement) {
            var input = mueble.querySelector('input[type="radio"]');
            if (input instanceof HTMLInputElement) {
                input.checked = (i === index);
            }
        }
    });
}
muebles.forEach(function (mueble, index) {
    if (mueble instanceof HTMLElement) {
        mueble.style.display = (index === 0) ? 'flex' : 'none';
    }
});
cascos.forEach(function (casco, index) {
    casco.addEventListener('click', function () {
        checkFirstMueble(index);
        muebles.forEach(function (mueble, i) {
            if (mueble instanceof HTMLElement) {
                mueble.style.display = (i === index) ? 'flex' : 'none';
            }
        });
    });
});
var furnitureInputs = document.querySelectorAll('.furniture-input');
var helmetInputs = document.querySelectorAll('.helmet-input');
var imgs = document.querySelectorAll('.acabados__content__imgs img');
function updateImages() {
    imgs.forEach(function (img) {
        img.style.display = 'none';
    });
    furnitureInputs.forEach(function (input, index) {
        if (input.checked) {
            var startIndex = Math.floor(index * imgs.length / furnitureInputs.length);
            var endIndex = Math.floor(startIndex + imgs.length / furnitureInputs.length - 1);
            for (var i = startIndex; i <= endIndex && i < imgs.length; i++) {
                imgs[i].style.display = 'block';
            }
        }
    });
}
function showFirstImage() {
    helmetInputs.forEach(function (input, index) {
        var startIndex = Math.floor(index * imgs.length / helmetInputs.length);
        var endIndex = Math.floor(startIndex + imgs.length / helmetInputs.length - 1);
        imgs[startIndex].style.display = input.checked ? 'block' : 'none';
        for (var i = startIndex + 1; i <= endIndex && i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
    });
    updateImages();
}
furnitureInputs.forEach(function (input) {
    input.addEventListener('change', showFirstImage);
});
helmetInputs.forEach(function (input) {
    input.addEventListener('change', showFirstImage);
});
showFirstImage();
var accseoriosSlider = document.querySelectorAll(".accseorios-slider");
var guiasAccseoriosSlider = document.querySelectorAll(".guias-accseorios-slider");
accseoriosSlider.forEach(function (carousel, carouselIndex) {
    var controls = guiasAccseoriosSlider[carouselIndex];
    var controlItems = controls.querySelectorAll(".controls-accseorios-slider");
    var previousItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-slider-accsesorios-left");
    var nextItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-slider-accsesorios-right");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    nextItem === null || nextItem === void 0 ? void 0 : nextItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) + 1;
            moveItems(newIndex);
        }
    });
    previousItem === null || previousItem === void 0 ? void 0 : previousItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) - 1;
            moveItems(newIndex);
        }
    });
    controlItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            moveItems(index);
        });
    });
    var moveItems = function (index) {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", function () {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (carousel === null || !cardWidth)
            return;
        var scrollPos = carousel.scrollLeft;
        var controlIndex = Math.floor(scrollPos / cardWidth.offsetWidth);
        setActiveControl(controlIndex);
    });
});
//categories
//pr-#
var links = Array.from({ length: 5 }, function (_, i) { return document.querySelectorAll("#pr-".concat(i + 1)); });
//prest-#
var cards = Array.from({ length: 5 }, function (_, i) { return document.querySelectorAll("#prest-".concat(i + 1)); });
var special = 1158;
function showOnly(cardNumber) {
    cards.forEach(function (nodeCard, index) {
        nodeCard.forEach(function (singleCard) {
            if (singleCard instanceof HTMLElement) {
                singleCard.style.display = index === cardNumber
                    ? 'block'
                    : 'none';
                singleCard.style.transition = index === cardNumber
                    ? 'all 1000ms'
                    : 'all 1000ms';
                singleCard.style.visibility = index === cardNumber
                    ? 'visible'
                    : 'hidden';
                singleCard.style.display = index === cardNumber
                    ? 'block'
                    : 'block';
                singleCard.style.position = index === cardNumber
                    ? 'relative'
                    : 'absolute';
                singleCard.style.opacity = index === cardNumber
                    ? '1'
                    : '0';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    //ocultar los modales al principio menos el 1 solo en LG
    if (window.matchMedia("(min-width: ".concat(special, "px)")).matches) {
        showOnly(0); //el 1ro del array
    }
    window.addEventListener('resize', function () {
        if (window.matchMedia("(min-width: ".concat(special, "px)")).matches) {
            showOnly(0); //el 1ro del array
        }
        else {
            cards.forEach(function (nodeCard) {
                nodeCard.forEach(function (singleCard) {
                    if (singleCard instanceof HTMLElement) {
                        singleCard.style.display = 'block';
                        singleCard.style.visibility = 'visible';
                        singleCard.style.transition = 'all 1000ms';
                        singleCard.style.position = 'relative';
                        singleCard.style.opacity = '1';
                    }
                });
            });
        }
    });
    links.forEach(function (nodeLink, i) {
        nodeLink.forEach(function (singleLink, _) {
            singleLink.addEventListener('click', function () {
                cards.forEach(function (nodeCard, j) {
                    if (nodeCard) {
                        nodeCard.forEach(function (singleCard, __) {
                            if (singleCard instanceof HTMLElement) {
                                singleCard.style.transition = i === j
                                    ? 'all 1000ms'
                                    : 'all 1000ms';
                                singleCard.style.visibility = i === j
                                    ? 'visible'
                                    : 'hidden';
                                singleCard.style.display = i === j
                                    ? 'block'
                                    : 'block';
                                singleCard.style.position = i === j
                                    ? 'relative'
                                    : 'absolute';
                                singleCard.style.opacity = i === j
                                    ? '1'
                                    : '0';
                            }
                        });
                    }
                });
            });
        });
    });
});
//prestaciones sliders
document.addEventListener('DOMContentLoaded', function () {
    var prestacionesGroups = document.querySelectorAll(".prestaciones-cards");
    var guiasPrestacionesGroups = document.querySelectorAll(".guias-prestaciones-cards");
    prestacionesGroups.forEach(function (prestaciones, groupIndex) {
        var controls = guiasPrestacionesGroups[groupIndex];
        var controlItems = controls.querySelectorAll(".controls-prestaciones-cards");
        setActiveControl(0);
        function setActiveControl(index) {
            controlItems.forEach(function (item, i) {
                if (i === index) {
                    item.classList.add("control-prestaciones-active");
                }
                else {
                    item.classList.remove("control-prestaciones-active");
                }
            });
        }
        controlItems.forEach(function (item, index) {
            item.addEventListener("click", function () {
                moveItems(index, prestaciones);
            });
        });
        var moveItems = function (index, carousel) {
            var cardWidth = carousel.querySelector(".card-prestacion");
            if (cardWidth) {
                carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
            }
        };
        prestaciones.addEventListener("scroll", function () {
            var cardWidth = prestaciones.querySelector(".card-prestacion");
            if (prestaciones === null || !cardWidth)
                return;
            var scrollPos = prestaciones.scrollLeft;
            var activeControlIndex = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
            setActiveControl(activeControlIndex);
        });
    });
});
//prestaciones module
document.addEventListener('DOMContentLoaded', function () {
    var filterLinks = Array.from({ length: 6 }, function (_, i) { return document.querySelector("#fil-".concat(i + 1)); });
    var categories = Array.from({ length: 6 }, function (_, i) { return document.querySelector("#category-".concat(i + 1)); });
    //links logic
    filterLinks.forEach(function (link) {
        link === null || link === void 0 ? void 0 : link.addEventListener('click', function (event) {
            if (window.matchMedia("(min-width: ".concat(special, "px)")).matches) {
                showOnly(0); //el 1ro del array
            }
            // Remove 'checked' attribute from all filter links
            filterLinks.forEach(function (element) {
                element === null || element === void 0 ? void 0 : element.removeAttribute('checked');
            });
            // Add 'checked' attribute to the clicked link
            var clickedLink = event.target;
            clickedLink.setAttribute('checked', '');
        });
    });
    //only 1 first logic
    categories.forEach(function (singleCat, index) {
        if (singleCat instanceof HTMLElement) {
            singleCat.style.display = index === 0
                ? 'flex'
                : 'none';
        }
    });
    //render logic
    filterLinks.forEach(function (singleLink, i) {
        singleLink === null || singleLink === void 0 ? void 0 : singleLink.addEventListener('click', function () {
            categories.forEach(function (singleCat, j) {
                if (singleCat instanceof HTMLElement) {
                    singleCat.style.display = i === j
                        ? 'flex'
                        : 'none';
                }
            });
        });
    });
});
var prestacionesSliderSlider = document.querySelectorAll(".prestaciones-slider__slider");
var guiasPrestacionesSliderSlider = document.querySelectorAll(".guias-prestaciones-slider__slider");
prestacionesSliderSlider.forEach(function (carousel, carouselIndex) {
    var controls = guiasPrestacionesSliderSlider[carouselIndex];
    var controlItems = controls.querySelectorAll(".controls-prestaciones-slider__slider");
    var previousItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-prestaciones-slider-left");
    var nextItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-prestaciones-slider-right");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    nextItem === null || nextItem === void 0 ? void 0 : nextItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) + 1;
            moveItems(newIndex);
        }
    });
    previousItem === null || previousItem === void 0 ? void 0 : previousItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) - 1;
            moveItems(newIndex);
        }
    });
    controlItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            moveItems(index);
        });
    });
    var moveItems = function (index) {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", function () {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (carousel === null || !cardWidth)
            return;
        var scrollPos = carousel.scrollLeft;
        var controlIndex = Math.floor(scrollPos / cardWidth.offsetWidth);
        setActiveControl(controlIndex);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    //Valores module
    var tabsValores = Array.from({ length: 5 }, function (_, i) { return document.getElementById("valor-".concat(i + 1)); });
    var modalsValores = Array.from({ length: 5 }, function (_, i) { return document.getElementById("modal-valor-".concat(i + 1)); });
    var detailsValores = Array.from({ length: 5 }, function (_, i) { return document.getElementById("detail-valor-".concat(i + 1)); });
    var buttonValores = document.querySelectorAll('.link-arrow-grow-white-reverse');
    var allDropdowns = document.querySelectorAll('.valores__card__links details');
    //ocultar los modales al principio menos el 1
    modalsValores.forEach(function (modal, i) {
        if (modal) {
            modal.style.display = i === 0 ? 'block' : 'none';
        }
    });
    //duplicar contenido modales y details
    modalsValores.forEach(function (modal, i) {
        if (modal && detailsValores[i]) {
            var modalContent = modal.innerHTML;
            if (detailsValores[i]) {
                detailsValores[i].innerHTML = modalContent;
            }
        }
    });
    var activeTab = buttonValores[0];
    if (activeTab) {
        activeTab.classList.add('active-valor');
    }
    function clickedValores(tab) {
        if (tab.classList.contains('active-valor') && innerWidth < 990) {
            tab.classList.remove('active-valor');
            activeTab = null;
        }
        else {
            if (activeTab) {
                activeTab.classList.remove('active-valor');
            }
            tab.classList.add('active-valor');
            activeTab = tab;
        }
    }
    buttonValores.forEach(function (tab, i) {
        if (tab) {
            tab.addEventListener('click', function () {
                clickedValores(tab);
            });
        }
    });
    //agregar eventListener a las tabsValores
    tabsValores.forEach(function (tab, i) {
        if (tab) {
            tab.addEventListener('click', function () {
                modalsValores.forEach(function (modal, j) {
                    if (modal) {
                        modal.style.display = i === j ? 'block' : 'none';
                    }
                });
            });
        }
    });
    // Función para cerrar todos los dropdowns excepto el actual
    function closeAllDropdownsExcept(currentDropdown) {
        allDropdowns.forEach(function (dropdown) {
            if (dropdown !== currentDropdown && dropdown.hasAttribute('open')) {
                dropdown.removeAttribute('open');
            }
        });
    }
    // Agregar el controlador de eventos a cada 'details'
    allDropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('toggle', function () {
            if (dropdown.hasAttribute('open')) {
                closeAllDropdownsExcept(dropdown);
            }
        });
    });
});
//navbar & menu lateral
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('#navbar');
    var body = document.body;
    if (!navbar)
        return;
    var banner = document.querySelector('#hero');
    var navLinks = navbar.querySelectorAll('.link');
    var navLogo = navbar.querySelector('#navlogo');
    var firstMenuBurger = navbar.querySelector('.menu-burger');
    var menuBurger = navbar.querySelectorAll('.menu-burger');
    var menuSpas = navbar.querySelector('#spas');
    var menuSwimspas = navbar.querySelector('#swimspas');
    var menuPrestaciones = navbar.querySelector('#prestaciones');
    var closeMenu = navbar.querySelectorAll('.close-menu');
    var previousMenu = navbar.querySelectorAll('.previous-menu');
    var mainMenu = document.querySelector('.main-menu');
    var spasMenu = document.querySelector('.spas-menu');
    var swimspasMenu = document.querySelector('.swimspas-menu');
    var prestacionesMenu = document.querySelector('.prestaciones-menu');
    var menuBackdrop = document.querySelector('.menuBackdrop');
    var accordionMenu = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.accordion-menu');
    var showContentMenu = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.show-content-menu');
    var accordionImg = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.accordion-img');
    if (!banner || !navLinks || !navLogo || !firstMenuBurger || !menuBurger || !menuSpas || !menuSwimspas || !menuPrestaciones || !closeMenu || !previousMenu || !mainMenu || !spasMenu || !swimspasMenu || !prestacionesMenu || !menuBackdrop)
        return;
    menuBurger.forEach(function (element) {
        element.addEventListener('click', function () {
            mainMenu.classList.add('active-menu');
            menuBackdrop.classList.add('isOpenBackdrop');
        });
    });
    menuSpas.addEventListener('click', function () {
        spasMenu.classList.add('active-menu');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active-menu');
    });
    menuSwimspas.addEventListener('click', function () {
        swimspasMenu.classList.add('active-menu');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active-menu');
    });
    menuPrestaciones.addEventListener('click', function () {
        prestacionesMenu.classList.add('active-menu');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active-menu');
    });
    closeMenu.forEach(function (elemet) {
        elemet.addEventListener('click', function () {
            mainMenu.classList.remove('active-menu');
            menuBackdrop.classList.remove('isOpenBackdrop');
            spasMenu.classList.remove('active-menu');
            swimspasMenu.classList.remove('active-menu');
            prestacionesMenu.classList.remove('active-menu');
            showContentMenu.forEach(function (content) { return content.classList.remove('active-acorddion'); });
            accordionImg.forEach(function (img) { return img.classList.remove('rotate-90'); });
        });
    });
    previousMenu.forEach(function (elemet) {
        elemet.addEventListener('click', function () {
            mainMenu.classList.add('active-menu');
            spasMenu.classList.remove('active-menu');
            swimspasMenu.classList.remove('active-menu');
            prestacionesMenu.classList.remove('active-menu');
            showContentMenu.forEach(function (content) { return content.classList.remove('active-acorddion'); });
            accordionImg.forEach(function (img) { return img.classList.remove('rotate-90'); });
        });
    });
    menuBackdrop.addEventListener('click', function () {
        mainMenu.classList.remove('active-menu');
        spasMenu.classList.remove('active-menu');
        swimspasMenu.classList.remove('active-menu');
        prestacionesMenu.classList.remove('active-menu');
        menuBackdrop.classList.remove('isOpenBackdrop');
        showContentMenu.forEach(function (content) { return content.classList.remove('active-acorddion'); });
        accordionImg.forEach(function (img) { return img.classList.remove('rotate-90'); });
    });
    accordionMenu.forEach(function (element, idx) {
        element.addEventListener('click', function () {
            if (showContentMenu[idx].classList.contains('active-acorddion')) {
                showContentMenu[idx].classList.remove('active-acorddion');
                accordionImg[idx].classList.remove('rotate-90');
            }
            else {
                showContentMenu.forEach(function (el, index) {
                    if (index !== idx) {
                        el.classList.remove('active-acorddion');
                        accordionImg[index].classList.remove('rotate-90');
                    }
                });
                showContentMenu[idx].classList.add('active-acorddion');
                accordionImg[idx].classList.add('rotate-90');
            }
        });
    });
    if (body.classList.contains("posts-page")) {
        navbar.classList.add('white-mode');
        navLinks.forEach(function (link) {
            link.classList.remove('link--white');
        });
        navLogo.style.filter = 'invert(100%)';
        firstMenuBurger.style.filter = 'invert(100%)';
    }
    else {
        navbar.classList.remove('white-mode');
        navLinks.forEach(function (link) {
            link.classList.add('link--white');
        });
        navLogo.style.filter = 'invert(0)';
        firstMenuBurger.style.filter = 'invert(0)';
    }
    window.addEventListener('scroll', function () {
        if (window.scrollY > calculateBannerHeight() || body.classList.contains("posts-page")) {
            navbar.classList.add('white-mode');
            navLinks.forEach(function (link) {
                link.classList.remove('link--white');
            });
            navLogo.style.filter = 'invert(100%)';
            firstMenuBurger.style.filter = 'invert(100%)';
        }
        else {
            navbar.classList.remove('white-mode');
            navLinks.forEach(function (link) {
                link.classList.add('link--white');
            });
            navLogo.style.filter = 'invert(0)';
            firstMenuBurger.style.filter = 'invert(0)';
        }
    });
    function calculateBannerHeight() {
        var bannerHeight = banner.offsetHeight;
        var navbarHeight = navbar.offsetHeight;
        return bannerHeight - navbarHeight;
    }
});
// Asistentes Generales
var asistenteBlocks = Array.from({ length: 2 }, function (_, i) { return document.getElementById("asistente-".concat(i + 1)); });
// Asistentes inners
var asistenteInnerBlocks = Array.from({ length: 6 }, function (_, i) { return document.getElementById("asistente-inner-".concat(i + 1)); });
//Inputs Primeros
var asistenteFirstInputs = document.querySelectorAll(".asistente-input");
//Inputs inner
var asistenteInnerInputs = document.querySelectorAll(".asistente-input--inner");
//Anterior Button
var anteriorButton = document.querySelectorAll('#asistente-anterior');
//Ultimo Button
var lastButton = document.querySelector('#asistente-last-btn');
//Funciones helpers
function scrollUp() {
    if (window.matchMedia('(max-width: 992px)').matches) {
        // Si la pantalla es menor de lg
        window.scrollTo(0, 0);
    }
}
function showFirstAsistente() {
    if (asistenteBlocks) {
        asistenteBlocks.forEach(function (block) {
            if (block && block.id === 'asistente-1') {
                block.classList.add('fade-in');
                block.style.display = 'block';
                scrollUp();
            }
            else {
                if (block) {
                    block.style.display = 'none';
                }
            }
        });
    }
}
function hideFirstAsistente() {
    if (asistenteBlocks) {
        asistenteBlocks.forEach(function (block) {
            if (block && block.id === 'asistente-1') {
                //add class to visibility = 0 with transition
                block.classList.add('fade-out');
                block.style.display = 'none';
            }
        });
    }
}
function showSecondAsistente() {
    if (asistenteBlocks) {
        asistenteBlocks.forEach(function (block) {
            if (block && block.id === 'asistente-2') {
                //add class to visibility = 0 with transition
                block.classList.add('fade-out');
                block.style.display = 'flex';
                //add class to visibility = 1 with transition
                setInterval(function () {
                    block.classList.add('fade-in');
                }, 200);
                scrollUp();
            }
            else {
                if (block) {
                    block.style.display = 'none';
                }
            }
        });
    }
}
function showFirstAsistenteInner() {
    if (asistenteInnerBlocks) {
        asistenteInnerBlocks.forEach(function (block) {
            if (block && block.id === 'asistente-inner-1') {
                //add class to visibility = 0 with transition
                block.classList.add('fade-out');
                block.style.display = 'flex';
                //add class to visibility = 1 with transition
                setInterval(function () {
                    block.classList.add('fade-in');
                }, 200);
                scrollUp();
            }
            else {
                if (block) {
                    block.style.display = 'none';
                }
            }
        });
    }
}
function hideFirstAsistenteInner() {
    if (asistenteInnerBlocks) {
        asistenteInnerBlocks.forEach(function (block) {
            if (block && block.id === 'asistente-inner-1') {
                //add class to visibility = 0 with transition
                block.classList.add('fade-out');
                block.style.display = 'none';
            }
        });
    }
}
function hideSpecificAsistenteInner(asistente) {
    //add class to visibility = 0 with transition
    asistente.classList.add('fade-out');
    asistente.style.display = 'none';
}
function showSpecificAsistenteInner(asistente) {
    asistente.classList.add('fade-out');
    asistente.style.display = 'flex';
    setInterval(function () {
        asistente.classList.add('fade-in');
    }, 200);
    var secondChild = asistente.children[1];
    //add class to visibility = 1 with transition
    setInterval(function () {
        secondChild.classList.add('fade-in');
    }, 200);
    secondChild.style.display = 'flex';
    scrollUp();
}
function handleInnerInputClick(event) {
    var _a, _b;
    var mouseEvent = event;
    var clickedInput = mouseEvent.target;
    if (clickedInput) {
        var grandParentElement = (_b = (_a = clickedInput.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
        //ocultar el current
        var currentAsistenteInner = grandParentElement;
        hideSpecificAsistenteInner(currentAsistenteInner);
        //mostrar el next
        var nextAsistenteInner = currentAsistenteInner.nextElementSibling;
        if (nextAsistenteInner instanceof HTMLElement) {
            showSpecificAsistenteInner(nextAsistenteInner);
        }
    }
}
function handleAnteriorClick() {
    //que detecte si esta en el asistente-inner-1 que hal hacer click se ponga en 'none' y el block el asistente-1 ✅
    asistenteInnerBlocks.forEach(function (asistenteInner) {
        if (asistenteInner && asistenteInner.id === 'asistente-inner-1' && asistenteInner.style.display === 'flex') {
            showFirstAsistente();
        }
    });
    //que detecte si esta en el asistente-inner-2 al hacer click se ponga en 'none y flex el asistente-inner-1 y asi para los otros ✅
    asistenteInnerBlocks.forEach(function (asistenteInner) {
        for (var i = 6; i >= 2; i--) {
            if (asistenteInner && asistenteInner.id === "asistente-inner-".concat(i) && asistenteInner.style.display === 'flex') {
                var currentAsistenteInner = asistenteInner;
                hideSpecificAsistenteInner(currentAsistenteInner);
                // console.log('current', currentAsistenteInner)
                var previousAsistenteInner = currentAsistenteInner.previousElementSibling;
                if (previousAsistenteInner instanceof HTMLElement) {
                    // console.log('previous', previousAsistenteInner)
                    showSpecificAsistenteInner(previousAsistenteInner);
                }
            }
        }
    });
}
// document.addEventListener("DOMContentLoaded", function () {
//     showFirstAsistente();
//     //click en los primeros inputs activa:
//     asistenteFirstInputs.forEach((input) => {
//         input.addEventListener('click', () => {
//             hideFirstAsistente();
//             showSecondAsistente();
//             showFirstAsistenteInner();
//         })
//     })
//     //click en los inputs del asistente inner activa handleInnerInputClick()
//     asistenteInnerInputs.forEach((input) => {
//         input.addEventListener('click', handleInnerInputClick);
//     });
//     //click en el Anterior activa handleAnteriorClick()
//     anteriorButton.forEach((btn) => {
//         btn?.addEventListener('click', handleAnteriorClick);
//     })
//     if (lastButton) {
//         lastButton.addEventListener('click', () => {
//             console.log(stepValue)
//         })
//     }
// });
// const textInStep = document.querySelectorAll('.dynamic-step') as NodeListOf<HTMLElement>;
// const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll('.asistente-radio');
// const firstRadios: NodeListOf<HTMLInputElement> = document.querySelectorAll('.type-spa-selected-radio');
// const spaSelected: NodeListOf<HTMLInputElement> = document.querySelectorAll('.type-spa-selected');
// const steps = document.querySelectorAll('.step') as NodeListOf<HTMLElement>;
// const stepValue = {
//   step1: '',
//   step2: '',
//   step3: '',
//   step4: '',
//   step5: '',
// }
// function updateTextsFromStepValues() {
//   textInStep.forEach((step, index) => {
//     const stepKey = `step${index + 1}` as keyof typeof stepValue;
//     if (stepValue[stepKey]) {
//       step.innerText = stepValue[stepKey];
//       steps[index].classList.add('step--active');
//     } else {
//       steps[index].classList.remove('step--active');
//     }
//   });
// }
// function setStepValue() {
//   radios.forEach((radio, index) => {
//     radio.addEventListener('change', () => {
//       const stepIndex = Math.floor(index / 3) + 1;
//       const stepKey = `step${stepIndex}` as keyof typeof stepValue;
//       stepValue[stepKey] = radio.value;
//       updateTextsFromStepValues();
//     });
//   });
// }
// firstRadios.forEach((radio) => {
//   radio.addEventListener('change', () => {
//     spaSelected.forEach((element) => {
//       element.innerText = radio.value;
//     });
//   });
// });
// setStepValue();
var blogPostSlider = document.querySelectorAll(".blog-post-slider");
var guiasBlogPostSlider = document.querySelectorAll(".guias-blogPostSlider");
blogPostSlider.forEach(function (carousel, carouselIndex) {
    var controls = guiasPrestacionesSliderSlider[carouselIndex];
    var controlItems = controls.querySelectorAll(".controls-blogPostSlider");
    var previousItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-prestaciones-slider-left");
    var nextItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-prestaciones-slider-right");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    nextItem === null || nextItem === void 0 ? void 0 : nextItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-category-blog-lite");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) + 1;
            moveItems(newIndex);
        }
    });
    previousItem === null || previousItem === void 0 ? void 0 : previousItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-category-blog-lite");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) - 1;
            moveItems(newIndex);
        }
    });
    controlItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            moveItems(index);
        });
    });
    var moveItems = function (index) {
        var cardWidth = carousel.querySelector(".card-category-blog-lite");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", function () {
        var cardWidth = carousel.querySelector(".card-category-blog-lite");
        if (carousel === null || !cardWidth)
            return;
        var scrollPos = carousel.scrollLeft;
        var controlIndex = Math.floor(scrollPos / cardWidth.offsetWidth);
        setActiveControl(controlIndex);
    });
});
var formContacto = document.getElementById('form-contacto');
var formDistribuidor = document.getElementById('form-distribuidor');
var linkContacto = document.getElementById('fil-1');
var linkDistribuidor = document.getElementById('fil-2');
document.addEventListener('DOMContentLoaded', function () {
    if (linkContacto) {
        linkContacto.addEventListener('click', function () {
            if (formContacto && formDistribuidor) {
                formContacto.style.display = 'flex';
                formDistribuidor.style.display = 'none';
            }
        });
    }
    if (linkDistribuidor) {
        linkDistribuidor.addEventListener('click', function () {
            if (formContacto && formDistribuidor) {
                formContacto.style.display = 'none';
                formDistribuidor.style.display = 'flex';
            }
        });
    }
});
var mobileMediaQuery = window.matchMedia('(max-width: 768px)');
var desktopMediaQuery = window.matchMedia('(min-width: 768px)');
document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card-spa');
    var loadMoreButton = document.getElementById('loadMore');
    function showHiddenCards() {
        cards.forEach(function (card, index) {
            if (index >= 6) {
                card.classList.remove('hidden-card');
            }
        });
    }
    function hideLoadMore() {
        if (loadMoreButton) {
            loadMoreButton.style.display = 'none';
        }
    }
    function showLoadMore() {
        if (loadMoreButton) {
            loadMoreButton.style.display = 'flex';
        }
    }
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', showHiddenCards);
        loadMoreButton.addEventListener('click', hideLoadMore);
    }
    mobileMediaQuery.addEventListener('change', function (event) {
        if (event.matches) {
            cards.forEach(function (card, index) {
                showLoadMore();
                if (index >= 6) {
                    card.classList.add('hidden-card');
                }
            });
        }
    });
    desktopMediaQuery.addEventListener('change', function (event) {
        if (event.matches) {
            showHiddenCards();
        }
    });
    if (window.innerWidth <= 768) {
        cards.forEach(function (card, index) {
            if (index >= 6) {
                card.classList.add('hidden-card');
            }
        });
    }
});
