require('dotenv').config();
var bcrypt = require('bcrypt');

function hash_password(password) {
    var saltRounds = process.env.SALT;

    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}

module.exports = {
    hash_password: hash_password
}