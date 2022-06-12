import asyncWrapper from "express-async-handler";

export const getFoods = asyncWrapper(async (req, res, next) => {
  const foods = [];

  return res.status(200).json({ foods });
});
