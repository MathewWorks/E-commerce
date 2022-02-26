const express = require("express");
const auth = require("../middleware/auth")

const Router = express.Router();

// requiring routes function from carts controller
const {
  storeCarts,
  getCarts,
  getCartsDetail,
  updateCarts,
  deleteCarts,
} = require('../controller/cartscontroller');

// end points for carts crud operation
Router.get("/carts", auth,getCarts);
Router.post("/carts", auth, storeCarts);
Router.get("/carts/:id", auth, getCartsDetail);
Router.put("/carts/:id", auth, updateCarts);
Router.delete("/carts/:id",auth, deleteCarts);

// exporting end points
module.exports = Router;