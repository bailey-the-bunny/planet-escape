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
	}
}

// Constants for defining the game's rules / balancing
config = {
	resources: ["rocks", "coal", "iron", "quartz"],
	rockRewards: ["coal", "iron", "quartz"],

	rocketCost: {
        iron: 5,
        quartz: 5
    },

    launchCost: {
        coal: 5
    }
}

const ui = {
	infoText: null,

	findRocksButton: null,
	pickUpRocksButton: null,
	breakRocksButton: null,

	buildRocketButton: null,
	launchButton: null
}