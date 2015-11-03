/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('AlPublicationDate', PublicationDate);

    PublicationDate.$inject = ['Alchemyapi', 'RectHelper'];

    function PublicationDate(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'PublicationDate',
            url: url,
            html: html
        };
        return Export;

        /*Implement function
         Can set property parentRoute to replace default parentRoute

         What is parentRoute?
         Example: https://gateway-a.watsonplatform.net/calls/data/GetNews
         In this case "calls/data" is parentRoute*/
        function url(params) {
            var config = {
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.publicationDate.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function html(postData, params) {
            var config = {
                endpointType: 'html',
                endpoint: RectHelper.alchemy.api.publicationDate.html,
                queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }
    }
})();