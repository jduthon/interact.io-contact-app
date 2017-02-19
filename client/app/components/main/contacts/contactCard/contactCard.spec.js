import ContactCardModule from './contactCard'
import ContactCardController from './contactCard.controller';
import ContactCardComponent from './contactCard.component';
import ContactCardTemplate from './contactCard.html';

describe('ContactCard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactCardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactCardController();
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
      let component = ContactCardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactCardTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactCardController);
      });
  });
});
