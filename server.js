const express = require("express");
const application = express();
const PORT = process.env.PORT || 8000;

application.use(express.static(__dirname + '/public'));
application.use(express.static('./'));

application.use(express.urlencoded({ extended: true }));
application.use(express.json());

require("./routes/apiroutes")(application);
require("./routes/htmlroutes")(application);

application.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT);
});

