import ContactsModule from './contacts';
import interactApiModule from '../InteractApiService/interactApi';

describe('ContactsModule', () => {
  beforeEach(() => {
    angular.mock.module(ContactsModule);
    angular.mock.module(interactApiModule);
  });

  describe('ContactsService', () => {
    let ContactsService;
    beforeEach(() => {
      angular.mock.inject((_ContactsService_) => {
        ContactsService = _ContactsService_;
      });
    });
  });

});
