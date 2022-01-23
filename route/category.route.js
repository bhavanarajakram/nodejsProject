const router =express.Router();
import express from "express"
import { findcategory ,createcategory,updateCategoryData, deleteCategory, categoryfile} from "../controller/category.controller";
router.get("/findcategory/:category_name",findcategory);
router.get("/createcategory/:category_name",createcategory);
router.get("/updateCategoryData/:id/:category_name",updateCategoryData);
router.get("/deleteCategory/:id",deleteCategory);
router.get("/categoryfile",categoryfile);
export default router ;
