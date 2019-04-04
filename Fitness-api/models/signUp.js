var mongoose = require('mongoose');

//signUp schema

var signUpSchema = mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    PhonNo:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required:true
    },
    Confirmpassword:{
        type: String,
        required: true
    }
});


var SignUp = module.exports = mongoose.model('SignUp', signUpSchema);

//Add signup

module.exports.addsignup = function(signup, callback){
    SignUp.create(signup, callback);
}     