export default function activeCart() {
  //====cart=====
  const buttonCart = document.querySelector(".cartIcon");
  const btnCartMobile = document.querySelector(".cartIcon-mobile");
  const buttonClose = document.querySelector(".closeCart");
  const cartRight = document.querySelector(".cart");
  const body = document.querySelector("body");
  const backgroundClose = document.querySelector(".background-black");
  const buttonBuy = document.querySelectorAll(".product-link");

  buttonCart.addEventListener("click", () => {
    cartRight.classList.add("active");
    body.classList.add("hidden");
  });

  buttonBuy.forEach(button => {
    button.addEventListener("click", () => {
      cartRight.classList.add("active");
      body.classList.add("hidden");
    });
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

}
