const categoriesModal = require("../model/categories");

// storeCategories function insert categories detail into categories collections
const storeCategories = async (req, res) => {
  try {
    const categories = await new categoriesModal(req.body);
    categories.save();

    res.status(201).send(categories);
  } catch (error) {
    console.log(error);
  }
};

// getCategories function fetch all data from categories collections
const getCategories = async (req, res) => {
  try {
    const categories = await categoriesModal.find();
    res.status(200).send(categories);
  } catch (error) {
    console.log1(error)
  }
};

// getCategoriesDetail function fetch categories detail by id from categories collection
const getCategoriesDetail = async (req, res) => {
  try {
    console.log(req.params.id)
    const categories = await categoriesModal.find({_id:req.params.id});

    res.status(200).send(categories);

  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// updateCategories function update categories detail by id from actegories collection
const updateCategories = async (req, res) => {
  try {
    console.log(req.params.id)
    //   console.log(req.body)
    const categories = await categoriesModal.updateOne({_id:req.params.id},{$set:req.body});
    // if modified count is 0 then id not found in collection
    if(categories.modifiedCount===0){
      res.status(202).send("already updated");
    }
    else{
      res.status(202).send(categories);
    }

  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// deleteCategories function delete categories detail by id from categories collection
const deleteCategories = async (req, res) => {
  try {
    console.log(req.params.id)
    const categories = await categoriesModal.deleteOne({_id:req.params.id});
    // if delete count is 0 then id not found in collection
    if(categories.deletedCount===0){
      res.status(200).send("id not found");
    }
    else{
      res.status(200).send(categories);
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
  storeCategories,
  getCategories,
  getCategoriesDetail,
  updateCategories,
  deleteCategories,
};