import express from 'express'
import schoolRoutes from "./routes/schoolRoutes.js";
import cors from "cors";




const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", schoolRoutes);
app.get("/", (req, res) => {
  res.send("API Running");
});


export  default app;