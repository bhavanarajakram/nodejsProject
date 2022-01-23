import mongoose from "mongoose";

import category from "../model/category.model" 

const {Schema} =mongoose ;

const schema = new Schema({
     product_name:{type :String},
     category_Id :{type:Schema.Types.ObjectId ,ref:"category",required:true},
})

const product= mongoose.model("product",schema);
export default product ;