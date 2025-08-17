updateDisplay();

function updateResources () {
	const Resources = ["rocks", "coal", "iron", "quartz"]

	Resources.forEach(resource => {
		const displayName = capitalize(resource);
		set(resource, `${displayName}: ${Game[resource]}`);
	});
}

function updateButtons () {
	let rocketLaunchButton = document.getElementById("launchRocket");
	rocketLaunchButton.style.display = Game.rocketBuilt ? "inline-block" : "none";
}

function updateDisplay() {
	updateResources();
	updateButtons();
}

function findRocks () {
	Session.foundRocks = rollDie(3);

	if (Session.foundRocks == 1) {
		set("info", "You see 1 rock nearby...")
	}

	else {
		set("info", `You see ${Session.foundRocks} rocks nearby...`)
	}
}

function pickUpRocks () {
	if (Session.foundRocks) {
		Session.foundRocks -= 1;
		Game.rocks += 1;

		if (!Session.foundRocks) {
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
		newInfo(`You were able to extract ${reward} from inside :3`);

		updateDisplay();
	}
}

function buildTheRocket () {
	if (Game.iron >= Config.RocketIronCost && Game.quartz >= Config.RocketQuartzCost) {
		Game.iron -= Config.RocketIronCost;
		Game.quartz -= Config.RocketQuartzCost;

		newInfo("You have built the rocket!");

		Game.rocketBuilt = true;
		

		updateDisplay();
	}
}

function launchRocket () {
	if (Game.coal >= Config.RocketFuelCost) {
		let score = Game.coal;
		Game.coal -= Config.RocketFuelCost;

		newInfo("You beat the game! Score: " + score)

		updateDisplay();
	}
}