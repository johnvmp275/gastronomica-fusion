import activeItemsProducts from "./favoriteProduct.js";

export default function fetchProducts() {

    // Função para inicializar o Swiper

    function initializeSwiper() {

        //=====swiper de categorias====
        var swiper = new Swiper(".swiper-categorias", {
            slidesPerView: 5,
            spaceBetween: 40,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }, breakpoints: {
                0: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                720: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
            },
        });


    }

    function initializeProdutoPrincipal() {
        //=====swiper de produtos====

        var swiper = new Swiper(".swiper-products", {
            slidesPerView: 5,
            spaceBetween: 40,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }, breakpoints: {
                0: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                720: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
            },
        });
    }
    function initializeProdutoSecundario() {
        //=====swiper de produtos====

        var swiper = new Swiper(".swiper-products-secundario", {
            slidesPerView: 5,
            spaceBetween: 40,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }, breakpoints: {
                0: {
                    slidesPerView: 3,
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
        var swiper = new Swiper(".swiper-banner", {
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
        var swiper = new Swiper(".swiper-banner-secundario", {
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
            const response = await fetch('./json/slidePrimario.json');
            const data = await response.json();

            const swiperWrapper = document.querySelector('.swiper-products-slide');

            data.forEach(product => {
                let newSlide = document.createElement('div');
                newSlide.classList.add('swiper-slide', 'slide-products');
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

            // Inicialize o Swiper após adicionar os slides
            initializeProdutoPrincipal();
        } catch (error) {
            console.error('Houve um erro ao buscar os produtos:', error);
        }
    }

    async function fetchProductsSecundario() {
        try {
            const response = await fetch('./json/slideSecundario.json');
            const data = await response.json();

            const swiperWrapper = document.querySelector('.swiper-products-slideSecundario');

            data.forEach(product => {
                let newSlide = document.createElement('div');
                newSlide.classList.add('swiper-slide', 'slide-products');
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
            initializeProdutoSecundario()
            activeItemsProducts();
        } catch (error) {
            console.error('Houve um erro ao buscar os produtos:', error);
        }
    }

    async function fetchCategories() {
        try {
            const response = await fetch('./json/slideCategories.json');
            const data = await response.json();

            const swiperWrapper = document.querySelector('.swiper-categories-slide');

            data.forEach(product => {
                let newSlide = document.createElement('div');
                newSlide.classList.add('swiper-slide', 'slide-categorias');
                newSlide.innerHTML = `
                <div class="product-image">
                            <img src="./img/${product.image}" alt="${product.title}" srcset="">
                        </div>
                        <strong>${product.title}</strong>
                `;
                swiperWrapper.appendChild(newSlide);
            });

            // Inicialize o Swiper após adicionar os slides
            initializeSwiper();
        } catch (error) {
            console.error('Houve um erro ao buscar os produtos:', error);
        }
    }

    async function fetchBannerPrincipal() {
        try {
            const response = await fetch('./json/bannerPrincipal.json');
            const data = await response.json();

            const swiperWrapper = document.querySelector('.swiper-banner-principal');

            data.forEach(product => {
                let newSlide = document.createElement('div');
                newSlide.classList.add('swiper-slide');
                newSlide.innerHTML = `
                        <img src="./img/${product.image}" alt="${product.title}">
                `;
                swiperWrapper.appendChild(newSlide);

            });
            initializePrincipalBanner()
        } catch (error) {
            console.error('Houve um erro ao buscar os produtos:', error);
        }
    }

    async function fetchBannerSecundario() {
        try {
            const response = await fetch('./json/bannerSecundario.json');
            const data = await response.json();

            const swiperWrapper = document.querySelector('.swiper-banner-secundario');

            data.forEach(product => {
                let newSlide = document.createElement('div');
                newSlide.classList.add('swiper-slide');
                newSlide.innerHTML = `
                        <img src="./img/${product.image}" alt="${product.title}">
                `;
                swiperWrapper.appendChild(newSlide);
            });
            initializeSwiperBanner() 
        } catch (error) {
            console.error('Houve um erro ao buscar os produtos:', error);
        }
    }

    // Adicione um listener para quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', fetchProductsPrimario);
    document.addEventListener('DOMContentLoaded', fetchProductsSecundario);
    document.addEventListener('DOMContentLoaded', fetchCategories);
    document.addEventListener('DOMContentLoaded', fetchBannerPrincipal);
    document.addEventListener('DOMContentLoaded', fetchBannerSecundario);
}
