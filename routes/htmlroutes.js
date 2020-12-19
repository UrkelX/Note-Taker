const path = require("path");

// HTML Route
module.exports = function (application) {
    application.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    application.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};

