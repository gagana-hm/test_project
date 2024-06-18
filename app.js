// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const Router = require("./routes/route");
const EmployeeRouter = require("./routes/employees_route");

const app = express();

dotenv.config();

const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", Router);
app.use("/employee", EmployeeRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server started running at http://localhost:" + port);
  } else {
    console.log("Error:" + error);
  }
});

module.exports = { app };
