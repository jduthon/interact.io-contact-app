import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsFilterComponent from './contactsFilter.component';

let contactsFilterModule = angular.module('contactsFilter', [
  uiRouter
])

.component('contactsFilter', contactsFilterComponent)

.name;

export default contactsFilterModule;
