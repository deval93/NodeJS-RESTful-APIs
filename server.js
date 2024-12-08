'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    userRoutes = require('./api/routes/usersRoutes'),
    fileRoutes = require('./api/routes/fileHandlerRoutes'),
    mailRoutes = require('./api/routes/mailRoutes');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);
fileRoutes(app);
mailRoutes(app);

app.get('/', function (req, res) {
    res.send('RESTful API server started on: ' + port)
});

app.get('/upload/files', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port);
});
