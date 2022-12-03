import { MAIN_DATA } from "./connection.js";
import express from "express";

const app = express();
const PORT = 5000;

app.get("/skills", (req, res) => {
  res.send(MAIN_DATA)
});
app.listen(PORT, () => console.log("Server is running"));
