import category from "../model/category.model";
import { dirname  } from "path";
import { fileURLToPath } from "url";

export const findcategory = async function(req,res){
  
    if(!req.params.category_name){
        return res.status(422).send({
        message:`please fill the appropiate category_type name`,
        status:false
      })
      } 
        
    let findcategory = await category.findOne({category_name :req.params.category_name })
    console.log(findcategory);
        if(findcategory){
         return res.status(422).send({
           message:`yes we have this category  heres the detail given below`,
           status:false,
           data:req.body,
           category_id:findcategory._id
          })
        }
        else{
          return res.status(401).send({
            message:`sorry we dont have this category`,
            status:false,
          })
        }
    }

    export const createcategory =async(req,res) =>{

      if(!req.params.category_name ){
          return res.status(422).send({
          message:`please fill the appropiate category_type name`,
          status:false
        })
        } 
  
      let findcategory = await category.findOne({category_name:req.params.category_name })
      console.log(findcategory);
      if(findcategory){
       return res.status(422).send({
         message:`this category name is already exist`,
         status:false,
        })
      }
        let categorydata =await category.create({category_name :req.params.category_name})
        res.send(categorydata)  ,
        console.log(categorydata)
      }


      export const updateCategoryData =async(req,res)=>{
        let categoryData =await category.findByIdAndUpdate(req.params.id,{category_name:req.params.category_name})
        res.send(categoryData)
      }

      
    export const deleteCategory = async(req,res)=>{
      let categoryData =await category.findByIdAndDelete(req.params.id);
      res.send(categoryData)
      console.log("deleted")
    }
    export const categoryfile =(req,res)=>{
      res.sendFile(__dirname + "/category.html")
  }
  



