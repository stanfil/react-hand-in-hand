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
                    token: generateToken({naem:user.username}),
                    user: {name: user.username}
                })
            })
        })
    })
};