const express = require("express");
const auth = require("../middleware/auth")

const Router = express.Router();

// requiring routes function from users controller
const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require('../controller/usercontroller');

// end points for users crud operation
Router.get("/users", getUsers);
Router.post("/users", storeUser);
Router.get("/users/:id",getuserDetail);
Router.put("/users/:id", auth,updateuser);
Router.delete("/users/:id", auth, deleteUser);

// exporting end points
module.exports = Router;