import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginModule from './login/login';
import layout from './layout.html';

import './authentication.scss';

let authenticationModule = angular.module('interact.authentication', [
  uiRouter,
  loginModule
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'

    $urlRouterProvider.otherwise('/auth/login');

    $stateProvider
      .state('auth', {
        url: '/auth',
        abstract: true,
        template: layout
      }).state('auth.login', {
        url: '/login',
        component: 'login'
    });
  })

  .name;

export default authenticationModule;
