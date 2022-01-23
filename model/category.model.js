import mongoose from "mongoose"

const {Schema} =mongoose;
 const schema =new Schema({
     category_name :{type:String}
})

const category =mongoose.model("category",schema)

export default category;