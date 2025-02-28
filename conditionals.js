/* 
    ? JS Refresher
*/

console.log(52 + 78);

/* 
    ? Data Type Examples
    * string
    * boolean
    * number
    * null
    * undefined
    * NaN
    * array
    * objects
    * maps
    * sets
*/

let firstName = "Robert";
console.log(firstName);

var age = 20;
console.log(age);

const address = "123 Main St";
console.log(address);

firstName = "Wizzard";
console.log(firstName);

/* 
    ? Conditionals & Logic Gates & Booleans
    * conditional statements always resolve to true
    * if it's truthy, code block executes
    * if it's falsey, it skips, unless we have an else
    
    ? Booleans
    * true (1)
    * false (0)
        * 0
        * ""
        * null
        * undefined
*/

// use Boolean interface to see if value is truthy or false
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("potato"));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(2 == 5);
console.log(5 == 5);

// ? Conditionals continued

if (true) {
	console.log("This will always run as true will never change");
}

let lightSwitch = true;

if (lightSwitch == true) {
	console.log("The light is on");
}

let airConditioning = "";

if (airConditioning) {
	console.log("The AC is working");
}

if (2 !== 5) {
	console.log("Truthy expression");
}

if (2 == 2) {
	console.log("Truthy expression");
}

/* 
    ? Else If
    * allows us to chain another condition

    ? Else
    * allows us to handle any other case
*/

let myAge = "Potato";

// (expression)
if (myAge > 30) {
	// code block
	console.log("Your bones creak");
} else if (myAge > 20) {
	console.log("Best years of your life");
} else if (myAge < 18) {
	console.log("You are underage");
} else {
	console.log("This is for any other condition");
}

/* 
    ? Syntax

    if (conditionIsTrue) {
        do this code block
    } else if (conditionIsTrue) {
        do this code block
    } else {
        if nothing else matches, do this
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR operator ( || )
        * true if one of the conditions is true
        * true || true == true
        * true || false == true
        * false || true == true
        * false || false == falsed
    * AND operator (&&)
        * true if both conditions are true
        * true && true == true
        * true && false == false
        * false && true == false
        * false && false == false
    * NOT operator (!)
        * opposite of the logical expression
        * flips it
*/

if (5 == 5 || 7 == 5) {
	console.log("one of those are equal");
}

if (true && true) {
	console.log("and resolves to true");
}

if (!false) {
	console.log("This runs");
}

if (7 != 5) {
	console.log("This runs, too, because it flips falsey value into true");
}

// ! Think of this as NOT EQUAL TO

let color = "white";
let temp = "hot";

if (color == "white" && temp == "hot") {
	console.log("You're laundering white towels");
} else if (color == "black" || temp == "cold") {
	console.log("You're laundering blacks or delicates");
} else {
	console.log("Be careful, probably useful to use low temp");
}

/* 
    ? Challenge
    * create a conditional that will give you grade against GPA
    * if GPA of 4.0, say A
    * if GPA of less than 4.0, say B
    * if GPA of less than 3.0, say C
    * if GPA of less than 2.0, say D
    * if GPA of less than or equal to 1.0, say F
*/

let gpa = 1.0;

if (gpa == 4.0) {
	console.log("A");
} else if (gpa < 4.0) {
	console.log("B");
} else if (gpa < 3.0) {
	console.log("C");
} else if (gpa < 2.0) {
	console.log("D");
} else if (gpa <= 1.0) {
	console.log("F");
}

if (gpa <= 1.0) {
	console.log("F");
} else if (gpa <= 2.0) {
	console.log("D");
} else if (gpa <= 3.0) {
	console.log("C");
} else if (gpa <= 4.0) {
	console.log("B");
} else if (gpa == 4.0) {
	console.log("A");
}

console.log(firstName.toUpperCase());

/* 
    ? Ternaries
    * another way of writing conditionals in JS
    * they are expressions
    * cannot have return statements
    * used for easy checks
    * they MUST have an else statement always
*/

let isLoggedIn = true;

if (isLoggedIn) {
	console.log("Logged in");
} else {
	console.log("Logged out");
}

// Ternary Syntax
// conditional ? expression if true : expression if false

isLoggedIn ? console.log("Logged in") : console.log("Logged out");

let paulIsCool = true;

paulIsCool ? console.log("Duh!") : null;

// Chaining Ternaries

// ? Temperature Challenge
/*
 * write a conditional that checks the temperature
 * have a variable called temp with some number value
 * if temp >= 80, say summer weather
 * if temp between 79 and 60, say fall or spring
 * if temp is below 60, say it's winter
 */

let temperature = 60;

if (temperature >= 80) console.log("Summer");
else if (temperature < 80 && temperature > 60) console.log("Spring or Fall");
else if (temperature <= 60) console.log("Winter");

temperature >= 80
	? console.log("Summer")
	: temperature < 80 && temperature > 60
	? console.log("Spring or Fall")
	: temperature <= 60
	? console.log("Winter")
	: null;

/* 
    conditional
        ? expr if true
        : conditional
        ? expr if true
        : conditional
        ? expr if true
        : else statement
*/

/* 
    ? Switch Statements
    * evaluates an expression against series of cases
    * runs them all unless it encounters a break
    * jumps to next case matching expression
*/

let num = 68;

switch (true) {
	case num >= 70:
		console.log("greater than 70");
		break;
	case num >= 60:
		console.log("greater than 60");
		break;
	case num >= 50:
		console.log("greater than 50");
		break;
	default:
		console.log("Our default value");
}

let instructor = "Maria";

switch (instructor) {
	case "Paul":
		console.log("sdb feb 25");
		break;
	case "Amit":
		console.log("sdb jan 25");
		break;
	case "Rob":
		console.log("has amazing hair");
		break;
	// default:
	// 	console.log("you're not an instructo here");
}
