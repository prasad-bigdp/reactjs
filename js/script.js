import { MyNameIsMan as MA } from ".index.js"//ES6 module system
class SuperMan extends MA

{
	speed
	constructor(name, age, speed) {
		super(name, age, weight) // it will call the constructor of super class
		this.speed = speed
	}
	fly() {
		console.log("i'm flying")
	}
}

let m = new SuperMan("raj", 20, 60, 200);
