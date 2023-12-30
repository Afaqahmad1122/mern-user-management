const asyncHandler = require("express-async-handler");

// get all goals controller

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals are available here",
  });
});

// post  goals controller
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
});

// update  goals controller
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals are available here",
  });
});

// delete  goals controller
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals are available here",
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
