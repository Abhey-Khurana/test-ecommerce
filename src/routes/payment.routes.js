import { Router } from "express";
import { checkout } from "../controllers/payment";

const router = Router();


router.post("/", checkout);

export default router;