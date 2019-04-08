const express = require('express');

 path = require('path');
 cors = require('cors');
 bodyParser = require('body-parser');
 mongoose = require('mongoose');
config = require('./db');

const clientRoute = require('./routes/client.route');
mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );




 const app = express();
app.use(bodyParser.json());
app.use (cors());
app.use('/client', clientRoute);
const port = process.env.PORT || 3000;

const server = app.listen(function(){
    console.log('Listening on port ' + port);
});











//Another way to connect

//    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database'+ err)}
//   );

   
// const port = process.env.PORT || 4000;

// const server = app.listen(port, function(){
//     console.log('Listening on port ' + port);
//    });

