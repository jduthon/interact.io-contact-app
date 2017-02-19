import angular from 'angular';
import Authentication from './authentication/authentication';
import Main from './main/main';

let componentModule = angular.module('app.components', [
  Authentication,
  Main
])

.name;

export default componentModule;
