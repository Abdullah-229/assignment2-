import { Request, Response } from "express";
import { ProductServices } from "./product.serviece";
import { productSchema } from "../product.zodValidatioin";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const productData = productSchema.parse(product)
        const result = await ProductServices.createProductInDB(productData)
        res.status(200).json({
            success: true,
            message: 'product created successfully',
            data: result,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to create product',
            error: err,
        })
    }
}

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: 'product retrieved successfully',
            data: result,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to get product',
            error: err,
        })
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSingleProductFormDB(productId)
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to get product',
            error: err,
        })
    }
}
const updateProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.updateProduct(productId, req.body)
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to update product',
            error: err,
        })
    }
}

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deleteProduct(productId)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to delete product',
            error: err,
        })
    }
}
const findProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm;
        console.log(searchTerm);
        const result = await ProductServices.findProduct(searchTerm as string)
        res.status(200).json({
            success: true,
            message: `"Products matching search term '${searchTerm}' fetched successfully!"`,
            data: result,
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to load matched product',
            error: err,
        })
    }
}

export const ProductControllers = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    findProducts,
}