const fs = require('fs');



module.exports = function(application) {
    application.get("/api/notes", function(req, res){

        fs.readFile("./db/db.json", function(err, data) {
            if (err)
                throw err;
            res.send(JSON.parse(data));
        });
    });


    application.post("/api/notes", function(req, res) {
        
        fs.readFile("./db/db.json", function(err, data){
            if (err)
            throw err;
            notesss = JSON.parse(data);
            notesss.push(req.body);
            for (let i = 0; i < notesss.length; i++){
                notesss[i].id = i
            }
            console.log(notesss);
        });
        
        fs.writeFile("./db/db.json",
            JSON.stringify(notesss),
            function(err, data){
                if (err) {
                    console.log(err);
                } else {
                    res.json(JSON.parse(data));
                }
            }
        )
        
    });

    



}

