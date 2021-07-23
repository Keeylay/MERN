const mongoose = require('mongoose');
const PetShelterSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "content is needed"],
        maxlength: [50, "Must be less than 50 characters"],
        minlength: [3, "Pet must be more than 3 characters"]
    },
    type: {
        type: String,
        require: [true, "content is needed"],
        maxlength: [10, "Must be less than 10 characters"],
        minlength: [3, "Pet must be more than 3 characters"]
    },
    description: {
        type: String,
        require: [true, "content is needed"],
        maxlength: [1000, "Cant be more than 1000 Characters"],
        minlength: [3, "Actually describe the pet"]
    },
    skills1: {
        type: String,
    },
    skills2: {
        type: String,
    },
    skills3: {
        type: String,
    }
}, { timestamps: true })

module.exports.Pet = mongoose.model('Pet', PetShelterSchema);