const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController');


//  READ - listar produtos
router.get('/', ProductController.getAll);


//  READ - produto por ID
router.get('/:id', ProductController.getById);


//  CREATE - inserir produto
router.post('/', ProductController.create);


//  UPDATE - editar produto
router.put('/:id', ProductController.update);


//  DELETE - remover produto
router.delete('/:id', ProductController.remove);


module.exports = router;