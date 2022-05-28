import { Router } from "express";
import { getProjectsList } from "./projects.controller.js";

export const projectRouter = Router()

projectRouter.get("/list", getProjectsList)

//export default userRouter
