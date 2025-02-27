//const Product = require('../models/Product');

const Product = require('../models/product')

// Buscar todos os produtos
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

// Criar um novo produto
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const newProduct = new Product({ name, description, price, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};
