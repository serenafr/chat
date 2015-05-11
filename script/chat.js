function bind(func, scope) {
	return function() {
		func.apply(scope, arguments);
	}
}

function init() {
	var me = new Contact(0, 'Christine');
	var contactList = new ContactList();
	var conversationManager = new ConversationManager();
	var chatPanel = new ChatPanel(me, conversationManager);
	contactList.setContactChangeCallback(function(contact) {
		chatPanel.show(contact);
	});
	chatPanel.setPanelCloseCallback(
		bind(contactList.onPanelClose, contactList));
	var contactNames = ['Alice', 'Bob', 'Cathy', 'Dave', 'Ella', 'Frank', 'George', 'Hans'];
	for (var i = 0; i < contactNames.length; i++) {
		contact = new Contact(i, contactNames[i]);
		contactList.addContact(contact);
	}
}
