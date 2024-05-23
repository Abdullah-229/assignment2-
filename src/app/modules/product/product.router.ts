import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router()

router.post("/products", ProductControllers.createProduct)

router.get("/products", ProductControllers.getAllProduct);

router.get("/products/:productId", ProductControllers.getProductById);

router.put("/products/:productId", ProductControllers.updateProductById)

router.delete("/products/:productId", ProductControllers.deleteProductById)

router.get("/products?searchTerm = iPhone", ProductControllers.deleteProductById)


export const ProductRoutes = router;