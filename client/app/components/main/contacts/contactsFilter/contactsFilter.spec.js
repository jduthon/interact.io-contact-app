import ContactsFilterModule from './contactsFilter'
import ContactsFilterController from './contactsFilter.controller';
import ContactsFilterComponent from './contactsFilter.component';
import ContactsFilterTemplate from './contactsFilter.html';

describe('ContactsFilter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactsFilterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactsFilterController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    let controller;
    beforeEach(() => {
      controller = makeController();
    });
    it('can clear its filters', () => {
      controller.filters.test = 'test';
      controller.onFiltersChanged = (res) => {
        expect(res.filters).to.be.empty;
      };
      controller.clearFilters();
      expect(controller.filters.test).to.be.undefined;
    })
  });

  describe('Template', () => {
  });

  describe('Component', () => {
      // component/directive specs
      let component = ContactsFilterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactsFilterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactsFilterController);
      });
  });
});
