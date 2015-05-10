function ChatPanel() {
	this.panel = document.getElementById('chat-panel');
	this.header = document.getElementById('chat-header');
	var closeButton = document.getElementById('close-button');
	closeButton.addEventListener(
		'click', 
		bind(this.onCloseClick, this));
	this.panelCloseCallBack = null;
	this.inputBox = document.getElementById('chat-input-box');
	this.chatHistory = document.getElementById('chat-history');
	var sendButton = document.getElementById('send-button');
	sendButton.addEventListener(
		'click',
		bind(this.onSendClick, this));
	this.inputBox.addEventListener(
		'keyup',
		bind(this.onEnterUp, this));
}

ChatPanel.prototype.show = function(name) {
	this.panel.style.display = '';
	var chatName = document.getElementById('chat-name');
	var text = document.createTextNode(name);
	if (chatName.firstChild) {
		chatName.removeChild(chatName.firstChild);
	}
	chatName.appendChild(text);
	this.clearConversation();
	this.inputBox.focus();
}

ChatPanel.prototype.onCloseClick = function() {
	this.panel.style.display = 'none';
	this.panelCloseCallBack();
}

ChatPanel.prototype.setPanelCloseCallback = function(callback) {
	this.panelCloseCallBack = callback;
}

ChatPanel.prototype.getInputText = function() {
	return this.inputBox.value;
}

ChatPanel.prototype.onSendClick = function() {
	var str = this.getInputText();
	if (str) {
		this.setChatHistory(str);
	}
	this.inputBox.value = '';
	this.inputBox.focus();
}

ChatPanel.prototype.setChatHistory = function(str) {
	var chatContentNode = document.createTextNode(str);
	var element = document.createElement('div');
	element.appendChild(chatContentNode);
	element.className = 'message-me';
	this.chatHistory.appendChild(element);
}

ChatPanel.prototype.onEnterUp = function(event) {
	if (event.keyCode == 13) {
		this.onSendClick();
	}
}

ChatPanel.prototype.clearConversation = function() {
	while (this.chatHistory.lastChild) {
		this.chatHistory.removeChild(this.chatHistory.lastChild);
	}
}
