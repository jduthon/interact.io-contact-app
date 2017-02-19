import angular from 'angular';
import ContactsService from './contacts.service';

let ContactsModule = angular.module('interact.contactsService', [])

.service('ContactsService', ContactsService)

.name;

export default ContactsModule;
