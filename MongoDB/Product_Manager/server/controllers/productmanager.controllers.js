const { Product } = require('../models/productmanager.model');

module.exports.findAllProducts = (req, res) => {
    Product.find() 
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json({ products: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(createProduct => res.json({ product: createProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new:true, runValidators: true}
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct => res.json({ product: deleteProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomProduct = (req, res) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    Product.find()
        .then(allProducts => {
            // find a random index number from 0 to the length of array
            let randomIndexNumber = getRandomInt(allProducts.length)
            res.json({results: allProducts[randomIndexNumber]})
        })
        .catch(err => {
            res.json(
                {message: "Something went wrong", error: err}
            )
        })
}