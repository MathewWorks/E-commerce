const express = require("express");
const auth = require("../middleware/auth")

const Router = express.Router();

// requiring routes function from products controller
const {
  storeProducts,
  getProducts,
  getProductsDetail,
  updateProducts,
  deleteProducts,
  searchProducts
} = require('../controller/productscontroller');

// end points for products crud operation
Router.get("/products", getProducts);
Router.post("/products", storeProducts);
Router.get("/products/:id", getProductsDetail);
Router.put("/products/:id",auth, updateProducts);
Router.delete("/products/:id",auth, deleteProducts);

// exporting end points
module.exports = Router;