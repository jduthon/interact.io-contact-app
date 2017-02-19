class ContactsFilterController {
  constructor() {
    this.filters = {};
  }

  clearFilters(){
    this.filters = {};
    this.onFiltersChanged({filters: this.filters});
  }
}

export default ContactsFilterController;
