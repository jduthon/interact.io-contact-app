import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navBarComponent from './navBar.component';

let navBarModule = angular.module('navBar', [
  uiRouter
])

.component('navBar', navBarComponent)

.name;

export default navBarModule;
