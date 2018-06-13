
const Bird = require("./app");

// Inheritance : class Dove inheriting fields and method of the Bird class.
class Dove extends Bird{
	constructor(type, movement, sound){
		super(type, movement, sound);
	}

	features(...features){
		console.log("This Bird contains the following features:");
		const counter = 1;
		for (const feature of features) {
			console.log(counter++, ". " + feature);
		}
	}
}

// Inheritance : class Dove inheriting fields and method of the Bird class.
class Eagle extends Bird{
	constructor(name, movement, sound){
		super(name, movement, sound);
	}

	// Polymophism
	features(){
		echo("Eagles Hunt fresh foods with greate vision and strong claws, flies to the hight og th sky");
	}
}

// Inheritance : class Dove inheriting fields and method of the Bird class.
class Ostrich extends Bird{
	constructor(name, movement, sound){
		super(name, movement, sound);
	}

	// Polymophism
	features(){
		echo("Ostrich Hunt fresh foods with greate vision and strong claws, flies to the hight og th sky");
	}
}

const dove = new Dove("Dove", "Dove is flying", "coo");
const eagle = new Eagle("Eagle", "Eagle is flying");
const ostrich = new Ostrich("Ostrich", "Ostrich is flying");

dove.features()
console.log(dove.type());
console.log(dove.sound());
console.log(dove.movement());

console.log("-----------------------------");

eagle.features()
console.log(eagle.move());
console.log(eagle.move());
console.log(eagle.move());

// console.log("-----------------------------");

ostrich.features()
console.log(ostrich.move());
console.log(ostrich.move());
console.log(ostrich.move());
