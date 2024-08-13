function redirectToOptionsPage() {
    // Redirecione para a outra página com opções
    window.location.href = 'pag2.html';
}

function addToCart(item) {
    // Cria um novo elemento div para representar o item no carrinho
    var cartItem = document.createElement('div');
    cartItem.innerHTML = item;

    // Adiciona o item ao carrinho
    document.getElementById('cart').appendChild(cartItem);
  }