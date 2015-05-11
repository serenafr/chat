function Message(sender, text, time) {
	this.sender = sender;
	this.text = text;
	this.sendTime = time;
}

Message.prototype.getSenderName = function() {
	return this.sender;
}

Message.prototype.getSentText = function() {
	return this.text;
}
Message.prototype.getSendTime = function() {
	return this.sendTime;
}
