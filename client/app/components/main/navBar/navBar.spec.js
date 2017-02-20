import NavBarModule from './navBar'
import NavBarController from './navBar.controller';
import NavBarComponent from './navBar.component';
import NavBarTemplate from './navBar.html';

describe('NavBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavBarController();
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
      let component = NavBarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavBarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavBarController);
      });
  });
});
