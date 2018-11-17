var config = require('config');
var express = require('express');
var router = express.Router();
var productService = require('../../services/content/product.service');

router.post('/insert-product', insertProduct);
router.post('/update-product', updateProduct);
router.get('/get-all-product', getAllProduct);
router.get('/get-product-categories', getProductCategories);

module.exports = router;

var response = {};

const clearResponse = () => {
    // Response handling
    response = {
        status: 200,
        data: [],
        message: null
    };
}

// Error handling
const sendError = (err, res) => {
    response.status = 400;
    response.message = err !== null && typeof err === 'object' ? err.message : err;
    res.json(response);
};

function insertProduct(req, res) {
    clearResponse();
    productService.insert(req.body)
        .then(function(product) {
            res.send(product);
        })
        .catch(function(err) {
            sendError(err,res);
        });
}

function updateProduct(req, res) {
    clearResponse();
    productService.update(req.body)
        .then(function(product) {
            res.send(product);
        })
        .catch(function(err) {
            sendError(err,res);
        });
}

function getAllProduct(req, res){
    productService.selectAll()
        .then((products)=>{
            res.send(products);
        })
        .catch((err)=>{
            sendError(err,res);
        });
}

function getProductCategories(req, res){
    productService.getProductCategories()
        .then((products)=>{
            res.send(products);
        })
        .catch((err)=>{
            sendError(err,res);
        });
}
