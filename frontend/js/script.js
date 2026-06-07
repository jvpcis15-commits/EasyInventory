const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTableBody");

let editandoId = null;


// 📌 CARREGAR PRODUTOS (READ)
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
                    <td>R$ ${Number(produto.preco).toFixed(2)}</td>
                    <td>${produto.quantidade}</td>
                    <td>${produto.categoria || '-'}</td>
                    <td>
                        <button onclick="editarProduto(
                            ${produto.id},
                            '${produto.nome}',
                            ${produto.preco},
                            ${produto.quantidade},
                            '${produto.categoria || ''}'
                        )">Editar</button>

                        <button onclick="deletarProduto(${produto.id})">Excluir</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(err => console.error("Erro ao carregar produtos:", err));
}


// 📌 CREATE + UPDATE
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const categoria = document.getElementById("categoria").value;

    const dados = {
        nome,
        preco,
        quantidade,
        categoria
    };

    // 🔥 EDITAR (PUT)
    if (editandoId) {
        fetch(`http://localhost:3000/produtos/${editandoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(res => res.json())
        .then(() => {
            editandoId = null;
            form.reset();
            carregarProdutos();
        })
        .catch(err => console.error(err));

    } else {
        // 🔥 CRIAR (POST)
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(res => res.json())
        .then(() => {
            form.reset();
            carregarProdutos();
        })
        .catch(err => console.error(err));
    }
});


// 📌 EDITAR PRODUTO
function editarProduto(id, nome, preco, quantidade, categoria) {
    document.getElementById("nome").value = nome;
    document.getElementById("preco").value = preco;
    document.getElementById("quantidade").value = quantidade;
    document.getElementById("categoria").value = categoria;

    editandoId = id;
}


// 📌 DELETE
function deletarProduto(id) {
    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        carregarProdutos();
    })
    .catch(err => console.error(err));
}


// 📌 INICIALIZAR
carregarProdutos();