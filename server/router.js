const router = require("express").Router();
const { getProduct, getOneProduct, createProduct, updateProduct, deleteProduct, deleteProducts } = require("./Controllers/Product");

router.get("/", (req, res) => {
  res.send("It's working.");
});

router.get("/products", getProduct);

router.get("/products/:id", getOneProduct)

router.post("/products/", createProduct)

router.put("/products/:id", updateProduct)

router.delete("/products/:id", deleteProduct)

router.delete("/products/arr/:id", deleteProducts) //TODO

module.exports = router;