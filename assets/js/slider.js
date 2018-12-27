// Slider.js - Turn a list of .block__item to a slider
// Copyright 2018 - Vasern.com

/**
 * Method use to create HTML element
 * @param {string} tagName 
 * @param { children: Array<HTMLElement> | HTMLElement, onClick: Function, className: string, styles.string} options 
 */
function createElement(tagName, options) {
    var element = document.createElement(tagName);

    if (options) {
        let { children, onClick, className, styles } = options;
        if (children) {
            
            if (Array.isArray(children)) {
                children.forEach(item => element.appendChild(item));
            } else {
                element.appendChild(children);
            }
        }

        if (className) {
            element.className = className;
        }

        if (onClick) {
            element.onclick = onClick;
        }

        if (styles) {
            element.setAttribute('style', styles);
        }
    }

    return element;
}

/**
 * Method use to control state of 'next' and 'previous' buttons
 * @param {*} index: current index
 * @param {*} max: max index allowed
 */
function sliderLock(index, max) {

    // Unlock if 'next' or 'previous' is locked
    if (document.querySelector('.sliderLocked')) {
        document.querySelector('.sliderLocked').classList.remove("sliderLocked")
    }
    
    if (index == max) {
        // Lock right/next button
        document.querySelector('.arrow-right').classList.add("sliderLocked")
    } else if (index == 0) {
        // Lock left/previous button
        document.querySelector('.arrow-left').classList.add("sliderLocked")
    } 
}

/**
 * Attach/initate slider
 * @param {HTMLElement} element: element that slider will be attached
 */
function initSlider(element) {
    
    var index = 0;
    var items = element.querySelectorAll(".block__item");
    var itemWidth = items[0].clientWidth + 32;
    var itemsFitScreen = Math.floor(element.clientWidth / itemWidth) ;//- (element.clientWidth % itemWidth > 0 ? 1 : 0);
    var totalItems = items.length - itemsFitScreen;

    // Previous button
    var leftElement = createElement("div", {
        children: createElement("div", {
            children: [createElement("span"), createElement("span")]
        }),
        className: 'arrow-left sliderLocked',
        onClick: (ev) => {
            
            if (index > 0) {
                index--;
                element.scrollTo(index * itemWidth, 0);
            }

            sliderLock(index, totalItems);
        }
    });

    // Next button
    var rightElement = createElement("div", {
        children: createElement("div", {
            children: [createElement("span"), createElement("span")]
        }),
        className: 'arrow-right',
        styles: `left: ${element.clientWidth}px`,
        onClick: (ev) => {

            if (index < totalItems) {
                index++;
                element.scrollTo(index * itemWidth,0);
            }

            sliderLock(index, totalItems);
        }
    });

    // Slider navigation
    var navElement = createElement("div", {
        className: "slider__nav",
        children: [leftElement, rightElement]
    });

    element.appendChild(navElement)
}

initSlider(document.getElementById("mediaSlider"));