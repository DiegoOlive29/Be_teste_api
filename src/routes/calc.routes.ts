import { Router } from "express";
import { listProductsCalcController } from "../controllers/calc.controllers";

const userCalc = Router()

userCalc.get('/:id', listProductsCalcController)

export default userCalc