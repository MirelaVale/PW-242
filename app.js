const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.URI;
const client = new MongoClient(uri);
const mydb = client.db('coresdopulso').collection('products');
const productsDAO = require('./models/productsDAO');

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001...");
});

// Rotas para os produtos
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);
