const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    bleh: "bleh",
    blah: 99,
  });
});
app.listen(PORT, () => console.log("Server is running"));
