/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('Keyword', Keyword);

    Keyword.$inject = ['Alchemyapi', 'RectHelper'];

    function Keyword(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Keyword',
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
                endpoint: RectHelper.alchemy.api.keyword.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function html(postData, params){
            var config = {
                endpointType: 'html',
                endpoint: RectHelper.alchemy.api.keyword.html,
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
                endpoint: RectHelper.alchemy.api.keyword.text,
                queryParams: params
                },
                data = {
                    text: postData
                };
            return Alchemyapi.post(data, config);
        }
    }
})();