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
};

console.log(stringConcatenator("1", 2));

/* 
    ? Immediately Invoked Function Expression (IIFE)
    * an anonymous function that gets immediately invoked
*/

(function () {
	console.log("This is an IFFE");
})();

/*

 ? FizzBuzz Challenge!
  Create a function that takes a parameters called start and stop.
  Loop over numbers from start to stop
  If the number is divisible by 3, print "Fizz"
  If the number is divisible by 5, print "Buzz"
  If the number is divisible by 3 and 5, print "Fizz Buzz"
  If the number is not divisible, print the number only
  Invoke your function to make sure it works.
  SPICEY MODE: try to return the numbers instead. What's going on?
*/

function fizzBuzz(start, stop) {
    let result = ""
    for (let i = start; i <= stop; i++) {
        if (i % 15 === 0) {
            // console.log("Fizz Buzz")
            result += "Fizz Buzz;"
        } else if (i % 3 === 0) {
            // console.log("Fizz")
            result += "Fizz;"
        } else if (i % 5 === 0) {
            // console.log("Buzz")
            result += "Buzz;"
        } else {
            // console.log(i)
            result += `${i};`
        }
    }
    return result
}

console.log(fizzBuzz(0, 10))

/* 
    ? Reverse Words in a String
    * write a function that takes string as ain input
    * return a reverse version of that string
    * ex: Paul should return luaP
    * hint: brainstorm the steps required to accomplish this
*/

let reverseStr = function(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(str[i], i)
        result += str[i]
    }
    return result
}
console.log(reverseStr("Paul"))

/* 
    ? Pythagoream Theorem Challenge
    * right triangle has three sides
    * the longest side c is calculated by taking the sum of:
    * a**2 and b**2
    * the formula is as follows c = sqrt(a**2 + b**2)
    * Create a function expression that takes two triangles sides
    * return the hypotenuse (c side)
    * hint: Math object has a .sqrt() method
*/

let pythagoreanTheorem = (a, b) => {
    // let result = Math.sqrt(a**2 + b**2)
    // return result
    return Math.sqrt(a**2 + b**2)
}

console.log(pythagoreanTheorem(5, 12))

/* 
    ? Quadratic Formula Challenge
    * Create a function that will give you a result of a quadratic formula based on all of the necessary factors
    * Check if the data type is Number. If not, return, "please use whole numbers only"
    * Please return the result but also the value of the top and bottom separately
    * make sure that the numbers are whole numbers so discriminant is positive
    * use Math interface
    
    -b+-sqrt(b**2 -4ac)/2a
*/

function quadraticFormula(a, b, c) {
    let sqrtResult = Math.sqrt(b**2 - 4 * a * c)
    console.log(sqrtResult)
    if (isNaN(sqrtResult)) {
        return "Please make sure you're using whole numbers which results in positive discriminant"
    } else {
        let addResult = ((-b + sqrtResult) / 2 * a)
        let subResult = ((-b - sqrtResult) / 2 * a)
        return `The solution is ${addResult} and ${subResult}`
    }
}

console.log(quadraticFormula(4, 12, 17))
console.log(quadraticFormula(1, -11, 24))