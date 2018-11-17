var config  = require('../../config');
var Q       = require('q');
var _       = require('lodash');
var mongo   = require('mongoskin');
var utils   = require('../../helpers/utils');

var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('products');
db.bind('product_categories');

var service = {};

service.insert      = insert;
service.update      = update;
service.selectAll   = selectAll;
service.getProductCategories = getProductCategories;

module.exports = service;

function insert(product) {
    var deferred = Q.defer();

    // validation
    db.products.findOne({ name: product.name },
        function(err, result) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (result) {
                // product name already exists
                deferred.reject(result.name + '" is already taken');
            } else {
                addProduct();
            }
        });

    function addProduct() {
        product.created_at = new Date();
        product.updated_at = new Date();
        
        db.products.insert(
            product,
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                deferred.resolve(doc);
            });
    }

    return deferred.promise;
}

function update(product){
    var deferred = Q.defer();
    var pid      = product._id;
    product      = _.omit(product, '_id');
    product.updated_at = new Date();
    
    db.products.update({_id: mongo.helper.toObjectID(pid)},{ $set: product },
        function(err, result) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (result) {
                let status = result ? 'success' : 'error';
                let serviceResponse = utils.prepareResponse(status, result, "Your product updated successfully!");
                deferred.resolve(serviceResponse);
            } 
        });
    return deferred.promise;
}

function selectAll(){
    var deferred = Q.defer();

    db.products.aggregate([
        {
            $lookup: {
                from: "product_categories",
                localField: "cat_id",
                foreignField: "_id",
                as: "product_categories"
            }
        },
        {
            $lookup: {
                from: "status",
                localField: "status",
                foreignField: "_id",
                as: "status"
            }
        },
        {
            "$project": {
                _id: 1,
                name: 1,
                code: 1,
                price: 1,
                status: 1,
                cat_id: 1,
                main_content: 1,
                description: 1,
                tech_spec: 1,
                usage: 1,
                "product_categories": { "$arrayElemAt": ["$product_categories", 0] },
                "status": { "$arrayElemAt": ["$status", 0] }
            }
        },
        { '$sort': { '_id': -1 } }
    ],
    function(err, products) {
        if (err) {
            let serviceResponse = utils.prepareResponse(0, [], err.name + ': ' + err.message);
            deferred.reject(serviceResponse);
        }

        let serviceResponse = utils.prepareResponse('success', products, "Data retrieved successfully!");
        deferred.resolve(serviceResponse);
    });


    return deferred.promise;
}

function getProductCategories(){
    var deferred = Q.defer();
    db.product_categories.find().toArray(function(err, category) {
        if (err) {
            let serviceResponse = utils.prepareResponse(0, [], err.name + ': ' + err.message);
            deferred.reject(serviceResponse);
        }

        let serviceResponse = utils.prepareResponse('success', category, "Data retrieved successfully!");
        deferred.resolve(serviceResponse);
    });
    return deferred.promise;
}
