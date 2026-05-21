import db from "../config/db.js";
import { calculateDistance } from "../utils/distance.js";

export const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO schools(name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database error",
        });
      }

      res.status(201).json({
        message: "School added successfully",
        schoolId: result.insertId,
      });
    }
  );
};


export const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    const [schools] = await db.query("SELECT * FROM schools");

    const sortedSchools = schools
      .map((school) => {
        const distance = calculateDistance(
          parseFloat(latitude),
          parseFloat(longitude),
          school.latitude,
          school.longitude
        );

        return {
          ...school,
          distance: Number(distance.toFixed(2)),
        };
      })
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json({
      success: true,
      schools: sortedSchools,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};