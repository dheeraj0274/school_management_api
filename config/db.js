import mysql from "mysql2";
import dotenv from 'dotenv'

dotenv.config({path:'./config/.env'})

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log(process.env.DB_HOST)



connection.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("MySQL Connected");
  }
});

export default connection;