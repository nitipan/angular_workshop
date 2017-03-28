var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "\\public\\index.html");
});

app.get("/api/products", function(req, res) {
    var products = [
        { id: 1, name: "Car" },
        { id: 2, name: "Gadget" },
        { id: 3, name: "Mobile" }
    ];
    res.json(products);
});


app.post("/api/products", function(req, res) {

    var obj = req.body;
    obj.name = obj.name + " - edited";

    res.json({
        item: obj,
        status: true
    });

});


app.listen(80, function() {
    console.log("Start started at :80");
});