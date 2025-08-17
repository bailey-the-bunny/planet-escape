const state = {
	// Game data to be saved :)
	game: {
		rocks: 0,
		coal: 0,
		iron: 0,
		quartz: 0,

		rocketBuilt: false
	},

	// Session data which is temporary
	session: {
		foundRocks: 0
	},

	// Constants for defining the game's rules / balancing
	config: {
		resources: ["rocks", "coal", "iron", "quartz"],
		rocketIronCost: 5,
		rocketQuartzCost: 5,
		rocketFuelCost: 5
	}
}

const ui = {
	launchButton: null,

	findRocksButton: null,
	pickUpRocksButton: null,
	breakRocksButton: null
}
