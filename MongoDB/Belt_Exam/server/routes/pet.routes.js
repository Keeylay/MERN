const PetController = require('../controllers/pet.controllers');

module.exports = app => {
    //all pets
    app.get('/api/pet', PetController.findAllPets);
    
    //get one pet by id
    app.get('/api/pet/:id', PetController.findOnePet);

    // create a new pet
    app.post('/api/pet/new', PetController.createNewPet);

    //update pet
    app.put('/api/pet/edit/:id', PetController.updateExistingPet);    

    // delete pet
    app.delete('/api/pet/:id', PetController.deleteAnExistingPet);

    //find random pet
    app.get('/api/pet/find/random', PetController.findRandomPet);

}