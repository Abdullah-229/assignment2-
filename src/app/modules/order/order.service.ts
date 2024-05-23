import orderModel from "./Order.model";
import { Order } from "./order.interface";

const createOrder = async (order: Order) => {
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