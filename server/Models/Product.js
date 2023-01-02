const mongoose = require('mongoose');

const ProductsSChema = mongoose.Schema({
    name: String,
    code: String,
    storage: String,
    expiration: String,
    details: String
})

module.exports = mongoose.model('Product', ProductsSChema)