var app = angular.module('app', [])

app.controller('appController', function(locationGrabber) {
  var vm = this

  vm.userInput = '';
  vm.shelters = [];

  vm.getLocation = function() {
    locationGrabber.getLocation(vm.userInput)
    .then(function(response){
      console.log('Responded!!', response)
      vm.shelters = response.data
    })
    .catch(function(err){
      console.error("Error!", err)
    })

  }
})

app.factory('locationGrabber', function($http){
  console.log($http)
  console.log('invoking locationGrabber')
  function getLocation (zip) {
    return $http.get('/api/findShelter')
  }


  return {
    getLocation: getLocation
  }
})
