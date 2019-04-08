var mongoose = require('mongoose');
const Scheme = mongoose.Schema;

let Client = new Scheme({ 
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }, 
    phoneNumber:{
        type: String,
        required: true
    },
    
    password:{
        type: String,
        required:true
    },
    confirmPassword:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Clients',Client)
//Add signup






// module.exports.addsignup = function(signup, callback){
//     SignUp.create(signup, callback);
// }     




// //clients schema

// let Clients = new Schema({
   
// },
//     {
// collection: 'clients'
//     }
// );
