import Order from "../models/order.model.js";

async function createOrder(req, res) {
    try {
        const { userId, products, amount } = req.body;



        const order = await Order.create({ userId, products, amount });

        if (order) {
            const io = getIO();
            io.emit("orderCreationUpdate", { userId, products, amount });
        }
        res.json(order);
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {
    createOrder
}