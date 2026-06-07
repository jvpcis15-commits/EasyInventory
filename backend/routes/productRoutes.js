const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

router.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM produtos', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

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

module.exports = router;