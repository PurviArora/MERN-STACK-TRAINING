import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { getConnection } from "./config/db.js";
import { userRouter } from "./router/userRouter.js";

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Read values from .env
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// Connect Database
getConnection(DB_URL);

// Routes
app.use(userRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});