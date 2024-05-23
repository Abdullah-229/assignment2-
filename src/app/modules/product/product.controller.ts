import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productSchema } from "./product.zodValidation";

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

const getProduct = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const result = await ProductServices.getProductsFromDB(searchTerm as string);
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

export const ProductControllers = {
    createProduct,
    getProduct,
    getProductById,
    updateProductById,
    deleteProductById,
}