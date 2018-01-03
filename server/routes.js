let User = require('./models/user');
let jwt = require('jsonwebtoken');
let secret = require('./config').secret;

let generateToken = function (user) {
    return jwt.sign(user, secret, {
        expiresIn: 3000
    })
};
module.exports = function (app) {
    app.post('/auth/login', function (req, res) {
        User.findOne({ username: req.body.username }, function (err, user) {
            if(err) {return console.log(err);}
            if(!user) { return res.status(403).json({error: '用户名不存在！ '})}
            user.comparePassword(req.body.password, function (err, isMatch) {
                if(err) {return console.log(err); }
                if(!isMatch) {return res.status(403).json({error: "密码错误！ "});}
                return res.json({
                    token: generateToken({name:user.username}),
                    user: {name: user.username},
                    items: JSON.parse(user.items)
                });
            })
        })
    });

    app.post('/auth/signup', function (req, res) {
        let user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.items = JSON.stringify([]);
        user.save(function (err) {
            if(err) {
                return console.log(err);
            }
            return res.json({
                token: generateToken({name: user.username}),
                user: {name: user.username},
                items: JSON.parse(user.items)
            });
        });
    });

    app.post('/updateItems', function (req, res) {
        let username = req.body.username;
        let items = JSON.stringify(req.body.items);
        console.log(items);
        User.update({username: username},{$set : { items : items }},function (error) {
            if(error){
                res.send(error);
                return;
            }
            res.send("update success!");
        })
    });
};