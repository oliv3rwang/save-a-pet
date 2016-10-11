var app = angular.module('app',['ui.router','ngStorage','shelterfinder'])

app.config(function($stateProvider,  $urlRouterProvider) {
  $urlRouterProvider.otherwise('/shelterfinder');
  $stateProvider.state('shelterfinder', {
      url: '/shelterfinder',
      templateUrl: 'shelterfinder/shelterfinder.html',
      controller: "shelterController"
    })
})

app.factory('locationGrabber', function($http){
  var getLocation = function(zip) {
      console.log('invoking locationGrabber')
    return $http.get('/api/findshelter/' + zip)
    .then(function(data){
      console.log('this is data', data)
      return data
    })
  }

  return {
    getLocation: getLocation
  }
})

app.factory('renderPets', function($http,$localStorage){
  var getPets = function() {
    console.log('rendering pets', $localStorage)
    return $http.get('/api/renderpets' + $localStorage.choice + $localStorage.shelterId)
      .then(function(data) {
        console.log('this is data in renderpets', data)
        return data
      })
  }
  return {
    getPets: getPets
  }

})
