const request = require('supertest');
const app = require('../server');

let produtoId;

describe('API EasyInventory', () => {

    test('Deve responder na rota GET /produtos', async () => {
        const response = await request(app)
            .get('/produtos');

        expect(response.statusCode).toBe(200);
    });

    test('Deve cadastrar um produto na rota POST /produtos', async () => {
        const response = await request(app)
            .post('/produtos')
            .send({
                nome: 'Produto Teste',
                preco: 99.99,
                quantidade: 10,
                categoria: 'Teste'
            });

        produtoId = response.body.id;

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Produto criado!');
        expect(response.body).toHaveProperty('id');
    });

    test('Deve atualizar um produto na rota PUT /produtos/:id', async () => {
        const response = await request(app)
            .put(`/produtos/${produtoId}`)
            .send({
                nome: 'Produto Atualizado',
                preco: 150.00,
                quantidade: 20,
                categoria: 'Atualizado'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.message)
            .toBe('Produto atualizado com sucesso!');
    });

    test('Deve excluir um produto na rota DELETE /produtos/:id', async () => {
        const response = await request(app)
            .delete(`/produtos/${produtoId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.message)
            .toBe('Produto excluído com sucesso!');
    });

});