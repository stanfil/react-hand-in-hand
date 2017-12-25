let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        username: { type: String, unique: true, required: true},
        password: { type: String, required: true}
    },
    {
        timestamps: true
    }
);

UserSchema.pre("save", function (next) {
    let user = this, SALT_FACTOR=5;
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', UserSchema);
//users collection