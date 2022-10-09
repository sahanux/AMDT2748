var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("What is your age ", function(age){
    console.log("Welcome! your age entered is " +age);
    readline.close();
})