var app = angular.module('app', [])

app.controller('appController', function(locationGrabber) {
  var vm = this

  vm.userInput = '';
  vm.shelters = [];

  vm.getLocation = function() {
    locationGrabber.getLocation(vm.userInput)
    .then(function(response){
      console.log('Responded!!')
      vm.shelters = response.data
    })
    .catch(function(err){
      console.error("Error!")
    })

  }
})

app.factory('locationGrabber', function($http){
  console.log('invoking locationGrabber')
  var getLocation = function(zip) {
    return $http.get('/api/findshelter' + zip)
    .then(function(data){
      return data
    })
  }


  return {
    getLocation: getLocation
  }
})
