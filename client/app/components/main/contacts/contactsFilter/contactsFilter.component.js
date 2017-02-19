import template from './contactsFilter.html';
import controller from './contactsFilter.controller';
import './contactsFilter.scss';

let contactsFilterComponent = {
  restrict: 'E',
  bindings: {
    filterOptions: '=',
    onFiltersChanged: '&'
  },
  template,
  controller
};

export default contactsFilterComponent;
