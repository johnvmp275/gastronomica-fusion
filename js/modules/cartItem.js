export default function initCartItem() {
  const buttonAdd = document.querySelectorAll(".product-link");

  function tester() {
    this.classList.add("teste");
  }

  buttonAdd.forEach((teste) => {
    teste.addEventListener("click", tester);
  });
}
