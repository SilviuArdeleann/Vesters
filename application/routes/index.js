// REQUIREMENTS
var express = require("express"),
    router = express.Router();

// ROUTER
    router.get("/", (req,res) => { 
        res.render("index.ejs");
    });

    // STATIC ROUTES
    router.use("/static", express.static("application/static"));

// EXPORTS
    module.exports = router;