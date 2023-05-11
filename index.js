const express = require("express");
const cors = require("cors");

const port = 5000;
const app = express();

// config json response
app.use(express.json());

// solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// public folder for imgs
app.use(express.static("public"));

// routes

app.listen(port);
