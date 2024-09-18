import { Router } from "express"
import ProductController from "../Controllers/ProductContoller.js"

const productrouter = Router();


productrouter.get("/", ProductController.getAllProducts)
productrouter.post("/create-product", ProductController.createdProduct)
productrouter.put("/edit-product", ProductController.editProduct)
productrouter.delete("/delete-product/:id", ProductController.deleteProduct)


export default productrouter;