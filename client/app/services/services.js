import angular from 'angular';

import InteractApiModule from './InteractApiService/interactApi';
import AuthModule from './AuthService/auth';
import ContactsModule from './ContactsService/contacts';



let servicesModule = angular.module('app.services', [
  InteractApiModule,
  AuthModule,
  ContactsModule
])

  .name;

export default servicesModule;
