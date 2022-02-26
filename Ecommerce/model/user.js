const mongoose = require("mongoose");
const bcrypt=require("bcrypt")

// creating user schema
const userSchema = mongoose.Schema({
  first_name:{ 
    type: String,
    require:true,
  },
  last_name:String,
  email: {
    type: String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  role: String,
  profile_image: String,
});

// userschema.pre funcation bcrypt password before saving it into collection
userSchema.pre("save",async function(next){
  this.password=await bcrypt.hash(this.password,10);
  next();
})

// creating user collection with userSchema 
const userModal = mongoose.model("users", userSchema);

// exporting collections
module.exports = userModal;