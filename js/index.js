class MyNameIsMan {
	name
	age
	weight
	constructor(name, age, weight) {
		//DRY
		this.name = name
		this.age = age
		this.weight = weight
    }
	walk() {
		console.log("i'm walking")
	}
}

function add (obj1,...arr)//rest parameter
{
    console.log(arr)
    const {name,age}=obj1

    const [ k, l, m, n ] = [...arr]
   console.log(l)

}
let obj1 = {
    name: "santosh",
    id:1
}

add(obj1,2, 3, 4, 5, 6, 7, 8)
