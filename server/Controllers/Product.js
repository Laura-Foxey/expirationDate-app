const Product = require("../Models/Product");

//ok
const getProduct = (req, res) => {
    Product
    .find()
    .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      });
};

//ok
const getOneProduct = (req, res) => {
    Product
    .findById({_id: req.params.id})
    .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Products not found with id " + req.params.id,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Products not found with id " + req.params.id,
          });
        }
        return res.status(500).send({
          message: "Error retrieving products with id " + req.params.id,
        });
      });
};

//ok
const createProduct = (req, res) => {
    const product = new Product({
        name: req.body.name,
        storage: req.body.storage,
        expiration: req.body.expiration,
        details: req.body.details
    })
    product
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product.",
      });
    });
};

//ok
const updateProduct = (req, res) => {
    Product
    .findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            storage: req.body.storage,
            expiration: req.body.expiration,
            details: req.body.details
        },
        { new: true }
        )
        .then((data) => {
            if (!data) {
              return res.status(404).send({
                message: "Product not found with id " + req.params.id,
              });
            }
            res.send(data);
          })
          .catch((err) => {
            if (err.kind === "ObjectId") {
              return res.status(404).send({
                message: "Product not found with id " + req.params.id,
              });
            }
            return res.status(500).send({
              message: "Error updating product with id " + req.params.id,
        });
    });
}

const deleteProduct = (req, res) => {
    Product
    .findByIdAndRemove(req.params.id)
    .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Product not found with id " + req.params.id,
          });
        }
        res.send({ message: "Product deleted successfully!" });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Product not found with id " + req.params.id,
          });
        }
        return res.status(500).send({
          message: "Could not delete product with id " + req.params.id,
        });
    });
  }

  const deleteProducts = (req, res) => {
    Product
    .deleteMany({ _id: { $in: req.params.id}})
    .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Products not found.",
          });
        }
        res.send({ message: "Products deleted successfully!" });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Products not found with id " + req.params.id,
          });
        }
        return res.status(500).send({
          message: "Could not delete message with id " + req.params.id,
        });
    });
  }

module.exports = {
    getProduct,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}