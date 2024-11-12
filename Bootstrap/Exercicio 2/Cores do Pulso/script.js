function adicionarAoCarrinho(produto) {
    alert(`${produto} foi adicionado ao carrinho!`);
}

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
