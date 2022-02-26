const ordersModal = require("../model/orders");

// storeOrders function insert order detail into orders collections
const storeOrders = async (req, res) => {
  try {
    const orders = await new ordersModal(req.body);
    orders.save();

    res.status(201).send(orders);
  } catch (error) {
    console.log(error);
  }
};

// getOrders function fetch all data from orders collections
const getOrders = async (req, res) => {
  try {
    const orders = await ordersModal.find();
    res.status(200).send(orders);
  } catch (error) {
    console.log(error)
  }
};

// getOrdersDetail function fetch order detail by id from orders collection
const getOrdersDetail = async (req, res) => {
  try {
    console.log(req.params.id)
    const orders = await ordersModal.find({_id:req.params.id});

    res.status(200).send(orders);

  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// updateOrders function update orders detail by id from orders collection
const updateOrders = async (req, res) => {
  try {
    console.log(req.params.id)
    //console.log(req.body)
    const orders = await ordersModal.updateOne({_id:req.params.id},{$set:req.body});
    // if modified count is 0 then id not found in collection
    if(orders.modifiedCount===0){
      res.status(202).send("already updated");
    }
    else{
      res.status(202).send(orders);
    }
  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)    
  }
};

// deleteOrders function delete orders detail by id from orders collection
const deleteOrders = async (req, res) => {
  try {
    console.log(req.params.id)
    const orders = await ordersModal.deleteOne({_id:req.params.id});
    // if delete count is 0 then id not found in collection
    if(orders.deletedCount===0){
      res.status(200).send("id not found");
    }
    else{
      res.status(200).send(orders);
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
  storeOrders,
  getOrders,
  getOrdersDetail,
  updateOrders,
  deleteOrders,
};