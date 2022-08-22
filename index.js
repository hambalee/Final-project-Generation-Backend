import mongoose from "mongoose";
import app from "./api/index.js";
import config from "./config.js";
import auth from "./middleware/auth.js";

const connect = async () => {
  try {
    await mongoose.connect(config.mongo);
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

const port = config.port || 8000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});

connect();
