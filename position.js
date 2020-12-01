function Position() {
	this.x = 0;
	this.y = 0;
	this.orientation = "N";
    this.lost = false;
    
    // final log template. Returns x,y,orientation - LOST OR NOT
	this.toTemplate = function () {
		return `${this.x} ${this.y} ${this.orientation} ${this.lost ? "LOST" : ""}`;
	};

    // check if off the grid, if so set lost to true
	this.isOffGrid = function (grid) {
		if (this.x > grid.length || this.y > grid.height || this.y < 0 || this.x < 0) {

			if (this.orientation == "N")
				this.y = grid.height;
			if (this.orientation == "E")
				this.x = grid.length;
			if (this.orientation == "S")
				this.y = 0;
			if (this.orientation == "W")
				this.x = 0;

			this.lost = true;
			return this.lost;
		}
		return false;
	};
}

module.exports = Position;