import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import loginComponent from './login.component';

let loginModule = angular.module('interact.login', [
  uiRouter,
  ngMaterial
])

.component('login', loginComponent)

.name;

export default loginModule;
