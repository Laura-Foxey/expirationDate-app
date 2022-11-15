const express = require('express');
const bodyParser = require('body-parser');
const url = require("../secrets");

const app = express();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

let PORT = 3000

const router = require("./router");

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

