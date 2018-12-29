function displayIconCard(cardClass) {

  if (( el = document.querySelector(`.${cardClass}`) )) {
    el.classList.add("card-active");
    setTimeout(() => {
      el.classList.add("card-show")
    }, 50);
  }
}

function hideIconCard(cardClass) {
  if (( el = document.querySelector(`.${cardClass}`) )) {
    el.classList.remove("card-show");
    setTimeout(() => {
      el.classList.remove("card-active")
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

attachEvent([
  { layerId: "Path_8_1_", cardId: "card-1" },
  { layerId: "Path_7_1_", cardId: "card-2" },
  { layerId: "Path_6_1_", cardId: "card-3" }
]);
