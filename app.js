"use strict"

class Bird{

	constructor(name, mov, sound){
		this.name = name;
		this.mov = mov;
		this.sound = sound;
	}

  // Bird class/object encapsulate other method and properties in it
	movement(){
		return this.mov;
	}

	type(){
		return this.name;
	}

  sound1(){
		return this.name;
	}

	// method overloading
	features(...features){
		console.log("This Bird contains the following features:");
		let counter = 1;
		for (let feature of features) {
			console.log(counter++, ". " + feature);
		}
	}

}

module.exports = Bird;
//export default Dove;
