const express = require("express");
const auth = require("../middleware/auth")

const Router = express.Router();

// requiring routes function from tags controller
const {
  storeTags,
  getTags,
  getTagsDetail,
  updateTags,
  deleteTags,
} = require('../controller/tagscontroller');

// end points for tags crud operation
Router.get("/tags", getTags);
Router.post("/tags", storeTags);
Router.get("/tags/:id", getTagsDetail);
Router.put("/tags/:id", auth,updateTags);
Router.delete("/tags/:id",auth, deleteTags);

// exporting end points
module.exports = Router;