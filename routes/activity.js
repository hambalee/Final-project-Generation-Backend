import express from "express";
import {
  createActivity,
  deleteActivity,
  getActivity,
  updateActivity,
  sortActivityByType,
  paginationActivity,
} from "../controllers/activity.js";

const router = express.Router();

//Get all activities
router.get("/", paginationActivity, getActivity);
//Get by typeo
router.get("/typesort", sortActivityByType);
//Create activity
router.post("/", createActivity);
//Patch activity
router.patch("/:id", updateActivity);
//Delete activity
router.delete("/:id", deleteActivity);

export default router;
