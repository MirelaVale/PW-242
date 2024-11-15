let contadorCarrinho = 0;
let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    contadorCarrinho++;
    document.getElementById('contadorCarrinho').innerText = contadorCarrinho;
    alert(`${produto} foi adicionado ao carrinho!`);
}

function mostrarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = ''; // Limpa a lista antes de exibir

    carrinho.forEach((produto, index) => {
        const item = document.createElement('li');
        item.innerHTML = `${produto} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        listaCarrinho.appendChild(item);
    });

    document.getElementById('modalCarrinho').style.display = 'flex';
}

function fecharCarrinho() {
    document.getElementById('modalCarrinho').style.display = 'none';
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o item do array
    contadorCarrinho--;
    document.getElementById('contadorCarrinho').innerText = contadorCarrinho;
    mostrarCarrinho(); // Atualiza a visualização do carrinho
}

function mostrarContato() {
    document.getElementById('modalContato').style.display = 'flex';
}

function fecharContato() {
    document.getElementById('modalContato').style.display = 'none';
}

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    fecharContato(); // Fecha o modal após o envio
});
