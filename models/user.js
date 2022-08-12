import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 4,
    maxLength: 32,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 32,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 4,
    maxLength: 128,
  },
  profileimg: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);
