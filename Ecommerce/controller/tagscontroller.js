const tagsModal = require("../model/tags");

// storetags function insert tags detail into tags collections
const storeTags = async (req, res) => {
  try {
    const tags = await new tagsModal(req.body);
    tags.save();

    res.status(201).send(tags);
  }
  catch (error) {
    console.log(error);
  }
};

// getTags function  fetch all data from tags collections
const getTags = async (req, res) => {
  try {
    const tags = await tagsModal.find();
    res.status(200).send(tags);
  } 
  catch (error) {
    console.log(error)
  }
};

// getTagsDetail function  fetch tags detail by id from tags collection
const getTagsDetail = async (req, res) => {
  try{
    console.log(req.params.id)
    const tags = await tagsModal.find({_id:req.params.id});
    res.status(200).send(tags);
  }
  catch (error){
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// updateTags function update tags detail by id from tags collection
const updateTags = async (req, res) => {
  try{ 
    console.log(req.params.id)
    const tags = await tagsModal.updateOne({_id:req.params.id},{$set:req.body});
    // if modified count is 0 then id not found in collection
    if(tags.modifiedCount===0){
      res.status(202).send("already updated");
    }
    else{
      res.status(202).send(tags);
    }
  }
  catch (error){
   // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// deleteTags function delete user detail by id from tags collection
const deleteTags = async (req, res) => {
  try{
    console.log(req.params.id)
    const tags = await tagsModal.deleteOne({_id:req.params.id});
    // if delete count is 0 then id not found in collection
    if(tags.deletedCount===0){
      res.status(200).send("id not found");
    }
    else{
      res.status(200).send(tags);
    }
  }
  catch (error){
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

module.exports = {
  storeTags,
  getTags,
  getTagsDetail,
  updateTags,
  deleteTags,
};