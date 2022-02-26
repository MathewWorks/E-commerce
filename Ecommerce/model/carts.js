const mongoose = require("mongoose");

// creating carts schema
const cartsSchema = mongoose.Schema({
    product:[{
        type:Object,
        require:true
    }],
    user:{
        type:Object,
        require:true
    },
    product_qty:{
        type:Number,
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
    total_price:{
        type:Number,
        require:true
    }
});

// creating carts collection with cartsSchema 
const cartsModal = mongoose.model("carts", cartsSchema);

// exporting collections
module.exports = cartsModal;