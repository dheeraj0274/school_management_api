import express from "express";

import {
  addSchool,
  listSchools,
} from "../controllers/schoolController.js";

import {
  addSchoolValidation,
  listSchoolValidation,
  validate,
} from "../middleware/validation.js";

const router = express.Router();

router.post(
  "/addSchool",
  addSchoolValidation,
  validate,
  addSchool
);

router.get(
  "/listSchools",
  listSchoolValidation,
  validate,
  listSchools
);

export default router;