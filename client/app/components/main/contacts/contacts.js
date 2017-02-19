import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';
import contactCardComponent from './contactCard/contactCard';
import contactsFilterComponent from './contactsFilter/contactsFilter';

let contactsModule = angular.module('contacts', [
  uiRouter,
  contactCardComponent,
  contactsFilterComponent
])

.component('contacts', contactsComponent)

.name;

export default contactsModule;
