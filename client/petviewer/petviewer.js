var petviewer = angular.module('petviewer', [])

petviewer.controller('petController', function(renderPets, $localStorage) {
  var vm = this;
  vm.petPhotos = []
  vm.getPets = function($localStorage) {
    console.log('Getting pets!')
    renderPets.getPets()
      .then(function(response) {
        console.log('pet photo response', response)
      })
  }
  vm.getPets();
})
