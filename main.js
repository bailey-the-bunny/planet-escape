foundRocks = 0;
rocks = 0;
iron = 0;
quartz = 0;
coal = 0;

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
	}
}