import asyncHandler from 'express-async-handler'

// @desc    Get goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals' });
});
// @desc    Post goals
// @route   POST /api/v1/goals
// @access  Private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(200).json({ message: 'Post Goals' });
});

// @desc    Update goals
// @route   PUT /api/v1/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc    Delete goals
// @route   DELETE /api/v1/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

export { getGoals, postGoals, updateGoals, deleteGoals };
