const express = require('express');
const router = express.Router();
const connection = require('../database/connection');


// 📌 READ - listar produtos
router.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM produtos', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


// 📌 CREATE - inserir produto
router.post('/produtos', (req, res) => {
    const { nome, preco, quantidade } = req.body;

    connection.query(
        'INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)',
        [nome, preco, quantidade],
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
router.put('/produtos/:id', (req, res) => {
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
router.delete('/produtos/:id', (req, res) => {
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