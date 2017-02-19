import angular from 'angular';
import uiRouter from 'angular-ui-router';
import layout from './layout.html';

import contactsModule from './contacts/contacts';

import './main.scss';

let authenticationModule = angular.module('interact.main', [
  uiRouter,
  contactsModule
])

  .config(($stateProvider) => {
    'ngInject'

    $stateProvider
      .state('main', {
        url: '/app',
        abstract: true,
        template: layout,
        resolve: {
          isAuthenticated: function(AuthService, $state){
            if(!AuthService.isAuthenticated()){
              $state.go('auth.login');
              return false;
            }
            return true;
          }
        }
      }).state('main.contacts', {
        url: '/contacts',
        component: 'contacts'
    });
  })

  .name;

export default authenticationModule;
