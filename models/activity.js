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
});

export default mongoose.model("Activity", ActivitySchema);
