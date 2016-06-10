'use strict';

var angular = require('angular');

angular
  .module('app')
  .controller('ProductController', ProductController);


function ProductController(ProductService){
  var vm = this;

  ProductService.all().then(function(response){
    vm.products = response;
  });
  
}
