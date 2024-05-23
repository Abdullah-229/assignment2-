import productModel from "../product/product.model";
import orderModel from "./Order.model";
import { Order } from "./order.interface";

const createOrder = async (order: Order) => {
    const product = await productModel.findById(order.productId)
    if (!product) {
        return "Product not found";
    }

    if (order.quantity > product.inventory.quantity) {
        return "Insufficient stock";
    }

    // inventory quantity and inStock status calculation
    product.inventory.quantity -= order.quantity;
    if (product.inventory.quantity <= 0) {
        product.inventory.inStock = false;
    } else {
        product.inventory.inStock = true;
    }

    const result = await orderModel.create(order);
    return result;
}

const getOrderFromDB = async (orderQuery: string) => {
    if (orderQuery) {
        // const regex = new RegExp(orderQuery); 
        const products = await orderModel.find({email:{$eq:orderQuery}})
        return products;
    }
    else {
        const products = await orderModel.find();
        return products;

    }
}

export const OrderServices = {
    createOrder,
    getOrderFromDB
}