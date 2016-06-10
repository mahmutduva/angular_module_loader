'use strict';

var angular = require('angular');

angular
  .module('app')
  .factory('ProductService', ProductService);

function ProductService($q){
  return {
      all: function(){
        var defer = $q.defer();
        
        var products = [
          {'name': 'product 1'},
          {'name': 'product 2'},
          {'name': 'product 3'},
          {'name': 'product 4'},
          {'name': 'product 5'}
        ];

        defer.resolve(products);

        return defer.promise;
      }
  }
}
