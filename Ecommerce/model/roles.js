const mongoose = require("mongoose");

// creating roles schema
const rolesSchema = mongoose.Schema({
  name: {
    type:String,
    require:true
  },
  slug: {
    type:String,
    require:true
  },
});

// creating roles collection with rolesSchema 
const rolesModal = mongoose.model("roles", rolesSchema);

// exporting collections
module.exports = rolesModal;