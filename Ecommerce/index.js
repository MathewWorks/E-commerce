const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userroute");
const rolesRouter = require("./routes/rolesroute");
const categoriesRouter = require("./routes/categoriesroutes");
const tagsRouter=require("./routes/tagsroute");
const productsRouter=require("./routes/productsroute");
const cartsRouter=require("./routes/cartsroute");
const orderRouter=require("./routes/ordersroute")
const loginRouter=require("./routes/loginlogoutroute")


const app = express();
const port = 3000;
const db = mongoose.connection;
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use(userRouter);
app.use(rolesRouter);
app.use(categoriesRouter);
app.use(tagsRouter);
app.use(productsRouter);
app.use(cartsRouter);
app.use(orderRouter);
app.use(loginRouter);


// running nodejs server on port 3000
app.listen(port,() => {
  try {
    // connecting to mongodb database
    mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");
    db.on("error", () => console.log('Database connection error'));
    db.once("open", function () {
      console.log("Mongodb connected.");
    });
  } catch (error) {
    // if some error on database connection show error msg
    console.log(`someting went worng ${error}`);
  }
  console.log(`Example app listening on ${port} port!`);
});