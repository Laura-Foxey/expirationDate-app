const BarCode = require("../Models/BarCode");

//ok
const getBarCode = (req, res) => {
  BarCode
    .find()
    .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving info.",
        });
      });
};

//ok
const getOneBarCode = (req, res) => {
    BarCode
    .findById({_id: req.params.id})
    .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Barcode not found with id " + req.params.id,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Barcode not found with id " + req.params.id,
          });
        }
        return res.status(500).send({
          message: "Error retrieving barcode with id " + req.params.id,
        });
      });
};

//ok
const createBarCode = (req, res) => {
    const barcode = new BarCode({
        code: req.body.code,
        name: req.body.name,
        preference: req.body.preference,
    })
    barcode
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the barcode.",
      });
    });
};

//ok
const updateBarCode = (req, res) => {
    BarCode
    .findByIdAndUpdate(req.params.id,
        {
            code: req.body.code,
            name: req.body.name,
            preference: req.body.preference,
        },
        { new: true }
        )
        .then((data) => {
            if (!data) {
              return res.status(404).send({
                message: "Barcode not found with id " + req.params.id,
              });
            }
            res.send(data);
          })
          .catch((err) => {
            if (err.kind === "ObjectId") {
              return res.status(404).send({
                message: "Barcode not found with id " + req.params.id,
              });
            }
            return res.status(500).send({
              message: "Error updating product with id " + req.params.id,
        });
    });
}

//ok
  const deleteBarCode = (req, res) => {
    BarCode
    .findByIdAndRemove(req.params.id)
    .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Barcode not found with id " + req.params.id,
          });
        }
        res.send({ message: "Barcode deleted successfully!" });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Barcode not found with id " + req.params.id,
          });
        }
        return res.status(500).send({
          message: "Could not delete barcode with id " + req.params.id,
        });
    });
  }

//   const deleteProducts = (req, res) => {
//     const IDs = req.params.id.split(",");
//     Product
//     .deleteMany({ _id: { $in: IDs}})
//     .then((data) => {
//         if (!data) {
//           return res.status(404).send({
//             message: "Products not found.",
//           });
//         }
//         res.send({ message: "Products deleted successfully!" });
//       })
//       .catch((err) => {
//         if (err.kind === "ObjectId" || err.name === "NotFound") {
//           return res.status(404).send({
//             message: "Products not found",
//           });
//         }
//         return res.status(500).send({
//           message: "Could not delete products",
//         });
//     });
//   }

module.exports = {
    getBarCode,
    getOneBarCode,
    createBarCode,
    updateBarCode,
    deleteBarCode,
    // deleteProducts
}