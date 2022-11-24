const mongoose = require('mongoose');

const BarCodesSChema = mongoose.Schema({
    code: String,
    name: String,
    preference: String,

})

module.exports = mongoose.model('BarCodes', BarCodesSChema)