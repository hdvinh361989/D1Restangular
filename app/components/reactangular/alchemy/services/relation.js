/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('Relation', Relation);

    Relation.$inject = ['Alchemyapi', 'RectHelper'];

    function Relation(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Relation',
            url: url,
            html: html,
            text: text
        };
        return Export;

        /*Implement function
         Can set property parentRoute to replace default parentRoute

         What is parentRoute?
         Example: https://gateway-a.watsonplatform.net/calls/data/GetNews
         In this case "calls/data" is parentRoute*/
        function url(params){
            var config = {
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.relation.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function html(postData, params){
            var config = {
                endpointType: 'html',
                endpoint: RectHelper.alchemy.api.relation.html,
                queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }

        function text(postData, params){
            var config = {
                endpointType: 'text',
                endpoint: RectHelper.alchemy.api.relation.text,
                queryParams: params
                },
                data = {
                    text: postData
                };
            return Alchemyapi.post(data, config);
        }
    }
})();