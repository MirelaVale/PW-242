const express = require('express');
const router = express.Router();
const productsDAO = require('../models/productsDAO');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.URI);
const mydb = client.db('coresdopulso').collection('products');

// Buscar todos os produtos
router.get('/all', async (req, res) => {
    const products = await productsDAO.getAllProducts(mydb);
    res.json(products);
});

// Adicionar um novo produto
router.post('/add', async (req, res) => {
    const { nome, preco, descricao, imagem } = req.body;
    const result = await productsDAO.addProduct(mydb, { nome, preco, descricao, imagem });
    res.json(result);
});

// Deletar um produto
router.delete('/delete/:id', async (req, res) => {
    const result = await productsDAO.deleteProduct(mydb, req.params.id);
    res.json(result);
});

// Atualizar um produto
router.put('/update/:id', async (req, res) => {
    const result = await productsDAO.updateProduct(mydb, req.params.id, req.body);
    res.json(result);
});

module.exports = router;
