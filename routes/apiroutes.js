const fs = require('fs');



module.exports = function(application) {
    application.get("/api/notes", function(req, res){

        fs.readFile()
    });
}