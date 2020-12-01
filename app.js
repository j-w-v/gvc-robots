var GVC = require("./gvc.js");

/* Set instructions, if I had more time would ask for user input
   or format this differently. The '5 3' confused me initially as it wasn't 
   clear that this was grid size instructions. */
var instructions = "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";


var gvc = new GVC();

// log ending positions / lost 
console.log(gvc.send(instructions));