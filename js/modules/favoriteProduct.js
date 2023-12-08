export default function activeItemsProducts() {
  const buttons = document.querySelectorAll(".button-favorite");

  function toggleActive() {
    this.classList.toggle("active");
    const isActive = this.classList.contains("active");
    const productId = this.getAttribute('data-productId');

    let favorites = JSON.parse(localStorage.getItem("favorites")) || {};

    if (productId) {
      if (isActive) {
        favorites[productId] = true;
      } else {
        delete favorites[productId];
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      console.error("O atributo data-productId não está definido para este botão.");
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", toggleActive);

    // Verifica se o produto está marcado como favorito e atualiza o botão
    const productId = button.getAttribute('data-productId');
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

    if (favorites[productId]) {
      button.classList.add('active');
    }
  });
}
