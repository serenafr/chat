function ConversationManager() {
	this.contactConversationMap = {};
}

ConversationManager.prototype.getConversation = function(contactId) {
	if (!(contactId in this.contactConversationMap)) {
		conversation = new Conversation();
		this.contactConversationMap[contactId] = conversation;
	}
	return this.contactConversationMap[contactId];
}
