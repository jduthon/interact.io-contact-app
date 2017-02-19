import ContactsModule from './contacts'
import ContactsController from './contacts.controller';
import ContactsComponent from './contacts.component';
import ContactsTemplate from './contacts.html';

describe('Contacts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
  });

  describe('Template', () => {
  });

  describe('Component', () => {
      // component/directive specs
      let component = ContactsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactsController);
      });
  });
});
