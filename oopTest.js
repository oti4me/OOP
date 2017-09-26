
const Bird = require("./app");

// Inheritance : class Dove inheriting fields and metod of the Birth class.
class Dove extends Bird{
	constructor(type, movement, sound){
		super(type, movement, sound);
	}

	features(){
		console.log("Doves are gentle, human friendly/domestic");
	}
}

// Inheritance : class Dove inheriting fields and metod of the Birth class.
class Eagle extends Bird{
	constructor(name, movement, sound){
		super(name, movement, sound);
	}

	// Polymophism
	features(){
		echo("Eagles Hunt fresh foods with greate vision and strong claws, flies to the hight og th sky");
	}
}

// Inheritance : class Dove inheriting fields and metod of the Birth class.
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

console.log(dove.type());
console.log(dove.sound());
console.log(dove.movement());

console.log("-----------------------------");

// console.log(eagle.move());
// console.log(eagle.move());
// console.log(eagle.move());

// console.log("-----------------------------");

// console.log(ostrich.move());
// console.log(ostrich.move());
// console.log(ostrich.move());

module.exports = {
	eagle, dove, ostrich
}

// export default {
// 	eagle, dove, ostrich
// }


