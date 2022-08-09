import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

//Get all user
router.get("/", getUser);

//Create activity
router.post("/", createUser);

//Patch activity
router.patch("/:id", updateUser);

//Delete activity
router.delete("/:id", deleteUser);
export default router;
