import express from "express";
import dotenv from "dotenv";
import foodRouter from "./routers/foodRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

// Creating dotenv
dotenv.config();

// Creating app
const app = express();

// Json body middleware
app.use(express.json());

// Error Handling
app.use(errorHandler);

// Routers
app.use("/food", foodRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Application started on ${PORT}`);
});
