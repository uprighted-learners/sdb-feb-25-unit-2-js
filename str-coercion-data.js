/* 
    ? Review Of
    * string interpolation
    * string concatenation
    * difference between = == and ===
    * type coercion
    * duck typed
*/

console.log("this is a string");
let firstName = "Paul";
console.log(firstName);
let lastName = "Niemczyk";
let address = "123 Main St";
// Concatenation === adding things
let signatureConcatenated = firstName + " " + lastName + " " + address;
console.log(signatureConcatenated);

/* 
    ? Type Coercion
    * JS is a weakly typed programming language
    * languages have
        * data type
        * data value
    * JS allows you to mingle both of them together
    * 2 + "2" == "22"
    * JS will turn data type into a string if it cannot find a suitable alternative
*/

let sigWithOtherDataTypes = signatureConcatenated + 25;
console.log(sigWithOtherDataTypes);

console.log(2 + false); // 2 is a number false is represented by 0 so 2 + 0 == 2
console.log(2 + "potato"); // js cannot handle number 2, turns it into a string

// String Interpolation
// uses backticks `` and ${ } to insert any expression into a string

let signatureInterpolated = `${firstName}, ${lastName} \n ${address}, ${
	46076 + 1
}`;
console.log(signatureInterpolated);

/* 
    ? Assignment vs Comparison vs Strict Comparison Operators
    * assignment (=) it is an "is"
    * comparison (==)
    * strict comparison (===)
*/

let paulAge = 25; // assign
paulAge = 34; // reassign
console.log(paulAge);

let nickAge = 20;
console.log(nickAge);

console.log(paulAge == nickAge); // false bc 34 is not equal to 20

paulAge = 26;
nickAge = 26;

console.log(paulAge == nickAge); // true bc 26 == 26

paulAge = 26;
nickAge = "26";

console.log(paulAge == nickAge); // true bc it type coerces 26 into "26"

console.log(paulAge === nickAge);
/* 
    ? The (===) sign checks for data type and value
    * if both are satisfied only then it resolves to true

    ! Always use triple equal
*/

/* 
    ? Modulo Operator (%)
    * remainder of long division
*/

console.log(15 / 5);
console.log(15 % 5);

console.log(15 / 2);
console.log(15 % 2);

/* 
    ? FizzBuzz
    * loop over from 0 - 100
    * use conditionals to
    * check if number divisible by 3 (print Fizz)
    * check if number divisible by 5 (print Buzz)
    * check if number divisible by 3 AND 5 (print Fizz Buzz)
    * if number is not divisible by any of those conditions, print the number only
*/

console.log("--------------------------------------");
for (let i = 0; i <= 100; i++) {
	if (i % 15 === 0) {
		console.log("Fizz Buzz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}

/* 
    ? Challenge Take Home
    * create a placeholder variable
    * create a string of names of everyone in the session
    * loop over the string of names
    * pass every character into the placeholder variable APART from any vowels
    * console log the placeholder variable
*/
