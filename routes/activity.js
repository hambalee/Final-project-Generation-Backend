import express from "express";
import {
  createActivity,
  deleteActivity,
  getActivity,
  updateActivity,
} from "../controllers/activity.js";

const router = express.Router();

//Get all activities
router.get("/", getActivity);
//Create activity
router.post("/", createActivity);
//Patch activity
router.patch("/:id", updateActivity);
//Delete activity
router.delete("/:id", deleteActivity);

export default router;
