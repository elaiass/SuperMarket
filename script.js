// Função para atualizar o número de itens no carrinho
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    document.getElementById('total-items').textContent = carrinho.length;
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(event) {
    const botao = event.target;

    // Pegando as informações do produto a partir dos atributos data
    const id = botao.getAttribute('data-id');
    const nome = botao.getAttribute('data-nome');
    const preco = parseFloat(botao.getAttribute('data-preco'));

    // Criar o item do carrinho
    const item = { id, nome, preco };

    // Recuperando o carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adicionando o item ao carrinho
    carrinho.push(item);

    // Salvando o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualizando o número de itens no carrinho
    atualizarCarrinho();
}

// Função para exibir os itens no modal do carrinho
function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaItens = document.getElementById('itens-carrinho');

    // Limpando a lista de itens
    listaItens.innerHTML = '';

    // Verificando se o carrinho está vazio e exibindo uma mensagem, caso necessário
    if (carrinho.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Carrinho vazio';
        listaItens.appendChild(li);
    } else {
        // Adicionando cada item do carrinho à lista
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            listaItens.appendChild(li);
        });
    }

    // Exibir o modal
    document.getElementById('modal-carrinho').style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal-carrinho').style.display = 'none';
}

// Função para limpar o carrinho
function limparCarrinho() {
    // Limpa o carrinho no localStorage
    localStorage.removeItem('carrinho');
    
    // Atualiza o carrinho na interface (modal)
    mostrarCarrinho();  // Chama a função que exibe o carrinho, que agora estará vazio
    
    // Atualiza o número de itens no carrinho
    atualizarCarrinho();
}

// Atribuindo eventos aos botões
const botoesAdicionar = document.querySelectorAll('.adicionar');
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', adicionarAoCarrinho);
});

document.getElementById('carrinho-btn').addEventListener('click', mostrarCarrinho);
document.getElementById('fechar-modal').addEventListener('click', fecharModal);
document.getElementById('limpar-carrinho').addEventListener('click', limparCarrinho);

// Função para exibir os itens no modal do carrinho
function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaItens = document.getElementById('itens-carrinho');
    const valorTotal = document.getElementById('valor-total');  // Referência para o elemento que exibirá o total

    // Limpando a lista de itens
    listaItens.innerHTML = '';

    // Inicializando o total
    let total = 0;

    // Verificando se o carrinho está vazio e exibindo uma mensagem, caso necessário
    if (carrinho.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Carrinho vazio';
        listaItens.appendChild(li);
    } else {
        // Adicionando cada item do carrinho à lista
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            listaItens.appendChild(li);

            // Somando o preço de cada item ao total
            total += item.preco;
        });

        // Atualizando o valor total no modal
        valorTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    // Exibir o modal
    document.getElementById('modal-carrinho').style.display = 'flex';
}

// Função para limpar o carrinho
function limparCarrinho() {
    // Limpa o carrinho no localStorage
    localStorage.removeItem('carrinho');
    
    // Atualiza o carrinho na interface (modal)
    mostrarCarrinho();  // Chama a função que exibe o carrinho, que agora estará vazio
    
    // Atualiza o número de itens no carrinho
    atualizarCarrinho();
}


// Atualizar o carrinho na primeira carga da página
atualizarCarrinho();



 