const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require('cookie-parser')

const app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));

app.use(cookieParser())

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Under the Construction");
// });
app.get("/", (request, response) => {
    response.render("index");
});

app.get("/signIn", (request, response) => {
    response.render("sign_in", { request });
});

app.post('/signIn', (request, response) => {
    const { userName } = request.body;
    const oneDay = 1000 * 60 * 60 * 24;
    response.cookie('userName', userName, { maxAge: oneDay })
    response.render("sign_in", { request });
})

app.delete('/signIn', (request, response) => {
    response.clearCookie('userName')
    response.render("sign_in");
})


const PORT = 8080;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
    console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});