function rollDie (faces = 6) {
	return Math.floor((Math.random() * faces) + 1);
}

function set (element, text) {
	document.getElementById(element).innerHTML = text;
}

function newInfo (text) {
	set("info", text)
	
	//Make it noticable that the info was updated even if it is with the same text :)
}

function chooseRandom (array) {
	return array[Math.floor(Math.random() * array.length)];
}

function capitalize (text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}