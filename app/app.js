'use strict';

// Declare app level module which depends on views, and components
(function () {
  angular.module('myApp', [
      'ui.router',
      'ngMaterial',
      'D1Restangular'
    ])
    .config(configuration)
    .controller('callAPIController', callAPIController)
    .run(runTime);


  //Run time
  runTime.$inject = ['$state', '$rootScope'];

  function runTime($state, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
      if (toState.redirect) {
        console.log(toState.redirect);
        $state.go(toState.redirect, toParams);
      }
    })
  }


  //Configuation function
  configuration.$inject = ['$stateProvider', '$urlRouterProvider', 'RectHelperProvider'];

  function configuration($stateProvider, $urlRouterProvider, RectHelperProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'callAPI.html',
        controller: 'callAPIController',
        controllerAs: 'callApiCtrl',
        redirect: 'home.alchemy'
      })

      //Alchemy
      .state('home.alchemy', {
        url: '/alchemy',
        views: {
          'alchemyTab': {
            templateUrl: 'templates/alchemyTab.html'
          }
        }
      })

      //Semantria
      .state('home.semantria', {
        url: '/semantria',
        views: {
          'semantriaTab': {
            templateUrl: 'templates/semantria.tpl.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/home');

    //Rectangular config
    RectHelperProvider.config({
      alchemy: {
        config: {
          apiKey: 'a25e63fd5b691fe370ea09511b79fbd8c0a54d37'
        }
      }
    });
  }


  //callAPIController function
  callAPIController.$inject = ['$scope', 'Alchemy', 'Semantria', 'Watson', '$timeout', '$state'];


  function callAPIController($scope, Alchemy, Semantria, Watson, $timeout, $state) {
    //Local variable
    var ctrl = this;
    var indexTable = {
      '/alchemy': [0],
      '/semantria': [1]
    };

    //Global variable
    ctrl.current = $state.current;
    //console.log(ctrl.current);
    ctrl.indexTable = indexTable;
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
    ctrl.semantria = {};
    ctrl.semantria.status = '';
    ctrl.semantria.feature = '';
    ctrl.semantria.processDocument = '';

    //Global method
    ctrl.urlRetrieveData = urlRetrieveData;
    ctrl.htmlRetrieveData = htmlRetrieveData;
    ctrl.textRetrieveData = textRetrieveData;
    ctrl.imageUrlRetrieveData = imageUrlRetrieveData;
    ctrl.imageRetrieveData = imageRetrieveData;
    ctrl.fileChangeHandler = fileChangeHandler;
    ctrl.newsRetrieveData = newsRetrieveData;
    ctrl.initSemantria = initSemantria;
    ctrl.initSemantria();
    /*Watson.conceptexpansion.postUpload({
      "label": "testing",
      "seeds": [
        "restaurant",
        'hotel',
        'USA'
      ]
    }).then(function (data) {
      console.log(data);
      Watson.conceptexpansion.getStatus(data.jobid)
        .then(function (data1) {
          console.log(data1);
          Watson.conceptexpansion.putResult(data.jobid)
            .then(function (data2) {
              console.log(data2);
            })
        });
    });*/
    Watson.conceptexpansion.getPing().then(function (data) {
      console.log(data);
    });

    //Implement methods
    function urlRetrieveData() {
      Alchemy.getSentiment.url({
        url: ctrl.url
      }).then(function (data) {
        ctrl.urlResult = JSON.stringify(data, null, 4);
      });
    }

    function htmlRetrieveData() {
      Alchemy.getSentiment.html(ctrl.html).then(function (data) {
        ctrl.htmlResult = JSON.stringify(data, null, 4);
      })
    }

    function textRetrieveData() {
      Alchemy.getSentiment.text(ctrl.text, {
        outputMode: 'xml'
      }).then(function (data) {
        ctrl.textResult = data;
      })
    }

    function imageRetrieveData() {
      Alchemy.getFace.image(ctrl.imageFile).then(function (data) {
        ctrl.imageResult = JSON.stringify(data, null, 4);
      })
    }

    function imageUrlRetrieveData() {
      Alchemy.getFace.url({
        url: ctrl.imageUrl
      }).then(function (data) {
        ctrl.imageUrlResult = JSON.stringify(data, null, 4);
      });
    }

    function fileChangeHandler(element) {
      ctrl.imageFile = element.files[0];
    }

    function newsRetrieveData() {
      Alchemy.getNews({
        'start': ctrl.news.start,
        'end': ctrl.news.end,
        'maxResults': ctrl.news.maxResults,
        'q.enriched.url.title': ctrl.news.title,
        'return': ctrl.news.return
      }).then(function (data) {
        ctrl.newsResult = JSON.stringify(data, null, 4);
      })
    }

    function initSemantria() {
      Semantria.getStatus().then(function (data) {
        ctrl.semantria.status = JSON.stringify(data, null, 4);
      });

      Semantria.getSupportedFeatures().then(function (data) {
        ctrl.semantria.feature = JSON.stringify(data, null, 4);
      });

      Semantria.getConfigurations().then(function (data) {
        var params = [
          {
            "name": "Vinh Hoang test",
            "query": "Amazon AND EC2 AND Cloud"
          }
        ];
        Semantria.addQueries(params, data[0].config_id).then(function () {
          Semantria.getQueries(data[0].config_id).then(function (result) {
            ctrl.semantria.processDocument = JSON.stringify(result, null, 4);
          })
        })
      })
    }
  }
})();
