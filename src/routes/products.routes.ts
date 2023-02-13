import { Router } from "express";
import { listProductsController } from "../controllers/products.controllers";

const userProducts = Router()

userProducts.get('', listProductsController)

export default userProducts