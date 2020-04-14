const path = require("path");
const express = require("express");
const logger = require("morgan");
const app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Under the Construction");
// });
app.get("/", (req, res) => {
    res.render("index");
  });

app.get("/signIn", (req, res) => {
    res.render("sign_in");
  });

const PORT = 8080;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});