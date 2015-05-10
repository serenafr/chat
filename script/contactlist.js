function ContactList() {
	this.contactList = document.getElementById('contact-list');
	this.selectedContact = null;
	this.nextId = 0;
	this.contactChangeCallback = null;
}

ContactList.prototype.addContact = function(name) {
	var contact = new Contact(this.nextId, name);
	this.nextId++;
	this.contactList.appendChild(contact.element);
	contact.element.addEventListener(
		'click',
		bind(function() {
			this.onClickContact(contact);
		}, this));
}

ContactList.prototype.onClickContact = function(currentContact) {
	if (this.selectedContact == currentContact) {
		return;
	}
	if (this.selectedContact) {
		this.selectedContact.setSelected(false);
	}
	currentContact.setSelected(true);
	this.selectedContact = currentContact;
	if (this.contactChangeCallback) {
		this.contactChangeCallback(currentContact);
	}
}

ContactList.prototype.setContactChangeCallback = function(callback) {
	this.contactChangeCallback = callback;
}

ContactList.prototype.onPanelClose = function() {
	if (this.selectedContact) {
		this.selectedContact.setSelected(false);
		this.selectedContact = null;
	}
}
