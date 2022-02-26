const mongoose = require("mongoose");

// creating categories schema
const categoriesSchema = mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  slug: {
    type:String,
    require:true
  },
  image:{
    type:Object,
    require:true
  },
  description:{
    type:String,
    require:true
  },
});

// creating categories collection with categoriesSchema 
const categoriesModal = mongoose.model("categories", categoriesSchema);

// exporting collections
module.exports = categoriesModal;