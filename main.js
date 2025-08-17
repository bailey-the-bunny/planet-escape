const Game = {
	rocks: 0,
	coal: 0,
	iron: 0,
	quartz: 0,

	rocketBuilt: false
};

const GameState = {
	foundRocks: 0;
}

// Constants

const RocketIronCost = 5;
const RocketQuartzCost = 5;
const RocketFuelCost = 5;

// Functions

function updateDisplay () {
	set("rocks", "Rocks: " + Game.rocks);
	set("coal", "Coal: " + Game.coal);
	set("iron", "Iron: " + Game.iron);
	set("quartz", "Quartz: " + Game.quartz);

	let rocketLaunchButton = document.getElementById("launchRocket");

	if (Game.rocketBuilt) {
		rocketLaunchButton.style.display = "inline-block";
	}
	else {
		rocketLaunchButton.style.display = "none";
	}
}

function findRocks () {
	GameState.foundRocks = rollDie(3);

	if (foundRocks == 1) {
		set("info", "You see " + GameState.foundRocks + " rock nearby...")
	}

	else {
		set("info", "You see " + GameState.foundRocks + " rocks nearby...")
	}
}

function pickUpRocks () {
	if (GameState.foundRocks) {
		GameState.foundRocks -= 1;
		Game.rocks += 1;

		if (!foundRocks) {
			newInfo("You've picked up all the nearby rocks.");
		}

		updateDisplay();
	}
}

function breakRocks () {
	if (Game.rocks) {
		Game.rocks -= 1;

		const RewardOptions = ["coal", "iron", "quartz"];

		let rewardType = chooseRandom(RewardOptions);
		let rewardId = "";
		let rewardAmount = rollDie(2);

		Game[rewardType] += rewardAmount;

		let reward = rewardAmount + " " + rewardType;
		newInfo("You were able to extract " + reward + " from inside :3");

		updateDisplay();
	}
}

function buildTheRocket () {
	if (Game.iron >= RocketIronCost && Game.quartz >= RocketQuartzCost) {
		Game.iron -= RocketIronCost;
		Game.quartz -= RocketQuartzCost;

		newInfo("You have built the rocket!");

		Game.rocketBuilt = true;
		

		updateDisplay();
	}
}

function launchRocket () {
	if (Game.coal >= RocketFuelCost) {
		let score = Game.coal;
		Game.coal -= RocketFuelCost;

		set("coal", "Coal: " + Game.coal);
		newInfo("You beat the game! Score: " + score)
	}
}