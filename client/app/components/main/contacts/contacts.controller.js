import _ from 'lodash';

class ContactsController {
  constructor(ContactsService) {
    'ngInject'
    this.ContactsService = ContactsService;
    this.init();
  }

  init(){
    this.getContacts();
    this.filters = {};
    this.contacts = [];
  }

  refreshFiltersOptions(){
    this.filterOptions = {};
    this.filterOptions.contactType = _.uniq(this.allContacts.map(c => c.contactType));
  }

  getContacts(){
    this.ContactsService.getContacts().then(
      data => {
        this.allContacts = data.data;
        this.refreshFiltersOptions();
        this.filtersChanged(this.filters);
      }
    )
  }

  deleteContact(contact){
    this.ContactsService.deleteContact(contact.id).then(
      data => {
        const index = this.allContacts.findIndex(c => c.id === contact.id);
        this.allContacts.splice(index, 1);
        this.refreshFiltersOptions();
      }
    );
  }

  editContact(contact){
  }

  filtersChanged(filters){
    this.filters = filters;
    this.contacts = [...this.allContacts];
    if(this.filters.contactType){
      this.contacts = this.allContacts.filter(c => c.contactType === this.filters.contactType);
    }
  }
}

export default ContactsController;
