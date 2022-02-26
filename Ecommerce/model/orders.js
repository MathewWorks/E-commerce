const mongoose = require("mongoose");

// creating orders schema
const ordersSchema = mongoose.Schema({
    user_id:{
        type:String,
        require:true
      },
    total_item:{
        type:Number,
        require:true
      },
    products:[{
        type:Object,
        require:true
    }],
    billing_address:{
        type:String,
        require:true
      },
    shipping_address:{
        type:String,
        require:true
      },
    transaction_status: {
        type: String,
        enum : ['fail','success','pending'],
        require:true
    },
    payment_mode:{
        type: String,
        enum : ['net banking','debit card','wallet',"cash"],
        require:true

    },
    payment_status:{
        type: String,
        enum : ['fail','success','pending'],
        require:true
    },
    order_status:{
        type: String,
        enum : ['ordered',"shipped","out for delivery","delivered","pending"],
        require:true
    }
});

// creating orders collection with ordersSchema 
const ordersModal = mongoose.model("orders", ordersSchema);

// exporting collections
module.exports = ordersModal;