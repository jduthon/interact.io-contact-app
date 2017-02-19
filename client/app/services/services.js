import angular from 'angular';

import InteractApiModule from './InteractApiService/interactApi';
import AuthModule from './AuthService/auth';



let servicesModule = angular.module('app.services', [
  InteractApiModule,
  AuthModule
])

  .name;

export default servicesModule;
