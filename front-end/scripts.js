const modalOverlay = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const imageId = card.querySelector("img").getAttribute("id");
    const recipe = card.children[1].textContent;
    const chef = card.children[2].textContent;

    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = `/front-end/assets/img/${imageId}`;

    modal.querySelector(".modal-recipe h3").innerHTML = recipe;
    modal.querySelector(".modal-chef p").innerHTML = chef;
  });
}

document.querySelector(".modal-close").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
