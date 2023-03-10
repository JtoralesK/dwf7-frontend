var cors = require("cors");
var express = require("express");

const app = express();
const port = process.env.PORT || 3099;

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.send(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});