/**
 * Created by vinhhoang on 11/11/2015.
 */
(function () {
    angular.module('rectangular')
        .factory('Semantria', Semantria);

    Semantria.$inject = ['Semantriaapi', 'RectHelper'];

    function Semantria(Semantriaapi, RectHelper) {
        var exports = {

            /**
            * We have 2 event:
             *
             * onRequest: will be fired before each request
             * onResponse: will be fired after each response
            * */
            addEventHandler: addEventHandler,

            /**
             *Get status endpoint
             */
            getStatus: getStatus,

            /**
             *Get Features endpoint
             */
            getSupportedFeatures: getSupportedFeatures,

            /**
             *Get Subscription endpoint
             */
            getSubscription: getSubscription,

            /**
             *Get Statistics endpoint
             */
            getStatistics: getStatistics,

            /**
             *Get Configurations endpoint
             */
            getConfigurations: getConfigurations,

            /**
             * @param {Object} params
             */
            addConfigurations: addConfigurations,

            /**
             * @param {string[]} name - new configuration name
             * @param {string[]} template - template configuration id
             * @returns {*}
             */
            cloneConfiguration: cloneConfiguration,

            /**
             * @param {Object} params
             */
            updateConfigurations: updateConfigurations,

            /**
             * @param {Object} params
             */
            removeConfigurations: removeConfigurations,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            getBlacklist: getBlacklist,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            addBlacklist: addBlacklist,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            removeBlacklist: removeBlacklist,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            getCategories: getCategories,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            addCategories: addCategories,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            updateCategories: updateCategories,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            removeCategories: removeCategories,

            /**
             * @param {Number} configId
             */
            getQueries: getQueries,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            addQueries: addQueries,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            updateQueries: updateQueries,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            removeQueries: removeQueries,

            /**
             * @param {Number} configId
             */
            getEntities: getEntities,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            addEntities: addEntities,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            updateEntities: updateEntities,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            removeEntities: removeEntities,

            /**
             * @param {Number} configId
             */
            getPhrases: getPhrases,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            addPhrases: addPhrases,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            updatePhrases: updatePhrases,

            /**
             * @param {Object} params
             * @param {Number} configId
             */
            removePhrases: removePhrases,

            /**
             * @param {Object} doc
             * @param {Number} configId
             */
            queueDocument: queueDocument,

            /**
             * @param {Object} batch
             * @param {Number} configId
             */
            queueBatchOfDocuments: queueBatchOfDocuments,

            /**
             * @param {Object} collection
             * @param {Number} configId
             */
            queueCollection: queueCollection,

            /**
             * @param {Number} id
             * @param {Number} configId
             */
            getDocument: getDocument,

            /**
             * @param {Number} id
             * @param {Number} configId
             */
            getCollection: getCollection,

            /**
             * @param {Number} id
             * @param {Number} configId
             */
            cancelDocument: cancelDocument,

            /**
             * @param {Number} id
             * @param {Number} configId
             */
            cancelCollection: cancelCollection,

            getProcessedDocuments: getProcessedDocuments,

            getProcessedDocumentsByJobId: getProcessedDocumentsByJobId,

            getProcessedCollections: getProcessedCollections,

            getProcessedCollectionsByJobId: getProcessedCollectionsByJobId,
        };
        return exports;


        /**
        * Implement functions
        * */
        function addEventHandler(eventHandlers) {
            Semantriaapi.eventHandlers = angular.merge(Semantriaapi.eventHandlers, eventHandlers);
        }

        function getStatus() {
            return Semantriaapi.runRequest("GET", "/status");
        }

        function getSupportedFeatures(language) {
            return Semantriaapi.runRequest("GET", "/features", {
                getParams: {
                    language: language
                }
            });
        }

        function getSubscription() {
            return Semantriaapi.runRequest("GET", "/subscription");
        }

        function getStatistics() {
            return Semantriaapi.runRequest("GET", "/statistics");
        }

        function getConfigurations() {
            return Semantriaapi.runRequest("GET", "/configurations");
        }

        function addConfigurations(params) {
            return updateConfigurations(params);
        }

        function cloneConfiguration(name, template) {
            var params = {
                name: name,
                template: template
            };
            return addConfigurations([params]);
        }

        function updateConfigurations(params) {
            return Semantriaapi.runRequest("POST", "/configurations", {
                postParams: params
            });
        }

        function removeConfigurations(params) {
            return Semantriaapi.runRequest("DELETE", "/configurations", {
                postParams: params
            });
        }

        function getBlacklist(configId) {
            return Semantriaapi.runRequest("GET", "/blacklist", {
                getParams: {
                    config_id: configId
                }
            });
        }

        function addBlacklist(params, configId) {
            return Semantriaapi.runRequest("POST", "/blacklist", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function removeBlacklist(params, configId) {
            return Semantriaapi.runRequest("DELETE", '/blacklist', {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function getCategories(configId) {
            return Semantriaapi.runRequest("GET", "/categories", {
                getParams: {
                    config_id: configId
                }
            });
        }

        function addCategories(params, configId) {
            return updateCategories(params, configId);
        }

        function updateCategories(params, configId) {
            return Semantriaapi.runRequest("POST", "/categories", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function removeCategories(params, configId) {
            return Semantriaapi.runRequest("DELETE", "/categories", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function getQueries(configId) {
            return Semantriaapi.runRequest("GET", "/queries", {
                getParams: {
                    config_id: configId
                }
            });
        }

        function addQueries(params, configId) {
            return updateQueries(params, configId);
        }

        function updateQueries(params, configId) {
            return Semantriaapi.runRequest("POST", "/queries", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function removeQueries(params, configId) {
            return Semantriaapi.runRequest("DELETE", "/queries", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function getEntities(configId) {
            return Semantriaapi.runRequest("GET", "/entities", {
                getParams: {
                    config_id: configId
                }
            });
        }

        function addEntities(params, configId) {
            return updateEntities(params, configId);
        }

        function updateEntities(params, configId) {
            return Semantriaapi.runRequest("POST", "/entities", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function removeEntities(params, configId) {
            return Semantriaapi.runRequest("DELETE", "/entities", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function getPhrases(configId) {
            return Semantriaapi.runRequest("GET", "/phrases", {
                getParams: {
                    config_id: configId
                }
            });
        }

        function addPhrases(params, configId) {
            return updatePhrases(params, configId);
        }

        function updatePhrases(params, configId) {
            return Semantriaapi.runRequest("POST", "/phrases", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function removePhrases(params, configId) {
            return Semantriaapi.runRequest("DELETE", "/phrases", {
                getParams: {
                    config_id: configId
                },
                postParams: params
            });
        }

        function queueDocument(doc, configId) {
            var result = Semantriaapi.runRequest("POST", "/document", {
                getParams: {
                    config_id: configId
                },
                postParams: doc
            });

            if (result) {
                exports.onAfterResponse(result);
                return result;
            }

            return result;
        }

        function queueBatchOfDocuments(batch, configId) {
            var result = Semantriaapi.runRequest("POST", "/document/batch", {
                getParams: {
                    config_id: configId
                },
                postParams: batch
            });

            if (result) {
                exports.onAfterResponse(result);
                return result;
            }

            return result;
        }

        function queueCollection(collection, configId) {
            var result = Semantriaapi.runRequest("POST", "/collection", {
                getParams: {
                    config_id: configId
                },
                postParams: collection
            });

            if (result) {
                exports.onAfterResponse(result);
                return result;
            }

            return result;
        }

        function getDocument(id, configId) {
            if (!id) {
                throw "Specified document's ID is empty";
            }

            var url = "/document/" + id;
            var result = Semantriaapi.runRequest("GET", url, {
                getParams: {
                    config_id: configId
                }
            });

            if (result) {
                exports.onAfterResponse(result);
                return result;
            }

            return result;
        }

        function getCollection(id, configId) {
            if (!id) {
                throw "Specified document's ID is empty";
            }

            return Semantriaapi.runRequest("GET", "/collection/" + id, {
                getParams: {
                    config_id: configId
                }
            });
        }

        function cancelDocument(id, configId) {
            if (!id) {
                throw "Specified document's ID is empty";
            }

            return Semantriaapi.runRequest("DELETE", "/document/" + id, {
                getParams: {
                    config_id: configId
                }
            });
        }

        function cancelCollection(id, configId) {
            if (!id) {
                throw "Specified document's ID is empty";
            }

            return Semantriaapi.runRequest("DELETE", "/collection/" + id, {
                getParams: {
                    config_id: configId
                }
            });
        }

        function getProcessedDocuments(configId) {
            return Semantriaapi.runRequest("GET", "/document/processed", {
                getParams: {
                    config_id: configId
                }
            });
        }

        function getProcessedDocumentsByJobId(jobId) {
            return Semantriaapi.runRequest("GET", "/document/processed", {
                getParams: {
                    job_id: jobId
                }
            });
        }

        function getProcessedCollections(configId) {
            return Semantriaapi.runRequest("GET", "/collection/processed", {
                getParams: {
                    config_id: configId
                }
            });
        }

        function getProcessedCollectionsByJobId(jobId) {
            return Semantriaapi.runRequest("GET", "/collection/processed", {
                getParams: {
                    job_id: jobId
                }
            });
        }

    }
})();