import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import categoryRoute from "./route/category.route"
import productRoute from "./route/product.route";
    

 
	const app = express();
    app.use(bodyParser.json())
    app.use(express.json())

    app.use("/category",categoryRoute)

    app.use("/product",productRoute)


	 app.get('/', function (req, res) {
	  res.send('Hello World!');
	 });

	 app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
	 });

    mongoose.connect("mongodb://localhost:27017/BhavanaRajak").then(()=>{
    console.log("mongodb started")
    }).catch(()=>{
    console.log("mongodb failed")
    })


