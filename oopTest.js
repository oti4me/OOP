
const Bird = require("./app");


// Inheritance : class Dove inheriting fields and method of the Bird class.
class Dove extends Bird{
	constructor(type, movement, sound){
		super(type, movement, sound);
	}
}

// Inheritance : class Dove inheriting fields and method of the Bird class.
class Eagle extends Bird{
	constructor(name, movement, sound){
		super(name, movement, sound);
	}
}

// Inheritance : class Dove inheriting fields and method of the Bird class.
class Ostrich extends Bird{
	constructor(name, movement, sound){
		super(name, movement, sound);
	}

	// Polymophism
	features(...features){
		console.log("I Dont have a special feature!!");
	}
}

const dove = new Dove("Dove", "Flying", "coo");
const eagle = new Eagle("Eagle", "Flying");
const ostrich = new Ostrich("Ostrich", "Running");

console.log("Type: ", dove.type());
// overloaded function
dove.features('Human friendly', 'Domestic')
console.log("Movement: ", dove.movement());
console.log("Doves make this sound: ", dove.sound1());

console.log("-----------------------------");

console.log("Type: ", eagle.type());
// overloaded function
eagle.features('strong viosion', 'strong claws', 'flies the hight of the skies')
console.log("Movement: ", eagle.movement());

console.log("-----------------------------");

console.log("Type: ", ostrich.type());
// Polymophism
ostrich.features()
console.log(ostrich.movement());
