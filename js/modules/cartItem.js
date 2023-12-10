// cartItem.js
export default function addToCart(productId) {
    fetch('./json/produtos.json')
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
                        <p>${product.title}</p>
                        <strong>${product.price},00</strong>
                        <div>
                `;

                const carrinhoContainer = document.querySelector('.carrinho-container');

                // Verifica se o produto já está no carrinho antes de adicioná-lo
                const alreadyInCart = Array.from(carrinhoContainer.querySelectorAll('.cart-item')).find(item => {
                    return item.dataset.productId === `${product.id}`;
                });

                if (!alreadyInCart) {
                    cartItem.dataset.productId = product.id;
                    carrinhoContainer.appendChild(cartItem);
                } else {
                    console.log('Produto já está no carrinho.');
                }
            } else {
                console.error('Produto não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao adicionar ao carrinho:', error));
}

// Adicionar um event listener para os botões de compra
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product-link');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
        });
    });
});
