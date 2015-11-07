/**
 * Created by vinhhoang on 07/11/2015.
 */
(function () {
    angular.module('rectangular')
        .factory('Alchemy', Alchemy);

    Alchemy.$inject = ['Alchemyapi', 'RectHelper'];

    function Alchemy(Alchemyapi, RectHelper) {
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
                return Alchemyapi.post(null, config);
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
                return Alchemyapi.post(data, config);
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
                return Alchemyapi.post(data, config);
            }

            function image(imageFile, params) {
                params = params || {};
                params.imagePostMode = 'raw';
                var config = {
                    endpointType: option.endpointType,
                    endpoint: option.endpoint,
                    queryParams: params
                };
                return Alchemyapi.post(imageFile, config, true);
            }

            function data(params) {
                var config = {
                    endpointType: 'data',
                    endpoint: RectHelper.alchemy.api.news.getNews,
                    queryParams: params
                };
                return Alchemyapi.post(null, config);
            }
        }
    }
})();