function rollDie (faces = 6) {
	return Math.floor((Math.random() * faces) + 1);
}

function set (element, text) {
	document.getElementById(element).innerHTML = text;
}

// Glow Effect

let info = document.getElementById("info");

function newInfo (text) {
	set("info", text)
	
	//Make it noticable that the info was updated even if it is with the same text :)
}