import mongoose from "mongoose";



const orderSchema = new mongoose.Schema({

    userId: { type: String },
    products: [{ productId: String, qty: Number }],
    status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    amount: Number
});

const Order = new mongoose.model("Order", orderSchema);

export default Order;