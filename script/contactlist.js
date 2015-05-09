function ContactList() {
	this.contactList = document.getElementById('contact-list');
	this.selectedContact = null;
	this.nextId = 0;
}

function bind(func, scope) {
	return function() {
		func.apply(scope, arguments);
	}
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
	var chatPanel = document.getElementById('chat-panel');
	if (this.selectedContact) {
		this.selectedContact.setSelected(false);
	}
	currentContact.setSelected(true);
	this.selectedContact = currentContact;
	chatPanel.style.display = '';
} 

function init() {
	var contactList = new ContactList();
	contactList.addContact('Alice');
	contactList.addContact('Bob');
	contactList.addContact('Cathy');
	contactList.addContact('Dave');
	contactList.addContact('Ella');
	contactList.addContact('Frank');
	contactList.addContact('George');
	contactList.addContact('Hans');
}