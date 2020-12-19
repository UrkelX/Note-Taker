const fs = require('fs');



module.exports = function (application) {
    application.get("/api/notes", function (req, res) {

        fs.readFile("./db/db.json", function (err, data) {
            if (err)
                throw err;
            res.send(JSON.parse(data));
        });
    });


    application.post("/api/notes", function (req, res) {

        fs.readFile("./db/db.json", function (err, data) {
            if (err)
                throw err;
            notesss = JSON.parse(data);
            notesss.push(req.body);
            for (let i = 0; i < notesss.length; i++) {
                notesss[i].id = i
            }

            fs.writeFile("./db/db.json",
                JSON.stringify(notesss),
                function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(notesss);
                    }
                }
            )

        });
    });


    application.delete("/api/notes/:id", function (req, res) {
        fs.readFile("./db/db.json", function (err, data) {
            // if (err) console.log(err);
            let notesss = JSON.parse(data);
            const notesssArray = notesss.filter(
                (item) => item.id !== parseInt(req.params.id)
            );
            fs.writeFile(
                "./db/db.json",
                JSON.stringify(notesssArray),
                function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(notesss);
                    }
                }
            );
        });
    });





}

