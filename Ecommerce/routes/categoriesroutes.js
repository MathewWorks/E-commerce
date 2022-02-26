const express = require("express");
const auth = require("../middleware/auth")

const Router = express.Router();

// requiring routes function from categories controller
const {
  storeCategories,
  getCategories,
  getCategoriesDetail,
  updateCategories,
  deleteCategories,
} = require('../controller/categoriescontroller');

// end points for categories crud operation
Router.get("/categories", getCategories);
Router.post("/categories", storeCategories);
Router.get("/categories/:id", getCategoriesDetail);
Router.put("/categories/:id",auth, updateCategories);
Router.delete("/categories/:id",auth, deleteCategories);

// exporting end points
module.exports = Router;