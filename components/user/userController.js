'use strict';

var angular = require('angular');

angular
  .module('app')
  .controller('UserController', UserController);


function UserController(){
 var vm = this;

 vm.name = "first user";
}
