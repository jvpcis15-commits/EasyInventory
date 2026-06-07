require('dotenv').config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);

console.log('Variáveis de ambiente carregadas');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ROTAS
const productRoutes = require('./routes/productRoutes');

app.get('/', (req, res) => {
    res.send('API EasyInventory funcionando!');
});

app.use('/produtos', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});