function init () {
	ui.launchButton = get("launchRocket");
	ui.findRocksButton = get("findRocksButton");
	ui.pickUpRocksButton = get("pickUpRocksButton");
	ui.breakRocksButton = get("breakRocksButton");

	ui.findRocksButton.addEventListener("click", handleFindRocksClick);
	ui.pickUpRocksButton.addEventListener("click", handlePickUpRocksClick);
	ui.breakRocksButton.addEventListener("click", handleBreakRocksClick);

	updateDisplay();
}

window.addEventListener('DOMContentLoaded', init);

function updateResources () {
	state.config.resources.forEach(resource => {
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

function findRocks () {
	state.session.foundRocks = rollDie(3);

	if (state.session.foundRocks == 1) {
		return("You see 1 rock nearby...");
	}

	else {
		return(`You see ${state.session.foundRocks} rocks nearby...`);
	}
}

function handlePickUpRocksClick () {
	const message = pickUpRocks();
	newInfo(message);
	updateDisplay();
}

function handleFindRocksClick () {
	const message = findRocks();
	newInfo(message);
	updateDisplay();
}

function pickUpRocks () {
	if (state.session.foundRocks) {
		state.session.foundRocks -= 1;
		state.game.rocks += 1;

		if (!state.session.foundRocks) {
			return("You've picked up all the nearby rocks.");
		}

		else {
			return("Picked up a rock.")
		}
	}

	else {
		return("You don't see any nearby rocks...")
	}
}

function handleBreakRocksClick () {
	const message = breakRocks();
	newInfo(message);
	updateDisplay();
}

function breakRocks () {
	if (!state.game.rocks) {
		return "You haven't found any rocks to break!";
	}

	if (state.game.rocks) {
		state.game.rocks -= 1;

		const RewardOptions = ["coal", "iron", "quartz"];

		let rewardType = chooseRandom(RewardOptions);
		let rewardId = "";
		let rewardAmount = rollDie(2);

		state.game[rewardType] += rewardAmount;

		let reward = rewardAmount + " " + rewardType;

		return (`You were able to extract ${reward} from inside a rock :3`);
	}
}

function buildTheRocket () {
	if (state.game.iron >= state.config.rocketIronCost 
		&& state.game.quartz >= state.config.rocketQuartzCost) {
		state.game.iron -= state.config.rocketIronCost;
		state.game.quartz -= state.config.rocketQuartzCost;

		newInfo("You have built the rocket!");

		state.game.rocketBuilt = true;
		

		updateDisplay();
	}
}

function launchRocket () {
	if (state.game.coal >= state.config.rocketFuelCost) {
		let score = state.game.coal;
		state.game.coal -= state.config.rocketFuelCost;

		newInfo("You beat the game! Score: " + score)

		updateDisplay();
	}
}