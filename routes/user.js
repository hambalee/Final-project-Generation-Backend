import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updateProfileImg,
} from "../controllers/user.js";

const router = express.Router();

//Get all user
router.get("/", getUser);

//Create activity
router.post("/", createUser);

//Patch activity
router.patch("/:id", updateUser);
router.patch("/profileimg/:id", updateProfileImg);
router.patch("/backgroundimg/:id");

//Delete activity
router.delete("/:id", deleteUser);
export default router;
