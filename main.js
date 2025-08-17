const ui = {
	launchButton: null
}

function init () {
	ui.launchButton = get("launchRocket");

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
		set("info", "You see 1 rock nearby...")
	}

	else {
		set("info", `You see ${state.session.foundRocks} rocks nearby...`)
	}
}

function pickUpRocks () {
	if (state.session.foundRocks) {
		state.session.foundRocks -= 1;
		state.game.rocks += 1;

		if (!state.session.foundRocks) {
			newInfo("You've picked up all the nearby rocks.");
		}

		updateDisplay();
	}
}

function breakRocks () {
	if (state.game.rocks) {
		state.game.rocks -= 1;

		const RewardOptions = ["coal", "iron", "quartz"];

		let rewardType = chooseRandom(RewardOptions);
		let rewardId = "";
		let rewardAmount = rollDie(2);

		state.game[rewardType] += rewardAmount;

		let reward = rewardAmount + " " + rewardType;
		newInfo(`You were able to extract ${reward} from inside :3`);

		updateDisplay();
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