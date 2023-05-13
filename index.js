const express = require("express");
const cors = require("cors");

const port = 5000;
require("dotenv").config();
const app = express();

// config json response
app.use(express.json());

// solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// public folder for imgs
app.use(express.static("public"));

// routes
const UserRoutes = require("./routes/UserRoutes");
const PetRoutes = require("./routes/PetRoutes");

app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);

app.listen(port);
