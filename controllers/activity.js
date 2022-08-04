import Activity from "../models/activity.js";

export const getActivity = async (req, res, next) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    console.log(error);
  }
};

export const createActivity = async (req, res, next) => {
  const newActivity = await Activity(req.body);
  console.log("create new activity", newActivity);

  try {
    const saveActivity = await newActivity.save();
    // console.log(saveActivity);
    res.status(201).json(saveActivity);
  } catch (error) {
    console.log(error);
  }
};

export const updateActivity = async (req, res, next) => {
  try {
    const updateActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log("updateActivity", updateActivity);
    res.status(200).json(updateActivity);
  } catch (error) {
    console.log(error);
  }
};

export const deleteActivity = async (req, res, next) => {
  try {
    const deleteActivity = await Activity.findByIdAndDelete(req.params.id);
    console.log("deleteActivity", deleteActivity);
    res.status(200).json(deleteActivity);
  } catch (error) {
    console.log(error);
  }
};
