function init () {
	ui.infoText = get("info");

	ui.launchButton = get("launchRocket");
	ui.findRocksButton = get("findRocksButton");
	ui.pickUpRocksButton = get("pickUpRocksButton");
	ui.breakRocksButton = get("breakRocksButton");
	ui.rocketBuilderButton = get("rocketBuilderButton");

	addClick("findRocksButton", findRocks);
	addClick("pickUpRocksButton", pickUpRocks);
	addClick("breakRocksButton", breakRocks);
	addClick("rocketBuilderButton", buildTheRocket);
	addClick("launchButton", launchRocket);

	updateDisplay();
}

window.addEventListener("DOMContentLoaded", init);

function updateResources () {
	config.resources.forEach(resource => {
		const displayName = capitalize(resource);
		set(resource, `${displayName}: ${state.game[resource]}`);
	});
}

function updateButtons () {
	ui.launchButton.style.display = state.game.rocketBuilt ? "inline-block" : "none";
}

function updateDisplay() {
	updateResources();
	updateButtons();
}