const userModal = require("../model/user");

// storeUser function insert user detail into user collections
const storeUser = async (req, res) => {
  try {
    // finding req.body.email present in users collection or not.
    const useremail=await userModal.findOne({email:req.body.email});
    // if email is present then user already exist return response user already exist
    if(useremail){
      return res.status(400).send("user already exist");
    }
    
    // save user detail from req.body
    const user = await new userModal(req.body);

    /* 
    NOTE : before saving i define a userschema.pre fuction at ../model/users  
          which change password into bcrypt form
    */ 
    
    // save data at users collection
    user.save();

    // send response with userdetail and id created
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("user already exist")
  }
};

// getUser function fetch all data from users collections
const getUsers = async (req, res) => {
  try {
    const users = await userModal.find();
    res.status(200).send(users);
  } catch (error) {
      console.log(error);
  }
};

// getUserDetail function fetch users detail by id from users collections
const getuserDetail = async (req, res) => {
  try{
    console.log(req.params.id)
    // find users detail by id in users collection if user found store user detail in users
    const users = await userModal.find({_id:req.params.id});

    // if users.length is 0 then id not found in collection
    if(users.length===0){
      return res.status(404).send("Id not Found")
    }
    res.status(200).send(users);
  } catch (error){
      // if users enter id not in form of ObjectIid show response id not found
      if(error.kind==='ObjectId'){
        return res.status(404).send("Id not Found");
    }
      console.log(error)
  }
};

// updateUser function update users detail by id from users collection
const updateuser = async (req, res) => {
  try{ 
      console.log(req.params.id)
      const users = await userModal.updateOne({_id:req.params.id},{$set:req.body});
      // if modified count is 0 then id not found in collection
      if(users.modifiedCount===0){
        res.status(404).send("already updated");
      }
      else{
        res.status(202).send(users);
     }
  } catch (error){
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
  }
    console.log(error)
  }
};

// deleteUser function delete user detail by id from users collection
const deleteUser = async (req, res) => {
  try{
    console.log(req.params.id)
    const users = await userModal.deleteOne({_id:req.params.id});
    // if delete count is 0 then id not found in collection
    if(users.deletedCount===0){
      res.status(200).send("id not found");
    }
    else{
      res.status(200).send(users);
    }
  } catch(error){
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
}
};

module.exports = {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
};