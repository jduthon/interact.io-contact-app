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

  _buildOneContactPath(contactId){
    return `${this.contactsPath}/${contactId}`;
  }

  deleteContact(contactId){
    const deletePath = this._buildOneContactPath(contactId);
    return this.InteractApiService.deleteUrl(deletePath, true).then(
      response => response.data
    )
  }

  updateContact(contact){
    const updatePath = this._buildOneContactPath(contact.id);
    return this.InteractApiService.putUrl(updatePath, true, contact).then(
      response => response.data
    );
  }

  createContact(contact) {
    return this.InteractApiService.postUrl(this.contactsPath, true, contact).then(
      response => response.data
    );
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
