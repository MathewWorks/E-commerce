const mongoose = require("mongoose");

// creating tags schema
const tagsSchema = mongoose.Schema({
  name: {
    type:String,
    require:true
  },
  slug: {
    type:String,
    require:true
  },
});

// creating tags collection with tagsSchema 
const tagsModal = mongoose.model("tags", tagsSchema);

// exporting collections
module.exports = tagsModal;