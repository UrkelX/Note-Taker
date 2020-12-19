const express = require("express");
const path = require("path");

// HTML Route
module.exports = function (application) {
    application.use(express.static(path.join(__dirname, "../public")));

    application.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    application.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};

