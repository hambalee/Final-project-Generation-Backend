import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    // new Date().toISOString() => '2022-08-03T05:06:48.215Z'
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

export default mongoose.model("Activity", ActivitySchema);
