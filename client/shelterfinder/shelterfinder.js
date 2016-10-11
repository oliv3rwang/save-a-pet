var shelterfinder = angular.module('shelterfinder', ['ngstorage'])

shelterfinder.controller('shelterController', function(locationGrabber) {
  var vm = this
  vm.userInput = '';
  vm.shelters = [];
  vm.shelterId = null;
  vm.choice = '';
  vm.choice = $localStorage.choice
  vm.shelterId = $localStorage.shelterId

  vm.clickSaver = function(shelter){
    console.log(shelter);
    vm.shelterId = shelter

  }
  vm.catClick = function() {
    vm.choice = 'cat';

    console.log("great choice")
  }
  vm.dogClick = function() {
    vm.choice = 'dog';

    console.log("squirrel")
  }

  vm.getLocation = function(zip) {
    console.log("Getting zip")
    locationGrabber.getLocation(zip)
    .then(function(response){
      console.log('Responded!!', response)
      vm.shelters = response.data.petfinder.shelters.shelter
      console.log(vm.shelters)
    })
    .catch(function(err){
      console.error("Error!")
    })

  }
})
