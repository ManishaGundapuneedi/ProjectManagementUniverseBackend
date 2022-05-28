import { Router } from "express";
import { getResourcesList, getResourcesUtilization } from "./resource.controller.js";

export const resourceRouter = Router()

resourceRouter.get("/list", getResourcesList)
resourceRouter.get("/utilization", getResourcesUtilization)
