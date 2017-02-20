import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';
import contactCardComponent from './contactCard/contactCard';
import contactsFilterComponent from './contactsFilter/contactsFilter';
import contactFormComponent from './contactForm/contactForm';

let contactsModule = angular.module('contacts', [
  uiRouter,
  contactCardComponent,
  contactsFilterComponent,
  contactFormComponent
])

.component('contacts', contactsComponent)

.name;

export default contactsModule;
