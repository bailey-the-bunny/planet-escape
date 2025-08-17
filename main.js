// Variables

foundRocks = 0;
rocks = 0;
iron = 0;
quartz = 0;
coal = 0;

rocketBuilt = false;

// Constants

const RocketIronCost = 5;
const RocketQuartzCost = 5;
const RocketFuelCost = 5;

// Setup

document.getElementById("launchRocket").style.display = "none";

// Functions

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
		rocks += 1;

		set("rocks", "Rocks: " + rocks)

		if (!foundRocks) {
			set ("info", "You've picked up all the nearby rocks.")
		}
	}
}

function breakRocks () {
	if (rocks) {
		rocks -= 1;

		const RewardOptions = ["coal", "iron", "quartz"];

		let rewardType = chooseRandom(RewardOptions);
		let rewardId = "";
		let rewardAmount = rollDie(2);

		switch (rewardType) {
			case "coal":
				coal += rewardAmount;
				set("coal", "Coal: " + coal)
				break;
			case "iron":
				iron += rewardAmount;
				set("iron", "Iron: " + iron)
				break;
			case "quartz":
				quartz += rewardAmount;
				set("quartz", "Quartz: " + quartz)
				break;
		}

		let reward = rewardAmount + " " + rewardType;
		newInfo("You were able to extract " + reward + " from inside :3");

		set("rocks", "Rocks: " + rocks);
	}
}

function buildTheRocket () {
	if (iron >= RocketIronCost && quartz >= RocketQuartzCost) {
		iron -= RocketIronCost;
		quartz -= RocketQuartzCost;

		set("iron", "Iron: " + iron);
		set("quartz", "Quartz: " + quartz);
		newInfo("You have built the rocket!");

		rocketBuilt = true;
		document.getElementById("launchRocket").style.display = "inline-block";
	}
}

function launchRocket () {
	if (coal >= RocketFuelCost) {
		let score = coal;
		coal -= RocketFuelCost;

		set("coal", "Coal: " + coal);
		newInfo("You beat the game! Score: " + score)
	}
}