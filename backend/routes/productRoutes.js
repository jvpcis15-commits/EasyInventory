const express = require('express');
const router = express.Router();
const connection = require('../database/connection');


// 📌 READ - listar produtos
router.get('/', (req, res) => {
    connection.query('SELECT * FROM produtos', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


// 📌 CREATE - inserir produto
router.post('/', (req, res) => {
    const { nome, preco, quantidade, categoria } = req.body;

   connection.query(
    'INSERT INTO produtos (nome, preco, quantidade, categoria) VALUES (?, ?, ?, ?)',
    [nome, preco, quantidade, categoria],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.status(201).json({
                message: 'Produto criado!',
                id: result.insertId
            });
        }
    );
});


// 📌 UPDATE - editar produto
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;

    const sql = `
        UPDATE produtos 
        SET nome = ?, preco = ?, quantidade = ?
        WHERE id = ?
    `;

    connection.query(sql, [nome, preco, quantidade, id], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        res.json({ message: 'Produto atualizado com sucesso!' });
    });
});


// 📌 DELETE - remover produto
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    connection.query(
        'DELETE FROM produtos WHERE id = ?',
        [id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            res.json({ message: 'Produto excluído com sucesso!' });
        }
    );
});


module.exports = router;