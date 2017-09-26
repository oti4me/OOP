"use strict"

class Bird{

	constructor(name, mov, sound){
		this.name = name;
		this.mov;
		this.sound = sound;
	}

	movement(){
		return this.mov;
	}

	type(){
		return this.name;
	}

	sound(){
		return this.sound;
	}

	features(){
		return "Class birth is a parent class with a lot of childreb classes";
	}

}

module.exports = Bird;
//export default Dove;
