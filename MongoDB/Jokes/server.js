const express = require('express');
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require('./server/routes/joke.routes');
AllMyJokeRoutes(app);

app.listen(8000, () => console.log(`The Server is fired up on ${port}`))