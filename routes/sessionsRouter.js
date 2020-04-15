const express = require("express");
const knex = require("../db/connection");

const router = express.Router();


router.get("/signIn", (request, response) => {
    response.render("sessions/sign_in", { request });
});

router.post('/signIn', (request, response) => {
    const { userName } = request.body;
    const oneDay = 1000 * 60 * 60 * 24;
    response.cookie('userName', userName, { maxAge: oneDay })
    response.redirect("/clucks");
});

router.get('/signOut', (request, response) => {
    response.clearCookie('userName')
    response.redirect("/sessions/signIn");
});

module.exports = router;
