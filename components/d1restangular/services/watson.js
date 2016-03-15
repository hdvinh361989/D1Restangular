/**
 * Created by vinhhoang on 06/12/2015.
 */
(function () {
  angular.module('D1Restangular')
    .factory('Watson', Watson);

  Watson.$inject = ['RectHelper', 'Restangular', '$localStorage', '$q', '$log'];

  function Watson(helper, rest, $localS, $q, $log) {
    //Create 1 individual Restangular object for Watson api type gateway with its own config
    var watsonRestG = rest.withConfig(function (RestangularConfigurer) {

      RestangularConfigurer.setBaseUrl(helper.watson.config.baseUrl.gateway);

      RestangularConfigurer.setRequestInterceptor(function (elem, operation) {

        console.log('Operation name: ', operation);

        if (operation === 'remove') {
          return undefined;
        }
        return elem;
      });

      /*
       RestangularConfigurer.setDefaultHttpFields({
       withCredentials: true
       })
       */

    });

    //Create Restangular object for each api endpoint
    var concept = watsonRestG.all(helper.watson.api['concept-expansion']),
      dialog = watsonRestG.all(helper.watson.api['dialog']),
      personality = watsonRestG.all(helper.watson.api['personality-insights']),
      question = watsonRestG.all(helper.watson.api['question-and-answer']),
      relationship = watsonRestG.all(helper.watson.api['relationship-extraction']),
      tradeoff = watsonRestG.all(helper.watson.api['tradeoff-analytics']),
      conceptInsights = watsonRestG.all(helper.watson.api['concept-insights']),
      natural = watsonRestG.all(helper.watson.api['natural-language-classifier']);

    concept.apiName = 'concept-expansion';
    dialog.apiName = 'dialog';
    personality.apiName = 'personality-insights';
    question.apiName = 'question-and-answer';
    relationship.apiName = 'relationship-extraction';
    tradeoff.apiName = 'tradeoff-analytics';
    conceptInsights.apiName = 'concept-insights';
    natural.apiName = 'natural-language-classifier';

    concept.type = dialog.type = personality.type = question.type =
      relationship.type = tradeoff.type = conceptInsights.type = natural.type = 'gateway';


    /**
     * Check token is exist or not in localStorage
     * Yes: return token
     * No: request new token
     * */
    function getToken(apiName, type) {
      /**
       * Get token from localStorage
       * */
      var token = $localS[apiName],
        isTokenAvailable = token && !isExpired(token);

      /**
       * Check token is already exist and not expire
       * Yes: return token.
       * No: request new token, then return.
       * */
      if (isTokenAvailable) {
        var defer = $q.defer();
        defer.resolve(token);
        return defer.promise;
      } else {
        return requestToken(apiName, type);
      }
    }

    function requestToken(apiName, type) {
      var watsonApi = watsonRestG.allUrl('watsontoken', helper.watson.config.tokenUrl);

      return watsonApi.post({
        name: apiName,
        type: type
      }).then(function (data) {
        var token = {
          id: data.id,
          token: data.token,
          dateTime: data.dateTime
        };
        $localS[apiName] = token;

        return token;
      });
    }

    function isExpired(token) {
      var tokenTime = new Date(token.dateTime),
        currentTime = new Date();

      /**
       * Convert current to UTC time
       * */
      currentTime.setTime(currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000);
      /**
       * How many minutes from last requested token until now?
       * */
      var minutesUntilNow = Math.ceil((currentTime.getTime() - tokenTime.getTime()) / 1000 / 60);

      return minutesUntilNow >= 30;
    }

    /**
     * Run request: get token then add to header before send request
     * */
    function prepareHeader(config) {
      return getToken(config.apiName, config.type).then(function (response) {
        return {
          'x-watson-authorization-token': response.token
        };
      })
    }

    /**
     * Call Watson api endpoint
     * */
    function prepareFormData(data) {
      var queryData = "";

      //Create request body from queryParams
      angular.forEach(data, function (value, key) {
        queryData += key + '=' + value + '&';
      });

      //remove the last '&' character
      queryData = queryData.slice(0, -1);
      return queryData;
    }

    /**
     * Transform array to string
     * */
    function arrayToString(arrays) {
      var rs = "[";
      arrays.forEach(function (v) {
        rs += '"' + v + '",';
      });
      rs = rs.slice(0, rs.length - 1);
      rs += "]";
      return rs;
    }


    /**
     * Concept-expansion api method
     * apiName: concept-expansion-beta
     * */
    function getPing() {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .all('ping')
          .getList(null, header)
      });
    }

    function postUpload(data) {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .all('upload')
          .post(data, null, header)
      });
    }

    function getStatus(jobId) {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .all('status')
          .getList({jobid: jobId}, header)
      });
    }

    function putResult(jobId) {
      return prepareHeader({
        apiName: concept.apiName,
        type: concept.type
      }).then(function (header) {
        return concept
          .customPUT({jobid: jobId}, 'result', null, header)
      });
    }


    /**
     * Dialog api method
     * */
    function getDialogs() {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .all('dialogs')
          .getList({}, header)
      })
    }

    function postDialog(fileName, name) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .all('dialogs')
          .post(prepareFormData({
            file: fileName,
            name: name
          }), {}, {'content-type': 'application/x-www-form-urlencoded'})
      })
    }

    function deleteDialog(dialog_id) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .remove({}, header)
      })
    }

    function updateDialog(dialog_id) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .put({}, header)
      })
    }

    function postConverse(dialog_id, conversation_id, client_id, input) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .all('conversation')
          .post(
            prepareFormData({
              conversation_id: conversation_id,
              client_id: client_id,
              input: input
            }), {}, header
          )
      })
    }

    function getConversation(dialog_id, params) {
      params = params || {};
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .all('conversation')
          .getList(params, header)
      })
    }

    function getProfile(dialog_id, client_id) {
      return prepareHeader({
        apiName: dialog.apiName,
        type: dialog.type
      }).then(function (header) {
        return dialog
          .one('dialogs', dialog_id)
          .all('profile')
          .getList({client_id: client_id}, header)
      })
    }


    /**
     * personality-insights api methods
     * */
    function postProfile(contentType, body, params, optionHeaders) {
      params = params || {};
      optionHeaders = optionHeaders || {};
      return prepareHeader({
        apiName: personality.apiName,
        type: personality.type
      }).then(function (headers) {
        headers['content-type'] = contentType;
        headers = angular.merge(headers, optionHeaders);
        return personality
          .all('profile')
          .post(body, params, headers)
      })
    }


    /**
     * Concept-Insights
     * */
    function getAccounts() {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .all('accounts')
          .getList({}, header)
      })
    }

    function getGraphs() {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .all('graphs')
          .getList({}, header)
      })
    }

    function searchConceptLabel(accountId, graph, query, optionParams) {
      optionParams = optionParams || {};
      optionParams['query'] = query;
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .one('graphs', accountId)
          .all(graph)
          .all('label_search')
          .getList(optionParams, header)
      })
    }

    function getConcept(accountId, graph, concept) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .one('graphs', accountId)
          .all(graph)
          .one('concepts', concept)
          .get({}, header)
      })
    }

    /**
     * Get related concepts for given set of concepts
     * */
    function getRelatedConcepts(accountId, graph, concepts, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph || !concepts) {
          $log.error('getRelatedConcepts() missing required fields');
          return null;
        } else {
          optionParams = optionParams || {};
          optionParams['concepts'] = arrayToString(concepts);
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    /**
     Get related concepts for a given concept
     * */
    function getRelatedConceptsOf(accountId, graph, concept, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph) {
          $log.error('getRelatedConceptsOf() missing required fields');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .one('concepts', concept)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    function getRelationScore(accountId, graph, concept, concepts) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph || !concept || !concepts) {
          $log.error('getRelationScore() missing required field(s)');
          return null;
        } else {
          var params = {concepts: arrayToString(concepts)};
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .one('concepts', concept)
            .getList('relation_scores', params, header)
        }
      })
    }

    function postAnnoText(accountId, graph, body, contentType) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !graph || !body) {
          $log.error('postAnnoText(0 missing required field(s)');
          return null;
        } else {
          //Set default content type
          contentType = contentType || 'text.plain';
          header['content-type'] = contentType;
          return conceptInsights
            .one('graphs', accountId)
            .all(graph)
            .all('annotate_text')
            .post(body, {}, header)
        }
      })
    }


    function createCorpus(accountId, corpus, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !body) {
          $log.error('createCorpus() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .customPUT(body, '', {}, header)
        }
      })
    }

    function getCorpora() {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        return conceptInsights
          .all('corpora')
          .getList({}, header)
      })
    }

    function getCorpus(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !body) {
          $log.error('getCorpus() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .getList({}, header)
        }
      })
    }

    function updateCorpus(accountId, corpus, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !body) {
          $log.error('updateCorpus() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .post(body, {}, header)
        }
      })
    }

    function deleteCorpus(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('deleteCorpus() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .remove({}, header);
        }
      })
    }

    function getCorpusState(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getCorpusState() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('processing_state')
            .post({}, header)
        }
      })
    }

    function searchDocLabel(accountId, corpus, query, optionsParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !query) {
          $log.error('searchDocLabel() missing required field(s)');
          return null;
        } else {
          optionsParams = optionsParams || {};
          optionsParams['query'] = query;
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('label_search')
            .getList(optionsParams, header)
        }
      })
    }

    function getCorpusStatistics(accountId, corpus) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getCorpusStatistics() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('stats')
            .getList({}, header)
        }
      })
    }

    function getRelatedConceptCorpus(accountId, corpus, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getRelatedConceptCorpus() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    function getRelationScoresCorpus(accountId, corpus, concepts) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !concepts) {
          $log.error('getRelationScoresCorpus() missing required field(s)');
          return null;
        } else {
          var params = {'concepts': arrayToString(concepts)};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('relation_scores')
            .getList(params, header)
        }
      })
    }

    function searchConceptual(accountId, corpus, ids, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !ids) {
          $log.error('searchConceptual() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          optionParams['ids'] = arrayToString(ids);
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('conceptual_search')
            .getList(optionParams, header)
        }
      })
    }


    function createDocument(accountId, corpus, document, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document || !body) {
          $log.error('createDocument() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('document', document)
            .customPUT(body, '', {}, header)
        }
      })
    }

    function getDocuments(accountId, corpus, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus) {
          $log.error('getDocuments() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .all('documents')
            .getList(optionParams, header)
        }
      })
    }

    function getDocument(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getDocument() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .get({}, header)
        }
      })
    }

    function updateDocument(accountId, corpus, document, body) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document || !body) {
          $log.error('updateDocument() missing required field(s)');
          return null;
        } else {
          header['content-type'] = 'application/json';
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .post('', body, {}, header)
        }
      })
    }

    function deleteDocument(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('deleteDocument() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .remove({}, header)
        }
      })
    }

    function getDocumentAnno(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getDocumentAnno() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('annotations')
            .getList({}, header)
        }
      })
    }

    function getDocumentState(accountId, corpus, document) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getDocumentState() missing required field(s)');
          return null;
        } else {
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('processing_state')
            .getList({}, header)
        }
      })
    }

    function getRelatedConceptsDoc(accountId, corpus, document, optionParams) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document) {
          $log.error('getRelatedConceptsDoc() missing required field(s)');
          return null;
        } else {
          optionParams = optionParams || {};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('related_concepts')
            .getList(optionParams, header)
        }
      })
    }

    function getRelatedScoresDoc(accountId, corpus, document, concepts) {
      return prepareHeader({
        apiName: conceptInsights.apiName,
        type: conceptInsights.type
      }).then(function (header) {
        if (!accountId || !corpus || !document || !concepts) {
          $log.error('getRelatedScoresDoc() missing required field(s)');
          return null;
        } else {
          var params = {concepts: arrayToString(concepts)};
          return conceptInsights
            .one('corpora', accountId)
            .all(corpus)
            .one('documents', document)
            .all('related_scores')
            .getList(params, header)
        }
      })
    }


    /**
     * tradeoff-analytics api method
     * apiName: tradeoff-analytics
     * */
    function postDilemmas(data, generate_visual) {
      return prepareHeader({
        apiName: tradeoff.apiName,
        type: tradeoff.type
      }).then(function (header) {
        if (!data) {
          $log.error('postDilemmas() missing required field(s)');
          return null;
        } else {
          generate_visual = generate_visual || true;
          var params = {'generate_visualization': generate_visual};
          header['content-type'] = 'application/json';
          return tradeoff
            .all('dilemmas')
            .post(data, params, header)
        }
      })
    }


    /**
     * Relationship extraction
     * */
    function postText(txt, isSpanish, rt) {
      return prepareHeader({
        apiName: relationship.apiName,
        type: relationship.type
      }).then(function (header) {
        if (!txt) {
          $log.error('postText missing required field(s)');
          return null;
        } else {
          var sid = isSpanish ? 'ie-es-news' : 'ie-en-news';
          rt = 'xml';
          var params = {
            sid: sid,
            txt: txt,
            rt: rt
          };
          return relationship
            .one('sire', 0)
            .post('', '', params, header)
        }
      })
    }


    /**
     * Natural Language Classifier
     * */
    function createClassifier(trainingDataFile, trainingMetaFile) {
      return prepareHeader({
        apiName: natural.apiName,
        type: natural.type
      }).then(function (header) {
        if (!trainingDataFile) {
          $log.error('createClassifier() missing required field(s)');
          return null;
        } else {
          var formData = new FormData();
          formData.append('training_data', trainingDataFile);
          formData.append('training_metadata', trainingMetaFile);
          return natural
            .all('classifiers')
            .post(formData, {}, header)
        }
      })
    }

    function getClassifiers(classifierId) {
      if (!classifierId) {
        return prepareHeader({
          apiName: natural.apiName,
          type: natural.type
        }).then(function (header) {
          return natural
            .all('classifiers')
            .getList({}, header)
        })
      } else {
        return prepareHeader({
          apiName: natural.apiName,
          type: natural.type
        }).then(function (header) {
          if (!classifierId) {
            $log('getClassifier() missing required field(s)');
            return null;
          } else {
            return natural
              .one('classifiers', classifierId)
              .get({}, header)
          }
        })
      }
    }

    function deleteClassifier(classifierId) {
      return prepareHeader({
        apiName: natural.apiName,
        type: natural.type
      }).then(function (header) {
        if (!classifierId) {
          $log('deleteClassifier() missing required field(s)');
          return null;
        } else {
          return natural
            .one('classifiers', classifierId)
            .remove({}, header)
        }
      })
    }

    function classify(classifierId, text) {
      return prepareHeader({
        apiName: natural.apiName,
        type: natural.type
      }).then(function (header) {
        if (!classifierId || !text) {
          $log('classify() missing required field(s)');
          return null;
        } else {
          return natural
            .one('classifiers', classifierId)
            .all('classify')
            .get({text: text}, header)
        }
      })
    }


    //Export
    return {
      conceptExpansion: {
        getPing: getPing,
        postUpload: postUpload,
        getStatus: getStatus,
        putResult: putResult
      },
      tradeOff: {
        postDilemmas: postDilemmas
      },
      dialog: {
        getDialogs: getDialogs,
        postDialog: postDialog,
        deleteDialog: deleteDialog,
        updateDialog: updateDialog,
        postConverse: postConverse,
        getConversation: getConversation,
        getProfile: getProfile
      },
      personality: {
        postProfile: postProfile
      },
      relationshipExtraction: {
        postText: postText
      },
      naturalLang: {
        createClassifier: createClassifier,
        getClassifiers: getClassifiers,
        deleteClassifier: deleteClassifier,
        classify: classify
      },
      conceptInsights: {
        getAccounts: getAccounts,
        getGraphs: getGraphs,
        searchConceptLabel: searchConceptLabel,
        getConcept: getConcept,
        getRelatedConcepts: getRelatedConcepts,
        getRelatedConceptsOf: getRelatedConceptsOf,
        getRelationScore: getRelationScore,
        postAnnoText: postAnnoText,

        createCorpus: createCorpus,
        getCorpora: getCorpora,
        getCorpus: getCorpus,
        updateCorpus: updateCorpus,
        deleteCorpus: deleteCorpus,
        getCorpusState: getCorpusState,
        searchDocLabel: searchDocLabel,
        getCorpusStatistics: getCorpusStatistics,
        getRelatedConceptCorpus: getRelatedConceptCorpus,
        getRelationScoresCorpus: getRelationScoresCorpus,
        searchConceptual: searchConceptual,

        createDocument: createDocument,
        getDocuments: getDocuments,
        getDocument: getDocument,
        updateDocument: updateDocument,
        deleteDocument: deleteDocument,
        getDocumentAnno: getDocumentAnno,
        getDocumentState: getDocumentState,
        getRelatedConceptsDoc: getRelatedConceptsDoc,
        getRelatedScoresDoc: getRelatedScoresDoc
      }
    };
  }
})();