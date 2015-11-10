/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.apimanager', [
        'restangular'
    ])
        .config(configuration);

    configuration.$inject = ['RestangularProvider'];

    function configuration(RestangularProvider) {
    }
})();