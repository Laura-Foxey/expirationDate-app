const router = require("express").Router();
const { getProduct, getOneProduct, createProduct, updateProduct, deleteProduct, deleteProducts } = require("./Controllers/Product");
const { getBarCode, getOneBarCode, createBarCode, updateBarCode, deleteBarCode} = require("./Controllers/BarCode");

router.get("/", (req, res) => {
  res.send("It's working.");
});

router.get("/products", getProduct);

router.get("/barcodes", getBarCode);

router.get("/products/:id", getOneProduct)

router.get("/barcodes/:id", getOneBarCode)

router.post("/products/", createProduct)

router.post("/barcodes", createBarCode)

router.put("/products/:id", updateProduct)

router.put("/barcodes/:id", updateBarCode)

router.delete("/products/:id", deleteProduct)

router.delete("/barcodes/:id", deleteBarCode)

router.delete("/products/arr/:id", deleteProducts) //TODO

module.exports = router;