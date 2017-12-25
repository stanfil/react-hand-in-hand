let express = require("express");
let app = express();
let port = require("./config").port;
let mongoose = require("mongoose");
let uri = require('./config').uri;
let User = require("./models/user");
let routes = require('./routes');
let bodyPaser = require('body-parser');
let morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyPaser.urlencoded({ extended: false}));
app.use(bodyPaser.json());

mongoose.connect(uri);

let db = mongoose.connection;
db.on('error', function (err) {
    console.log('database connection failed!', err);
});
db.once('open', function () {
    console.log('database connection success!');
    let user = new User({
        username: 'sss',
        password: 'shadowalker'
    });
    user.save();
});

routes(app);

app.listen(port, function () {
    console.log(`running on port ${port}...`);
});