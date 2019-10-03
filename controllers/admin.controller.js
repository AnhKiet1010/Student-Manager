var Admin = require('../models/admin.model');
var bodyParser = require('body-parser');
var md5 = require('md5');

module.exports.login = function(req,res) {
    res.render('authentication/login')
}

module.exports.signup = function(req,res) {
    res.render('authentication/signup')
}

module.exports.postSignup = async function(req,res) {
    let hashPass = md5(req.body.password);
    let adminFdata = Admin.find({username : req.body.username});
    if(adminFdata) {
        res.render('authentication/signup', {
            errors: ['ユーザー名が存在した'],
            values: req.body
        })
    }
    var admin = new Admin({
        username: req.body.username,
        email: req.body.email,
        password: hashPass,
    });
    admin.save()
    .then(item => {
      res.render('index', {
        admin: admin,
        cookie: req.cookies
      });
    })
    .catch(err => {
      res.send("unable to save to database");
      return;
    });
    res.cookie('adminId', admin[0]._id);
}

module.exports.postLogin = async function(req,res) {
    var email = req.body.email;
    var password = req.body.password;

    var admin = await Admin.find({email: email});

    if(!admin) {
        res.render('/authentication/login', {
            errors: [
                'Admin not exits'
            ],
            values: req.body
        });
        return;
    }

    var hashPass = md5(password);
    if(admin[0].password != hashPass) {
        res.render('authentication/login', {
            errors: [
                'Password is wrong'
            ],
            values: req.body
        });
        return;
    }

    res.cookie('adminId', admin[0]._id);
    res.render('index', {
        cookie: res.cookie('adminId', admin[0]._id)
    });
}