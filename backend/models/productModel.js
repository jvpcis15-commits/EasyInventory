const connection = require('../database/connection');

// 📌 GET - listar todos
function getAll(callback) {
    connection.query('SELECT * FROM produtos', callback);
}

// 📌 GET - por ID (opcional mas útil)
function getById(id, callback) {
    connection.query('SELECT * FROM produtos WHERE id = ?', [id], callback);
}

// 📌 CREATE - inserir produto
function create(data, callback) {
    const sql = `
        INSERT INTO produtos (nome, preco, quantidade, categoria)
        VALUES (?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [data.nome, data.preco, data.quantidade, data.categoria],
        callback
    );
}

// 📌 UPDATE - atualizar produto
function update(id, data, callback) {
    const sql = `
        UPDATE produtos 
        SET nome = ?, preco = ?, quantidade = ?, categoria = ?
        WHERE id = ?
    `;

    connection.query(
        sql,
        [data.nome, data.preco, data.quantidade, data.categoria, id],
        callback
    );
}

// 📌 DELETE - remover produto
function remove(id, callback) {
    connection.query(
        'DELETE FROM produtos WHERE id = ?',
        [id],
        callback
    );
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};