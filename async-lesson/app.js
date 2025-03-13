console.log("Async Lesson Notes")

/* 
    ? Promises
    * an object that may produce a singular value in the future
    * three states
        * pending (unfinished)
        * fulfilled (complete with result)
        * rejected (error)
    * allows the code to execute without having to wait for its completion
*/

// let myPromise = new Promise((resolve, reject) => {
//     let sum = 1 + 3
//     setTimeout(() => {
//         if (sum === 3) {
//             resolve("Success")
//         } else {
//             reject("Failed")
//         }
//     }, 3000);
// })

// Returns a promise. It does not allow us to see information
// console.log(myPromise)

// In order to get tangible data out of a Promise object, we must resolve it

// myPromise
    // .then(msg => console.log(msg))
    // resolver that executes a fx when promise has been fulfilled
    // .catch(err => console.log(err))
    // executes a fx when a promise has been rejected (error handling)
    // .then(() => console.log("Does this run?"))
    // runs ONLY once the promise has been completed

console.log("This code will always run and likely show up first")

/* 
    ? Asynchronous Functiosn
    * introduced in ES7
    * alternative to writing promises
    * a fx that returns a promise object
    * allows us to resolve or reject a promise
    
    ? Syntax:
    * async function myFX() {}
    * const myFx = async function() {}
    * const myFx = async () => {}
*/

/* 
    ? Callback Function
    * a function that you pass inside another function as an argument
    * like to use arrow functions for this as they're cleaner
*/

function traditional() {
    return "Traditional Data"
}

console.log(traditional())

async function asyncFunction() {
    return "Asynchronous function data"
}
console.log(asyncFunction())
asyncFunction().then(data => console.log(`Paul loves ${data}`))

/* 
    ? Await Keyword
    * can be utilized only inside of asynchronous functions
    * allows us to use the result of a promise object in another function
*/

async function start() {
    let result = await asyncFunction()
    console.log(result)
    // return result // this will return ANOTHER promise
}

console.log(start())
