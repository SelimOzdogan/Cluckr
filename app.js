const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require('cookie-parser')
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));

app.use(cookieParser())

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
    const userName = request.cookies.userName;
    response.locals.loggedInUserName = userName || "";
    next();
});

app.use(
    methodOverride((request, response) => {
        if (request.body && request.body._method) {
            const method = request.body._method;
            return method;
        }
    })
);


const sessionsRouter = require("./routes/sessionsRouter");
app.use("/sessions", sessionsRouter);

const clucksRouter = require("./routes/clucksRouter");
app.use("/clucks", clucksRouter);

app.get("/", (request, response) => {
    response.redirect("clucks/");
});

const PORT = 8080;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
    console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});