(function() {
  'use strict';
  
  angular
    .module('educationSystemApp.application')
    .factory('applicationService', applicationService);

  function applicationService($http, ENV) {

    // TODO:
    // rename functions

    return {
      getBundle         : getBundle,
      createApplication : createApplication,
      getTasks          : getTasks,
      createSolution    : createSolution,
      changeSolution    : changeSolution,
      changeSkype: changeSkype,
      changePhone: changePhone,
      getSolutions : getSolutions
      
    };

    function getSolutions() {
      return $http.get(ENV.application + 'solution/')
        .then(function(response) {
          return response.data;
        });
    }
    
    function changeSkype(skypeName) {
      var data = {
        'skype': skypeName
      };
      return $http.patch(ENV.base + 'baseuser-update/', data)
        .then(function(response) {
          return response.data;
        });
    };

    function changePhone(phoneNumber) {
      var data = {
        'phone': phoneNumber
      };
      return $http.patch(ENV.base + 'baseuser-update/', data)
        .then(function(response) {
          return response.data;
        });
    };
    
    function getBundle() {
      return $http.get(ENV.application + 'bundle/')
        .then(function(response) {
          return response.data;
        }, function(error) {
          // handle error
        });
    };


    function createApplication(bundleId) {
      var data = {
        'bundle': bundleId
      };
      return $http.post(ENV.application + 'application/', data)
        .then(function(response) {
          return response.data;
        }, function(error) {
          // handle error
        });
    };

    function getTasks(bundleId) {
      return $http.get(ENV.application + 'task/?bundle__id='+bundleId)
        .then(function(response) {
          return response.data;
        }, function(error) {
          // handle error
        });
    };

    function createSolution(data) {
      // data = {taskId, solution->url}
      var solutionObj = {
        'task': data.id,
        'url': data.url
      };
      return $http.post(ENV.application + 'solution/', solutionObj)
        .then(function(response) {
          return response.data;
        }, function(error) {
          // handle error
        });
    };

    function changeSolution(data) {
      return $http.patch(ENV.application + 'solution/'+data.id, data)
        .then(function(response) {
          return response.data;
        }, function(error) {
          // handle error
        });
    };
  }
})();