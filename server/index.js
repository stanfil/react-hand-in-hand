let express = require("express");
let app = express();
let port = require("./config").port;
let mongoose = require("mongoose");
let uri = require('./config').uri;
let User = require("./models/user");
let routes = require('./routes');
let bodyPaser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');

app.use(morgan('dev'));
app.use(bodyPaser.urlencoded({ extended: false}));
app.use(bodyPaser.json());
app.use(cors());
mongoose.connect(uri);

let db = mongoose.connection;
db.on('error', function (err) {
    console.log('database connection failed!', err);
});
db.once('open', function () {
    console.log('database connection success!');
});

routes(app);

app.listen(port, function () {
    console.log(`running on port ${port}...`);
});