/* 
    ? Scope
    * used to determine how information in different blocks of code can be accessed

    ? Five types of scope:
    * global/window
    * block
    * function
    * module
    * lexical
*/

/* 
    ? Global
    * outermost scope
    * window object when in client
    * js file when in Node
    * accessible from every otehr scope
*/

let globalScopeVariable = "This is a global scope variable"
console.log(globalScopeVariable)

/* 
    ? Block Scope
    * can be anywhere there are { }
*/

if (true) {
    let bsv = "This is a block scope variable"
    console.log(bsv)
    // can access global scope variables
    console.log(globalScopeVariable)
}

// console.log(bsv) // ReferenceError can't access block from global

/* 
    ? Function Scope
    * accessible only inside of the function
*/

function scope() {
    let fxsv = "This is a fx scope variable"
    console.log(fxsv)
}

scope()

// console.log(fxsv) // Reference Error can't access fx from global

/* 
    ? Lexical Scope
    * variables are accessible by their nested position
    * inner fx scope can access outer fx scope
*/

function outerFx() {
    let ofxv = "Outer scope variable"

    function innerFx() {
        // inner scope
        let ifxv = "Inner scope variable"
        console.log(ofxv)
    }
    innerFx()
    console.log(ofxv)
    // console.log(ifxv) // ReferenceError can't access inner fx from outer fx
}

outerFx()

/* 
    ? Module Scope
    * enscapsulates objects nested inside other modules or files
    * allows the user into other files
*/

const states = require("./states")
console.log(states)

{{{{{{{{{{{{{{{{{ console.log("Hella nested scope") }}}}}}}}}}}}}}}}}

/*
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        * first, it looks for fx declarations and VARiables and hoists them
        * it allocates memory space to those declarations
        * it then executes the code line by line
*/

// console.log(myName) // ReferenceError - trying to use myName before it exists
let myName = "Maria"
console.log(myName)

console.log(address) // Undefined (because it hoists only the declaration, not initialization)
var address = "123 Main St"
console.log(address)

// ? Function declarations ARE hoisted

console.log(myHoistedFx())
function myHoistedFx() {
    return "this is an example of a hoisted function"
}
console.log(myHoistedFx())

// ? Function Expressions ARE NOT hoisted

// console.log(fxExpression()) // ReferenceError - fx expression NOT hoisted
let fxExpression = function() {
    return "Example of a fx expression"
}

console.log(fxExpression())

function run() {
    var foo = "foo"
    let bar = "bar"
    console.log(foo, bar)
    {
        var moo = "moo"
        let baz = "baz"
        console.log(moo, baz)
    }
    // console.log(baz) // ReferenceError (trying to access higher scope)
    console.log(moo)
    // ! VARiables are scoped to the immediate function body, NOT block
}

run()

// global
{
    // block
    {
        var something = "This is block scoped something"
        // block
        function y() {
            var somethingInFx = "This is something in fx"
            console.log(somethingInFx)
        }
        // console.log(somethingInFx) // Not in or near immediate fx block
    }
    y()
}

// This works because global scope is also a FUNCTION scope
console.log(something)

// ! THIS IS BAD! LIKE REALLY BAD! DON'T DO THIS. 