var Admin = require('../models/admin.model');

module.exports.requireAuth = function(req,res,next) {
    if(!req.cookies.adminId) {
        res.redirect('/admin');
        return;
    }
    
    var admin = Admin.find({_id : res.cookie.adminId });
    if(!admin) {
        res.redirect('/admin');
        return;
    }

    next();
}