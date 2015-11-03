/**
 * Created by vinhhoang on 31/10/2015.
 */
(function () {
    angular.module('rectangular.alchemy')
        .factory('AlFace', Face);

    Face.$inject = ['Alchemyapi', 'RectHelper'];

    function Face(Alchemyapi, RectHelper) {
        var Export = {
            apiName: 'Face',
            url: url,
            image: image
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
                endpoint: RectHelper.alchemy.api.face.url,
                queryParams: params
            };
            return Alchemyapi.post(null, config);
        }

        function image(imageFile, params){
            params = params || {};
            params.imagePostMode = 'raw';
            var config = {
                endpointType: 'image',
                endpoint: RectHelper.alchemy.api.face.image,
                queryParams: params
            };
            return Alchemyapi.post(imageFile, config, true);
        }
    }
})();