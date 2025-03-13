/* 
    ? IO
    * Process
        * an event that runs in foreground or background of your machine
    * Node.js allows access to its process via a process object
    * This allows us to process internal and external output (IO)
    * We dot his by using process.stdin and process.stdout
*/

const process = require("process")
console.log(`This is an output from Node. Process PID: ${process.pid}`)

// process.stdin.once("data", input => {
//     console.log(input.toString())
// })

/* 
    * .once() is an event listener. It listens for a data event
        * it takes event
        * and callback function
        * callback is a function that is triggered when an event occurs
*/

console.log("What's your name: ")
function handleInputStdOut(input) {
    // process.stdout.write(`The name is: ${input.toString().trim()}\n`)
}
// process.stdin.on("data", input => {
//     handleInputStdOut(input)
// })

/* 
    ? Readline
    * a dependency which allows us to build interface around stdin/stdout
*/

// import readline
const readline = require("readline")
// create interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// ask a question and use a callback fx to process input
// rl.question("What is your name? ", input => {
//     if (input === "Ezekiel") {
//         rl.setPrompt(`Hello, Ezekiel, what's your name?`)
//         rl.prompt()
//     } else if (input === "Tony") {
//         rl.setPrompt("FU TONY!")
//         rl.prompt()
//     }
//     rl.close()
// })

function ask(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

async function startProgram() {
    let name = await ask("What is your name?")
    let age = await ask("What is your age?")
    console.log(`Your name is ${name} and you are ${age} years old`)
    rl.close()
}

startProgram()