import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactCardComponent from './contactCard.component';

let contactCardModule = angular.module('contactCard', [
  uiRouter
])

.component('contactCard', contactCardComponent)

.name;

export default contactCardModule;
