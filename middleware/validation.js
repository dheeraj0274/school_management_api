import { body, query, validationResult } from "express-validator";

export const addSchoolValidation = [
  body("name").notEmpty(),
  body("address").notEmpty(),
  body("latitude").isFloat(),
  body("longitude").isFloat(),
];

export const listSchoolValidation = [
  query("latitude").isFloat(),
  query("longitude").isFloat(),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};