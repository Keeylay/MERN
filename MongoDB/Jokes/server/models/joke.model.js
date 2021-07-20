const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: 'string',
    punchline: 'string'
})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;