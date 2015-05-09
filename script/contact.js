function Contact(id, name) {
	this.id = id;
	this.name = name;
	var contentNode = document.createTextNode(name);
	this.element = document.createElement('div');
	this.element.appendChild(contentNode);
	this.element.className = 'contact';
}

Contact.prototype.setSelected = function(selected) {
	this.element.className = selected ? 'contact selected' : 'contact';
}

Contact.prototype.getName = function() {
	return this.name;
}
