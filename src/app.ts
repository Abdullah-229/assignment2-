import express, { Application } from "express";
import { ProductRoutes } from "./app/modules/product/product.router";
import cors from "cors";
import { OrderRoute } from "./app/modules/order/order.router";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to Ecommerce API Service");
});

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoute);

export default app;
