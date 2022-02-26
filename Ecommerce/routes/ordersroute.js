const express = require("express");
const auth = require("../middleware/auth")

const Router = express.Router();

// requiring routes function from orders controller
const {
  storeOrders,
  getOrders,
  getOrdersDetail,
  updateOrders,
  deleteOrders,
} = require('../controller/orderscontroller');

// end points for orders crud operation
Router.get("/orders",auth, getOrders);
Router.post("/orders",auth, storeOrders);
Router.get("/orders/:id",auth, getOrdersDetail);
Router.put("/orders/:id", auth,updateOrders);
Router.delete("/orders/:id",auth, deleteOrders);

// exporting end points
module.exports = Router;