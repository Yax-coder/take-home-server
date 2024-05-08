const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome");
});

const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server is running on port: ${port}`);
});

mongoose
  .connect(
    'mongodb+srv://yahayme:passwordeng@cluster0.fjzmlhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log("MongoDB connection failed", err.message));
