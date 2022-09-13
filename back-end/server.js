const express = require('express'),
   app = express(),
   bodyParser = require('body-parser');
port = process.env.PORT || 5000;
app.listen(port);
var cors = require('cors')

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./uploads/'));
app.use(cors());

// Testing upload file
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
})

var routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route
