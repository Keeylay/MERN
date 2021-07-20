const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/joke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to the database'))
    .catch(err => console.log('Something went wrong with conenection', err));