export default function activeCart() {
  //====cart=====
  const buttonCart = document.querySelector(".cartIcon");
  const btnCartMobile = document.querySelector(".cartIcon-mobile");
  const buttonClose = document.querySelector(".closeCart");
  const cartRight = document.querySelector(".cart");
  const body = document.querySelector("body");
  const backgroundClose = document.querySelector(".background-black");
  //====buy product=====
  const buttonBuy = document.querySelectorAll(".product-link");
  //====open list=====
  const listaBotoes = document.querySelectorAll(".menu-lista-mobile-topo");

  //====cart=====

  buttonCart.addEventListener("click", () => {
    cartRight.classList.add("active");
    body.classList.add("hidden");
  });

  btnCartMobile.addEventListener("click", () => {
    cartRight.classList.add("active");
    body.classList.add("hidden");
  });

  buttonClose.addEventListener("click", () => {
    cartRight.classList.remove("active");
    body.classList.remove("hidden");
  });

  backgroundClose.addEventListener("click", () => {
    cartRight.classList.remove("active");
    body.classList.remove("hidden");
  });

  //====buy product=====

  buttonBuy.forEach(button => {
    button.addEventListener("click", () => {
      cartRight.classList.add("active");
      body.classList.add("hidden");
    });

  });

  //====open list=====

  listaBotoes.forEach(botao => {
    botao.addEventListener("click", function () {
      botao.classList.toggle("rotate");
      const container = this.closest(".menu-lista-mobile-topo");
      const subLista = container.nextElementSibling;
      if (subLista.classList.contains("sub-list-mobile")) {
        subLista.classList.toggle("open");
      }
    });
  });

}
