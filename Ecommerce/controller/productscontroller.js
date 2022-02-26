const productsModal = require("../model/products");

// storeProducts function insert product detail into products collections
const storeProducts = async (req, res) => {
  try {
    const products = await new productsModal(req.body);
    products.save();

    res.status(201).send(products);
  } catch (error) {
    console.log(error);
  }
};

// getProducts function fetch data from products collections
const getProducts = async (req, res) => {
  try {
    // console.log(req.query)
    let products;
    
    // if length of query.param is 0 it means no query parameter are pass and show all product detail
    // else find product based on query param

    console.log(Object.keys(req.query).length);
    if(Object.keys(req.query).length===0){
      // console.log("Iam here ..");
      products = await productsModal.find();     
    }
    else{
      // console.log("here");
      products = await productsModal.find(req.query);
      if(products.length===0){
        return res.status(400).send("no product found")
      }
    }
    res.status(200).send(products);
  } catch (error) {
    console.log(error)
  }
};

// getProductsDetail functionfetch product detail by id from products collection
const getProductsDetail = async (req, res) => {
  try {
    console.log(req.params.id)
    const products = await productsModal.find({_id:req.params.id});
    res.status(200).send(products);
  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// updateProducts function update products detail by id from products collection
const updateProducts = async (req, res) => {
  try {
    console.log(req.params.id)
    //   console.log(req.body)
    const products = await productsModal.updateOne({_id:req.params.id},{$set:req.body});
    // if modified count is 0 then id not found in collection
    if(products.modifiedCount===0){
      res.status(202).send("already updated");
    }
    else{
      res.status(202).send(products);
    }
  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

// deleteProducts function delete products detail by id from products collection
const deleteProducts = async (req, res) => {
  try {
    console.log(req.params.id)
    const products = await productsModal.deleteOne({_id:req.params.id});
    // if delete count is 0 then id not found in collection
    if(products.deletedCount===0){
      res.status(200).send("id not found");
    }
    else{
      res.status(200).send(products);
    }
  } catch (error) {
    // if users enter id not in form of ObjectIid show response id not found
    if(error.kind==='ObjectId'){
      return res.status(404).send("Id not Found");
    } 
    console.log(error)
  }
};

const searchProducts = async(req, res)=>{
  console.log(req.query.category)
}
module.exports = {
  storeProducts,
  getProducts,
  getProductsDetail,
  updateProducts,
  deleteProducts,
  searchProducts,
};