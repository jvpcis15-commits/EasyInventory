const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTableBody");

let idCounter = 1;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const categoria = document.getElementById("categoria").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${idCounter}</td>
        <td>${nome}</td>
        <td>R$ ${parseFloat(preco).toFixed(2)}</td>
        <td>${quantidade}</td>
        <td>${categoria}</td>
        <td>
            <button class="delete-btn">Excluir</button>
        </td>
    `;

    tableBody.appendChild(row);

    idCounter++;

    form.reset();
});

tableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.closest("tr").remove();
    }
});