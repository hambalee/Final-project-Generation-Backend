import Activity from "../models/activity.js";

export const getActivities = async (req, res, next) => {
  const { page, limit } = req.query;

  let perPage = parseInt(limit);
  let pageNum = Math.max(0, parseInt(page));
  try {
    // const activities = await Activity.find();
    const paginationActivity = await Activity.find({})
      .skip(perPage * (pageNum - 1))
      .limit(perPage)
      .sort({
        createdAt: -1,
      })
      .exec((err, activities) => {
        Activity.count().exec((err, count) => {
          res.status(200).json({
            activities: activities,
            pageNum: pageNum,
            totalActivities: count,
            pageSize: perPage,
          });
        });
      });
    console.log("Get All Activity", paginationActivity);
  } catch (error) {
    next(error);
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
    next(error);
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
    next(error);
  }
};

export const deleteActivity = async (req, res, next) => {
  try {
    const deleteActivity = await Activity.findByIdAndDelete(req.params.id);
    console.log("deleteActivity", deleteActivity);
    res.status(200).json(deleteActivity);
  } catch (error) {
    next(error);
  }
};

export const sortActivityByType = async (req, res, next) => {
  try {
    const sortActivity = await Activity.find({ type: req.query.type }).sort({
      createdAt: -1,
    });
    console.log("sortActivityByType", sortActivity);
    res.status(200).json(sortActivity);
  } catch (error) {
    next(error);
  }
};

export const getActivityById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const activity = await Activity.findById(id);
    console.log("Get Activity", activity);
    res.status(200).json(activity);
  } catch (error) {
    next(error);
  }
};

// export const paginationActivity = async (req, res, next) => {
//   const { page, limit } = req.query;

//   var perPage = parseInt(limit) || 10;
//   var pageNum = Math.max(0, parseInt(page));

//   try {
//     const paginationActivity = await Activity.find({})
//       .skip(perPage * (pageNum - 1))
//       .limit(perPage);
//     console.log("paginationActivity", paginationActivity);
//     res.status(200).json(paginationActivity);
//   } catch (error) {
//     next(error);
//   }
// };
