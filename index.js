import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import activityRoute from "./routes/activity.js";
import userRoute from "./routes/user.js";
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
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/auth", authRoute);

app.use("/activity", activityRoute);
app.use("/users", userRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  connect();
  console.log("Server is running on port", port);
});
