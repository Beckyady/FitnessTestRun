const express = require('express');
const app = express();
const clientRoutes = express.Router();

// Require Client model in our routes module
let Client = require('../models/clients');

// Defined store route
clientRoutes.route('/add').post(function (req, res) {
  let client = new Client(req.body);
  client.save()
    .then(businclientess => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
module.exports = clientRoutes;