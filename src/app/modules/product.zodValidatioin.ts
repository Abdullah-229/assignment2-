
import { z } from 'zod';

const inventorySchema = z.object({
    quantity: z.number(),
    inStock: z.boolean()
});

const variantSchema = z.object({
    type: z.string(),
    value: z.string()
});

const productSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    description: z.string(),
    price: z.number(),
    category: z.string().min(1, "Product category is required"),
    tags: z.array(z.string()),
    variants: z.array(variantSchema),
    inventory: inventorySchema
});

export { productSchema };