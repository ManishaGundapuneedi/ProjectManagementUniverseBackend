import { Router } from "express";
import { userRouter } from "./app/controllers/users/user-router.js";
import { projectRouter } from "./app/controllers/projects/projects.routes.js";
import { login } from "./app/controllers/users/login.controller.js";
import { testCall } from "./app/controllers/test/test.controller.js";
import { resourceRouter } from "./app/controllers/resources/resource.routes.js";

const indexRouter = Router()

// indexRouter.post("/test", test)
// indexRouter.get("/student/:studentId", getStudentDetails)
// indexRouter.post("/student-create", createStudent)
// indexRouter.put("/student-edit/:studentId", editStudent)
// indexRouter.delete("/delete-student/:studentId", deleteStudent)
indexRouter.get("/test", testCall)
indexRouter.use("/user", userRouter)
indexRouter.use("/project", projectRouter)
indexRouter.use("/resource", resourceRouter)

export default indexRouter