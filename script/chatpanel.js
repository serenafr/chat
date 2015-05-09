function ChatPanel() {
	this.panel = document.getElementById('chat-panel');
	this.header = document.getElementById('chat-header');
	var closeButton = document.getElementById('close-button');
	closeButton.addEventListener(
		'click', 
		bind(this.onCloseClick, this));
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

ChatPanel.prototype.onCloseClick = function() {
	this.panel.style.display = 'none';
}