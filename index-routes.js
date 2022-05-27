import { Router } from "express";
import { userRouter } from "./app/controllers/users/user-router.js";
import { login } from "./app/controllers/users/login.controller.js";

const indexRouter = Router()

// indexRouter.post("/test", test)
// indexRouter.get("/student/:studentId", getStudentDetails)
// indexRouter.post("/student-create", createStudent)
// indexRouter.put("/student-edit/:studentId", editStudent)
// indexRouter.delete("/delete-student/:studentId", deleteStudent)
//indexRouter.post("/tt", login)
indexRouter.use("/user", userRouter)

export default indexRouter