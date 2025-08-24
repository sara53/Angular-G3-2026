// console.log(fname); //
// var fname = "ali";
// console.log(fname);

// advanced

// var fname = "alaa"; // add to window object

// console.log(window.fname);
// console.log(fname); // window.fname

// window -- optional
// setTimeout -- window.setTime

// function showData() {
// 	for (var i = 0; i < 3; i++) {
// 		console.log(i);
// 	}
// 	console.log(" i outside loop is : ", i);
// }

// showData();
// console.log(fname);

// var fname = "ali";
// console.log(fname); // access
// function showData() {
// 	// let trackName = "angular";

// 	for (let i = 0; i < 3; i++) {
// 		console.log(trackName); //
// 		console.log(i);
// 	}
// 	// console.log(" i outside : ", i);
// }

// showData();
// let fname = "ahmed";

// console.log(window.fname); // undefined
// var person = {
// 	fname: "Ali",
// };

// console.log(person.age); //undefined
// console.log(PI); //
// const PI = 3.14;

// console.log(PI);
// arr -- reference Or (Primitive)
// collection of data ()
// const arr = ["mona", "ali", 1234];

// arr.push("Alaa");

// // arr = []; // Error

// // arr = 2; //

// console.log(arr);
// spread operator
// let arr1 = [10, "mona", "ahmed", true];

// let arr2 = [1, 2, 4, ...arr1, "React", "cloud"]; // [10, "mona", "ahmed", true]

// arr1.push("alaa");
// console.log("arr 1 , ", arr1);
// console.log("arr 2 , ", arr2);

// string - number - boolean - undefined - null
// Object (reference datatype)

// let x = 5; //primitive

// let y = x;

// x = 10;

// console.log("x : ", x);
// console.log("y : ", y);
// let arr = [10, 30, 50, 70, 90];

// console.log(Math.max(...arr));
// let person1 = { fname: "ali", age: 20 };
// let person2 = { ...person1, gender: "male" };

// console.log(person1);
// console.log(person2);
// destructuring
// let arr = [10, "mona", "ahmed"];

// // let x = arr[0];
// // let y = arr[1];

// let [, , z] = arr;

// // console.log(" x , ", x);
// // console.log(" y , ", y);
// console.log(" z , ", z);

// let [x, y] = [10, "mona", "hello"];

// console.log(x);
// console.log(y);

// function getArr() {
// 	return [10, "mona", "alaa"];
// }

// let [x, y] = getArr(); // [10,"mona"]
// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };

// let x = person.fname; // key
// let y = person.color;

// let { fname: x, color: y } = person;
// let { fname: fname, color: color } = person;
// let { fname, color } = person;

// console.log("fname  : ", fname);
// console.log("color :", color);

// let response = {
// 	status: 200,
// 	data: [
// 		{ id: 1, name: "Alaa", age: 20 },
// 		{ id: 2, name: "mona" },
// 	],
// 	msg: "All Users in Your System",
// };

// let { data: products } = response;

// console.log(products);
// function sum(x = 0, y = 0) {
// 	console.log(" x :", x);
// 	console.log(" y :", y);
// 	console.log(x + y);
// }

// sum();
// console.log("------");
// sum(10, 30);
// rest params
// function sum(...rest) {
// 	console.log(rest);
// }

// sum(10, 20, 30, "mona", true); //
// let [x, ...y] = [10, "mona", true, 123];

// console.log("x : ", x);
// console.log("y : ", y);

// let x = 0;

// x += 1; // x = x+1
// // let str1 = "Ali";

// str1 = str1 + "alaa";

// console.log((str1 += "alaa"));

//
// let str1 = "     hello at iti        ";

// console.log(`:) ${str1.trim()} Angular group`);
// console.log(`:) ${str1.trimStart()} Angular group`);
// console.log(`:) ${str1.trimEnd()} Angular group`);
// console.log(str1.endsWith("ti"));
// console.log(str1.startsWith("Hello"));
// console.log(str1.includes("o"));

// let str1 = "hello";

// let str2 = "@ITI";

// console.log(`${str1} angular group

//             ${str2}`);

// let result = str1.concat(str2);

// console.log(result);

// console.log(str1 + str2);
// let arr = [10, 20, 40, 60];

// // 4
// let itiTracks = ["os", "angular", "react", "pd"];

// let result = itiTracks.map(function (track, index) {
// 	return {
// 		id: index + 1,
// 		trackName: track,
// 		element: `<h1>${track}</n1>`,
// 	};
// });

// for (let i = 0; i < result.length; i++) {
// 	document.body.innerHTML += result[i].element;
// }
// map [card,]
// itiTracks.forEach(function (value, index, arr) {
// 	console.log(`${index} :${value}`);
// } );

// let result = itiTracks.every(function (track) {
// 	return track.startsWith("b");
// });
// let result = itiTracks.some(function (track) {
// 	return track.startsWith("b");
// });

// console.log(result);
// let result = arr.find((x) => x > 15);
// let result = arr.findIndex((x) => x > 15);

// let result = itiTracks.find((track) => track.startsWith("a"));

// console.log(result);

// function findElement(x, y, z) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// 	console.log("z :", z);
// 	console.log("-------------------------");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 500) return arr[i];
// 	}
// }

// console.log("-------------");
// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// }
// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 200,
// 		category: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 100,
// 		category: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "Watch",
// 		price: 5000,
// 		category: "electronics",
// 	},
// 	{
// 		id: 4,
// 		name: "phone",
// 		price: 10000,
// 		category: "electronics",
// 	},
// ];

// let result = products.filter(function (product, i) {
// 	return product.price > 300;
// });

// console.log(result);
