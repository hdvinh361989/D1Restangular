/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('D1Restangular.apimanager', [
        'restangular',
        'ngStorage'
    ])
        .config(configuration);

    configuration.$inject = ['RestangularProvider'];

    function configuration(RestangularProvider) {
    }
})();