const mongoose = require("mongoose");

// creating products schema
const productsSchema = mongoose.Schema({
  name: {
    type:String,
    require:true
  },
  thumbnail:{
    type:String,
    require:true
  },
  product_gallery:[{
    type:String,
    require:true
  }],
  description:{
    type:String,
    require:true
  },
  base_price:{
    type:Number,
    require:true
  },
  sell_price:{
    type:Number,
    require:true
  },
  category_name:{
    type:String,
    require:true
  },
  tags:{
    type:String,
    require:true
  },
  additional_information:String
});

// creating products collection with productsSchema 
const productsModal = mongoose.model("products", productsSchema);

// exporting collections
module.exports = productsModal;