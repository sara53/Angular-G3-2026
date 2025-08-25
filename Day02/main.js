// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };

// // [fname,age,color] key
// // ["ali",20,red]
// /**
//  * [
//  *      [fname,ali],
//  *      [age,20],
//  *      [color,red]
//  *
//  * ]
//  *
//  */

// let keys = Object.keys(person);
// let values = Object.values(person);
// let entries = Object.entries(person);

// console.log(keys);
// console.log(values);
// console.log(entries);
// js Engine cb(fun1,fun2)
// pending --
// fulfilled -- success
// rejected -- fail
// let myPromise = new Promise(function (x, y) {
// 	let users = [
// 		{ id: 1, name: "ali" },
// 		{ id: 2, name: "alaa" },
// 	];

// 	if (users) {
// 		x(users);
// 	} else {
// 		y("Error on getting users list");
// 	}
// });

// /// promise -- then -- catch
// myPromise
// 	.then(function (data) {
// 		console.log(data); // promise

// 		return new Promise((x, y) => {
// 			// x("angular");
// 			y("Error in second promise");
// 		});
// 	})
// 	.then((data) => {
// 		console.log(data);
//         console.log( "Hello Second then" );

//         // return promise
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

/**======================= */
// let myPromise = new Promise(function (x, y) {
// 	let users = [
// 		{ id: 1, name: "ali" },
// 		{ id: 2, name: "alaa" },
// 	];

// 	if (users) {
// 		x(users);
// 	} else {
// 		y("Error on getting users list");
// 	}
// });

// // api -- result -- promise
// /// promise -- then -- catch

// async function getAllUsers() {
// 	try {
// 		let result = await myPromise;
// 		console.log(result);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getAllUsers();

// async -- await
// myPromise
// 	.then(function (users) {
// 		console.log(users); // promise
// 	})

// 	.catch(function (err) {
// 		console.log(err);
// 	});
/**================================== */
// js Engine cb(fun1,fun2)
// pending --
// fulfilled -- success
// rejected -- fail

// async function getData() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();

// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getData();
// //
// result
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		for (let i = 0; i < data.length; i++) {
// 			document.body.innerHTML += `<h1>
//                 ${data[i].name}
//             </h1>`;
// 		}
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});
// object props & methods

// template --
// let product1 = {
// 	id: 1,
// 	name: "Book",
// 	price: 200,
// 	quantity: 10,
// 	category: "school",
// 	createdAt: "12-8",
// 	discount: function () {
// 		console.log("50%");
// 	},
// };
// // 100
// let product2 = {
// 	id: 1,
// 	name: "Book",
// 	discount: function () {
// 		console.log("50%");
// 	},
// };
// class Product {
// 	constructor(id = "", name = "", price = "", quantity = "", category = "") {
// 		if (arguments.length != 5) {
// 			throw new Error("Pass all data");
// 		}
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 		this.quantity = quantity;
// 		this.category = category;
// 	}

// 	discount(rate) {
// 		console.log("Hello discount");
// 		return this.price * rate;
// 	}
// }

// let product1 = new Product(1, "Book", 200, 10);
// let product2 = new Product(2, "Pen", 100, 10, "school");

// console.log(product1.discount(0.5));
// console.log(product2.discount(0.2));
// Super Class -- Parent Class
// inheritance
// class Person {
// 	constructor(id, name, age, address) {
// 		this.id = id;
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	display() {
// 		// 100 line
// 		console.log(`${this.name} ${this.age}`);
// 	}
// }

// // override -- polymorphism -- OOP
// // subClass - Child Class
// class User extends Person {
// 	constructor(id, name, age, address, password) {
// 		super(id, name, age, address);
// 		this.password = password;
// 	}

// 	// override
// 	display() {
// 		super.display();
// 		console.log(this.password);
// 	}

// 	generatePass() {
// 		return this.password.toUpperCase() + "#$%";
// 	}
// }

// let myUser = new User(1, "Ahmed", "30", "Cairo", "asr");

// myUser.display();
// console.log(myUser.generatePass());
/**============================ */
// class Product {
// 	#id;
// 	constructor(id, name) {
// 		this.#id = id;
// 		this.name = name;
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	// prop
// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let product1 = new Product(1, "Book");

// product1.setId("new Id"); // method

// product1.setId = "new Id";

// console.log(product1.getId);

// console.log(product1.getId()); //method
// // set
// product1.name = "Pen"; // prop
// // get
// console.log(product1.name);
// class Shape {
// 	constructor() {
// 		if (this.constructor == Shape) {
// 			throw new Error("Can not take an object from abstract class");
// 		}
// 	}

// 	area() {
// 		throw new Error("Method is not implemented");
// 	}
// 	perimeter() {
// 		throw new Error("Method is not implemented");
// 	}
// }

// class Square extends Shape {
// 	constructor(l) {
// 		this.l = l;
// 	}
// 	area() {
// 		return this.l * this.l;
// 	}
// }
// class Circle extends Shape {
// 	area() {
// 		//
// 	}
// }

// let c = new Circle();
// c.area();
