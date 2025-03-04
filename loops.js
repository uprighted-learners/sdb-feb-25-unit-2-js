/* 
    ? Loops
    * allow us to execute a block of code repeatedly
    * they stop once an exit condition has been met
*/

/* 
    ? For Loop
    * iterates over any data that's iterable
    * iterator -> placeholder value
    * iterable -> data type we can count through
*/

for (let i = 0; i <= 10; i = i + 1) {
	console.log(i);
}

/* 
    ? Syntax

    for (start; stop; step) {
        code block that runs for each step
    }

*/

let longWordEng = "supercalifragilisticexpialidocious";

// String interpolation
// Allows us to inject values directly into the string by using ${ } syntax
// Must be wrapped in backticks ` `
console.log(`The word ${longWordEng} has ${longWordEng.length} characters`);

// String concatenation
console.log(
	"The word" + longWordEng + " " + "has " + longWordEng.length + " characters"
);

for (let i = 0; i < longWordEng.length; i++) {
	console.log(`The index is ${i}; The letter is ${longWordEng[i]}`);
}

// Index starts at 0
console.log(longWordEng[6]);

// Going out of range is famously known as an off by one error

/* 
    ? Loop challenge
    * create a variable with your favorite phrase
    * loop over said phrase
    * console log each letter of the phrase
    ! SPICEY MODE
    * loop over every OTHER letter of the phrase (ex: 'potato gun' should be 'oaogn')
*/

const myPhrase = "We met our enemy and he is us.";

for (let i = 0; i < myPhrase.length; i += 2) {
	console.log(myPhrase[i]);
}

/* 
    ? For-in Loop
    * does not require an index number
    * doesn't require start or stop statements
    */

let longWordDE = "Kraftfahrzeug-hafplifschtversicherung";

for (i in longWordDE) {
	console.log(`Index: ${i} - Value: ${longWordDE[i]}`);
}

/* 
    ? For-of Loop
    * allows us to seek itereable value against a condition
*/
let longWordPL = "konstantynopolitanczykowianeczka";

for (i of longWordPL) {
	console.log(i);
}

/* 
    ? For in vs For of 
    * in - allows us to loop over items that are not iterable
    * of - only works if an item is indexed linked like an array or a string
*/

let toDoList = ["get milk", "get coffee", "buy wood"];

for (i of toDoList) {
	console.log(i);
}

/* 
    ? While Loop
    * execute a stetement inside a code block
    * it does so as long as a while condition evaluates to true
*/

// !Infinite Loop - does not stop EVERRRRRR
// while (true) {
// 	console.log("Your instructor is cool");
// }

let count = 0;
while (count <= 10) {
	// reassign value of count to be prior value of count + 1
	console.log(count);
	count = count + 1;
}

/* 
    ? Do while Loop
    * executed code in the do section while a condition remains true
    * dumbest thing in the universe i'd rather wipe my eyes with sriracha
*/

let doCount = 0;

do {
	console.log(doCount);
	doCount++;
} while (doCount <= 10);
