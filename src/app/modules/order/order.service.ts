import productModel from "../product/product.model";
import { Order } from "./order.interface";
import orderModel from "./order.model";

const createOrder = async (order: Order) => {
  const product = await productModel.findById(order.productId);

  //if no product available of the id
  if (!product) {
    return {
      success: false,
      message: "Product not found",
      data: null,
    };
  }

  //if available quantity is less than the order
  if (order.quantity > product.inventory.quantity) {
    return {
      success: false,
      message: "Insufficient quantity available in inventory",
      data: null,
    };
  }

  // inventory quantity and inStock status calculation
  const quantity = product.inventory.quantity - order.quantity;
  const inStock = quantity > 0 ? true : false;

  await productModel.findByIdAndUpdate(order.productId, {
    "inventory.quantity": quantity,
    "inventory.inStock": inStock,
  });

  //create order section
  const result = await orderModel.create(order);
  return { success: true, message: "Order placed successfully!", data: result };
};

const getOrderFromDB = async (orderQuery: string) => {
  if (orderQuery) {
    // const regex = new RegExp(orderQuery);
    const products = await orderModel.find({ email: { $eq: orderQuery } });
    return products;
  } else {
    const products = await orderModel.find();
    return products;
  }
};

export const OrderServices = {
  createOrder,
  getOrderFromDB,
};
