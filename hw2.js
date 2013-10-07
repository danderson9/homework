Websc/*
* Please follow the instructions carefully.
*
* When a problem says "send 'foo' to the console that means you would write
*
* console.log('foo');
*
* I may also say "send the variable x to the console" in which case you'd write
*
* console.log(x)
*
* Note: If you have multiple variables x, y, z you can send all of them to the console like so
*
* console.log(x, y, z)
*/

// Problem 1) Using JavaScript comments, write your name and today's date below

//Dana Anderson
//9-13-2013


// Problem 2) Create separate variables to store the following.
var email = 'danderson36@gmail.com',
	major = 'programming',
	favEditor = 'sublime',
	zipcode = 20851,
	PI = 3.14159,
	bookPlusTax = 10 + (10 * .05),
	switchOn = true,
	supermanFly = false;

console.log(email);
console.log(major);
console.log(favEditor);
console.log(zipcode);
console.log(PI);
console.log(bookPlusTax);
console.log(switchOn);
console.log(supermanFly);

// Problem 3) Use the typeof operator to determine the data type of each variable like so.
 console.log(typeof major);
 console.log(typeof PI);
 console.log(supermanFly); // JG: This is missing typeof
// JG: The rest of the typeof calls are missing


// Problem 4) Create string variables to store the following string values.
var dog = "The dog's biting my shoes";
var link = '<a href="#"> Some link </a>';
var jScript = 'JavaScript is "easy" if you are good at it';
console.log(dog);
console.log(link);
console.log(jScript);

// Problem 5) Create an array of topics you would like to learn this semester.
var topicsToLearn = [
	"Calculations", 
	"JQuery", 
	"Info Validation", 
	"Node.js introduction", 
	"fade ins/outs", 
	"Webscraping"
];



// Problem 6) Send each item of the last array to the console.
/*for (var i = 0; i < topicsToLearn.length(); i++) {
	console.log(topicsToLearn[i]);
}*/
console.log(topicsToLearn);


// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
console.log(topicsToLearn.length);



// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string
// "Leave me alone!" to the console.
// hint: Use document.getElementById to get a reference to the button in
// a similar way to how we did it in class for the currency conversion
// calculator.

document.getElementById('clickMe').onclick = function() {
	console.log("Leave me alone!");
}