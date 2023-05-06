const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({
    message: "Connected"
  });
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Serve is listening on 8081");
});
