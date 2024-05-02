import express from "express";
import { login, logout } from "../controllers/auth.js";
import checkToken from "../middlewares/checkToken.js";
import cors from "cors";

const router = express.Router();

router.post("/login", login);

router.get("/logout", checkToken, logout);

export default router;
