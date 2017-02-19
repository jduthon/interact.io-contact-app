class ContactCardController {
  constructor(ContactsService) {
    'ngInject'
    this.ContactsService = ContactsService;

    this.init();
  }

  init(){
    this.refreshContactDetails();
  }

  refreshContactDetails(){
    this.primaryEmail = this.ContactsService.getPrimaryEmail(this.contact);
    this.primaryPhoneNumber = this.ContactsService.getPrimaryPhoneNumber(this.contact);
  }
}

export default ContactCardController;
