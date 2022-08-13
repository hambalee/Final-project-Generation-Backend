import User from "../models/user.js";
import bcrypt from "bcryptjs"

export const getUser = async (req, res, next) => {
  try {
    const users = await User.find();
    console.log("Get All User", users);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await User({...req.body, password: hashPassword});
    const saveUser = await newUser.save();
    // console.log(saveUser);
    res.status(201).json(saveUser);
  } catch (error) {
		res.status(500).send({ message: "Internal Server Error", error });
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
    // TODO: validate before save
    const updateUser = await User.findByIdAndUpdate(req.params.id, {...req.body, password: hashPassword}, {
      new: true,
    });
    console.log("updateUser", updateUser);
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    console.log("deleteUser", deleteUser);
    res.status(200).json(deleteUser);
  } catch (error) {
    next(error);
  }
};
