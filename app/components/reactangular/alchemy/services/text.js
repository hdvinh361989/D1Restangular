/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('AlText', Text);

    Text.$inject = ['Alchemyapi', 'RectHelper'];

    function Text(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Text',
            url: url,
            html: html,
            urlRaw: urlRaw,
            htmlRaw: htmlRaw,
            urlTitle: urlTitle,
            htmlTitle: htmlTitle
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
                endpoint: RectHelper.alchemy.api.text.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function html(postData, params) {
            var config = {
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.html,
                    queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }

        function urlRaw(params) {
            var config = {
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.text.urlRaw,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function htmlRaw(postData, params) {
            var config = {
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.htmlRaw,
                    queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }

        function urlTitle(params) {
            var config = {
                endpointType: 'url',
                endpoint: RectHelper.alchemy.api.text.urlTitle,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function htmlTitle(postData, params) {
            var config = {
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.htmlTitle,
                    queryParams: params
                },
                data = {
                    html: postData
                };
            return Alchemyapi.post(data, config);
        }
    }
})();