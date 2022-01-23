import express from "express"

const router =express.Router();


import {findproduct,createproduct,updateproductData,deleteproduct, file, } from "../controller/product.controlelr"

router.get("/findproduct/:product_name/:category_Id", findproduct);
router.get("/createproduct/:product_name/:category_Id", createproduct);
router.get("/updateproductData/:id/:product_name", updateproductData);
router.get("/deleteproduct/:id",deleteproduct);
router.get("/productfile",file);
export default router;