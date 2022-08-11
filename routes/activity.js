import express from "express";
import {
  createActivity,
  deleteActivity,
  getActivities,
  updateActivity,
  sortActivityByType,
  getActivityById,
} from "../controllers/activity.js";

const router = express.Router();

//Get all activities
router.get("/", getActivities);
//Get by id activity
router.get("/:id", getActivityById);
//Get by typeo
router.get("/typesort", sortActivityByType);
//Create activity
router.post("/", createActivity);
//Patch activity
router.patch("/:id", updateActivity);
//Delete activity
router.delete("/:id", deleteActivity);

export default router;
