const Product = require('../models/productModel');

exports.getAll = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getById = (req, res) => {
    Product.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).json(err);

        if (!results.length) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        res.json(results[0]);
    });
};

exports.create = (req, res) => {
    Product.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(201).json({
            message: 'Produto criado!',
            id: result.insertId
        });
    });
};

exports.update = (req, res) => {
    Product.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json(err);

        res.json({ message: 'Produto atualizado com sucesso!' });
    });
};

exports.remove = (req, res) => {
    Product.remove(req.params.id, (err) => {
        if (err) return res.status(500).json(err);

        res.json({ message: 'Produto excluído com sucesso!' });
    });
};