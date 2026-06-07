const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTableBody");

function carregarProdutos() {
    fetch('http://localhost:3000/produtos')
        .then(res => res.json())
        .then(data => {
            tableBody.innerHTML = "";

            data.forEach(produto => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${produto.id}</td>
                    <td>${produto.nome}</td>
                    <td>R$ ${parseFloat(produto.preco).toFixed(2)}</td>
                    <td>${produto.quantidade}</td>
                    <td>
                        <button onclick="deletarProduto(${produto.id})">Excluir</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        });
}

// CREATE (salvar no banco)
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            preco,
            quantidade
        })
    })
    .then(res => res.json())
    .then(() => {
        form.reset();
        carregarProdutos();
    });
});

// DELETE
function deletarProduto(id) {
    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(() => carregarProdutos());
}

// carregar ao abrir página
carregarProdutos();