const mongoose = require('mongoose');
const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "content is needed"],
        maxlength: [100, "Get a better name for a product"],
        minlength: [2, "Product must be more than 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "A price is required"],
        min: [0.01, "Get some money post a price"]
    },
    description: {
        type: String,
        require: [true, "content is needed"],
        maxlength: [1000, "Cant be more than 1000 Characters"],
        minlength: [2, "Actually describe the product"]
    }
}, { timestamps: true })

module.exports.Product = mongoose.model('Product', ProductManagerSchema);