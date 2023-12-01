import activeItemsProducts from "./favoriteProduct.js";

export default function fetchProducts() {
  // Função para inicializar o Swiper
  function initiializeCategorias() {
    //=====swiper de categorias====
    new Swiper(".swiper-categorias", {
      slidesPerView: 5,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      },
    });
  }

  function initializeProduto() {
    //=====swiper de produtos====

    new Swiper(".swiper-products", {
      slidesPerView: 5,
      spaceBetween: 40,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      },
    });
  }

  function initializePrincipalBanner() {
    new Swiper(".swiper-principal-banner", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  function initializeBannerSecundario() {
    new Swiper(".swiper-secundario-banner", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  async function fetchProductsPrimario() {
    try {
      const response = await fetch("./json/slidePrimario.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(".swiper-products-slide");

      data.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-products");
        newSlide.innerHTML = `
                <div class="product-favorite">
                        <button class="button-favorite">
                            <img src="./img/favorite.png" alt="favorite">
                            <img src="./img/favorite-active.png" alt="favorite-active">
                        </button>
                    </div>
                    <div class="product-image">
                        <img src="./img/${product.image}" alt="${product.title}">
                    </div>
                        <p>${product.title}</p>
                        <strong>${product.price},00</strong>
                        <a class="product-link">Comprar</a>
                    </div>
                `;
        swiperWrapper.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  async function fetchProductsSecundario() {
    try {
      const response = await fetch("./json/slideSecundario.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(
        ".swiper-products-slideSecundario"
      );

      data.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-products");
        newSlide.innerHTML = `
                <div class="product-favorite">
                        <button class="button-favorite">
                            <img src="./img/favorite.png" alt="favorite">
                            <img src="./img/favorite-active.png" alt="favorite-active">
                        </button>
                    </div>
                    <div class="product-image">
                        <img src="./img/${product.image}" alt="${product.title}">
                    </div>
                        <p>${product.title}</p>
                        <strong>${product.price},00</strong>
                        <a class="product-link">Comprar</a>
                    </div>
                `;
        swiperWrapper.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  async function fetchProductsTerceiro() {
    try {
      const response = await fetch("./json/slideTerceiro.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(
        ".swiper-products-slideTerceiro"
      );

      data.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-products");
        newSlide.innerHTML = `
                <div class="product-favorite">
                        <button class="button-favorite">
                            <img src="./img/favorite.png" alt="favorite">
                            <img src="./img/favorite-active.png" alt="favorite-active">
                        </button>
                    </div>
                    <div class="product-image">
                        <img src="./img/${product.image}" alt="${product.title}">
                    </div>
                        <p>${product.title}</p>
                        <strong>${product.price},00</strong>
                        <a class="product-link">Comprar</a>
                    </div>
                `;
        swiperWrapper.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  async function fetchCategories() {
    try {
      const response = await fetch("./json/slideCategories.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(".swiper-categories-slide");

      data.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-categorias");
        newSlide.innerHTML = `
                <div class="product-image">
                            <img src="./img/${product.image}" alt="${product.title}" srcset="">
                        </div>
                        <strong>${product.title}</strong>
                `;
        swiperWrapper.appendChild(newSlide);
      });

      // Inicialize o Swiper após adicionar os slides
      initiializeCategorias();
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  async function fetchBannerPrincipal() {
    try {
      const response = await fetch("./json/bannerPrincipal.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(".swiper-banner-principal");

      data.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide");
        newSlide.innerHTML = `
                        <img src="./img/${product.image}" alt="${product.title}">
                `;
        swiperWrapper.appendChild(newSlide);
      });
      initializePrincipalBanner();
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  async function fetchBannerSecundario() {
    try {
      const response = await fetch("./json/bannerSecundario.json");
      const data = await response.json();
      const swiperWrapper = document.querySelector(".swiper-banner-secundario");

      data.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide");
        newSlide.innerHTML = `
                        <img src="./img/${product.image}" alt="${product.title}">
                `;
        swiperWrapper.appendChild(newSlide);
      });
      initializeBannerSecundario();
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  async function fetchMidias() {
    try {
      const response = await fetch("./json/midiasIcons.json");
      const data = await response.json();

      const divContainer = document.querySelector(".list-social-medias");

      data.forEach((product) => {
        let newSlide = document.createElement("li");
        newSlide.innerHTML = `
              <a href="${product.link}" target="${product.target}">
              <img src="./img/${product.image}" alt="${product.title}">
              </a>
                `;
        divContainer.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  async function fetchInstashop() {
    try {
      const response = await fetch("./json/instashop.json");
      const data = await response.json();

      const divContainer = document.querySelector(".instagram-posts");

      data.slice(0, 6).forEach((product) => {
        let newSlide = document.createElement("a");
        newSlide.setAttribute("href", product.link);
        newSlide.setAttribute("target", product.target);
        newSlide.classList.add("instagram-post");
        newSlide.innerHTML = `
             
              <img src="./img/${product.image}" alt="${product.title}">
              <span class="instashopHover material-symbols-outlined">
              shopping_bag
              </span>
                `;
        divContainer.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", fetchMidias);
  document.addEventListener("DOMContentLoaded", fetchCategories);
  document.addEventListener("DOMContentLoaded", fetchBannerPrincipal);
  document.addEventListener("DOMContentLoaded", fetchInstashop);

  async function awaitProduct() {
    await fetchProductsPrimario();
    await fetchProductsSecundario();
    await fetchProductsTerceiro();

    initializeProduto();

    document.addEventListener("DOMContentLoaded", fetchProductsPrimario);
    document.addEventListener("DOMContentLoaded", fetchProductsSecundario);
    document.addEventListener("DOMContentLoaded", fetchProductsTerceiro);

    activeItemsProducts();
  }

  awaitProduct();
  // Adicione um listener para quando o DOM estiver pronto


}
