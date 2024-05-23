import orderModel from "./Order.model";
import { Order } from "./order.interface";

const createOrder = async(order:Order)=>{
    const result  = await orderModel.create(order);
    return result;
}

export const OrderServices = {
    createOrder,
}