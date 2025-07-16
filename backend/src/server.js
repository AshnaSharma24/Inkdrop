import express from "express";               // works when u put type=module in package json // import express = require("express");
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/noteRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();
// console.log(process.env.MONGO_URI)

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());                    // this middleware will parse JSON bodies: req.body, allow access to req body
app.use(rateLimiter);

/*
app.use((req,res,next) =>{                  // custom middleware
    console.log(`Req method is ${req.method} and Req URL is ${req.url}`)
    next();
})
*/

app.use("/api/notes" , noteRoutes);          // middleware

connectDB().then(() =>{
    app.listen(PORT, () =>console.log("Server started at PORT:",PORT));
})

