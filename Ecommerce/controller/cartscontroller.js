const cartsModal = require("../model/carts");

// storecarts function insert carts detail into carts collections
const storeCarts = async (req, res) => {
  try {
    const carts = await new cartsModal(req.body);
    carts.save();

    res.status(201).send(carts);
  } catch (error) {
    console.log(error);
  }
};

// getCarts function fetch all data from carts collections
const getCarts = async (req, res) => {
  try {
    const carts = await cartsModal.find();
    res.status(200).send(carts);
  } catch (error) {
    console.log(error)
  }
};

// getCartsDetail function fetch carts detai from carts collection
const getCartsDetail = async (req, res) => {
  try {
    console.log(req.params.id)
    const carts = await cartsModal.find({_id:req.params.id});

    res.status(200).send(carts);

  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// updateCarts function update carts detail by id from carts collection
const updateCarts = async (req, res) => {
  try {
    console.log(req.params.id)
  //   console.log(req.body)
    const carts = await cartsModal.updateOne({_id:req.params.id},{$set:req.body});
    // if modified count is 0 then id not found in collection
    if(carts.modifiedCount===0){
      res.status(202).send("already updated");
    }
    else{
      res.status(202).send(carts);
    }  
  } catch (error) {
        // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error) 
  }
};

// deleteCarts function delete carts detail by id from carts collection
const deleteCarts = async (req, res) => {
  try {
    console.log(req.params.id)
    const carts = await cartsModal.deleteOne({_id:req.params.id});
    // if delete count is 0 then id not found in collection
    if(carts.deletedCount===0){
      res.status(200).send("id not found");
    }
    else{
      res.status(200).send(carts);
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
  storeCarts,
  getCarts,
  getCartsDetail,
  updateCarts,
  deleteCarts,
};