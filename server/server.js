import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 9000;

connectDB();

const server = express();

server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
server.use(express.json());

server.use(cookieParser());

server.get("/", (req, res) => res.send("Server is running!"));
server.use("/api/users", userRoutes);
server.use("/api/auth", authRoutes);

server.use(notFound);
server.use(errorHandler);

server.listen(port, () => console.log(`Server started on port ${port}`));
