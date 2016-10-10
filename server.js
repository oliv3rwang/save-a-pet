var express = require('express');
var request = require('request');
var bodyParser = require('body-Parser');
var morgan = require('morgan');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors({credentials:true, origin:true}));
app.use(express.static('./client'))


var port = process.env.PORT || 8000

// if(!process.env.PORT) {
//   var config = require('./config')
// }
//
// var clientKey = process.env.KEY || config.KEY
// var clientSecret = process.env.SECRET || config.SECRET


// request('https://api.petfinder.com/shelter.find?key=50633c8da599f7f768a3a7f7d50663b9&location=90703', function (error, response, body) {
//     //Check for error
//     if(error){
//         return console.log('Error:', error);
//     }
//
//     //Check for right status code
//     if(response.statusCode !== 200){
//         return console.log('Invalid Status Code Returned:', response.statusCode);
//     }
//
//     //All is good. Print the body
//     console.log(body); // Show the HTML for the Modulus homepage.
//
// })
var shelterLocatorRouter = require('./controllers/shelterlocator')
app.use('/api/findShelter',shelterLocatorRouter)

app.listen(port);
console.log(`server listening on port ${port}`);
