function ChatPanel() {
	this.panel = document.getElementById('chat-panel');
	this.header = document.getElementById('chat-header');
}

ChatPanel.prototype.show = function(name) {
	this.panel.style.display = '';
	var chatName = document.getElementById('chat-name');
	var text = document.createTextNode(name);
	if (chatName.firstChild) {
		chatName.removeChild(chatName.firstChild);
	}
	chatName.appendChild(text);
}
