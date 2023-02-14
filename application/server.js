// REQUIREMENTS
var ejs = require("ejs"),
    express = require("express");

// EXPRESS
var app = express();

    // SETTINGS
    app.set("etag", false);
    app.set("view engine", "ejs");
    app.set("x-powered-by", false);
    app.set("views", "application/views");

    // MIDDLEWARE

    // ROUTES
    app.use("/", require("./routes/index"));

    // LISTENER
    app.listen(process.env.PORT || 80);