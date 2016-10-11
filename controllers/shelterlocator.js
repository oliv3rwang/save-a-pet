var express = require('express')
var router = express.Router();
var shelterPromise = require('../promises/shelterPromise')

router.get('/', function(req,res) {
  console.log('getting zip', req.query);
  var zip = req.query.zip

  shelterPromise.shelterFinder(zip)
    .then(function(response,body) {
      console.log('using zip ')
      // res.send(JSON.parse(response.body))
    })
})

module.exports = router;
