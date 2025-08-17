function rollDie(faces = 6) {
	return Math.floor(Math.random() * faces + 1);
}

function get(element) {
	return document.getElementById(element);
}

function set(element, text) {
	get(element).textContent = text;
}

function newInfo(text) {
	ui.infoText.textContent = text;

	ui.infoText.classList.add("info-updated");

	setTimeout(() => {
		ui.infoText.classList.remove("info-updated");
	}, 500);
}

function chooseRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function addClick(uiKey, actionFunction) {
	ui[uiKey].addEventListener("click", () => handleGameAction(actionFunction));
}

function canAfford(costs) {
	for (const resource in costs) {
		if (state.game[resource] < costs[resource]) {
			return false;
		}
	}

	return true;
}

function handleGameAction(action) {
	const message = action();

	if (message) {
		newInfo(message);
	}

	updateDisplay();
}
