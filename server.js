const express = require("express");
const application = express();
const PORT = process.env.PORT || 8000;

application.use(express.static(__dirname + '/public'));
application.use(express.static('./'));

application.use(express.urlencoded({ extended: true }));
application.use(express.json());

require("./apiroutes")(application);
require("./htmlroutes")(application);

application.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT);
});