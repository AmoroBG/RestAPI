// REQUIRE MODULES
const express = require('express');
// INTERNAL MODULES
const config = require('./config');
const dbconnection=require('./database/dbconnection');



// INITIALIZE APP
const app = express();

// DATABASE CONNECTION
dbconnection

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', function(req, res) {
    res.send('Hello World');
})

// 404 page
app.use(function(req, res) {
    res.status(404).send('<h1>404 Page Not Found</h1>');
})

// START SERVER
const PORT = config.port;
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})