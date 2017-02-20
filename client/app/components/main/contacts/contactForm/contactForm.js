import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormComponent from './contactForm.component';

let contactFormModule = angular.module('contactForm', [
  uiRouter
])

.component('contactForm', contactFormComponent)

.name;

export default contactFormModule;
