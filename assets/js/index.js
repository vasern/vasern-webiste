function displayIconCard(cardClass) {
  if ((el = document.querySelector(`.${cardClass}`))) {
    el.classList.add("card-active");
    setTimeout(() => {
      el.classList.add("card-show");
    }, 50);
  }
}

function hideIconCard(cardClass) {
  if ((el = document.querySelector(`.${cardClass}`))) {
    el.classList.remove("card-show");
    setTimeout(() => {
      el.classList.remove("card-active");
    }, 200);
  }
}

function attachEvent(names) {
  for (let name of names) {
    let el = document.getElementById(name.layerId);
    el.addEventListener("mouseover", ev => {
      setTimeout(() => {
        displayIconCard(name.cardId);
      }, 200);
    });
    el.addEventListener("mouseleave", ev => {
      hideIconCard(name.cardId);
    });
  }
}

// function toDarkNav(headerEl) {
//   headerEl.classList.add("header__dark");
//   var img = headerEl.querySelector(".page-logo-text");
//   var imgSrc = img.src.replace("vasern-text.dk.svg", "vasern-text.svg");
//   img.setAttribute("src", imgSrc);

//   var github = headerEl.querySelector(".link-icon");
//   var githubSrc = github.src.replace("github-logo.dk.svg", "github-logo.svg");
//   github.setAttribute("src", githubSrc);
// }

// function toBrightNav(headerEl) {
//   headerEl.classList.remove("header__dark");
//   var img = headerEl.querySelector(".page-logo-text");
//   var imgSrc = img.src.replace("vasern-text.svg", "vasern-text.dk.svg");
//   img.setAttribute("src", imgSrc);

//   var github = headerEl.querySelector(".link-icon");
//   var githubSrc = github.src.replace("github-logo.svg", "github-logo.dk.svg");
//   github.setAttribute("src", githubSrc);
// }

attachEvent([
  { layerId: "Path_8_1_", cardId: "card-1" },
  { layerId: "Path_7_1_", cardId: "card-2" },
  { layerId: "Path_6_1_", cardId: "card-3" }
]);

// var headerElement = document.querySelector(".page-header");
// toDarkNav(headerElement);

// var isFixed = false;
// const bannerHeight = 580;
// document.onscroll = function(ev) {
//   if (isFixed) {
//     if (document.documentElement.scrollTop < bannerHeight) {
//       toDarkNav(headerElement);
//       isFixed = false;
//     }
//   } else {
//     if (document.documentElement.scrollTop > bannerHeight) {
//       toBrightNav(headerElement);
//       isFixed = true;
//     }
//   }
// };
