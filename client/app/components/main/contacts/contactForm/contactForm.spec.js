import ContactFormModule from './contactForm'
import ContactFormController from './contactForm.controller';
import ContactFormComponent from './contactForm.component';
import ContactFormTemplate from './contactForm.html';

describe('ContactForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactFormController();
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
      let component = ContactFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactFormController);
      });
  });
});
