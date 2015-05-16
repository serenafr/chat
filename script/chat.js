function bind(func, scope) {
	return function() {
		func.apply(scope, arguments);
	}
}

function init() {
	var me = new Contact(0, 'Christine');
	var conversationManager = new ConversationManager();
	var contactList = new ContactList();
	var chatPanel = new ChatPanel(me, conversationManager);
	contactList.setContactChangeCallback(function(contact) {
		chatPanel.show(contact);
	});
	chatPanel.setPanelCloseCallback(
		bind(contactList.onPanelClose, contactList));
	conversationManager.addMessageReceivedCallback(function(message) {
		contactList.messageReceived(message);
	});
	conversationManager.addMessageReceivedCallback(function(message) {
		chatPanel.receiveMessage(message);
	});
	var contactNames = ['Alice', 'Bob', 'Cathy', 'Dave', 'Ella', 'Frank', 'George', 'Hans'];
	for (var i = 0; i < contactNames.length; i++) {
		contact = new Contact(i, contactNames[i]);
		contactList.addContact(contact);
	}
	var senderAlice = contactList.getContactByName('Alice');
	var textOfAlice = 'Hello, world!';
	var timeOfAlicesmessage = new Date();
	var messageOfAlice = new Message(senderAlice, textOfAlice, timeOfAlicesmessage);
	conversationManager.onMessageReceived(messageOfAlice);
}
