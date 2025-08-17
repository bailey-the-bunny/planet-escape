// Variables

foundRocks = 0;
rocks = 0;
iron = 0;
quartz = 0;
coal = 0;

rocketBuilt = false;

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

		let rewardType = rollDie(3);
		let rewardId = "";
		let rewardAmount = rollDie(2);

		switch (rewardType) {
			case 1:
				rewardId = "coal"
				coal += rewardAmount;
				set("coal", "Coal: " + coal)
				break;
			case 2:
				rewardId = "iron"
				iron += rewardAmount;
				set("iron", "Iron: " + iron)
				break;
			case 3:
				rewardId = "quartz"
				quartz += rewardAmount;
				set("quartz", "Quartz: " + quartz)
				break;
		}

		let reward = rewardAmount + " " + rewardId;
		newInfo("You were able to extract " + reward + " from inside :3");

		set("rocks", "Rocks: " + rocks);
	}
}

function buildTheRocket () {
	if (iron >= 5 && quartz >= 5) {
		iron -= 5;
		quartz -= 5;

		set("iron", "Iron: " + iron);
		set("quartz", "Quartz: " + quartz);
		newInfo("You have built the rocket!");

		rocketBuilt = true;
		document.getElementById("launchRocket").style.display = "inline-block";
	}
}

function launchRocket () {
	if (coal >= 5) {
		let score = coal;
		coal -= 5;

		set("coal", "Coal: " + coal);
		newInfo("You beat the game! Score: " + score)
	}
}