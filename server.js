import express from "express";
import dotenv from "dotenv";

import { errorHandler } from "./middlewares/errorHandler.js";

// Creating app
const app = express();

// Json body middleware
app.use(express.json());

// Error Handling
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Application started on ${PORT}`);
});
