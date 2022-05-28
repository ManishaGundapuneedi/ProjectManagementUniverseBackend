import { Router } from "express";
import { login } from "./login.controller.js";

export const userRouter = Router()

userRouter.post("/login", login)

//export default userRouter
