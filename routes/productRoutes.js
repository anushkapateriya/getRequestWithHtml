const express = require('express');
const router = express.Router();
const productController=require('../controllers/productController')

// GET /products
router.get('/', productController.getAllProducts);

// GET /products/:id
router.get('/:id', productController.getProductById);

// POST /products
router.post('/', productController.addProduct);

//router.put('/:id', productController.editProducts);

//router.delete('/:id', productController.deleteProducts);
router.get('/', productController.getProducts);

// GET /products/:id
router.get('/:id', productController.getProductsByID);

// POST /products
router.post('/', productController.postProducts);

router.put('/:id', productController.editProducts);

router.delete('/:id', productController.deleteProducts);


module.exports = router;