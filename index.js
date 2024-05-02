import express from "express";
import userRoutes from "./routes/users.js";
import authRouter from "./routes/auth.js";
import log from "./logger.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error connecting to database ${err}`));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(log);

app.use("/users", userRoutes);

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
