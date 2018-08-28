const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => res.send("Hello happy World!"));
app.get("/env", (req, res) =>
  res.send(`The message of the day is: ${process.env.SECRET_MESSAGE}`)
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
