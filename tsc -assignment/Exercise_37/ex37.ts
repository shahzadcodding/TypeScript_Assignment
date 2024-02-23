// Question 37)
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

console.log("\n\n Answer 37");

function make_shirt1(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Making a large shirt with the default message
make_shirt1();

// Making a medium shirt with the default message
make_shirt1("Medium");

// Making a small shirt with a custom message
make_shirt1("Small", "Hello, Shahzad!");
