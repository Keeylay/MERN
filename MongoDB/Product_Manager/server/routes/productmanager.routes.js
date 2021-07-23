const ProductController = require('../controllers/productmanager.controllers');

module.exports = app => {
    //all products
    app.get('/api/product', ProductController.findAllProducts);
    
    //get one product by id
    app.get('/api/product/:id', ProductController.findOneProduct);

    // create a new product
    app.post('/api/product/new', ProductController.createNewProduct);

    //update product
    app.put('/api/product/edit/:id', ProductController.updateExistingProduct);    

    // delete product
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);

    //find random product
    app.get('/api/product/find/random', ProductController.findRandomProduct);
}