const express = require("express");
const auth = require("../middleware/auth")

const Router = express.Router();

// requiring routes function from roles controller
const {
  storeRoles,
  getRoles,
  getRolesDetail,
  updateRoles,
  deleteRoles,
} = require('../controller/rolescontroller');

// end points for roles crud operation
Router.get("/roles", getRoles);
Router.post("/roles", storeRoles);
Router.get("/roles/:id", getRolesDetail);
Router.put("/roles/:id",auth, updateRoles);
Router.delete("/roles/:id",auth, deleteRoles);

// exporting end points
module.exports = Router;