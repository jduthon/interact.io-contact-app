import template from './contactCard.html';
import controller from './contactCard.controller';
import './contactCard.scss';

let contactCardComponent = {
  restrict: 'E',
  bindings: {
    contact: '=',
    onDelete: '&',
    onEdit: '&'
  },
  template,
  controller
};

export default contactCardComponent;
