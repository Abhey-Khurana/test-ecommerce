import express from "express";
import OrderRoutes from "./routes/order.routes.js"
import ProductRoutes from "./routes/product.routes.js"
import PaymentRoutes from "./routes/payment.routes.js"
import cors from "cors"

const app = express();

app.use(express.json())

app.use(cors());

app.use("/order", OrderRoutes);
app.use("/products", ProductRoutes)
app.use("/payments", PaymentRoutes)

export default app;