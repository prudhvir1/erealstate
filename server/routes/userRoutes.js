import express from "express";
import { updateUser } from "../controlllers/userController.js";
import { verifyToken } from "../middleware/verificationMiddleware.js";

const router = express.Router();

router.put("/update", verifyToken, updateUser);

export default router;
