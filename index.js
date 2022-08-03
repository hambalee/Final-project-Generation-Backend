import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import activityRoute from "./routes/activity.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

// Middleware
app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);

app.use("/activity", activityRoute);

app.listen(8000, () => {
  connect();
  console.log("Server is running on port 8000");
});
