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
    callAPIController.$inject = ['$scope', 'AlSentiment', 'AlFace', 'AlNews'];


    function callAPIController($scope, AlSentiment, AlFace, AlNews) {
        //Local variable
        var ctrl = this;

        //Global variable
        ctrl.url = 'www.bbc.com/news/world-us-canada-34663765';
        ctrl.urlResult = '';
        ctrl.html = '';
        ctrl.htmlResult = '';
        ctrl.text = '';
        ctrl.textResult = '';
        ctrl.imageUrl = '';
        ctrl.imageUrlResult = '';
        ctrl.imageFile = '';
        ctrl.imageResult = '';
        ctrl.news = {
            maxResults: 5,
            start: 'now-7h',
            end: 'now',
            title: 'travel',
            return: 'original.url,enriched.url.title'
        };
        ctrl.newsResult = '';

        //Global method
        ctrl.urlRetrieveData = urlRetrieveData;
        ctrl.htmlRetrieveData = htmlRetrieveData;
        ctrl.textRetrieveData = textRetrieveData;
        ctrl.imageUrlRetrieveData = imageUrlRetrieveData;
        ctrl.imageRetrieveData = imageRetrieveData;
        ctrl.fileChangeHandler = fileChangeHandler;
        ctrl.newsRetrieveData = newsRetrieveData;


        //Implement methods
        function urlRetrieveData() {
            AlSentiment.url({
                url: ctrl.url
            }).then(function (data) {
                ctrl.urlResult = JSON.stringify(data, null, 4);
            })
        }

        function htmlRetrieveData() {
            AlSentiment.html(ctrl.html).then(function (data) {
                ctrl.htmlResult = JSON.stringify(data, null, 4);
            })
        }

        function textRetrieveData() {
            AlSentiment.text(ctrl.text).then(function (data) {
                ctrl.textResult = JSON.stringify(data, null, 4);
            })
        }

        function imageRetrieveData() {
            AlFace.image(ctrl.imageFile).then(function (data) {
                ctrl.imageResult = JSON.stringify(data, null, 4);
            })
        }

        function imageUrlRetrieveData() {
            AlFace.url({
                url: ctrl.imageUrl
            }).then(function (data) {
                ctrl.imageUrlResult = JSON.stringify(data, null, 4);
            });
        }

        function fileChangeHandler(element) {
            ctrl.imageFile = element.files[0];
        }

        function newsRetrieveData() {
            AlNews.getNews({
                'start': ctrl.news.start,
                'end': ctrl.news.end,
                'maxResults': ctrl.news.maxResults,
                'q.enriched.url.title': ctrl.news.title,
                'return': ctrl.news.return
            }).then(function (data) {
                ctrl.newsResult = JSON.stringify(data, null, 4);
            })
        }
    }

})();
