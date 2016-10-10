var Promise = require('bluebird')

//promisify request so we can get rid of the callbacks and use promises
var request = Promise.promisify(require('request'));
Promise.promisifyAll(request);

//return the promisified call to request
module.exports.shelterFinder = function(zip) {
  return request('http://api.petfinder.com/shelter.find?key=50633c8da599f7f768a3a7f7d50663b9' +'&location=' + zip)
}
