import { Request, Response } from "express";
import { orderSchema } from "./order.validation";
import { OrderServices } from "./order.service";

const createOrder = async(req:Request,res:Response)=>{
    try {
        const order = req.body;
        const orderData = orderSchema.parse(order)
        const result = await OrderServices.createOrder(orderData)
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to place order',
            error: err,
        })
    }
}
const getOrders = async(req:Request,res:Response)=>{
    try {
        const {email} = req.query;
        console.log(email)
        const result = await OrderServices.getOrderFromDB(email as string)
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to place order',
            error: err,
        })
    }
}



export const OrderControllers = {
    createOrder,
    getOrders
}