import express, { Application, Request, Response } from 'express'
import { ProductRoutes } from './app/modules/product.router';
import cors from 'cors';
const app: Application = express()

app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes)

export default app;