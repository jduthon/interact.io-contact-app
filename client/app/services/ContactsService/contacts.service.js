class ContactsService {
  constructor(InteractApiService) {
    'ngInject'
    this.InteractApiService = InteractApiService;
    this.contactsPath = 'contacts';

    this.contacts = [];
  }

  getContacts(){
    return this.InteractApiService.getUrl(this.contactsPath, true).then(
      response => response.data
    )
  }

  deleteContact(contactId){
    const deletePath = `${this.contactsPath}/${contactId}`;
    return this.InteractApiService.deleteUrl(deletePath, true).then(
      response => response.data
    )
  }

  _getPrimaryX(contact, x){
    if(contact[x]){
      return contact[x].find(c => c.primary);
    }
    return undefined;
  }

  getPrimaryEmail(contact){
    return this._getPrimaryX(contact, 'emails');
  }

  getPrimaryPhoneNumber(contact){
    return this._getPrimaryX(contact, 'phoneNumbers');
  }
}

export default ContactsService;
