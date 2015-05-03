function ContactList() {
	this.contactList = document.getElementById('contact-list');
}

ContactList.prototype.addContact = function(name) {
	var contentNode = document.createTextNode(name);
	var contactElem = document.createElement('div');
	contactElem.appendChild(contentNode);
	this.contactList.appendChild(contactElem);
	contactElem.className = 'contact';
	contactElem.addEventListener('click', this.onClickContact);
}

ContactList.prototype.onClickContact = function(event) {
	event.currentTarget.className = 'contact selected';
	var contacts = document.getElementsByClassName('contact');
	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i] != event.currentTarget) {
			contacts[i].className = 'contact';
		}
	}
	console.log('Clicked');
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