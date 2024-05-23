import { Product } from "./product.interface";
import productModel from "./product.model";

const createProductInDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

const getSingleProductFormDB = async (_id: string) => {
  const result = await productModel.findOne({ _id });
  return result;
};

const updateProduct = async (_id: string, product: Product) => {
  await productModel.updateOne({ _id }, product);
  const result = await productModel.findOne({ _id });
  return result;
};

const deleteProduct = async (_id: string) => {
  await productModel.deleteOne({ _id });
  const result = await productModel.findOne({ _id });
  return result;
};

const getProductsFromDB = async (searchTerm: string) => {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, "i"); //i is used to make it case insensitive
    const products = await productModel.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { tags: { $regex: regex } },
          ],
        },
      },
    ]);
    return products;
  } else {
    const products = await productModel.find();
    return products;
  }
};

export const ProductServices = {
  createProductInDB,
  getProductsFromDB,
  getSingleProductFormDB,
  updateProduct,
  deleteProduct,
};
