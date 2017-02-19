import angular from 'angular';
import Authentication from './authentication/authentication';

let componentModule = angular.module('app.components', [
  Authentication
])

.name;

export default componentModule;
