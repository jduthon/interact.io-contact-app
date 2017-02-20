import template from './contactForm.html';
import controller from './contactForm.controller';
import './contactForm.scss';

let contactFormComponent = {
  restrict: 'E',
  bindings: {
    contact: '<',
    onSubmit: '&',
    onCancel: '&'
  },
  template,
  controller
};

export default contactFormComponent;
