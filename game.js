function findRocks() {
	state.session.foundRocks = rollDie(3);

	const rocks = state.session.foundRocks;
	return `You see ${rocks} rock${rocks === 1 ? "" : "s"} nearby...`;
}

function pickUpRocks() {
	if (!state.session.foundRocks) {
		return "You don't see any nearby rocks...";
	}

	state.session.foundRocks -= 1;
	state.game.rocks += 1;

	if (state.session.foundRocks) {
		return "Picked up a rock.";
	}

	return "You've picked up all the nearby rocks.";
}

function breakRocks() {
	if (!state.game.rocks) {
		return "You haven't found any rocks to break!";
	}

	state.game.rocks -= 1;

	let rewardType = chooseRandom(config.rockRewards);
	let rewardAmount = rollDie(2);

	state.game[rewardType] += rewardAmount;

	let reward = `${rewardAmount} ${rewardType}`;

	return `You were able to extract ${reward} from inside a rock :3`;
}

function buildTheRocket() {
	if (state.game.rocketBuilt) {
		return "You have already built it, silly!";
	}

	if (!canAfford(config.rocketCost)) {
		return "You can't afford to create the rocket :(";
	}

	state.game.iron -= config.rocketCost.iron;
	state.game.quartz -= config.rocketCost.quartz;

	state.game.rocketBuilt = true;

	return "You have built the rocket!";
}

function launchRocket() {
	if (!canAfford(config.launchCost)) {
		return "Not enough coal (fuel) to launch the rocket!";
	}

	let score = state.game.coal;
	state.game.coal -= config.launchCost.coal;

	return "You beat the game! Score: " + score;
}
