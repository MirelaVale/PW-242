// Recupera o carrinho do localStorage ou inicia um novo array
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Atualiza o contador do carrinho
function atualizarContadorCarrinho() {
    document.getElementById("contadorCarrinho").innerText = carrinho.length;
}

// Atualiza o contador ao carregar a página
atualizarContadorCarrinho();

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    carrinho.push(nomeProduto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();

    alert(`${nomeProduto} adicionado ao carrinho!`);
}

// Função para exibir os produtos no carrinho
function mostrarCarrinho() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        let listaProdutos = carrinho.map((item, index) => `${index + 1}. ${item}`).join("<br>");
        document.getElementById("modalCarrinho").innerHTML = `<p><strong>Produtos no Carrinho:</strong></p><p>${listaProdutos}</p>`;
        $('#carrinhoModal').modal('show'); // Usa Bootstrap para exibir um modal
    }
}

// Função para mostrar o contato
function mostrarContato() {
    alert("Contato: contato@coresdopulso.com");
}

// Função para carregar os produtos da API e exibi-los no HTML
async function carregarProdutos() {
    try {
        const response = await fetch('/products/all');
        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
        }

        const produtos = await response.json();
        let html = '';

        produtos.forEach(produto => {
            html += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                        <div class="card-body">
                            <h3>${produto.nome}</h3>
                            <p>${produto.descricao}</p>
                            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                            <button class="btn btn-danger w-100" onclick="adicionarAoCarrinho('${produto.nome}')">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>`;
        });

        document.getElementById('produtos-container').innerHTML = html;
    } catch (err) {
        console.error('Erro ao carregar produtos:', err);
        document.getElementById('produtos-container').innerHTML = "<p class='text-danger'>Erro ao carregar produtos.</p>";
    }
}

document.addEventListener('DOMContentLoaded', carregarProdutos);
