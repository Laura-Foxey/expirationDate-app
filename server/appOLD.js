const express = require('express');
const router = require("./router");
const mongoose = require("mongoose");
const url = "mongodb+srv://laura:Kcwfpj4zyEGHimyC@products.di1wqy9.mongodb.net/?retryWrites=true&w=majority"
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(PORT, async() => {
    console.log(`server running on ${PORT}`)
})





































// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// require("./Products");

// app.use(bodyParser.json())

// const Products = mongoose.model('products')
// const mongoURI = 'mongodb+srv://laura:Kcwfpj4zyEGHimyC@products.di1wqy9.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(mongoURI, {useNewUrlParser: true})

// mongoose.connection.on("connected", () => {
//     console.log("connected to mongodb")
// })
// mongoose.connection.on("error", (err) => {
//     console.log("error", err)
// })

// app.get('/', (req, res) => {
//     res.send("it working")
// })

// app.post('/products/post', (req, res) => {
//     const product = new Products({
//         name: req.body.name,
//         storage: req.body.storage,
//         expiration: req.body.expiration,
//         details: req.body.details
//     })
//     product.save()
//     .then(data => {
//         console.log(data)
//         res.send("Successfully added product")
//     }).catch(err => console.log(err))
// })

// app.post('/products/delete', (req, res) => {
//     Products.findByIdAndRemove(req.body.id)
//     .then(data => {
//         console.log(data)
//         res.send("Successfully deleted product")
//     }).catch(err => console.log(err))
// })

// app.post('/products/update', (req, res) => {
//     Products.findByIdAndUpdate(req.body.id, {
//         name: req.body.name,
//         storage: req.body.storage,
//         expiration: req.body.expiration,
//         details: req.body.details
//     })
//     .then(data => {
//         console.log(data)
//         res.send("Successfully updated product")
//     }).catch(err => console.log(err))
// })