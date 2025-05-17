import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import connectDB from "./config/index.js";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";


import path from "path";
dotenv.config();

const app=express()
const server = http.createServer(app);

const PORT=process.env.PORT || 0;




app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use("/api/user",userRoutes);

  
  server.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
  });
