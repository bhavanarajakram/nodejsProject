import product from "../model/product.model";
import category from "../model/category.model";

import { dirname} from "path";
import { fileURLToPath } from "url";


export const findproduct = async function(req,res){
  
    if(!req.params.product_name || !req.params.category_Id ){
        return res.status(422).send({
        message:`please fill the appropiate product name`,
        status:true
      })
      } 
        
    let findproduct = await product.findOne({product_name :req.params.product_name , category_Id:req.params.category_Id})
    console.log(findproduct);
        if(findproduct){
         return res.status(422).send({
           message:`yes we have this product  heres the detail given below`,
           status:true,
           data:(req.params.product_name + req.params.category_Id),
           product_id:findproduct._id
          })
        }
        else{
          return res.status(401).send({
            message:`sorry we dont have this product`,
            status:false,
          })
        }
    }

    export const createproduct =async(req,res) =>{

      if(!req.params.product_name || !req.params.category_Id ){
          return res.status(422).send({
          message:`please fill the appropiate  product name`,
          status:false
        })
        } 
  
      let findproduct = await product.findOne({product_name:req.params.product_name, category_Id:req.params.category_Id })
      console.log(findproduct);
      if(findproduct){
       return res.status(422).send({
         message:`this category name is already exist`,
         status:false, 
        }) 
      }
        let productdata =await product.create({product_name:req.params.product_name, category_Id:req.params.category_Id})
        res.send(productdata)  ,
        console.log(productdata)
      }


      export const updateproductData =async(req,res)=>{
        let productdata =await product.findByIdAndUpdate(req.params.id,{product_name:req.params.product_name})
        res.send(productdata)
      }

      
    export const deleteproduct = async(req,res)=>{
      let productdata =await product.findByIdAndDelete(req.params.id);
      res.send(productdata)
    }

    export const file =(req,res)=>{
      res.sendFile(__dirname + "/product.html")
    }

   

