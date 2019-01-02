
var sections = document.querySelectorAll('.api__section');
var navEl = document.querySelector(".navigation-list");

var __API_currentActiveMenuItem = null;
function toggleActiveMenuItem(element, targetId) {
    if (__API_currentActiveMenuItem) {
        __API_currentActiveMenuItem
            .classList.remove('active')
    }

    element.classList.add('active')
    EPPZScrollTo.scrollVerticalToElementById(targetId, 80);
    
    __API_currentActiveMenuItem = element;
}

sections.forEach(section => {

    var titleEl = section.querySelector('h2');
    var sectionTitle = createElement("a", {
        className: 'navigation-list-link',
        innerText: titleEl.innerText,
        onClick: function(ev) {
            ev.preventDefault();
            toggleActiveMenuItem(ev.currentTarget, titleEl.id)
        }
    })

    var sectionItems = createElement("ul", {
        className: 'navigation-list-child-list'
    });
    
    section.querySelectorAll("h3").forEach(item => {
        
        sectionItems.appendChild(createElement("li", {
            className: 'navigation-list-item',
            children: createElement('a', {
                innerText: item.innerText,
                // href: `#${item.id}`,
                className: 'navigation-list-link',
                onClick: function(ev) {
                    ev.preventDefault();
                    toggleActiveMenuItem(ev.currentTarget, item.id)
                }
            })
        }))
    });

    var sectionHeader = createElement("li", {
        className: 'navigation-list-item parent',
        children: [sectionTitle, sectionItems]
    })
    navEl.appendChild(sectionHeader);
});

var backToTopButton = createElement("li", {
    className: 'navigation-list-item',
    children: createElement('a', {
        children: [
            createElement('span', { innerText: "▲", className: 'btn__icon' }), 
            createElement('span', { innerText: "Back To Top" })
        ],
        className: 'navigation-list-link footer__btn',
        onClick: function(ev) {
            ev.preventDefault();
            EPPZScrollTo.scrollVerticalToElementById('page-container', 60);

            if (__API_currentActiveMenuItem) {
                __API_currentActiveMenuItem.classList.remove('active');
                __API_currentActiveMenuItem = null;
            }
        }
    })
});
navEl.appendChild(backToTopButton)

var isFixed = false;
document.onscroll = function(ev) {
    if (isFixed) {
        if (document.documentElement.scrollTop < navEl.offsetHeight) {
            backToTopButton.classList.remove('pin__element');
            isFixed = false;
        }
    } else {
        if (document.documentElement.scrollTop > navEl.offsetHeight) {
            backToTopButton.classList.add('pin__element');
            isFixed = true;
        }
    }
}