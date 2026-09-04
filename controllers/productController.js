const productService = require('../services/productService');
const path = require('path');

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname,'..','view', 'product.html'));
};

const addProduct = (req, res) => {
    const result = productService.addProduct();

    res.send(result);
};

const getProductById = (req, res) => {
    const id = req.params.id;

    const result = productService.getProductById(id);

    res.send(result);
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};