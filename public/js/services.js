'use strict';

angular.module('fileUpload')
.constant("baseURL", "http://localhost:3000/")
.factory('eventFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "event/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])
;