import template from './navBar.html';
import controller from './navBar.controller';
import './navBar.scss';

let navBarComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    onLogout: '&'
  },
  template,
  controller
};

export default navBarComponent;
