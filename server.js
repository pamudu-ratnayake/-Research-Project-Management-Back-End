const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });

  app.listen(PORT, () => {
    console.log(`<=== Server is up and running on port ${PORT} ====>`);
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("        <=== Database connected ! ====>");
  console.log(`<=== Running on URL: http://localhost:${PORT} ====>`);
});

const authRoutes = require("./src/routes/admin/UserManagementRT");
app.use("/auth-user", authRoutes);