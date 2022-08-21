import express from "express";
import {
  createActivity,
  deleteActivity,
  getActivities,
  updateActivity,
  getActivityById,
} from "../controllers/activity.js";

const router = express.Router();

//Get all activities
router.get("/", getActivities);
//Get by id activity
router.get("/:id", getActivityById);
//Create activity
router.post("/", createActivity);
//Patch activity
router.patch("/:id", updateActivity);
//Delete activity
router.delete("/:id", deleteActivity);

export default router;
