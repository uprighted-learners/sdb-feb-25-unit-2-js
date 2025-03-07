/* 
    ? Functions
    * a block of reusable code; they can:
    * take in arguments thru its parameters (doors to inside fx)
    * perform an action
    * and return a result
        * if return not specified, fx will return an undefined value
    * need to be invoked (called)
    * can have one, none, or many parameters
    * can only have one return value
    
    ? Syntax:

    function identifier(param, param, ...) {
        function code block
        return statement
    }

*/

// Function declaration
function sayHello() {
	console.log("Hello Feb Cohort");
}

// Function invokation (calling a function)
sayHello();

// We will use a parameter to pass arguments
function greetUser(user) {
	return `Greetings, ${user}`;
}
// "Paul" is an argument
console.log(greetUser("Paul"));
console.log(greetUser("Samantha"));
console.log(greetUser("Missy"));

let greetNick = greetUser("Nick");
console.log(greetNick);

/* 
    ? Challenge
    * create a function
    * pass parameters of fName, lName, and addr
    * return a string interpolated result of all three values
    * invoke your functions (you're gonna need to console log it)
    ! SPICEY MODE
    * make sure the data type passed is a string
*/

// Good
function info(fName, lName, addr) {
	if (
		typeof fName === "string" &&
		typeof lName === "string" &&
		typeof addr === "string"
	) {
		return `Full Name: ${fName} ${lName}; Address: ${addr}`;
	} else {
		return `Use strings damnit!`;
	}
}

console.log(info("Rhojon", "Wizzard", "The Moon"));
console.log(info(undefined, "Wizzard", "The Moon"));

// Not so good
let name = "Paul";
let address = "123 Main st";

function signature() {
	return `${name} ${address}`;
}
console.log(signature());

/* 
    ? Function Expression
    * encapsulated within a variable
    * not hoisted (more on that later)   
    
    ? Syntax

    let identifier = function(param) {
        body
        return
    }
*/

let createEmail = function (name, subject, body) {
	return `
        Name: ${name}
        Subject: ${subject}
        Body: ${body}
    `;
};

console.log(
	createEmail(
		"Paul",
		"Warranty",
		"We've been trying to reach you about your car's extended warranty"
	)
);

/* 
    ? Arrow Function
    * introduced in ES6
    * concise way of writing functions
    * part of fx expression family
    * do not bind to this or super (more on that in Classes)
*/

/* 
    ? Concise Body Arrow Function
    * can have one or no parameters
    * there is no code block { }
    * return statement must be implicit
*/
let conciseBodyArrowFx = () => "Sample of concise body arrow fx";
console.log(conciseBodyArrowFx());

let conciseBodyWithParam = param => `This is the param ${param}`;
console.log(conciseBodyWithParam("Something"));

/* 
    ? Block Body Arrow Function
    * essentially what we learned above, but:
    * you get code block back { }
    * and you get your explicit returns back
    * you get as many params as you want
*/

let stringConcatenator = (str1, str2) => {
	if (typeof str1 === "string" && typeof str2 === "string") {
		return `${str1} ${str2}`;
	} else {
		return "This is for strings dummy";
	}
}

console.log(stringConcatenator("1", 2));

/* 
    ? Immediately Invoked Function Expression (IIFE)
    * an anonymous function that gets immediately invoked
*/

(function() {
    console.log("This is an IFFE")
})()
