const SCREEN_SIZES = {
    MOBILE: 576,
    TABLET: 768,
    DESKTOP: 992
}

function isScreen(type) {
    let { innerWidth } = window;
    switch(type) {
        case 'mobile':
            return innerWidth <= SCREEN_SIZES.MOBILE;
        case 'tablet':
            return innerWidth <= SCREEN_SIZES.TABLET && innerWidth > SCREEN_SIZES.MOBILE;
        case 'desktop':
            return innerWidth > SCREEN_SIZES.TABLET;
    }
}

// Menu Burger for Mobile

var menuIcon = document.querySelector(".burger__menu");
var menuItems = document.querySelector(".aux-nav");
var searchBox = document.querySelector(".js-search");

menuIcon.onclick = function(ev) {
    menuItems.parentElement.classList.toggle("not__mobile")
}

if (isScreen('mobile')) {

    searchBox.classList.remove('not__mobile');
    searchBox.classList.add('mobile__mode')

    var element = createElement('li', {
        className: 'd-inline-block my-0 mr-2',
        children: searchBox
    })

    menuItems.insertBefore(element, menuItems.firstElementChild);
}