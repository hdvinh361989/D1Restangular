'use strict';

// Declare app level module which depends on views, and components
(function () {
    angular.module('myApp', [
        'ui.router',
        'ngMaterial',
        'rectangular.alchemy'
    ])
        .config(configuration)
        .controller('callAPIController', callAPIController);


    //Configuation function
    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'callAPI.html',
                controller: 'callAPIController',
                controllerAs: 'callApiCtrl'
            });

        $urlRouterProvider.otherwise('/');
    }


    //callAPIController function
    callAPIController.$inject = ['$scope', 'Sentiment'];


    function callAPIController($scope, Sentiment) {
        //Local variable
        var ctrl = this;

        //Global variable
        ctrl.url = 'www.bbc.com/news/world-us-canada-34663765';
        ctrl.result = '';
        //Global method
        ctrl.retriveData = retrieveData;


        //Implement methods
        function retrieveData() {
            Sentiment.urlGetText({
                url: ctrl.url
            }).then(function (data) {
                ctrl.result = JSON.stringify(data, null, 4);
            })
        }
    }

})();
