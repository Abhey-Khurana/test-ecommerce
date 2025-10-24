import Order from "../models/order.model";
import getIO from "../services/websocket.js"

async function checkout(req, res) {

    const orderId = req.body;

    try {
        const orderDetails = await Order.findById(orderId);

        if (orderDetails) {
            orderDetails.status = "paid";
            const io = getIO();
            io.emit("orderPaid", orderDetails);
        }
        res.json({ message: "Order Paid" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {
    checkout
}