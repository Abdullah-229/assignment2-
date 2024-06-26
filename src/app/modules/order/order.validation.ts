import { z } from "zod";

//  Zod schema for Order validation
export const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().positive(),
});
