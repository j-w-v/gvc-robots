var Position = require("./position.js");

function Robot(grid) {
    var position = new Position();
    // set turning positions
	var mapRightTurns = { "N":"E", "E":"S", "S":"W", "W":"N" };
	var mapLeftTurns = { "N":"W", "W":"S", "S":"E", "E":"N" };

    // set starting position of robot.
	this.setPosition = function (startPosition) {
		startPosition = startPosition.split(" ");
		position.x = startPosition[0];
		position.y = startPosition[1];
		position.orientation = startPosition[2];
	};

	this.getPosition = function () {
		return position;
	};

    /* 
        determine what instruction character is and either turn left, 
        right or move forward
    */
	this.move = function (instructions) {
		for (var i = 0; i < instructions.length; i++) {
			if (this.isLost()) break;

			var instruction = instructions.charAt(i);

			if (isLeftTurn(instruction)) 
				this.turnLeft();
			if (isRightTurn(instruction)) 
				this.turnRight();
			if (isForwardMovement(instruction)) 
				this.forwards();
		}
		return position.toTemplate();
	};

    // move forwards depending on orientation
	this.forwards = function () {
		var startingPosition = position.toTemplate();

		if (this.isLost() || grid.hasLost(startingPosition))
			return;

		if (position.orientation == "N")
			position.y++; 
		if (position.orientation == "E")
			position.x++;
		if (position.orientation == "S")
			position.y--;
		if (position.orientation == "W")
			position.x--;
		
		if (position.isOffGrid(grid))
			grid.addLost(startingPosition);
	};

	this.turnLeft = function() {
		position.orientation = mapLeftTurns[position.orientation];
	};

	this.turnRight = function () {
		position.orientation = mapRightTurns[position.orientation];
	};

	isLeftTurn = function (instruction) {
		return instruction == "L";
	};

	isRightTurn = function (instruction) {
		return instruction == "R";
	};

	isForwardMovement = function (instruction) {
		return instruction == "F";
	};

	this.isLost = function () {
		return position.lost;
	};
}

module.exports = Robot;