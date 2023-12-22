// cartItem.js
function checkCartEmpty() {
    setupRemoveItem();
    const carrinhoContainer = document.querySelector('.carrinho-container');
    const cartItems = carrinhoContainer.querySelectorAll('.cart-item');
    const cartRodape = document.querySelector('.carrinho-rodape');

    if (!cartItems.length) {
        carrinhoContainer.innerHTML =
            `<div class="carrinho-vazio"><span>O SEU CARRINHO ESTÁ VAZIO :(</span>
         <p>
         Que tal explorar mais? Continue 
         navegando pelo site e descubra mais produtos 
         incríveis para preencher seu carrinho de compras!
         </p>
         </div>`;

        cartRodape.style.display = 'none';
    } else {
        cartRodape.style.display = 'block';
    }
}

function addQuantityEvents(container) {
    container.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('btn-adicionar')) {
            const inputValor = target.parentElement.querySelector('.item-valor');
            let valor = parseInt(inputValor.value);
            valor++;
            inputValor.value = valor;
        } else if (target.classList.contains('btn-diminuir')) {
            const inputValor = target.parentElement.querySelector('.item-valor');
            if (inputValor.value >= 2) {
                let valor = parseInt(inputValor.value);
                valor--;
                inputValor.value = valor;
            }
        }
    });
}

export default function addToCart(productId) {


    fetch('./json/produto/vitrine/produtos.json')
        .then(response => response.json())
        .then(data => {
            const produtos = [...data.primeiro_slide, ...data.segundo_slide, ...data.terceiro_slide];
            const product = produtos.find(item => item.id === parseInt(productId));

            if (product) {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                        <div class="cart-image">
                            <img src="./img/${product.image}" alt="${product.title}">
                        </div>
                        <div class="detalhe-produto">
                        <div class="detalhe-topo">
                        <p>${product.title}</p>
                        <span class="material-symbols-outlined delete">
                         delete
                        </span>
                        </div>
                        <strong>${product.price},00</strong>
                        <div class="item-rodape">
                        <p>Quantidade:</p>
                        <div class="item-qtd">
                        <button type="button" class="btn-diminuir">
                        -
                        </button>
                        <input type="tel" value="1" class="item-valor">
                        <button type="button" class="btn-adicionar">
                        +
                        </button>
                        </div>
                `;


                const carrinhoContainer = document.querySelector('.carrinho-container');

                // Verifica se o produto já está no carrinho antes de adicioná-lo
                const alreadyInCart = Array.from(carrinhoContainer.querySelectorAll('.cart-item')).find(item => {
                    return item.dataset.productId === `${product.id}`;
                });



                const carrinhoVazio = carrinhoContainer.querySelector('.carrinho-vazio');
                if (carrinhoVazio) {
                    carrinhoVazio.remove();
                }

                if (!alreadyInCart) {
                    cartItem.dataset.productId = product.id;
                    carrinhoContainer.appendChild(cartItem);

                    checkCartEmpty();

                    addQuantityEvents(cartItem);

                    let produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) || {};
                    produtosLocalStorage[product.id] = {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image
                    };
                    localStorage.setItem('produtos', JSON.stringify(produtosLocalStorage));

                } else {
                    console.log('Produto já está no carrinho.');
                }
            } else {
                console.error('Produto não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao adicionar ao carrinho:', error));
}

// Verifica se o carrinho está vazio e exibe a mensagem adequada

// Adicionar um event listener para os botões de compra
document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    checkCartEmpty();
    const buyButtons = document.querySelectorAll('.product-link');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
        });
    });

    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        addQuantityEvents(item);
    });
});

function renderCartItems() {
    const carrinhoContainer = document.querySelector('.carrinho-container');
    carrinhoContainer.innerHTML = '';

    const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) || {};

    Object.values(produtosLocalStorage).forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.dataset.productId = product.id;
        cartItem.innerHTML = `
            <div class="cart-image">
                <img src="./img/${product.image}" alt="${product.title}">
            </div>
            <div class="detalhe-produto">
                <div class="detalhe-topo">
                    <p>${product.title}</p>
                    <span class="material-symbols-outlined delete">
                        delete
                    </span>
                </div>
                <strong>${product.price},00</strong>
                <div class="item-rodape">
                    <p>Quantidade:</p>
                    <div class="item-qtd">
                        <button type="button" class="btn-diminuir">-</button>
                        <input type="tel" value="1" class="item-valor">
                        <button type="button" class="btn-adicionar">+</button>
                    </div>
                </div>
            </div>
        `;
        carrinhoContainer.appendChild(cartItem);

        addQuantityEvents(cartItem);

    });
}

function setupRemoveItem() {
    const carrinhoContainer = document.querySelector('.carrinho-container');
    const removeButtons = carrinhoContainer.querySelectorAll('.delete');
    const cartItems = carrinhoContainer.querySelectorAll('.cart-item');

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener('click', () => {
            cartItems[index].remove();
            checkCartEmpty();

            const itemToRemove = removeButton.closest('.cart-item');
            const productIdToRemove = itemToRemove.dataset.productId;

            // Remove o item do localStorage
            let produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) || {};
            delete produtosLocalStorage[productIdToRemove];
            localStorage.setItem('produtos', JSON.stringify(produtosLocalStorage));
        });
    });
}
