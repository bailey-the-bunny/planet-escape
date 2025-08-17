const Game = {
	rocks: 0,
	coal: 0,
	iron: 0,
	quartz: 0,

	rocketBuilt: false
};

// Variables

foundRocks = 0;

// Constants

const RocketIronCost = 5;
const RocketQuartzCost = 5;
const RocketFuelCost = 5;

// Functions

function updateDisplay () {
	set("rocks", "Rocks: " + game.rocks);
	set("coal", "Coal: " + game.coal);
	set("iron", "Iron: " + game.iron);
	set("quartz", "Quartz: " + game.quartz);

	let rocketLaunchButton = document.getElementById("launchRocket");

	if (game.rocketBuilt) {
		rocketLaunchButton.style.display = "inline-block";
	}
	else {
		rocketLaunchButton.style.display = "none";
	}
}

function findRocks () {
	foundRocks = rollDie(3);

	if (foundRocks == 1) {
		set("info", "You see " + foundRocks + " rock nearby...")
	}

	else {
		set("info", "You see " + foundRocks + " rocks nearby...")
	}
}

function pickUpRocks () {
	if (foundRocks) {
		foundRocks -= 1;
		game.rocks += 1;

		if (!foundRocks) {
			newInfo("You've picked up all the nearby rocks.");
		}

		updateDisplay();
	}
}

function breakRocks () {
	if (game.rocks) {
		game.rocks -= 1;

		const RewardOptions = ["coal", "iron", "quartz"];

		let rewardType = chooseRandom(RewardOptions);
		let rewardId = "";
		let rewardAmount = rollDie(2);

		game[rewardType] += rewardAmount;
		
		let reward = rewardAmount + " " + rewardType;
		newInfo("You were able to extract " + reward + " from inside :3");

		updateDisplay();
	}
}

function buildTheRocket () {
	if (game.iron >= RocketIronCost && game.quartz >= RocketQuartzCost) {
		game.iron -= RocketIronCost;
		game.quartz -= RocketQuartzCost;

		newInfo("You have built the rocket!");

		game.rocketBuilt = true;
		

		updateDisplay();
	}
}

function launchRocket () {
	if (game.coal >= RocketFuelCost) {
		let score = game.coal;
		game.coal -= RocketFuelCost;

		set("coal", "Coal: " + game.coal);
		newInfo("You beat the game! Score: " + score)
	}
}