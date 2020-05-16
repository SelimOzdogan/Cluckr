const express = require("express");
const knex = require("../db/connection");
const moment = require("moment");

const router = express.Router();

router.get("/", (request, response) => {
    knex("clucks")
        .orderBy("createdAt", "desc")
        .then((clucks) => {
            response.render("clucks/index", { clucks, moment });
        });
});

router.get("/new", (request, response) => {
    if (!request.cookies.userName) {
        response.redirect("/sessions/signIn");
    }
    else {
        response.render("clucks/new", { request });
    }
});

router.post("/", (request, response) => {
    console.log(request.body)
    const { userName, content, imageUrl } = request.body;
    knex("clucks")
        .insert({
            userName,
            content,
            imageUrl,
        })
        .returning("*")
        .then((cluck) => {
            response.redirect("/clucks/");
        });
});

module.exports = router;
