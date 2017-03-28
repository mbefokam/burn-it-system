var passport = require('passport');
var UserModel = require('../models/users').UserModel;


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.createUser = function (req, cb){
    var user =  req.body;  
    UserModel.create(user, cb);
    
}
