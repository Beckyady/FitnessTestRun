 const express = require('express');
 var router = express.Router();
 
 
 var Clients = require('../models/clients');


 router.post('/', (req, res) =>{
var client = new Clients({

    fullName: req.body.fullName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
});
client.save((err, doc) => {
    if (!err){
        res.send(doc);
    }
    else {
        console.log('Error in saving data:' + JSON.stringify(err, undefined, 2));
    }
});
 });
 module.exports = router;