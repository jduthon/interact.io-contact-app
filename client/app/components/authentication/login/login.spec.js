import LoginModule from './login'
import LoginController from './login.controller';
import LoginComponent from './login.component';
import LoginTemplate from './login.html';

describe('Login', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginController();
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
      let component = LoginComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginController);
      });
  });
});
