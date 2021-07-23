const { Pet } = require('../models/pet.models');

module.exports.findAllPets = (req, res) => {
    Pet.find() 
        .then(allPets => res.json({ pets: allPets }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(onePet => res.json({ pets: onePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(createPet => res.json({ pet: createPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new:true, runValidators: true}
    )
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletePet => res.json({ pet: deletePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomPet = (req, res) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    Pet.find()
        .then(allPets => {
            // find a random index number from 0 to the length of array
            let randomIndexNumber = getRandomInt(allPets.length)
            res.json({results: allPets[randomIndexNumber]})
        })
        .catch(err => {
            res.json(
                {message: "Something went wrong", error: err}
            )
        })
}