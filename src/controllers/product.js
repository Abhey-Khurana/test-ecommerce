import Product from "../models/product.model.js";
import redisClient from "../config/redis.js"

async function getProducts(req, res) {
    try {

        const cachedProducts = redisClient.get("products");

        if (cachedProducts) {
            res.json({ data: Json.parse(cachedProducts) });
        }
        const products = await Product.find();
        res.json({ status: 200, data: products })
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {
    getProducts
}