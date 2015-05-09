function bind(func, scope) {
	return function() {
		func.apply(scope, arguments);
	}
}

function init() {
	var contactList = new ContactList();
	var chatPanel = new ChatPanel();
	contactList.setContactChangeCallback(function(contact) {
		chatPanel.show(contact.getName());
	})
	contactList.addContact('Alice');
	contactList.addContact('Bob');
	contactList.addContact('Cathy');
	contactList.addContact('Dave');
	contactList.addContact('Ella');
	contactList.addContact('Frank');
	contactList.addContact('George');
	contactList.addContact('Hans');
}
