/**
 *  == find -- return first Element match condition (true)
    == findIndex
    == some
    == every
    == map
    == filter
    == reduce ()
*
*/

let fname = "ali";
let age = 20;

let myKey = "color";

// object features --
let person = {
	fname, // fname:fname
	age, //age:age
	[myKey]: "red", // color:"red"
	display() {
		console.log("hello display");
	},
};

person.display();
