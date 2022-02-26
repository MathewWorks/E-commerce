const rolesModal = require("../model/roles");

// storeroles function insert roles detail into roles collections
const storeRoles = async (req, res) => {
  try {
    const roles = await new rolesModal(req.body);
    roles.save();

    res.status(201).send(roles);
  } catch (error) {
    console.log(error);
  }
};

// getRoles function fetch all data from roles collections
const getRoles = async (req, res) => {
  try {
    const roles = await rolesModal.find();
    res.status(200).send(roles);
  } catch (error) {
    console.log(error)
  }
};

// getRolesDetail function fetch roles detail by id from roles collection
const getRolesDetail = async (req, res) => {
  try {
    console.log(req.params.id)
    const roles = await rolesModal.find({_id:req.params.id});
    res.status(200).send(roles);
  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// updateRoles function update roles detail by id from roles collection
const updateRoles = async (req, res) => {
  try {
    console.log(req.params.id)
    const roles = await rolesModal.updateOne({_id:req.params.id},{$set:{slug:"user-01"}});
    // if modified count is 0 then id not found in collection
    if(roles.modifiedCount===0){
      res.status(202).send("already updated");
    }
    else{
      res.status(202).send(roles);
    }
  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
      console.log(error)
  }
};

// deleteRoles function delete roles detail by id from roles collection
const deleteRoles = async (req, res) => {
  try {
    console.log(req.params.id)
    const roles = await rolesModal.deleteOne({_id:req.params.id});
    // if delete count is 0 then id not found in collection
    if(roles.deletedCount===0){
      res.status(200).send("id not found");
    }
    else{
      res.status(200).send(roles);
    }
  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

module.exports = {
  storeRoles,
  getRoles,
  getRolesDetail,
  updateRoles,
  deleteRoles,
};