const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("room1");
});

app.get("/room2", function(req, res) {
    res.render("room2");
});

app.post("/room3", function(req, res) {
    const pass = req.body.pass;

    if(pass === '435512') {
        res.redirect(`/room3`);
    }
    else {
        res.render("room2", {error: "Incorrect Pin. Please try again."})
    }
});

app.get("/room3", function(req, res) {
    res.render("room3");
});

app.get("/room4", function(req, res) {
    res.render("room4");
});

app.listen(PORT, function(req, res) {
    console.log(`Server is running at port ${PORT}`);
});