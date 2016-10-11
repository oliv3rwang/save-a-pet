var express = require('express');
var request = require('request');
var bodyParser = require('body-Parser');
var morgan = require('morgan');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors({credentials:true, origin:true}));
app.use(express.static('./client'))
app.use(morgan('dev'))

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


app.get('/api/findshelter/:zip', function(req, res){
  console.log('This is working')
   //This end point is working!
  console.log("this is our query", req.params);
  // //get rid of any spaces
  var zip = req.params.zip;
  var url = "http://api.petfinder.com/shelter.find?key=50633c8da599f7f768a3a7f7d50663b9&location=" + zip + "&format=json"

  request.get(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.status(200).send(body);
    } else {
      res.status(404).send(error);
    }
  })



});


app.listen(port);
console.log(`server listening on port ${port}`);
