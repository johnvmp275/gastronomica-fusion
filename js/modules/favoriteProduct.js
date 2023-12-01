export default function activeItemsProducts() {
  const buttons = document.querySelectorAll(".button-favorite");

  function toggleActive() {
    this.classList.toggle("active");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", toggleActive);
  });

  //   console.log(buttons)
}
