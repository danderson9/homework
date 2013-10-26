// Homework 4

// This homework assignment will give you practice working with objects.
// All problems will be based on the object definition below.


// Object: Athlete

// Properties:
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions):

// introduce = returns 'Hello! My name is _______ and I am from ________'.
// Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.


var athlete1 = {};
athlete1.name = 'Joe Blow';
athlete1.height = '6 ft';
athlete1.age = '20';
athlete1.country_of_origin = 'USA';
athlete1.medals = ['Silver'];
athlete1.Olympian = true;
athlete1.introduce = function () {
	console.log("Hello! My name is", athlete1.name, "and I am from", athlete1.country_of_origin);
}
athlete1.addMedal = function (medalName) {
	athlete1.medals += medalName;
}
// athlete.foo = "bar"
// athlete.method = function () {
//
// }



// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).


var athlete2 = {};
// athlete['foo'] = "bar"
// athlete['method'] = function () {
//
// }
athlete2['name'] = "Jane Who";
athlete2['height'] = "5 ft";
athlete2['age'] = "15";
athlete2['country_of_origin'] = "Russia";
athlete2['medals'] = ["Bronze"];
athlete2.Olympian = true;
athlete2['introduce'] = function () {
	console.log("Hello! My name is", athlete2.name, "and I am from", athlete2.country_of_origin);
}
athlete2['addMedal'] = function (medalName) {
	athlete2.medals += medalName;
}



// Problem 3
// Create the same object using ONE object literal


var athlete3 = {
        name: 'John Doe',
        height: '7 ft',
        age: 25,
        country_of_origin: 'Brazil',
        medals: [],
        Olympian: false,
        introduce: function () {
        	console.log("Hello! My name is", athlete3.name, "and I am from ",athlete3.country_of_origin);
        },
        addMedal: function (medalName) {
        	athlete3.medals += medalName;
        }



};



// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html
function Athlete(name, height, age, country_of_origin, medals, Olympian) {
	this.name = name;
	this.height = height;
	this.age = age;
	this.country_of_origin = country_of_origin;
	this.medals = medals;
	this.Olympian = Olympian;

	this.introduce = function () {
		console.log("Hello! My name is", this.name, "and I am from", this.country_of_origin);
	}

	this.addMedal = function (medalName) {
		this.medal += medalName;
	}
}


// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
//
// This new prototype definition will add one method that returns a string message.
// It will also add a property unique to this type of athlete.
//
// You get to decide how to define these.
//
// For example I may want to have a Swimmer type that does the following.
//
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
//
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
//
// The last property, preferred brand, is the one I added.
//
// Method below returns 'Splash splash splash!'
//
// s1.swim();

function Sprinter(distance) {
	this.distance = distance;

	this.Hurdles = function() {
		console.log("I can also run the", this.distance, "in hurdles");
	}
}

Sprinter.prototype = new Athlete();
Sprinter.prototype.constructor = Athlete;