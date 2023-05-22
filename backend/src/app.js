const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const songs = require("./songs-list.json");

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/", express.static("public"));
//  Serves all the request which includes /songs in the url from songs folder
app.use("/songs", express.static(path.join(__dirname + "songs")));

app.get("/status", (req, res) => {
  res.send({
    message: "Connected"
  });
});

app.post("/register", (req, res) => {
  res.send({
    message: "User registered successfully!"
  });
});

app.get("/songs", (req, res) => {
  res.send({
    code: 200,
    data: songs.data
  });
});

app.listen(process.env.PORT || 2020, () => {
  console.log("Serve is listening on port", process.env.PORT || 2020);
});
