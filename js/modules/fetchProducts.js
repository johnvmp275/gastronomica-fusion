import activeItemsProducts from "./favoriteProduct.js";
import addToCard from "./cartItem.js";
import activeCart from "./activeCart.js";

export default function fetchProducts() {
  // Função para inicializar o Swiper
  function initiializeCategorias() {
    //=====swiper de categorias====
    new Swiper(".swiper-categorias", {
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
          slidesPerView: 1.8,
          spaceBetween: 0,
        },
        720: {
          slidesPerView: 4.3,
          spaceBetween: 10,
        },
      },
    });
  }

  function initializeProduto() {
    //=====swiper de produtos====

    new Swiper(".swiper-products", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 5.3,
          spaceBetween: 10,
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

  async function fetchMenu() {
    try {
      // Fetch do JSON do menu
      const response = await fetch("./json/menu/menu.json"); // Substitua pelo caminho correto do seu arquivo JSON de menu
      const menuData = await response.json();

      // Geração dinâmica do menu
      const menuContainer = document.querySelector(".menuMain");
      menuContainer.innerHTML = generateMenuHTML(menuData.menu);

      function generateMenuHTML(menu) {
        let html = "";
        menu.slice(0, 9).forEach((item) => {
          html += `<li class="navigation-item"><a href="" class="navigationLink">${item.name}</a>`;
          if (item.submenus && item.submenus.length > 0) {
            html += `<div class="sub-container">
                       <div class="navigation-container__dropdown">
                         <ul class="navigation-dropdown">`;
            item.submenus.forEach((subitem) => {
              html += `<li><a href="">${subitem.nvl1}</a>`;
              if (subitem.nvl2 && subitem.nvl2.length > 0) {
                html += `<div class="sub-container-dropdown">
                           <div class="sub-navigation-container__dropdown">
                             <ul>`;
                subitem.nvl2.forEach((subsubitem) => {
                  html += `<li><a href="">${subsubitem.nvl3}</a></li>`;
                });
                html += `</ul></div></div>`;
              }
              html += `</li>`;
            });
            html += `</ul><div class="banner-dropdown">
                       <img src="${item.banner}" alt="" srcset="">
                     </div></div></div>`;
          }
          html += `</li>`;
        });
        return html;
      }

      document.querySelectorAll(".navigation-item").forEach((item) => {
        item.addEventListener("mouseover", function () {
          const subContainer = this.querySelector(".sub-container");
          if (subContainer) {
            document.querySelector(".header-navigation__black").style.display =
              "block";
          }
        });
      });

      document.querySelectorAll(".navigation-item").forEach((item) => {
        item.addEventListener("mouseout", function () {
          document.querySelector(".header-navigation__black").style.display =
            "none";
        });
      });
    } catch (error) {
      console.error("Houve um erro ao buscar o menu:", error);
    }
  }

  // Primeira vitrine de produtos

  async function fetchProductsPrimario() {
    try {
      const response = await fetch("./json/produto/vitrine/produtos.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(".swiper-products-slide");
      const segundoSlide = data.primeiro_slide;

      segundoSlide.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-products");
        newSlide.innerHTML = `
              <div class="product-favorite">
                  <button class="button-favorite" data-productId="${product.id}">
                      <img src="./img/favorite.png" alt="favorite">
                      <img src="./img/favorite-active.png" alt="favorite-active">
                  </button>
              </div>
              <div class="product-image">
                  <img src="./img/${product.image}" alt="${product.title}">
              </div>
              <p>${product.title}</p>
              <strong>${product.price},00</strong>
                <button class="product-link" onclick="addToCard(${product.id})">Comprar</button>
          `;
        const productLinkButton = newSlide.querySelector(".product-link");
        productLinkButton.addEventListener("click", () => {
          addToCard(product.id);
        });
        swiperWrapper.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  // Segunda vitrine de produtos

  async function fetchProductsSecundario() {
    try {
      const response = await fetch("./json/produto/vitrine/produtos.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(
        ".swiper-products-slideSecundario"
      );
      const segundoSlide = data.segundo_slide;

      segundoSlide.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-products");
        newSlide.innerHTML = `
              <div class="product-favorite">
                  <button class="button-favorite" data-productId="${product.id}">
                      <img src="./img/favorite.png" alt="favorite">
                      <img src="./img/favorite-active.png" alt="favorite-active">
                  </button>
              </div>
              <div class="product-image">
                  <img src="./img/${product.image}" alt="${product.title}">
              </div>
              <p>${product.title}</p>
              <strong>${product.price},00</strong>
                <button class="product-link" onclick="addToCard(${product.id})">Comprar</button>
          `;
        const productLinkButton = newSlide.querySelector(".product-link");
        productLinkButton.addEventListener("click", () => {
          addToCard(product.id);
        });
        swiperWrapper.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  // Terceira vitrine de produtos

  async function fetchProductsTerceiro() {
    try {
      const response = await fetch("./json/produto/vitrine/produtos.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(
        ".swiper-products-slideTerceiro"
      );

      const terceiroSlide = data.terceiro_slide;

      terceiroSlide.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-products");
        newSlide.innerHTML = `
                <div class="product-favorite">
                    <button class="button-favorite" data-productId="${product.id}">
                        <img src="./img/favorite.png" alt="favorite">
                        <img src="./img/favorite-active.png" alt="favorite-active">
                    </button>
                </div>
                <div class="product-image">
                    <img src="./img/${product.image}" alt="${product.title}">
                </div>
                <p>${product.title}</p>
                <strong>${product.price},00</strong>
                  <button class="product-link" onclick="addToCard(${product.id})">Comprar</button>
            `;
        const productLinkButton = newSlide.querySelector(".product-link");
        productLinkButton.addEventListener("click", () => {
          addToCard(product.id);
        });
        swiperWrapper.appendChild(newSlide);
      });
    } catch (error) {
      console.error("Houve um erro ao buscar os produtos:", error);
    }
  }

  //fetch categorias de produtos

  async function fetchCategories() {
    try {
      const response = await fetch(
        "./json/produto/categorias/categoriasProdutos.json"
      );
      const data = await response.json();

      const swiperWrapper = document.querySelector(".swiper-categories-slide");

      data.forEach((product) => {
        let newSlide = document.createElement("div");
        newSlide.classList.add("swiper-slide", "slide-categorias");
        newSlide.innerHTML = `
                <div class="categoria-card">
                            <img class="categorias-image" src="./img/${product.image}" alt="${product.title}" srcset="">
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

  //fetch banner

  async function fetchBannerPrincipal() {
    try {
      const response = await fetch("./json/banner/banners.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(".swiper-banner-principal");
      const primeiroBanner = data.banner_principal;

      primeiroBanner.forEach((product) => {
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

  //fetch banner

  async function fetchBannerSecundario() {
    try {
      const response = await fetch("./json/banner/banners.json");
      const data = await response.json();

      const swiperWrapper = document.querySelector(".swiper-banner-secundario");
      const segundoBanner = data.segundo_banner;

      segundoBanner.forEach((product) => {
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

  //Midias digitais fetch

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

  //Instagram shop Fetch

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

  async function fecthInstitucional() {
    try {
      // Fetch do JSON do menu
      const response = await fetch("./json/menu/institucionais.json"); // Substitua pelo caminho correto do seu arquivo JSON de menu
      const menuData = await response.json();

      // Geração dinâmica do menu
      const menuContainer = document.querySelector(
        ".rodape-menu-lista-desktop"
      );
      menuContainer.innerHTML = generateMenuHTML(menuData.menu);

      function generateMenuHTML(menu) {
        let html = "";
        menu.forEach((item) => {
          html += `<li class="list-rodape"><a href="" class="navigationLink">${item.name}</a>`;

          if (item.submenus && item.submenus.length > 0) {
            html += `<ul class="sub-list-rodape">`;
            item.submenus.forEach((subitem) => {
              html += `<li><a href="">${subitem.nvl1}</a></li>`;
            });
            html += `</ul>`;
          }

          html += `</li>`;
        });
        return html;
      }
    } catch (error) {
      console.error("Houve um erro ao buscar o menu:", error);
    }
  }

  async function fecthInstitucionalMobile() {
    try {
      // Fetch do JSON do menu
      const response = await fetch("./json/menu/institucionais.json"); // Substitua pelo caminho correto do seu arquivo JSON de menu
      const menuData = await response.json();

      // Geração dinâmica do menu
      const menuContainer = document.querySelector(
        ".rodape-lista-mobile"
      );
      menuContainer.innerHTML = generateMenuHTML(menuData.menu);

        function generateMenuHTML(menu) {
          let html = "";
          menu.forEach((item) => {
            html += `<ul class="rodape-menu-lista-mobile"> <div class="menu-lista-mobile-topo">
          <span>${item.name}</span>
          <button type="button" class="lista-open">
              <span class="material-symbols-outlined ">
                  expand_more
              </span>
                 </button>
             </div>`;

            if (item.submenus && item.submenus.length > 0) {
              html += ` <ul class="sub-list-mobile">`;
              item.submenus.forEach((subitem) => {
                html += `<li  class="list-mobile-open"><a href="">${subitem.nvl1}</a></li>`;
              });
              html += `</ul>`;
            }

            html += `</ul>`;
          });
          return html;
        }
    } catch (error) {
      console.error("Houve um erro ao buscar o menu:", error);
    }
  }


  async function fecthselos() {
    try {
      // Fetch do JSON do menu
      const response = await fetch("./json/menu/selos.json"); // Substitua pelo caminho correto do seu arquivo JSON de menu
      const menuData = await response.json();

      // Geração dinâmica do menu
      const menuContainer = document.querySelector(".selos-rodape-menu");
      menuContainer.innerHTML = generateMenuHTML(menuData.menu);

      function generateMenuHTML(menu) {
        let html = "";
        menu.forEach((item) => {
          html += `<li class="list-rodape"><a href="" class="navigationLink">${item.name}</a>`;

          if (item.submenus && item.submenus.length > 0) {
            html += `<ul class="sub-list-rodape">`;
            item.submenus.forEach((subitem) => {
              if (subitem && subitem.imagem) {
                html += `<a class="selos-rodape" href=""><img src="./img/${subitem.imagem}" alt="selos"></a>`;
              } else {
                html += ``;
              }
            });
            html += `</ul>`;
          }

          html += `</li>`;
        });
        return html;
      }
    } catch (error) {
      console.error("Houve um erro ao buscar o menu:", error);
    }
  }

  //inicialização do carregamento de itens

  async function awaitProduct() {
    await fetchProductsPrimario();
    await fetchProductsSecundario();
    await fetchProductsTerceiro();
    await fetchMidias();
    await fetchMenu();
    await fecthInstitucional();
    await fecthselos();
    await fecthInstitucionalMobile();

    initializeProduto();

    document.addEventListener("DOMContentLoaded", fetchProductsPrimario);
    document.addEventListener("DOMContentLoaded", fetchProductsSecundario);
    document.addEventListener("DOMContentLoaded", fetchProductsTerceiro);
    document.addEventListener("DOMContentLoaded", fetchMidias);
    document.addEventListener("DOMContentLoaded", fetchMenu);
    document.addEventListener("DOMContentLoaded", fecthInstitucional);
    document.addEventListener("DOMContentLoaded", fecthselos);
    document.addEventListener("DOMContentLoaded", fecthInstitucionalMobile);

    activeItemsProducts();
    activeCart();
  }

  awaitProduct();
  // Adicione um listener para quando o DOM estiver pronto

  document.addEventListener("DOMContentLoaded", fetchCategories);
  document.addEventListener("DOMContentLoaded", fetchBannerPrincipal);
  document.addEventListener("DOMContentLoaded", fetchBannerSecundario);
  document.addEventListener("DOMContentLoaded", fetchInstashop);

}
