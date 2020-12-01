// import grid and robot
var Grid = require("./grid.js");
var Robot = require("./robot.js");

function GVC() {
	this.send = function (instructions) {
		var output = "";

		// split instructions at new line
		instructions = instructions.split("\n");

		// split first line into array and set grid size.
		var gridSize = instructions[0].split(" ");
		var grid = new Grid(gridSize[0], gridSize[1]);

		//create new robot, passing in grid sizes.
		var robot = new Robot(grid);

        // loop over instructions. If a new set, add robot, else set starting position, else set output.
		for (var i = 1; i < instructions.length; i++) {
			var instruction = instructions[i];
			if (isNewRobot(instruction)) 
				robot = new Robot(grid);
			else if (isStarting(instruction))
				robot.setPosition(instruction);
			else
				output += (output.length > 0 ? "\n" : "") + robot.move(instruction);
				
		}
		return output;
	};

	// check if new set of instructions
	isNewRobot = function (instruction) {
		return instruction === "";
	};

	// check if the instruction is a starting position.
	isStarting = function (instruction) {
		return instruction.indexOf(" ") > -1;
	};
}

module.exports = GVC;