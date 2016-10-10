var express = require('express')
var router = express.Router();
var shelterPromise = require('../promises/shelterPromise')

router.get('/', function(req,res) {
  console.log('getting zip')
  var zip = req.query.zip

  shelterPromise.shelterFinder(zip)
    .then(function(response,body) {
      console.log('this is response',response)
      console.log('this is body', body)
      res.send(JSON.parse(response.body))
    })
})

module.exports = router;
