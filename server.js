import express from "express"
import indexRouter from "./index-routes.js"
import bodyParser from "body-parser"
import cors from "cors";

const app = express()
const port = 9000

const corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log("server is started")
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(indexRouter)

