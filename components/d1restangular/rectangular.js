/**
 * Created by vinhhoang on 30/10/2015.
 */
(function () {
  angular.module('D1Restangular', [
      'D1Restangular.apimanager',
      'restangular',
      'ngStorage'
    ])
    .config(configuration);

  configuration.$inject = [];

  function configuration() {

  }
})();