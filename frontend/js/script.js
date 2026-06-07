const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTableBody");

let editandoId = null;


//  TOAST (mensagens)
function mostrarToast(mensagem, tipo = "success") {
    const toast = document.getElementById("toast");

    toast.textContent = mensagem;
    toast.className = `toast show ${tipo}`;

    setTimeout(() => {
        toast.className = "toast";
    }, 2000);
}


//  CARREGAR PRODUTOS (READ)
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
        .catch(err => {
            console.error(err);
            mostrarToast("Erro ao carregar produtos!", "error");
        });
}


//  CREATE + UPDATE
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

    //  UPDATE
    if (editandoId) {
        fetch(`http://localhost:3000/produtos/${editandoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(() => {
            editandoId = null;
            form.reset();
            carregarProdutos();
            mostrarToast("Produto atualizado com sucesso!");
        })
        .catch(() => {
            mostrarToast("Erro ao atualizar produto!", "error");
        });

    } else {
        //  CREATE
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(() => {
            form.reset();
            carregarProdutos();
            mostrarToast("Produto salvo com sucesso!");
        })
        .catch(() => {
            mostrarToast("Erro ao salvar produto!", "error");
        });
    }
});


//  EDITAR
function editarProduto(id, nome, preco, quantidade, categoria) {
    document.getElementById("nome").value = nome;
    document.getElementById("preco").value = preco;
    document.getElementById("quantidade").value = quantidade;
    document.getElementById("categoria").value = categoria;

    editandoId = id;
    mostrarToast("Editando produto...");
}


//  DELETE
function deletarProduto(id) {
    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
    })
    .then(() => {
        carregarProdutos();
        mostrarToast("Produto excluído com sucesso!");
    })
    .catch(() => {
        mostrarToast("Erro ao excluir produto!", "error");
    });
}


//  INICIALIZAR
carregarProdutos();