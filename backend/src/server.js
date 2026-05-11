import express from "express";               // works when u put type=module in package json // import express = require("express");
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import helmet from "helmet"; 
import mongoSanitize from "express-mongo-sanitize"; 

import noteRoutes from "./routes/noteRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(helmet());            // secure headers, must be early
app.use(mongoSanitize());     // NoSQL injection protection

if (process.env.NODE_ENV !== "production") {
app.use(cors({
    origin:"http://localhost:5173",
}));
}

app.use(express.json({ limit: "10kb" }));  // Add size limit, blocks huge payloads                    // this middleware will parse JSON bodies: req.body, allow access to req body
app.use(rateLimiter);

/*
app.use((req,res,next) =>{                  // custom middleware
    console.log(`Req method is ${req.method} and Req URL is ${req.url}`)
    next();
})
*/

app.use("/api/notes" , noteRoutes);          // middleware

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
 });
}

app.use(errorHandler);                      // centralized error handling middleware    

connectDB().then(() =>{
    app.listen(PORT, () =>console.log("Server started at PORT:",PORT));
})

