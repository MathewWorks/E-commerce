const express = require("express");
const auth = require("../middleware/auth");

const Router = express.Router();

// requiring routes function from login logout controller
const {
    login,
    logout,
} = require('../controller/loginlogoutController');


// end points for login logout operation
Router.post("/login", login);
Router.put("/logout",auth,logout);

// exporting end points
module.exports = Router;