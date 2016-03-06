/**
 * Created by vinhhoang on 07/11/2015.
 */
(function () {
    angular.module('D1Restangular')
        .factory('Alchemy', Alchemy);

    Alchemy.$inject = ['RectHelper', 'Restangular'];

    function Alchemy(RectHelper, Restangular) {
        /*
         * Get Restangular service with configuration for alchemyapi
         * */
        var AlchemyRestangular = Restangular.withConfig(function (RestangularConfigurer) {
            var headers = {"Content-type": "application/x-www-form-urlencoded"};

            //Global config for Restangular
            RestangularConfigurer.setBaseUrl(RectHelper.alchemy.config.baseUrl);
            RestangularConfigurer.setDefaultHeaders(headers);
            RestangularConfigurer.setDefaultRequestParams({});

            RestangularConfigurer.setFullRequestInterceptor(fullRequestInterceptor);

            //Implement functions
            function fullRequestInterceptor(element, operation, route, url, headers, params, httpConfig) {
                //Do something here before request send
                return element;
            }
        });

        var exports = {
            getAuthor: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.author.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.author.url
                })
            },
            getAuthors: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.authors.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.authors.url
                })
            },
            getCombined: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.combinedCall.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.combinedCall.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.combinedCall.text
                })
            },
            getConcept: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.concept.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.concept.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.concept.text
                })
            },
            getEntity: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.entity.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.entity.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.entity.text
                })
            },
            getFace: {
                image: call({
                    endpointType: 'image',
                    endpoint: RectHelper.alchemy.api.face.image
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.face.url
                })
            },
            getFeed: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.feed.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.feed.url
                })
            },
            getImageLink: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.imageLink.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.imageLink.url
                })
            },
            getImageTagging: {
                image: call({
                    endpointType: 'image',
                    endpoint: RectHelper.alchemy.api.imageTagging.image
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.imageTagging.url
                })
            },
            getKeyword: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.keyword.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.keyword.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.keyword.text
                })
            },
            getLanguage: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.language.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.language.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.language.text
                })
            },
            getMicroFormat: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.microformats.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.microformats.url
                })
            },
            getNews: call({
                endpointType: 'data',
                endpoint: RectHelper.alchemy.api.news.getNews
            }),
            getPublicationDate: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.publicationDate.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.publicationDate.url
                })
            },
            getRelation: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.relation.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.relation.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.relation.text
                })
            },
            getSentiment: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.sentiment.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.sentiment.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.sentiment.text
                }),
                htmlTargeted: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.sentiment.htmlTargeted
                }),
                urlTargeted: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.sentiment.urlTargeted
                }),
                textTargeted: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.sentiment.textTargeted
                })
            },
            getTaxonomy: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.taxonomy.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.taxonomy.url
                }),
                text: call({
                    endpointType: 'text',
                    endpoint: RectHelper.alchemy.api.taxonomy.text
                })
            },
            getText: {
                html: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.html
                }),
                url: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.text.url
                }),
                htmlRaw: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.htmlRaw
                }),
                urlRaw: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.text.urlRaw
                }),
                htmlTitle: call({
                    endpointType: 'html',
                    endpoint: RectHelper.alchemy.api.text.htmlTitle
                }),
                urlTitle: call({
                    endpointType: 'url',
                    endpoint: RectHelper.alchemy.api.text.urlTitle
                })
            }
        };
        return exports;

        function call(option) {
            switch (option.endpointType) {
                case 'url':
                    return url;
                    break;
                case 'html':
                    return html;
                    break;
                case 'text':
                    return text;
                    break;
                case 'image':
                    return image;
                    break;
                case 'data':
                    return data;
                    break;
            }

            function url(params) {
                var config = {
                    endpointType: option.endpointType,
                    endpoint: option.endpoint,
                    queryParams: params
                };
                return runRequest(null, config);
            }

            function html(postData, params) {
                var config = {
                        endpointType: option.endpointType,
                        endpoint: option.endpoint,
                        queryParams: params
                    },
                    data = {
                        html: postData
                    };
                return runRequest(data, config);
            }

            function text(postData, params) {
                var config = {
                        endpointType: option.endpointType,
                        endpoint: option.endpoint,
                        queryParams: params
                    },
                    data = {
                        text: postData
                    };
                return runRequest(data, config);
            }

            function image(imageFile, params) {
                params = params || {};
                params.imagePostMode = 'raw';
                var config = {
                    endpointType: option.endpointType,
                    endpoint: option.endpoint,
                    queryParams: params
                };
                return runRequest(imageFile, config, true);
            }

            function data(params) {
                var config = {
                    endpointType: 'data',
                    endpoint: RectHelper.alchemy.api.news.getNews,
                    queryParams: params
                };
                return runRequest(null, config);
            }
        }

        function runRequest(postData, config, isImage, method) {
            method = method || 'post';

            var parentRoute = 'calls/' + config.endpointType,
              queryParams = prepareRequestParams(config.queryParams);

            if (!isImage)
                postData = prepareRequestBody(postData);

            return AlchemyRestangular
              .all(parentRoute)
              .customOperation(method, config.endpoint, queryParams, null, postData);
        }

        function prepareRequestBody(queryParams) {
            var queryData = "";

            //Create request body from queryParams
            angular.forEach(queryParams, function (value, key) {
                queryData += key + '=' + value + '&';
            });

            //remove the last '&' character
            queryData = queryData.slice(0, -1);
            return queryData;
        }

        function prepareRequestParams(queryParams) {
            //Assure hat queryParams is not null/ undefined
            queryParams = queryParams || {};
            queryParams.apikey = queryParams.apikey || RectHelper.alchemy.config.apiKey;
            queryParams.outputMode = queryParams.outputMode || RectHelper.alchemy.config.outputMode;
            return queryParams;
        }
    }
})();