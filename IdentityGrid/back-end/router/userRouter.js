import express from "express";
import {
  getAllUsers,
  getUsersByName,
  getUserById,
  saveData,
  deleteData,
  updateData,
  loginUser,
  getActivities,
} from "../controller/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

export const userRouter = express.Router();

userRouter.get("/", verifyToken, getAllUsers);
userRouter.get("/activities", verifyToken, getActivities);
userRouter.get("/user/:id", verifyToken, getUserById);
userRouter.get("/:fname", getUsersByName);
userRouter.post("/save", saveData);
userRouter.post("/login", loginUser);
userRouter.put("/update/:id", updateData);
userRouter.delete("/remove/:id", deleteData);
