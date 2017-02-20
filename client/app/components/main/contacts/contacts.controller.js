import _ from 'lodash';

class ContactsController {
  constructor(ContactsService, $scope, $mdDialog) {
    'ngInject'
    this.ContactsService = ContactsService;
    this.$mdDialog = $mdDialog;
    this.init();
    this.$scope = $scope;
  }

  init(){
    this.getContacts();
    this.filters = {};
    this.contacts = [];
    this.editDialog = null;
  }

  onContactsChanged(){
    this.refreshFiltersOptions();
    this.filtersChanged(this.filters);
  }

  refreshFiltersOptions(){
    this.filterOptions = {};
    this.filterOptions.contactType = _.uniq(this.allContacts.map(c => c.contactType));
  }

  getContacts(){
    this.ContactsService.getContacts().then(
      data => {
        this.allContacts = data.data;
        this.onContactsChanged();
      }
    )
  }

  deleteContact(contact){
    this.ContactsService.deleteContact(contact.id).then(
      data => {
        const index = this.allContacts.findIndex(c => c.id === contact.id);
        this.allContacts.splice(index, 1);
        this.onContactsChanged();
      }
    );
  }

  editContact(contact){
    const newScope = this.$scope.$new();
    newScope.vm = {
      contact: {...contact},
      saveContact: this.saveContact.bind(this),
      closeEdit: this.closeEdit.bind(this)
    };
    this.$mdDialog.show({
      scope: newScope,
      template: '<contact-form contact="vm.contact" on-submit="vm.saveContact(contact);" on-cancel="vm.closeEdit();"></contact-form>'
    });
  }

  openContactForm(){
    const newScope = this.$scope.$new();
    newScope.vm = {
      createContact: this.createContact.bind(this),
      closeEdit: this.closeEdit.bind(this)
    };
    this.$mdDialog.show({
      scope: newScope,
      template: '<contact-form contact="{}" on-submit="vm.createContact(contact);" on-cancel="vm.closeEdit();"></contact-form>'
    });
  }

  createContact(contact){
    this.ContactsService.createContact(contact).then(
      contact => {
        this.allContacts.push(contact);
        this.onContactsChanged();
      }
    );
    this.$mdDialog.hide();
  }

  closeEdit(){
    this.$mdDialog.hide();
  }

  saveContact(contact){
    this.ContactsService.updateContact(contact).then(
      contact => {
        const cIndex = this.allContacts.findIndex(c => c.id === contact.id);
        this.allContacts.splice(cIndex, 1, contact);
        this.onContactsChanged();
      }
    );
    this.$mdDialog.hide();
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
