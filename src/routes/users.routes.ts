import { Router } from "express";
import { listUserController } from "../controllers/users.controllers";

const userRoutes = Router()

userRoutes.get('', listUserController)

export default userRoutes